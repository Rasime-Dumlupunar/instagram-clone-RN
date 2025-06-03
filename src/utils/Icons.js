import {Image} from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/logo.png')} />;
};
const Home = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home.png')}
    />
  );
};
const HomeField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/home-field.png')}
    />
  );
};
const Search = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search.png')}
    />
  );
};
const SearchField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/search-field.png')}
    />
  );
};
const ReelField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel-field.png')}
    />
  );
};
const Share = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/share.png')}
    />
  );
};
const ShopField = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop-field.png')}
    />
  );
};
const Shop = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/shop.png')}
    />
  );
};
const Profile = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/profile.png')}
    />
  );
};
const Plus = () => {
  return (
    <Image
      style={{width: 28, height: 28}}
      source={require('../assets/plus.png')}
    />
  );
};
const More = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/more.png')}
    />
  );
};
const Massenger = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/messenger.png')}
    />
  );
};
const Heart = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/heart.png')}
    />
  );
};
const Dropdown = () => {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assets/dropdown.png')}
    />
  );
};
const Comment = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/comment.png')}
    />
  );
};
const Burger = () => {
  return (
    <Image
      style={{width: 22, height: 22}}
      source={require('../assets/burger.png')}
    />
  );
};
const Bookmark = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/bookmark.png')}
    />
  );
};
const Reel = ({size}) => {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/reel.png')}
    />
  );
};

export {
  Home,
  HomeField,
  Search,
  SearchField,
  ReelField,
  Shop,
  ShopField,
  Plus,
  Heart,
  Massenger,
  Bookmark,
  Dropdown,
  Burger,
  More,
  Profile,
  Comment,
  Share,
  Logo,
  Reel,
};
