import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MyButton from '../components/MyButton'

export default class SecondPage extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>I am the Second page</Text>
                <MyButton text={'click me'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
