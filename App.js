/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const numbers = [[7,8,9] , [4,5,6] , [1,2,3], [0,'.','=']]
const operators = ['AC','/','*','+','-']

export default class App extends Component {

  constructor(props){
    super(props)
    this.value = 0;
  }

  renderNumbersButtons(){
        let rows = [];
        for (let i = 0; i < 4; i ++) {
            let row = [];
            for(let j = 0; j < 3;j++){

                  row.push(<TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}> {numbers[i][j]}</Text>
                  </TouchableOpacity>)

            }
            rows.push(<View style={styles.rowFlip}>{row}</View>)
        }

        return rows;
  }

  renderOperatorsButtons(){
        let column = [];
        for(let i = 0; i < 5;i++){

              column.push(<TouchableOpacity style={styles.calculationButton}>
              <Text style={styles.buttonText}> {operators[i]}</Text>
              </TouchableOpacity>)
        }

        return column;
  }

  render() {
    return (
      <View style={styles.mainContainer}>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{this.value}</Text>
          </View>

          <View style={styles.buttonsContainer}>

            <View style={styles.numbers}>
                {this.renderNumbersButtons()}
            </View>

            <View style={styles.calculations}>
              {this.renderOperatorsButtons()}
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
