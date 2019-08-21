import React from 'react'
import { Text, TextInput, StyleSheet, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { createNewDeck } from '../actions/'

class CreateDeck extends React.Component {

state = {
    name : ''
  }

mySubmit(name) {
    const { dispatch, navigation } = this.props
    dispatch(createNewDeck(name))
    navigation.navigate('Decks');
}


render() {

  const { name } = this.state

  return (
    <View>
      <View style={{height : 40}}/>
      <Text>Deck Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />


        <TouchableHighlight onPress={ () => this.mySubmit(name) }>
                <Text style={styles.btn}>Create Deck</Text>
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

export default connect(mapStateToProps)(CreateDeck);
