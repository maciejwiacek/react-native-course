import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      style={style.profileTabContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.profileTabContent}>
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode={'contain'}
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
