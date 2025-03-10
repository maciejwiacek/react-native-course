import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: 20,
  },
  userPostContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
