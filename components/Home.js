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

class Home extends React.Component {
  render() {

  const br = `\n`;
  const { dispatch, navigation } = this.props;
  let decks = Object.keys(this.props.flashcards)

  return (

    <View style={styles.container}>
            <View style={{height : 40}}/>
            <Text>Mobile Flashcards{br}</Text>

                {decks.map( deck =>
                {
                  return(
                    <TouchableHighlight key={deck} onPress={ () => navigation.navigate(
                      'ViewDeck',
                    {
                      deck : deck
                    }
                    )}>
                        <Text> {deck}{br}{br}</Text>
                    </TouchableHighlight>
                  )
                })
              }


              <TouchableHighlight  onPress={ () => navigation.navigate(
                'Counter'
              )}>
                  <Text>Counter</Text>
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
    flashcards : state.flashcards.decks
  }
}

export default connect(mapStateToProps)(Home);
