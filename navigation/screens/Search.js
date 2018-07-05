import React, { Component } from 'react'
import { ItemCard, SearchBar } from '../../components/common'
import { Text, StyleSheet, View, Animated, FlatList, StatusBar } from 'react-native'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const SearchBarHeight = 56 + StatusBar.currentHeight;

export default class Search extends Component {
	constructor() {
		super();

		const scrollAnim = new Animated.Value(0);

		this.state = {
			scrollAnim,
			scrollAnimWithRemovedBounciness: scrollAnim.interpolate({
				inputRange: [0, 1],
				outputRange: [0, 1],
				extrapolateLeft: 'clamp'
			})
		};
	}
	_clampedScrollValue = 0;
  	_scrollValue = 0;

	componentDidMount() {
		this.state.scrollAnim.addListener(({ value }) => {
			const diff = value - this._scrollValue;
			this._scrollValue = value;
			
			this._clampedScrollValue = Math.min(
				Math.max(this._clampedScrollValue + diff, 0),
				SearchBarHeight,
			);
		});
	}
	
	componentWillUnmount() {
		this.state.scrollAnim.removeAllListeners();
	}

	_onScrollEndDrag = () => {
		this._scrollEndTimer = setTimeout(this._onMomentumScrollEnd, 100);
	};

	_onMomentumScrollBegin = () => {
		clearTimeout(this._scrollEndTimer);
	};

	_onMomentumScrollEnd = () => {
		if (this._clampedScrollValue && this._clampedScrollValue !== SearchBarHeight) {
			const toValue = (SearchBarHeight - this._clampedScrollValue) < StatusBar.currentHeight
				? this._scrollValue + (SearchBarHeight - this._clampedScrollValue)
				: this._scrollValue - this._clampedScrollValue;
			this.flatListRef.getNode().scrollToOffset({ offset: toValue });
		}
	};

	render() {
		const { scrollAnimWithRemovedBounciness } = this.state;
		
		const navbarTranslate = Animated.diffClamp(
			scrollAnimWithRemovedBounciness,
			0,
			SearchBarHeight
		).interpolate({
			inputRange: [0, SearchBarHeight],
      		outputRange: [0, -SearchBarHeight],
			extrapolate: 'clamp',
		});

		return (
		<View style={[styles.container]}>
			<AnimatedFlatList
				ref={ref => this.flatListRef = ref}
				contentContainerStyle={[styles.list]}
				data={[1,2,3,4,5,6,7,8,9]}
				keyExtractor={(item, index) => `${item}-${index}`}
				renderItem={item => <ItemCard />}
				numColumns={2}
				columnWrapperStyle={styles.column}
				scrollEventThrottle={1}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: this.state.scrollAnim } } }],
					{ useNativeDriver: true },
				)}
				onMomentumScrollBegin={this._onMomentumScrollBegin}
				onMomentumScrollEnd={this._onMomentumScrollEnd}
	  			onScrollEndDrag={this._onScrollEndDrag}
			/>
			<Animated.View style={[ styles.headerContainer, { transform: [{ translateY: navbarTranslate }] }]}>
				<SearchBar/>
			</Animated.View>
		</View>
		
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerContainer: {
		position: 'absolute',
		flex: 0,
		top: 0,
		backgroundColor: 'white',
		elevation: 3
	},
	column: {
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingBottom: 10
	},
	list: {
		paddingTop: SearchBarHeight + 15
	}
})
