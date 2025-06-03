import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigation from './src/router/BottomTabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
