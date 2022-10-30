import { StyleSheet } from 'react-native';
import Colors from './Colors';
export default StyleSheet.create({
  background: {
    backgroundColor: Colors.backGroundColor,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '120%',
  },
  pressedItem: { backgroundColor: '#222', opacity: 0.5 },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
