import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../themes/color';

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum.
      </Text>
      <Text style={styles.link}>Link goes here</Text>

      <TouchableOpacity style={styles.editProfile}>
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
  description: {
    marginVertical: 5,
    color: Colors.BLACK,
  },
  link: {
    fontWeight: '400',
    color: Colors.BLUE,
  },
  editProfile: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {fontWeight: '700', color: Colors.BLACK},
});
