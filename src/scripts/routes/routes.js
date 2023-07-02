import Home from '../views/pages/homes';
import Article from '../views/pages/article';
import Detail from '../views/pages/detail';
import About from '../views/pages/about';
import Calculator from '../views/pages/calculator';


const routes = {
  '/': Home, // default page
  '/home': Home,
  '/article': Article,
  '/detail/:id': Detail,
  '/calculator': Calculator,
  '/about': About,

};

export default routes;
