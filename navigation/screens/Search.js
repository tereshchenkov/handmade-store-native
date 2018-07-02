import React, { Component } from 'react'
import { Text, StyleSheet, View,  Platform, StatusBar } from 'react-native'

export default class Search extends Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('#553A91')
  }
  render() {
    return (
      <View style={[styles.container, { paddingTop: StatusBar.currentHeight }]}>
      <StatusBar translucent={false}  barStyle="dark-content" />
        <Text> Search </Text>
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
