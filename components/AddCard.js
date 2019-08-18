import React from 'react'
import { Text, TextInput, StyleSheet, TouchableHighlight, View } from 'react-native'





class AddCard extends React.Component {

   state = {
     question : '',
     answer : ''
   };



render() {

  const { navigation } = this.props;




  console.log("Props3: ", this.props);
  console.dir(this.props);



  function mySubmit() {

    let newCard = {
      card4 : {
        question : "q card 4",
        answer : "Yes"
      }
    }

navigation.getParam('addNewCard')()


    navigation.navigate(
              'ViewDeck',
              {
                data : 1,
                addNewCard : navigation.getParam('addNewCard')()
              }
            );


  }

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


        <TouchableHighlight onPress={ () => mySubmit() }>
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

export default AddCard;
