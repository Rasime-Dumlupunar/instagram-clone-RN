import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Burger, Dropdown, Plus} from '../../utils/Icons';

const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.username}>
        <Text style={styles.text}>Username</Text>
        <Dropdown />
      </View>

      <View style={styles.icons}>
        <TouchableOpacity>
          <Plus />
        </TouchableOpacity>
        <TouchableOpacity>
          <Burger />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    opacity: 0.7,
  },
});
