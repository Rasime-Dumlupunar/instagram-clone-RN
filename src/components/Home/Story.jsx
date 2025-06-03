import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({story}) => {
  return (
    <View style={styles.story}>
      <LinearGradient
        colors={['#C91389', '#f9373f', '#fecd00']}
        style={styles.cover}>
        <Image source={{uri: story.user.avatar}} style={styles.avatar} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 60,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    fontSize: 12,
  },
});
