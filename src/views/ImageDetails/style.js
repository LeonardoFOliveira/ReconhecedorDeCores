import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    containerImage: {
        flex: 2
    },
    containerDetails: {
        flex: 1,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6,
        borderTopWidth: 3
 //       justifyContent: "center"
    },
    textCentralize: {
        
 //       paddingBottom: 100
    },
    textHeaderDetail: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    textInfoDetail: {
        textAlign: "center",
        fontSize: 16,
        justifyContent: "center"
    }
   });
   

export default Styles;