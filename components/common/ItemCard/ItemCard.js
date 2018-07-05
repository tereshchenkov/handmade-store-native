import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo'

const { width, height } = Dimensions.get('window');

export default class ItemCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          colors={['#a8fff7', '#fff263']}
          start={[1, 0.5]}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}> textInComponent </Text>
          <View style={styles.headerInfo}>
            <Text style={styles.price}>14$</Text>
            <Icon name="md-heart-outline" color="white" size={20} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    height: width/2, 
    width: width/2 - 20,
    // borderRadius: 10,
    elevation: 1
  },
  gradient: {
    flex: 1,
    // borderRadius: 10,
  },
  headerContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    bottom: 0,
    height: '30%',
    width: '100%',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    backgroundColor: 'rgba(127, 127, 127, 0.50)'
  },
  headerTitle: {
    color: 'white',
    paddingVertical: 4,
    paddingLeft: 5
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  price: {
    color: 'white',
  }
})
