import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation'

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import { getStarted } from '../actions/'

class Startup extends React.Component {
render() {
  const { dispatch, navigation } = this.props;
  dispatch(getStarted(initialDecks))

return (
    <View></View>
)
}
}

initialDecks = {
  decks : {
    Deck1 : {
      card1 : {
        question : "You like React Native.",
        answer : "Correct"
      },
      card2 : {
        question : "Tyler McGinnus Awesome?",
        answer : "Correct"
      },
      card3 : {
        question : "Do you like Cobalt?",
        answer : "Incorrect"
      }
    },
    Deck2 : {
      card1 : {
        question : "You like to eat squash",
        answer : "Incorrect"
      },
      card2 : {
        question : "Do you like Pizza?",
        answer : "Correct"
      }
    },
    Deck3 : {
      card1 : {
        question : "Do you like crayons?",
        answer : "Correct"
      },
      card2 : {
        question : "Do you like robots?",
        answer : "Correct"
      }
    },

  }
}

const mapStateToProps = (state) => {
  return {
      flashcards : initialDecks
  }
}

export default connect(mapStateToProps)(Startup);
