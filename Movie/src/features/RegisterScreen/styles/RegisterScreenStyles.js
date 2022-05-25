import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBack: {
    flex: 1,
    width: 150,
    height: 150,
    padding: 10,
  },
  txtBack: {
    color: 'white',
    fontSize: 20,
  },
  view1: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  text: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    marginTop: 50,
  },
  view2: {
    flex: 3,
    borderBottomWidth: 0.5,
    // alignItems:'center',
    // flexDirection:'column',
    borderColor: 'white',
  },
  viewHoTen: {
    flex: 1,
    // flexDirection:'column',
  },
  textError: {
    color: 'orange',
    paddingLeft: 40,
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    borderBottomWidth: 0.5,
    borderColor: 'white',
    // backgroundColor: ''
  },
  viewEmail: {
    flex: 1,
    flexDirection: 'column',
  },
  viewMatKhau: {
    flex: 1,
    flexDirection: 'column',
  },
  viewXacNhanMatKhau: {
    flex: 1,
    flexDirection: 'column',
  },
  viewDK: {
    flex: 1,
    // backgroundColor:'red',
    // borderWidth: 2,
  },
  viewButton: {
    flex: 1,
    // margin: 50,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    height: 50,
    // marginTop:10,
    // margin:15,
    // paddingTop:,
    backgroundColor: '#FD6003',
  },
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor:'blue'
  },
  textDK: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
  },
  view3: {
    flex: 1,
    // backgroundColor:'red',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewText3: {},
  text3: {
    fontSize: 13,
    color: 'white',
  },
  viewTouch: {
    flexDirection: 'row',
  },
  textDK: {
    fontSize: 13,
    color: '#FD6003',
    borderBottomWidth: 1,
    borderColor: '#FD6003',
  },
})

export default styles
