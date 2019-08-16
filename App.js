import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { StackNavigator, DrawerNavigator } from 'react-navigation'
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

import { FontAwesome, Ionicons } from '@expo/vector-icons'


export default class App extends React.Component {
render(){
  return (
    <AppContainer/>
  );
 }
}

class Home extends React.Component {

  state = {
    decks : {
      deck1 : {
        card1 : {
          question : "Are You Prime?",
          answer : "Yes"
        },
        card2 : {
          question : "Are you Happy",
          answer : "Yes"
        }
      },
      deck2 : {
        card1 : {
          question : "Are You Prime?",
          answer : "Yes"
        },
        card2 : {
          question : "Are you Happy",
          answer : "Yes"
        }
      },
      deck3 : {
        card1 : {
          question : "Are You Prime?",
          answer : "Yes"
        },
        card2 : {
          question : "Are you Happy",
          answer : "Yes"
        }
      },

    }
  }


  render() {

    const decks = Object.keys(this.state.decks)
    const br = `\n`;

    handlePress = (deck) => {
      alert(deck)

    }

    return (

    <View style={styles.container}>
            <View style={{height : 40}}/>
            <Text>Mobile Flashcards{br}</Text>

                {decks.map( deck =>
                {
                  return(
                    <TouchableHighlight onPress={ () => handlePress(deck)}>
                        <Text key={deck}> {deck}{br}{br}</Text>
                    </TouchableHighlight>
                  )
                })
              }


    </View>
  )
}
}

class CreateDeck extends React.Component {
  render() {return (
    <View style={styles.container}>
      <View style={{height : 40}}/>
      <Text>Create Deck</Text>

    </View>
  )
}}


const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : Home,
    CreateDeck : CreateDeck
  },
  {
    defaultNavigationOptions : {
      headerStyle : {
        backgroundColor : 'white'
      },
      tabBarIcon : () => <FontAwesome name='home' size='30' color='black' />
    }
  }
)


const TabNavigator = createBottomTabNavigator({
    Decks : Home,
    AddDeck : CreateDeck,

})

//export default createAppContainer(TabNavigator);
const AppContainer = createAppContainer(TabNavigator);

//const MyTabNavigator = createBottomTabNavigator(AppDrawerNavigator);

//const AppContainer = createAppContainer(AppDrawerNavigator);
// const AppContainer = createAppContainer(Tabs);
//
//
//
// const TabBarComponent = (props) => (<BottomTabBar {...props} />);
//
// const TabScreens = createBottomTabNavigator(
//   {
//     tabBarComponent: props =>
//       <TabBarComponent
//         {...props}
//         style={{ borderTopColor: '#605F60' }}
//       />,
//   },
// );




// const MainNavigator = createStackNavigator({...});
// const App = createAppContainer(MainNavigator);



// const Home = ({ navigation }) => (
//   <View>
//     <Text>This is the Home view</Text>
//     <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Dashboard')}>
//       <Text>Press here for the Dashboard</Text>
//     </TouchableOpacity>
//   </View>
// );
//
// const Dashboard = () => (
//   <View>
//     <Text>This is the Dashboard</Text>
//     <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
//       <Text>Press here for the Home</Text>
//     </TouchableOpacity>
//   </View>
// );
//
//

//
// const Stack = createAppContainer(MainNavigator);




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
