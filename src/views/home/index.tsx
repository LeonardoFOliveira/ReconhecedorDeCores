import React from 'react';
import {Text, Button, View} from 'react-native';
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
            //   this.setState({
            //     filePath: response,
            //     fileData: response.data,
            //     fileUri: response.uri
            //   });
            }
          });
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.containerTitle}>
                <Text style={Styles.textTitle}>Reconhecedor</Text>
                <Text style={Styles.textTitle}>de</Text>
                <Text style={Styles.textTitle}>Cores</Text>
            </View>
            <View style={Styles.containerButtons}>
                <Button title="Camera" onPress={abrirCamera}/>
                <Text>OU</Text>
                <Button title="Galeria" onPress={abrirGaleria}/>
            </View>
            <View style={Styles.containerDisclaimer}>
                <Text style={Styles.textCentralize}>Para fazer o reconhecimento da cor predominante de alguma foto, opite por alguma das opções acima para envia-la.</Text>
            </View>
        </View>
    )
}

export default Home;