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

class TakeQuiz extends React.Component {

  state = {
    cardIndex : 0,
    currentCardId : "",
    currentQuestion: "",
    currentAnswer: "",
    correctAnswers : 0,
    incorrectAnswers : 0,
    showAnswer: false,
    totalCards : 0,
    finished : false
  }

toggleAnswer(){
  this.setState( () => ({
    showAnswer : !this.state.showAnswer})
  )
}

recordScore(userAnswer, correctAnswer, totalCards){

  let checkIfFinished = parseInt(this.state.cardIndex) == parseInt(totalCards-1)

  if (!checkIfFinished){
    this.setState( () => ({
      cardIndex : this.state.cardIndex + 1
    }))
  } else if(checkIfFinished){
    this.setState( () => ({
      finished: true
  }))}

      if(userAnswer == correctAnswer){
        this.setState( () => ({
          correctAnswers : this.state.correctAnswers + 1
        }))
      } else if (userAnswer != correctAnswer){
        this.setState( () => ({
          incorrectAnswers : this.state.incorrectAnswers + 1
        }))
      }
}

resetQuiz() {

  this.setState( () => ({
    cardIndex : 0,
    currentCardId : "",
    currentQuestion: "",
    currentAnswer: "",
    correctAnswers : 0,
    incorrectAnswers : 0,
    showAnswer: false,
    totalCards : 0,
    finished : false
  }))

}


render() {

const { dispatch, navigation } = this.props;

const deckId = navigation.getParam('deck')
let deck = this.props.deck[deckId];
let deckName = Object.values(deckId);
let cards = Object.keys(deck)
let totalCards = cards.length
let cardsRemaining = parseInt(totalCards) - parseInt(this.state.cardIndex)

const br = `\n`;


if (this.state.finished){
     return(
       <View>
        <Text>Wahooo!  You're Done {br}{br}</Text>
        <Text>Correct: {this.state.correctAnswers} out of {totalCards}{br}{br}</Text>
        <Text>Score: {parseFloat( (this.state.correctAnswers / totalCards)*100 ).toFixed(0)+"%" }{br}{br}</Text>

        <TouchableHighlight onPress={ () => this.resetQuiz()}>
            <Text style={styles.btn}>Retake Quiz</Text>
        </TouchableHighlight>

        <Text>{br}{br}</Text>

        <TouchableHighlight  onPress={ () => navigation.navigate(
          'Quiz'
          )}>

            <Text style={styles.btn}>View Decks</Text>
        </TouchableHighlight>

        <Text>{br}{br}</Text>
        <TouchableHighlight onPress={ () => navigation.navigate('Decks')}>
            <Text style={styles.btn}>Manage Decks/Cards</Text>
        </TouchableHighlight>



      </View>
     )
}

return (

<ScrollView>


<Text>
  <Text>{br}Deck Name: {deckId} {br}</Text>
  <Text>Total Cards: {totalCards}{br}</Text>
  <Text>Cards Remaining: {cardsRemaining}{br}</Text>
  <Text>Card ID: {cards[this.state.cardIndex]}{br}</Text>

  <Text style={styles.question}>{deck[cards[this.state.cardIndex]].question}</Text>

<Text>
  {this.state.showAnswer && <Text style={styles.answer}>{br}{deck[cards[this.state.cardIndex]].answer}{br}Correct Answers: {this.state.correctAnswers}</Text>}
</Text>

  {br}{br}
  </Text>

<TouchableHighlight onPress={ () => this.recordScore("Correct", deck[cards[this.state.cardIndex]].answer, totalCards)}>
        <Text style={styles.btn}>Correct</Text>
</TouchableHighlight>
      <Text>{br}{br}</Text>
<TouchableHighlight onPress={ () => this.recordScore("Incorrect", deck[cards[this.state.cardIndex]].answer, totalCards)}>
        <Text style={styles.btn}>Incorrect</Text>
</TouchableHighlight>
      <Text>{br}{br}</Text>
<TouchableHighlight onPress={ () => this.toggleAnswer()}>
        <Text style={styles.btn}>Show Answer</Text>
</TouchableHighlight>



</ScrollView>
)}}


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
    color : '#ffff'
  },

  question : {
    fontSize : 24
  },

  answer : {
    fontSize : 18,
    color : "#778899"
  }

})

const mapStateToProps = (state, deckId) => {
  return {
      deck : state.flashcards.decks
  }
}

export default connect(mapStateToProps)(TakeQuiz);
