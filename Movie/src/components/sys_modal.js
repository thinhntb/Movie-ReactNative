import React from 'react';
import { View, Text,Modal,TouchableOpacity, } from 'react-native';

const SysModal = ({message,visible,onHide}) => {
    return(
        <Modal visible={visible} transparent={true}>
            <View 
            style={{
                flex:1,
                backgroundColor:'rgba(00,00,00,.5)',
                justifyContent:'center',
                alignItems:'center',
                padding:20
            }}>
            
                <View style={{
                    width:'100%',
                    backgroundColor:'white',
                    borderRadius:10,
                    padding:20
                }}>
                {/*Header */}
                    <View style={{
                    justifyContent:'center',
                     alignItems:'center',
                     marginBottom:20
                    }}>
                        <Text style={{
                            fontSize:16,
                            color:'black'
                        }}>Alert</Text>
                    </View>   
            {/*Body */}
                <View >
                    <Text>{message}</Text>
                </View>
            {/*Footer */}
                <View style={{marginTop:20}}>
                <TouchableOpacity style={{width:'100%',
                    padding:10,
                    backgroundColor:'#FD6003',
                    borderRadius:50,
                    justifyContent:'center',
                    alignItems:'center'
                }} onPress={onHide}>
                    
                    <Text>Close</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </Modal>
    )
}

export default SysModal; 