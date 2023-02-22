import { useRoutes } from 'react-router-dom';
import { routers } from './config/router';
const App = () => {
  const appRoutesElement = useRoutes(routers);
  return appRoutesElement;
};

export default App;
