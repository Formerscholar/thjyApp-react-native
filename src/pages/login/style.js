import { StyleSheet } from "react-native";
import { pxToDp } from '../../utils/stylesKits'


const Styles = StyleSheet.create({
  root: {
  },
  bgimg: {
    width: '100%',
    height: pxToDp(383)
  },
  tabs: {
    marginTop: pxToDp(68),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabItems: {
    padding: pxToDp(20),
    paddingLeft:pxToDp(80),
    paddingRight: pxToDp(80),
    borderBottomWidth: pxToDp(4),
    borderBottomColor:'#fff'
  },
  tabItemsText: {
    fontSize: pxToDp(34),
    fontFamily: 'PingFang SC',
    fontWeight: 'bold',
    color: '#333333'
  },
  listbox: {
    marginTop: pxToDp(62),
    marginHorizontal: pxToDp(80),
  },
  inputStyle: {
    width: '100%',
    height: pxToDp(80),
    backgroundColor: '#F4F4F4',
    borderRadius: pxToDp(38),
    paddingLeft: pxToDp(49),

  }
})

export default Styles