import { addShapes, removeShapes } from './src/utils/background';

export const onRouteUpdate = ({ location }) => {
  switch(location.pathname){
    case '/':
      addShapes();
      break;
    default:
      removeShapes();
      break;
  }
}
