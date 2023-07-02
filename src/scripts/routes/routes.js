import Home from '../views/pages/homes';
import Article from '../views/pages/article';
import Detail from '../views/pages/detail';
import Calculator from '../views/pages/calculator';


const routes = {
  '/': Home, // default page
  '/home': Home,
  '/article': Article,
  '/detail/:id': Detail,
  '/calculator': Calculator,

};

export default routes;
