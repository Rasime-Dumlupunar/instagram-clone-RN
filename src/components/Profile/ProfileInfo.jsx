import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient
        colors={['#C91389', '#f9373f', '#fecd00']}
        style={styles.linear}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/45.jpg'}}
          style={styles.image}
        />
      </LinearGradient>

      <View style={styles.status}>
        <Text style={styles.statNumber}>1,425</Text>
        <Text style={styles.statLabel}>Post</Text>
      </View>

      <View style={styles.status}>
        <Text style={styles.statNumber}>1,543</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>

      <View style={styles.status}>
        <Text style={styles.statNumber}>1,680</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  linear: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '300',
    color: '#000',
  },
});
