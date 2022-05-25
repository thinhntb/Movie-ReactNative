import { StyleSheet, View } from 'react-native'
import { Video } from 'react-native-video'
import { renderer } from 'react-test-renderer';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: 'rgba(225,225,225,0.9)',
    fontStyle: 'italic',
  },
  txttitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  viewTitle: {
    flex: 1,
    backgroundColor: '#FD6003',
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
  },
  viewBtn: {
    alignItems: 'flex-start',
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
  },
  btnBack:{
    height:50,
    width:30,
    justifyContent:'center',
    paddingLeft:10
  },
  textTitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center'
  },
  viewText: {
    flex:1,
    // backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
  },
  viewBody: {
    flex: 4,
    flexDirection: 'row',
    // backgroundColor:'blue',
    justifyContent: 'space-around',
  },
  viewImg: {
    flex: 1,
    padding: 10,
    // backgroundColor:'blue',
  },
  img: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
  },
  viewData: {
    flex: 2,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontStyle: 'bold',
  },
  btnLike: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  textBtnLike: {
    color: 'white',
    marginLeft: 10,
    paddingLeft: 10
  },
  viewDes: {
    flex: 2,
    // backgroundColor:'red'
    borderBottomWidth: 0.6,
    borderColor: 'white',
    borderRadius: 30,
  },
  viewYtb: {
    flex: 4,
    justifyContent: 'flex-start',
    // backgroundColor:'red'
  },
  textTrailer: {
    color: '#FD6003',
    fontSize: 20,
    fontWeight: '500',
    padding: 5,
    marginLeft: 20,
  },
  loader:{
    marginTop:10,
    alignItems:"center",
    backgroundColor:'red'
  },
  
})
