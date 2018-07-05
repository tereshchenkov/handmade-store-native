import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { Search, WishList, Cart } from './screens'
import Icon from 'react-native-vector-icons/Ionicons'

export default createBottomTabNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'SEARCH',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-search" color={tintColor} size={24} />
            )
        }
    },
    WishList: {
        screen: WishList,
        navigationOptions: {
            tabBarLabel: 'WHISHLIST',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-heart" color={tintColor} size={24} />
            )
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: false,
            tabBarIcon: ({ tintColor }) => (
                <Icon name="md-cart" color={tintColor} size={24} />
            )
        }
    }
},{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 3
      }
    },
    swipeEnabled: true
})