import React from 'react';
import {Text, View, Image} from 'react-native';
import Styles from './style';

const ImageDetails = (props: any) => {
    console.log(props.route.params.image)
    return (
        <View style={Styles.container}>
            <View style={Styles.containerImage}>
                <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: props.route.params.image}}/>
            </View>
            <View style={Styles.containerDetails}>
                <Text style={Styles.textCentralize}>Detalhes</Text>
                <Text style={Styles.textCentralize}>Cor predominante:</Text>
            </View>     
        </View>
    )
}

export default ImageDetails;