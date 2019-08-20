import React, { Component } from 'React'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native'

import { incrementCount , decrementCount } from '../actions/'

class Counter extends React.Component {

  render() {
    //  console.log(this.props);
    //  console.log("State.Count", state.count)
      const { dispatch } = this.props;
      let count = 0;
      count = this.props.countContainer.count;

    return(
      <View style={styles.container}>

          <Text style={styles.screenText}>{count}{"\n\n"}</Text>

          <Button
            title="+"
            onPress={ () => {
              console.log("Button Pressed");
              dispatch(incrementCount(1));
            }}
            color="#841584"
           />

          <Button
            title="-"
            onPress={ () => {
              console.log("Button Pressed");
              dispatch(decrementCount(1));
            }}
            color="#841584"

            />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    backgroundColor : '#E53224',
    padding: 10,
    paddingLeft : 80,
    paddingRight: 80,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 5,
  },

  btnText : {
    color : '#fff'
  },

  screenText : {
    fontSize : 50
  }


})

const mapStateToProps = (state) => {
  return {
    countContainer : state.count
  }
}

export default connect(mapStateToProps)(Counter);
