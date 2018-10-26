import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width;

//STYLE
import common from '../styles/common'



class MyButton extends Component {

    render() {
        return (
            <TouchableOpacity style={[common.UiButton]}>
                <Text style={[common.UiButton_text, {color:this.props.color ? this.props.color : '#fff'}]}
                    //adjustsFontSizeToFit={true}
                      numberOfLines={1}
                >
                    {this.props.text.toUpperCase()}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default MyButton
