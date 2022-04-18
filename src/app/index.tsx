/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { RouteTypes } from './routes';
import AppLayout, { LayoutTypes } from './components/AppLayout';
import routes from './routes';


const AppRoute = ({ component: Component, appLayout: AppLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    )}
  />
);

const getRoutes = (routes: RouteTypes[], layout: React.FC<LayoutTypes>) => {
  return routes.map((prop: any, key: any) => {

    return (
      <AppRoute
        exact
        path={prop.path}
        component={prop.component}
        key={key}
        appLayout={layout}
      />
    );
  });
};


export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Zesty.io"
        defaultTitle="Zesty.io"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="zesty.io" content="A zesty.io application test" />
      </Helmet>

      <Switch>
        {getRoutes(routes, AppLayout)}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
