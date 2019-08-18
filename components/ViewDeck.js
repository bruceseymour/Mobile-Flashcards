import React from 'react'
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

  //console.log(this.props.navigation);
//this.props.navigation.state.params.deck

const { navigation } = this.props;

const cardsArray = Object.keys(navigation.getParam('deck'));

const cards = navigation.getParam('deck')

let addNewCard = navigation.getParam('addNewCard')


console.log(cards);

const br = `\n`;

console.log("AddNewCard", this.props.addNewCard);

  return (
<ScrollView>
<Text>
    View Deck
    {cardsArray.map( (card) =>{
      return (
      <Text id={card}>
      {br}{card}{br}
      {cards[card].question}{br}
      {cards[card].answer}
      {br}{br}
      </Text>
    )
    })}
</Text>

<TouchableHighlight onPress={ () => navigation.navigate(
          'AddCard',
          {
            data : 1,
            addNewCard : (card) => navigation.getParam('addNewCard')()
          }
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


export default ViewDeck
