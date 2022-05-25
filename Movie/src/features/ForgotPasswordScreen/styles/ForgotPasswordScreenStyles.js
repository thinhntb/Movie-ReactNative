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
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 50,
  },
  view2: {
    flex: 2,
    borderBottomWidth: 0.5,
    // alignItems:'center',
    // flexDirection:'column',
    borderColor: 'white',
  },
  viewText: {
    flex: 1,
  },
  textNhapMail: {
    paddingTop:10,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  backBtn:{
    padding:15,
    // backgroundColor:'blue',
    width:50,
    height:80
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    margin: 20,
    marginLeft: 40,
    marginRight: 40,
    borderBottomWidth: 0.5,
    borderColor: 'white',

    // backgroundColor: ''
  },
  viewButton: {
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: '#E15203',
    // borderWidth:1,
    marginLeft: 40,
    marginRight: 40,
    margin: 10,
    borderRadius: 10,
    height: 60,

    // height:30
  },
  textButton: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 15,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
  },
})
export default styles
