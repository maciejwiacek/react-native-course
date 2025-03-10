import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontsize: 16,
  },
  location: {
    color: '#79869F',
    textAlign: 'left',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostStats: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  userPostStatButton: {
    flexDirection: 'row',
  },
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: 27,
  },
  userPostStatsText: {
    marginLeft: 5,
    color: '#79869F',
  },
});

export default style;
