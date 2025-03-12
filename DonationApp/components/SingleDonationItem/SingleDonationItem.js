import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';
import style from './style';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          source={{uri: props.uri}}
          style={style.image}
          resizeMode={'contain'}
        />
        <View style={style.donationInformation}>
          <Header title={props.donationTitle} type={3} color={'#0A043C'} />
          <View style={style.price}>
            <Header
              title={'$' + props.price.toFixed(2)}
              type={3}
              color={'#156C7F'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
