/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const numbers = [[7,8,9] , [4,5,6] , [1,2,3] , [0,' ',' '] , ['.','=',' ']]
const operators = ['/','*','+','-']
const ac = 'AC'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
       firstValue: 0,
       secondValue: 0,
       operator: null,
       result: 0
    }
  }

  numberButtonsFunctionality(numbers){

      let tempResult = 0
      switch(numbers){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
        if(this.state.operator === null){
          this.setState({
              firstValue: (this.state.firstValue === 0) ? numbers : this.state.firstValue +''+ numbers,
              result: (this.state.result === 0) ? numbers : this.state.result +''+ numbers
          })
        }else{
          this.setState({
              secondValue: (this.state.secondValue === 0) ? numbers : this.state.secondValue +''+ numbers,
              result: (this.state.result === 0) ? numbers : this.state.result +''+ numbers
          })
        }
          break

        case '.':
          break

        case '=':
          if(this.state.firstValue === 0 || this.state.secondValue === 0) return 0
          this.setState({
              result: eval(this.state.firstValue + this.state.operator + this.state.secondValue)
          })
      }
      console.log("fV: "+this.state.firstValue + " ,sV: " +this.state.secondValue+ " ,r"+ this.state.result+ " ,operator:"+this.state.operator)
  }

  operatorsButtonFunctionality(operators){
    switch(operators){
      case '*':
      case '/':
      case '+':
      case '-':
        this.setState({
            operator: operators,
            result: 0
        })
    }

  }

  renderNumbersButtons(){
        let rows = [];
        for (let i = 0; i < 5; i ++) {
            let row = [];
            for(let j = 0; j < 3;j++){

                if(numbers[i][j] !== ' '){
                  row.push(<TouchableOpacity onPress={() => this.numberButtonsFunctionality(numbers[i][j])} style={styles.button}>
                    <Text style={styles.buttonText}> {numbers[i][j]} </Text>
                  </TouchableOpacity>)
                }

            }
            rows.push(<View style={styles.rowFlip}>{row}</View>)
        }

        return rows;
  }

  renderOperatorsButtons(){
        let column = [];
        for(let i = 0; i < 4;i++){
              column.push(<TouchableOpacity onPress = {() => this.operatorsButtonFunctionality(operators[i])} style={styles.calculationButton}>
              <Text style={styles.buttonText}> {operators[i]}</Text>
              </TouchableOpacity>)
        }

        return column;
  }

  acButtonFunctionality(){
    this.setState({
        firstValue: 0,
        secondValue: 0,
        operator: null,
        result:0
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{this.state.result}</Text>
          </View>

          <View style={styles.buttonsContainer}>

            <View style={styles.numbers}>
                {this.renderNumbersButtons()}
            </View>

            <View style={styles.calculations}>
              {this.renderOperatorsButtons()}

              <TouchableOpacity onPress = {() => this.acButtonFunctionality()}style={styles.calculationButton}>
              <Text style={styles.buttonText}> {ac} </Text>
              </TouchableOpacity>
            </View>

          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

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
