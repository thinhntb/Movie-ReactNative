// import {AsyncStorage} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import qs from 'qs'
import React, { useState, useEffect } from 'react'
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SysModal from '../../components/sys_modal'
import styles from './styles/LoginScreenStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Login = ({ navigation }) => {
  /*hanlde when user input email and password */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [erroMassage, setErrorMassage] = useState('')
  // const navigation = useNavigation();
  const onChangeEmail = (value) => {
    setEmail(value)
  }

  const onChangePassword = (value) => {
    setPassword(value)
  }
  /*handle on hide modal */
  const onHildeModal = () => {
    setShowModal(false)
  }

  /*handle when user click button login */
  const onClickLogin = async () => {
    //   {/*validate*/}
    //   if(email.length == 0 || password.length == 0 ) {
    //     return console.log('please type info')
    // }
    // console.log('click Register',{
    //     email,
    //     password,
    // })

    // validate
    if (email.length == 0 || password.length == 0) {
      setErrorMassage('please enter login information.')
      setShowModal(true)
      return
    }

    let data = {
      email,
      password,
    }

    await axios({
      url: 'http://training-movie.bsp.vn:82/user/login',
      method: 'POST',

      data: qs.stringify(data),
      headers: {
        app_token: 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
      },
    })
      .then((result) => {
        console.log(result)
        const { data } = result
        if (result.status === 200) {
          if (data.error === false) {
            const accessToken = result.data.data
            AsyncStorage.setItem(
              'accessToken',
              JSON.stringify(accessToken.access_token)
            )
            console.log(accessToken.access_token)
            navigation.goBack()
          } else {
            setErrorMassage(data.message)
            setShowModal(true)
          }
        } else {
          console.log('Loi sever')
        }
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        // setErrorMassage(error.response.data.message)
        // setShowModal(true)
        console.log(error.message)
      })
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../asset/img/bg.png')}>
      {/* View Đăng Nhâp */}
      <SysModal
        visible={showModal}
        message={erroMassage}
        onHide={onHildeModal}
      />
      <View style={styles.view1}>
        <Text style={styles.text}>Đăng Nhập</Text>
      </View>
      {/*View TextInput */}
      <View style={styles.view2}>
        <KeyboardAwareScrollView>
          <View style={styles.viewEmail}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="rgba(225,225,225,.5)"
              value={email}
              onChangeText={onChangeEmail}
            />
          </View>
          <View style={styles.viewPass}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Mật Khẩu"
              placeholderTextColor="rgba(225,225,225,.5)"
              value={password}
              onChangeText={onChangePassword}
            />
          </View>
          {/*Button Đăng Nhập */}
          <View style={styles.viewDN}>
            <TouchableOpacity style={styles.viewButton} onPress={onClickLogin}>
              <View style={styles.viewText}>
                <Text style={styles.textDN}>Đăng Nhập</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Button Quên Mật Khẩu */}
          <View style={styles.viewQMK}>
            <TouchableOpacity
              style={styles.viewButtonQMK}
              onPress={() => {
                navigation.navigate('Forgot')
              }}>
              <View style={styles.viewTextQMK}>
                <Text style={styles.textQMK}> Quên Mật Khẩu?</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
      {/*View Đăng Ký*/}
      <View style={styles.view3}>
        <View style={styles.viewBack}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => {
              navigation.navigate('Home')
            }}>
            <Icon
              style={styles.icon}
              name="close"
              size={50}
              color="rgba(225,225,225,0.5)"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewText}>
          <View style={styles.viewText3}>
            <Text style={styles.text3}>Bạn Chưa Có Tài Khoản?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register')
              }}>
              <View>
                <Text style={styles.textDK}>ĐĂNG KÝ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}
