import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    containerTitle: {
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    textTitle: {
        fontSize: 30
    },
    containerButtons: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    containerDisclaimer: {
        justifyContent: "center",
        alignItems: "center"
    },
    textCentralize: {
        textAlign: "center",
        paddingBottom: 100
    },
    button : {
        backgroundColor: '#0000FF',
        borderRadius: 5,
        height: 300,
        padding: 130,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    }
   });
   

export default Styles;