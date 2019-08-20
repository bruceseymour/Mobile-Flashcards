import React from 'react'
import { Text, TextInput, StyleSheet, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions/'

class AddCard extends React.Component {

state = {
    question : '',
    answer : ''
  }

mySubmit(deckId, cardId, question, answer) {

    const { dispatch, navigation } = this.props
        let newCard = {
          [cardId] : {
            question : question,
            answer : answer
          }
        }

        dispatch(
          addCard(
          {
          card : newCard,
          deckId : deckId
         }
          )
        )
        navigation.navigate('ViewDeck');
}


render() {

  let cardId = Math.random().toString(36).substr(2, 9);

  const { dispatch, navigation } = this.props
  const { question, answer } = this.state
  const deckId = navigation.getParam('deckId')

  console.log("q: ", question, "A: ", answer);

  return (
    <View>
      <View style={{height : 40}}/>
      <Text>Question</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />

        <TouchableHighlight onPress={ () => this.mySubmit(deckId, cardId, question, answer) }>
                <Text style={styles.btn}>Add Card</Text>
        </TouchableHighlight>
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

const mapStateToProps = (state) => {
  return {
      deck : state.flashcards.decks
  }
}

export default connect(mapStateToProps)(AddCard);
