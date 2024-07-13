import MainPage from '../../pages/MainPage/index.jsx';
import NewsPage from '../../pages/NewsPage/index.jsx';
import { NEWS, MAIN_PAGE } from '../../consts/paths';

const routes = [
  {
    path: MAIN_PAGE,
    Component: MainPage,
  },
  {
    path: NEWS,
    Component: NewsPage,
  },
];

export default routes;
