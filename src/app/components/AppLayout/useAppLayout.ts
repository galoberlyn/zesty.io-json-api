import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export const useAppLayout = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const history = useHistory();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    history.push(path);
    handleCloseNavMenu();
  };

  return {
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
    handleNavigate,
  };
};

export default useAppLayout;
