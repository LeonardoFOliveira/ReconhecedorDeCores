import api from "../api"
import GetPredominantColorResponse from "./models/GetPredominantColorResponse";

const ImageColorsService =  {
    GetPredominantColorAsync(imageUri: any): Promise<GetPredominantColorResponse> {
        const imageData = new FormData();

        imageData.append('image', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        return api.post('/imageColors', imageData).then(response => response.data)
    }
}

export default ImageColorsService;