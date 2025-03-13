import React from 'react';
import PropTypes from 'prop-types';
import {Image, Pressable, View} from 'react-native';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = ({
  donationItemId,
  uri = '',
  badgeTitle = '',
  donationTitle,
  price,
  onPress = () => {},
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress(donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{uri: uri}} style={style.image} resizeMode={'cover'} />
        <View style={style.donationInformation}>
          <Header
            title={donationTitle}
            type={3}
            color={'#0A043C'}
            numberOfLines={1}
          />
          <View style={style.price}>
            <Header title={'$' + price.toFixed(2)} type={3} color={'#156C7F'} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
