import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');


const styles = StyleSheet.create({

    UiButton: {
        height: 30,
        width: 216,
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    UiButton_text : {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: "center",
    }

});

export default styles;