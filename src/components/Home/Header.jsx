import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Heart, Logo, Massenger, Plus} from '../../utils/Icons';
import {Colors} from '../../themes/color';

const {RED, WHITE} = Colors;

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.icons}>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Heart size={24} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Massenger size={24} activeOpacity={0.6} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Plus size={24} activeOpacity={0.6} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    height: 45,
    paddingBottom: 4,
  },
  logo: {
    paddingRight: 5,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
    gap: 15,
    alignItems: 'center',
  },
  dotContainer: {
    position: 'absolute',
    right: 0,
    top: -1,
    zIndex: 1,
    width: 10,
    height: 10,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: RED,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
