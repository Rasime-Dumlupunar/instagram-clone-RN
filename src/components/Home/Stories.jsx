import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import data from '../../utils/data';
import Story from './Story';

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(story => (
          <Story story={story} key={story.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
