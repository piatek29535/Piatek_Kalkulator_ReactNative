/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.value = 0;
  }


  render() {
    return (
      <View style={styles.mainContainer}>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{this.value}</Text>
          </View>

          <View style={styles.buttonsContainer}>

            <View style={styles.numbers}>
                <View style={styles.rowFlip}>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> AC </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.specialButton}/>
                </View>
                <View style={styles.rowFlip}>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 7 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 8 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 9 </Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rowFlip}>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 4 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 5 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 6 </Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rowFlip}>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 1 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 2 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> 3 </Text>
                      </TouchableOpacity>
                </View>
                <View style={styles.rowFlip}>
                      <TouchableOpacity style={styles.specialButton}>
                        <Text style={styles.buttonText}> 0 </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> , </Text>
                      </TouchableOpacity>
                </View>
            </View>

            <View style={styles.calculations}>
              <TouchableOpacity style={styles.calculationButton}>
                <Text style={styles.buttonText}> ÷ </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.calculationButton}>
                <Text style={styles.buttonText}> x </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.calculationButton}>
                <Text style={styles.buttonText}> + </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.calculationButton}>
                <Text style={styles.buttonText}> - </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.calculationButton}>
                <Text style={styles.buttonText}> = </Text>
              </TouchableOpacity>
            </View>

          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

      //Testowo
  rowFlip:{
    flexDirection: 'row'
  },

      //Kontener główny
  mainContainer: {
    flex: 1,
  },

      //Kontener z wynikiem
  resultText: {
    fontSize: 100,
    color: '#FFFFFF'
  },
  resultContainer: {
    flex:1,
    backgroundColor: '#545557',
    alignItems: 'flex-end'
  },

      //Kontener z przyciskami
  buttonsContainer: {
    flex: 4,
    backgroundColor: '#636466',
    flexDirection:'row'
},

  numbers: {
    flex:3,
    justifyContent: 'space-around',
  },
  button: {
    flex:1,
    backgroundColor: '#DDDDDD',
    margin: 1,
    width: 100,
    height: 100
  },
  specialButton: {
    flex:2,
    backgroundColor: '#DDDDDD',
    margin: 1,
    width: 100,
    height: 100
  },
  buttonText: {
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 40,
    textAlign: 'center'
  },


  calculations: {
    flex:1,
    justifyContent: 'space-around',

  },
  calculationButton:{
    backgroundColor: '#FFAD33',
    margin: 1,
    width: 100,
    height: 100
  }
});
