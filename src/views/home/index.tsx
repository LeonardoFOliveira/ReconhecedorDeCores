import React from 'react';
import {Text, Button, View, TouchableOpacity} from 'react-native';
import Styles from './style';
import { ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';

const Home = (props: any) => {

    function abrirCamera(){
        props.navigation.navigate("Camera")
    }

    function abrirGaleria(){
        let options: ImageLibraryOptions = {
            mediaType: 'photo',
            selectionLimit: 1
          };
          launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            } 
            else if (response.assets) {
              const source = { uri: response.assets[0].base64 };
              console.log('response', JSON.stringify(response));
              console.log( response.assets[0].base64);
              props.navigation.navigate("ImageDetails", {image: response.assets[0].uri})
            }
          });
    }

    return (
        <View style={Styles.container}>
            <View accessible={true} style={Styles.containerTitle}>
                <Text style={Styles.textTitle}>Reconhecedor</Text>
                <Text style={Styles.textTitle}>de</Text>
                <Text style={Styles.textTitle}>Cores</Text>
            </View>
            <View style={Styles.containerButtons}>
              <TouchableOpacity accessible={true} accessibilityLabel='Botão Câmera' onPress={abrirCamera} style={Styles.button}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}> Câmera </Text>
              </TouchableOpacity>
                {/* <Button title="Camera" onPress={abrirCamera}/> */}
                <Text>OU</Text>
              <TouchableOpacity accessible={true} accessibilityLabel='Botão Galeria' onPress={abrirGaleria} style={Styles.button}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}> Galeria </Text>
              </TouchableOpacity>
                {/* <Button title="Galeria" onPress={abrirGaleria}/> */}
            </View>
            <View accessible={true} accessibilityLabel='Texto explicando que para fazer o reconhecimento da cor predominante de alguma foto, opite por alguma das opções, em botões, acima para envia-la.' style={Styles.containerDisclaimer}>
                <Text style={Styles.textCentralize}>Para fazer o reconhecimento da cor predominante de alguma foto, opite por alguma das opções acima para envia-la.</Text>
            </View>
        </View>
    )
}

export default Home;