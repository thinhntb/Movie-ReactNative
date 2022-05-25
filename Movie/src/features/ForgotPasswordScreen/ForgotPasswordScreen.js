import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native'
import styles from './styles/ForgotPasswordScreenStyles'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/FontAwesome'

export default Forgot = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../asset/img/bg.png')}>
      {/* Text Quên Mật khẩu */}
      <View style={styles.view1}>
        <TouchableOpacity style={styles.backBtn}
        onPress={() => {navigation.goBack()}}>
        <Icon name='angle-left'size={40} color='white'/>
        </TouchableOpacity>
        <Text style={styles.text}>Quên Mật Khẩu</Text>
      </View>
      {/*TextInput Nhập Mail */}
      <View style={styles.view2}>
        <View style={styles.viewText}>
          <Text style={styles.textNhapMail}>
            Hãy nhập Email bạn dùng để tạo tài khoản
          </Text>
        </View>
        <KeyboardAwareScrollView>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="rgba(225,225,225,.5)"
            />
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Gửi link cho tôi</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
      {/*Button exit */}
      <View style={styles.view3}></View>
    </ImageBackground>
  )
}
