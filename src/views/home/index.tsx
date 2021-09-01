import React from 'react';
import {Text, Button, View} from 'react-native';
import Styles from './style';

const Home = (props: any) => {

    function abrirCamera(){
        props.navigation.navigate("Camera")
    }

    function abrirGaleria(){

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