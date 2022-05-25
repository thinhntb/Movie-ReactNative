import { StyleSheet } from 'react-native'
// import { back } from 'react-native/Libraries/Animated/Easing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 250,
    width: 150,
  },
  warpText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  viewIn: {
    flex: 2,
    // backgroundColor:'red'
  },
  fontSize: {
    fontSize: 15,
    color:'white'
  },
  textDes:{

  },
  viewMore:{
    color:'white'
  },
  textView:{
    color:'#FD6003'
  },
  btn: {
    // backgroundColor:'yellow',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  btnXemPhim: {
    backgroundColor: '#FD6003',
    height: 25,
    width: 100,
    borderRadius: 5,
  },
  btnLike:{
    flexDirection:'row',
    
  },
  textLike:{
    color:'white',
    marginLeft:10,
    fontWeight:'600'
  },
  textBtn: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(225,225,225,0.2)',
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    padding: 10,
  },
  logOut:{
    width:40,
  },
  viewLogOut:{
    justifyContent:'flex-end',
    flexDirection:'row',
  },
  textLogOut:{
    fontWeight:'500',
    color:'white',
    marginRight:10,
    fontSize:15,
    marginTop:5
  }
})
