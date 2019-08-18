import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Slider,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

import ViewDeck from './components/ViewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


class App extends React.Component {

  state = {
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

  

addNewCard(card){

    console.log("adding new card!");
    console.log("adding new card!");
    console.log("adding new card!");
    console.log("adding new card!");
}


render(){
  return (
    <AppContainer/>
  );
 }
}

function Home ({ navigation }) {





    const decks = Object.keys(this.state.decks)
    const br = `\n`;

    //
    // handlePress = (deck) => {
    //     console.log("######");
    //     console.log(this.state.decks[deck]);
    //
    //     <ViewDeck deck={this.state.decks[deck]} />
    // }



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
                        deck : this.state.decks[deck],
                        addNewCard : (card) => {this.props.addNewCard(card)},
                      }
                    )}>
                        <Text> {deck}{br}{br}</Text>
                    </TouchableHighlight>
                  )
                })
              }
    </View>
  )  // return

} // home



class CreateDeck extends React.Component {
  render() {return (
    <View style={styles.container}>
      <View style={{height : 40}}/>
      <Text>Create Deck</Text>

    </View>
  )
}}


// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home : Home,
//     CreateDeck : CreateDeck
//   },
//   {
//     defaultNavigationOptions : {
//       headerStyle : {
//         backgroundColor : 'white'
//       },
//     }
//   }
// )


// const TabNavigator = createBottomTabNavigator({
//     Decks : Home,
//     AddDeck : CreateDeck,
//     ViewDeck : ViewDeck,
//     AddCard : AddCard,
//     Quiz : Quiz
// })

const StackNavigator = createStackNavigator(
  {
    Decks : {
      screen : Home,
    },
    AddDeck : {
      screen : CreateDeck,
      navigationOptions : {
        title : "Create Deck",
        headerTintColor : 'red',
        headerStyle: {
              backgroundColor: '#000',
            }
        }
    },
    ViewDeck : {
      screen : ViewDeck,
      navigationOptions : {
        title : "View Decks",
        headerTintColor : 'red',
        headerStyle: {
              backgroundColor: '#000',
            }
        }
    },
    AddCard : {
      screen : AddCard,
      navigationOptions : {
        title : "Add Card",
        headerTintColor : 'red',
        headerStyle: {
              backgroundColor: '#000',
            }
        }
    },
    Quiz : {
      screen : Quiz,
      navigationOptions : {
        title : "Quiz",
        headerTintColor : 'red',
        headerStyle: {
              backgroundColor: '#000',
            }
        }
    }
  },

  {
  defaultNavigationOptions : {
    title : "Flash Cards",
    headerTintColor : 'red',
    headerStyle: {
          backgroundColor: '#000',
        }
    }
  }

)



//export default createAppContainer(TabNavigator);
const AppContainer = createAppContainer(StackNavigator);



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
  }
})

export default App;
