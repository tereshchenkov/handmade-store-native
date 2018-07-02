import React, { Component } from 'react'
import { Text, StyleSheet, View,  Platform, StatusBar } from 'react-native'

export default class WhishList extends Component {
  render() {
    return (
      <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
        <Text> WhishList </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})
