import React, { Component } from 'react'
import { Text, StyleSheet, View, StatusBar, Dimensions, TextInput, TouchableOpacity, ProgressBarAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window');

export default class SearchBar extends Component {
    state = {
        loading: false
    }

    clearSearchInput() {
        this.refs.searchInput.clear();
    }
    render() {
        return(
            <View style={[styles.container, { paddingTop: StatusBar.currentHeight + 8, height: StatusBar.currentHeight + 56 }]}>
                <Icon name="md-search" color='grey' size={24} />
                <View style={styles.inputContainer}>
                    <TextInput
                        ref="searchInput"
                        style={styles.input}
                        placeholder="SEARCH"
                        placeholderTextColor="#898989"
                        returnKeyType="search"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onSubmitEditing={() => this.setState({
                            loading: true
                        })}
                    />
                    <TouchableOpacity
                        style={styles.closeButton}
                        activeOpacity={0.5}
                        onPress={() => {
                            if (this.state.loading) {
                                this.setState({
                                    loading: false
                                })
                            } else {
                                this.clearSearchInput()
                            }
                        }}
                    >
                        {this.state.loading ?
                            <ProgressBarAndroid style={styles.progress} styleAttr="Small" color="grey"/> :
                            <Icon name="md-close" color='grey' size={20} />
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.optionsButton} activeOpacity={0.5}>
                    <Icon name="md-options" color= 'grey' size={24}/>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 5,
        paddingVertical: 8,
        backgroundColor: "#fcfcfc"
    },
    inputContainer: {
        position: 'relative',
        height: 40,
        width: '75%',
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#efefef',
        borderRadius: 5,
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    progress: {
        height: 20
    },
    optionsButton: {
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})