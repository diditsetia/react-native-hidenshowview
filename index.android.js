/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  LayoutAnimation,
  Platform,
  UIManager

} from 'react-native';

export default class hideproject extends Component {

    constructor(){
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      this.state={
       status:true
      }
    }

    ShowHideTextComponentView =() => {
      if (this.state.status == true)
        {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          this.setState({status: false})
        } else {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          this.setState({status: true})
        }

    }

  render() {
    return (
      <View style={styles.contener}>

        {
          this.state.status ?
          <View>
          <Text style={{fontSize: 25,color:'#000',textAlign:'center'}}> Helo teman shhshshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          jsssssssssssssssssss
          sjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
          jsssssssssssssssssssssssssssssssssss
          kssssssssssssssssssssssssssss </Text>
          <Text>
          cobadkdkkkkkkkkkkkkk
          kdddddddddddddddddddd
          dkkkkkkkkkkkkkkkkkkk
          </Text>
          </View>
           : null

        }
          <Button title='hide text component' onPress={this.ShowHideTextComponentView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contener : {
    flex: 1,
    margin : 10
  }
});

AppRegistry.registerComponent('hideproject', () => hideproject);
