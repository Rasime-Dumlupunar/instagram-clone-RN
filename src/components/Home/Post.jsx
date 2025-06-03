import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Bookmark, Comment, Heart, More, Share} from '../../utils/Icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post.user.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post.user.name}</Text>
        </View>

        <More size={20} />
      </View>

      <FitImage src={post.image} />

      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action}>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Comment size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Share size={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.action}>
              <Bookmark size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.likes}>{post.likes} likes</Text>
        </View>

        <ReadMore
          seeLessStyle={{color: '#909'}}
          seeLessText="daha az"
          seeMoreText="daha fazla"
          seeMoreStyle={{color: '#909'}}
          numberOfLines={2}>
          <Text style={styles.user}>{post?.user.name}</Text>
          {` `}
          {post.description}
        </ReadMore>

        {post.commenta > 0 && (
          <TouchableOpacity style={styles.comment}>
            <Text>{post.commenta} comments</Text>
          </TouchableOpacity>
        )}

        <View>
          <Text style={styles.date}>{post.date}</Text>
          <Text style={styles.translation}>See Translation</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: 400,
    height: 300,
  },
  content: {
    paddingHorizontal: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 12,
  },
  likes: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  user: {
    fontWeight: '600',
  },

  comment: {
    marginVertical: 5,
    opacity: 0.5,
    activeOpacity: 0.7,
  },
  date: {
    marginVertical: 3,
    opacity: 0.6,
  },
  translation: {
    fontSize: 13,
    fontWeight: '700',
  },
});
