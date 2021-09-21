import React, { useEffect, useState } from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
import ImageColorsService from '../../services/imageColorsService';
import GetPredominantColorResponse from '../../services/imageColorsService/models/GetPredominantColorResponse';
import Styles from './style';

const ImageDetails = (props: any) => {
    const [loading, SetLoading] = useState<boolean>(true);
    const [ predominantColorResponse, setPredominantColorResponse ] = useState<GetPredominantColorResponse>();

    useEffect(() => {
        ImageColorsService.GetPredominantColorAsync(props.route.params.image)
            .then((response) => {setPredominantColorResponse(response)})
            .catch((error) => console.log(error))
            .finally(() => {SetLoading(false)})
    }, [])

    return (
        <View style={Styles.container}>
            <View style={Styles.containerImage} accessible={true} accessibilityLabel='Imagem capturada'>
                <Image style={{flex: 1, resizeMode: 'cover'}} source={{uri: props.route.params.image}}/>
            </View>
            <View style={Styles.containerDetails}>
                <View accessible={true} accessibilityLabel='Título "Detalhes" da seção de Detalhes da imagem' style={{flex: 1, borderBottomWidth: 1, justifyContent: "center"}}>
                    <Text style={Styles.textHeaderDetail}>Detalhes</Text>
                </View>
                <View accessibilityLiveRegion="polite" style={{flex: 3, justifyContent: "center"}}>
                    {
                    loading ? 
                    <ActivityIndicator accessible={true} accessibilityLabel='Loading' size="large" color="#0000ff" /> :
                    <Text accessible={true} style={Styles.textInfoDetail}>
                        Cor predominante: {predominantColorResponse?.predominant_color.actual_name_color ?? predominantColorResponse?.predominant_color.closest_name_color}
                    </Text>
                    }
                </View>
            </View>     
        </View>
    )
}

export default ImageDetails;