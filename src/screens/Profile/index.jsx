import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileBio from '../../components/Profile/ProfileBio';
import ProfileStory from '../../components/Profile/ProfileStory';
import postData from '../../utils/post';

const ProfileScreen = () => {
  const screenwidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenwidth - (numColumns + 1) * 2) / numColumns;
  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />

        <FlatList
          keyExtractor={index => index.toString()}
          data={postData}
          renderItem={renderProps}
          numColumns={numColumns}
          style={{marginTop: 15}}
          contentContainerStyle={styles.photoGrid}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
