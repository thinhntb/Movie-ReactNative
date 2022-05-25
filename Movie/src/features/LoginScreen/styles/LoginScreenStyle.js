import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 2,
    borderBottomWidth: 0.5,
    // alignItems:'center',
    // flexDirection:'column',
    borderColor: 'white',
  },
  viewEmail: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    color: 'white',

    fontSize: 15,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    borderBottomWidth: 0.5,
    borderColor: 'white',

    // backgroundColor: ''
  },
  viewPass: {
    flex: 1,
    flexDirection: 'row',
  },
  viewDN: {
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
    // paddingTop:,
    backgroundColor: '#FD6003',
  },
  viewText: {
    flex: 1,
    // backgroundColor:'blue'
  },
  textDN: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgba(225,225,225,0.8)',
    textAlign: 'center',
    justifyContent:'center',
    paddingBottom: 15,
  },
  viewQMK: {
    flex: 1,
  },
  viewButtonQMK: {
    flex: 1,
    height: 50,
    // margin: 50,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    // marginTop:10,
    margin: 15,
    // paddingTop:8,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  viewTextQMK: {
    flex: 1,
  },
  textQMK: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  view3: {
    flexDirection: 'column',
    // justifyContent: 'center',
    flex: 1,
    // alignItems: 'flex-end',
  },
  viewText:{
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
  },
  viewText3: {
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor:'yellow'
  },
  text3: {
    fontSize: 15,
    color: 'white',
  },
  textDK: {
    fontSize: 15,
    color: '#FD6003',
    borderBottomWidth: 1,
    borderColor: '#FD6003',
  },
  btnBack:{
    // paddingTop:10,
    alignItems:'center',
    justifyContent:'center',
    // flexDirection:'row',
    // marginVertical:10,
    width:90,
    height:50,
    flex:1,
    backgroundColor:'rgba(225,225,225,0.2)',
    borderRadius:50
  },
  icon:{
   alignItems:'center',
    flex:1,
    paddingTop:22,
    

  },
  viewBack:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    // backgroundColor:'blue'
  }
})

export default styles
