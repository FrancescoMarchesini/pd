import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import firstPageStyles from '../styles/firstPage'
import ToolbarComponent from '../components/ToolbarComponent';
import { CheckBox } from 'react-native-elements'

const { widthz } = Dimensions.get('window');

export default class FirstPage extends React.Component {
    
    constructor(props){
        super();
        this.state= {
            checked: false,
            array:[{title: 67, checked2: false}]

        };
    }

    goToSecondPage = () => {
        this.props.navigation.navigate('SecondPage')
    }


    render() {
       /*  let array=[{title: 67, checked: false}]; */
        return (
            <View  style={firstPageStyles.container}>
            <ScrollView>
                <View>
                    <Text style={{textAlign:'center'}} >APPLICAZIONE TEST</Text>
                    <TouchableOpacity onPress={this.goToSecondPage}>
                        <Text style={{textAlign:'center'}} > SECOND PAGE </Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'black'}}>
                    
                    <CheckBox
                        title='Toccami'
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                    />
                    {
                        this.state.array.map((asd)=>{
                            return (
                                <CheckBox 
                                title={asd.title}
                                checked={asd.checked2}
                                 
                                
                                onPress={() => this.setState({checked: !asd.checked2})} 
                                

                                /* onPress={() => this.setState({checked: !this.state.checked})} */
                                />
                                
                            )
                        })
                    }
                </View>
                </ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <ToolbarComponent
                        foreground="light"
                        style={styles.toolbar}
                        title={this.state.checked ? "SUCARE" : "Devi"}
                        leftItem={{
                        title: 'Left',
                        layout: 'title',
                        onPress: () => {
                            console.log('pressed');
                        },
                        }}
                        rightItem={{
                        title: 'Right',
                        layout: 'title',
                        onPress: () => {
                            console.log('pressed');
                        },
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  toolbar: {
    backgroundColor: 'red',
    position: 'absolute', left: 0, right: 0, bottom: 0,
  },
});
