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
    }
   });
   

export default Styles;