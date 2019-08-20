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
    deck1 : {
      card1 : {
        question : "Question for Deck 1 Card 1",
        answer : "Yes"
      },
      card2 : {
        question : "Do you like me?",
        answer : "Yes"
      },
      card3 : {
        question : "Do you potatos?",
        answer : "Yes"
      }
    },
    deck2 : {
      card1 : {
        question : "Do you like ice cream?",
        answer : "Yes"
      },
      card2 : {
        question : "Deck 2 Card 2",
        answer : "Yes"
      }
    },
    deck3 : {
      card1 : {
        question : "Deck 3 Card 1",
        answer : "Yes"
      },
      card2 : {
        question : "Deck 3 Card 2",
        answer : "Yes"
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
