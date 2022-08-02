import { StyleSheet, Text, View,Button ,SafeAreaView,Modal } from 'react-native'
import React from 'react'

const ModalPractice = () => {
    const [showModal,setshowModal] = useState(false);


    return (
      <SafeAreaView style = {{flex:1}}>
          <View style = {styles.container}>
              <Modal 
                  animationType='slide'
                  transparent = {false}
                  visible={showModal}
                  onRequestClose={()=>alert ('Modal has been closed.')}>
                  
                  <View style = {styles.modal}>
                      <Text style = {styles.text}>Modal is open!</Text>
                      <Button title='Click To Close Modal'
                      onPress={()=>setshowModal(!showModal)}
                      />
                  </View>
  
              </Modal>
                <Text>คุณลืมปิดไฟในห้อง!!!</Text>
                <Button title='Click To Open Modal'
                onPress={()=>setshowModal(!showModal)}/>
          </View>
      </SafeAreaView>
    )
  }

export default ModalPractice

conststyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,},
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 2,}
        ,shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,},
    buttonOpen: {backgroundColor: '#F194FF',}, 
    
    buttonClose: {backgroundColor: '#2196F3',},
    
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',},
    modalText: {
        marginBottom: 15,
        textAlign: 'center',}
    ,
});