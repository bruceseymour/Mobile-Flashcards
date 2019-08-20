import React from 'react'
import { connect } from 'react-redux'
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

import AddCard from './AddCard'

class ViewDeck extends React.Component {
  render() {

const { dispatch, navigation } = this.props;

const deckId = navigation.getParam('deck')
let deck = this.props.deck[deckId];



const cards = Object.keys(deck)
//console.log("Deck: ", deck , "Cards: ", cards);

const br = `\n`;

return (
<ScrollView>
<Text>
    View Deck
    {cards.map( (card) =>{
      return (
      <Text key={card} id={card}>
      {br}
      Card ID: {card}{br}
      {deck[card].question}{br}
      {deck[card].answer}
      {br}{br}
      </Text>
    )
    })}
</Text>

<TouchableHighlight onPress={ () => navigation.navigate(
          'AddCard',
          {deckId : deckId}
        )}>
        <Text style={styles.btn}>Add Card</Text>
</TouchableHighlight>



</ScrollView>

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
    color : '#ffffff',
    textAlign : 'center',
    padding: 10,
    paddingLeft : 80,
    paddingRight: 80,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 5,
  },

  btnText : {
    color : '#fff'
  }
})

const mapStateToProps = (state, deckId) => {
  return {
      deck : state.flashcards.decks
  }
}

export default connect(mapStateToProps)(ViewDeck);
