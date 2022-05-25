import React, { Component, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView,
} from 'react-native'
import { styles } from './styles/RegisterScreenStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import axios from 'axios'
import qs from 'qs'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { text } from '@fortawesome/fontawesome-svg-core'

export default Register = ({ navigation }) => {
  /*hanlde when user input infor */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [full_name, setFull_Name] = useState('')
  const [errorEmail, SetErrorEmail] = useState('')
  const [errorPassword, SetErrorPassword] = useState('')
  const [errorRePassword, SetErrorRePassword] = useState('')
  const [errorFullName, SetErrorFullName] = useState('')
  const [rePassword, setRePassword] = useState('')
  const isValidFullName = (full_name) => full_name.length >= 6
  const isValidPassword = (password) => password.length >= 6
  const isValidRePassword = (rePassword) => rePassword == password
  const isValidEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

  const onChangeEmail = (value) => {
    if (isValidEmail(value) == false) {
      SetErrorEmail('email not is correct format')
    } else {
      SetErrorEmail('')
    }
    setEmail(value)
  }
  {
    /*Xác Nhận Mật Khẩu đúng định dang */
  }
  const onChangePassword = (value) => {
    if (isValidPassword(value) == false) {
      SetErrorPassword('Password not is correct format')
    } else {
      SetErrorPassword('')
    }
    setPassword(value)
  }
  {
    /*Xác Nhận Mật Khẩu */
  }
  const onChangeRePassword = (value) => {
    if (isValidRePassword(value) == false) {
      SetErrorRePassword('Password not is confirm')
    } else {
      SetErrorRePassword('')
    }
    setRePassword(value)
  }
  {
    /*check full name */
  }
  const onChangeFull_Name = (value) => {
    if (isValidFullName(value) == false) {
      SetErrorFullName('Full Name not is correct format')
    } else {
      SetErrorFullName('')
    }
    setFull_Name(value)
  }
  const onClickRegister = async () => {
    // {/*validate*/}
    if (email.length == 0 || password.length == 0 || full_name.length == 0) {
      return alert('Bạn nhập thiếu thông tin')
    }

    // console.log('click Register',{
    //     full_name,
    //     email,
    //     password,
    // })
    let data = {
      email,
      password,
      full_name,
    }

    await axios({
      url: 'http://training-movie.bsp.vn:82/user/registry',
      method: 'POST',
      data: qs.stringify(data),
      headers: {
        app_token: 'dCuW7UQMbdvpcBDfzolAOSGFIcAec11a',
      },
    })
      .then((result) => {
        console.log(result)
        navigation.goBack()
      })
      .catch((error) => {
        console.log(result.response.data)
      })
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require('../../asset/img/bg.png')}>
      {/* View Đăng Nhâp */}
      <View style={styles.view1}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            navigation.navigate('Login')
          }}>
          <Icon name="arrow-left" size={30} color="rgba(225,225,225,0.5)" />
        </TouchableOpacity>
        <Text style={styles.text}>Đăng Ký</Text>
      </View>
      {/*Input Text */}
      <View style={styles.view2}>
        <View>
          <KeyboardAwareScrollView>
            <View style={styles.viewHoTen}>
              {/*Input Họ Tên */}
              <TextInput
                style={styles.textInput}
                placeholder="Họ Tên"
                placeholderTextColor="rgba(225,225,225,.5)"
                value={full_name}
                onChangeText={(full_name) => onChangeFull_Name(full_name)}
              />
              <Text style={styles.textError}>{errorFullName}</Text>
            </View>
            {/*Input Email */}
            <View style={styles.viewEmail}>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="rgba(225,225,225,.5)"
                value={email}
                onChangeText={(email) => onChangeEmail(email)}
              />
              <Text style={styles.textError}>{errorEmail}</Text>
            </View>
            {/*Input Mật Khẩu */}
            <View style={styles.viewMatKhau}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={true}
                placeholder="Mật khẩu"
                placeholderTextColor="rgba(225,225,225,.5)"
                value={password}
                onChangeText={(password) => onChangePassword(password)}
              />
              <Text style={styles.textError}>{errorPassword}</Text>
            </View>
            {/*Input Xác Nhận Mật Khẩu */}
            <View style={styles.viewXacNhanMatKhau}>
              <TextInput
                style={styles.textInput}
                placeholder="Xác nhận mật khẩu"
                placeholderTextColor="rgba(225,225,225,.5)"
                onChangeText={(rePassword) => onChangeRePassword(rePassword)}
                secureTextEntry={true}
              />
              <Text style={styles.textError}>{errorRePassword}</Text>
            </View>
            {/*Button Đăng Ký */}
            <View style={styles.viewDK}>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={onClickRegister}>
                <View style={styles.viewText}>
                  <Text style={styles.textDN}>Đăng Ký</Text>
                </View>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.viewText3}>
          <Text style={styles.text3}>
            Bằng việc chọn vào nút Đăng ký,bạn đã đồng ý với
          </Text>
        </View>

        <View style={styles.viewTouch}>
          <TouchableOpacity>
            <Text style={styles.textDK}>Điều khoản sử dụng</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 13, color: 'white' }}>và</Text>
          <TouchableOpacity>
            <Text style={styles.textDK}>Quy định bảo mật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
