import { AboutPage } from "./pages/AboutPage/Loadable";
import { HomePage } from "./pages/HomePage/Loadable";

export type RouteTypes = {
  path: string;
  name: string,
  component: React.FC<any>;
  exact: boolean;
}

const routes: RouteTypes[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    exact: true,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    exact: true,
  },
];

export default routes;
