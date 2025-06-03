import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ProfileStory = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?random=1'}}
            style={styles.image}
          />
        </View>
        <Text>Doğa</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?random=2'}}
            style={styles.image}
          />
        </View>
        <Text>Manzara</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?random=4'}}
            style={styles.image}
          />
        </View>
        <Text>Deniz</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <Image
            source={{uri: 'https://picsum.photos/200/300?random=5'}}
            style={styles.image}
          />
        </View>
        <Text>Dağ</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storys}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storys: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {},
  plus: {},
});
