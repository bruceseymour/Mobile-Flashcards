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

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/'


import ViewDeck from './components/ViewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Home from './components/Home'
import Counter from './components/Counter'
import Startup from './components/Startup'
import CreateDeck from './components/CreateDeck'
import TakeQuiz from './components/TakeQuiz'
import { localNotification } from './utils/utils'

import { FontAwesome, Ionicons } from '@expo/vector-icons'


/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
//  console.group(action.type)
//  console.info('dispatching', action)
  let result = next(action)
//  console.log('next state', store.getState())
//  console.groupEnd(action.type)
  return result
}
let createStoreWithMiddleware = applyMiddleware(logger)(createStore)
let store = createStoreWithMiddleware(reducers)

class App extends React.Component {

componentDidMount() {
    localNotification()
}

render(){
  return (
    <Provider store={store}>
      <Startup/>
      <AppContainer/>
    </Provider>
  );
 }
}

const TabNavigator = createAppContainer(createBottomTabNavigator({
    Manage : Home,
    Quiz : Quiz
}))

const StackNavigator = createStackNavigator(
  {
    Tabs : TabNavigator,
    Decks : {
      screen : Home,
    },

    Counter : {
      screen : Counter
    },

    CreateDeck : {
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
    },
    TakeQuiz : {
      screen : TakeQuiz,
      navigationOptions : {
        title : "Take Quiz",
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
