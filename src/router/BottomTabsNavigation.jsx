import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import ReelScreen from '../screens/Reel';
import ShopScreen from '../screens/Shop';
import ProfileScreen from '../screens/Profile';
import SCREENS from '../utils/router';
import {
  Home,
  HomeField,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from '../utils/Icons';
import {Image, StyleSheet} from 'react-native';

// obje dağıtma
const {HOMESCREEN, PROFILESCREEN, SHOPSCREEN, REELSCREEN, SEARCHSCREEN} =
  SCREENS;

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name={HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        name={SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={30} /> : <Reel size={30} />,
        }}
        name={REELSCREEN}
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name={SHOPSCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: focused => (
            <Image
              style={[styles.avatar, {borderColor: focused ? '#000' : 'gray'}]}
              source={require('../assets/profile.png')}
            />
          ),
        }}
        name={PROFILESCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 25,
  },
});
