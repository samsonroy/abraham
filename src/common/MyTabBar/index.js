import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {verticalScale, scale} from '@helpers/scale';
import Amigos from '@assets/images/logo.png';
// import ExploreActive from '@assets/images/exploreactive.svg';
// import ExploreInActive from '@assets/images/exploreinactive.svg';
import ChatActive from '@assets/images/bottombarIcons/chatactive.svg';
import ChatInActive from '@assets/images/bottombarIcons/bellinactive.svg';
import HomeActive from '@assets/images/bottombarIcons/homeactive.svg';
import HomeInActive from '@assets/images/bottombarIcons/homeinactive.svg';
import GroupChatActive from '@assets/images/bottombarIcons/groupchatactive.svg';
import GroupChatInActive from '@assets/images/bottombarIcons/groupchatinactive.svg';
import MarketPlaceActive from '@assets/images/bottombarIcons/marketplaceactive.svg';
import MarketPlaceInActive from '@assets/images/bottombarIcons/marketplaceinactive.svg';
// import {neutral10} from '../../helpers/colors';

const MyTabBar = ({state, descriptors, navigation}) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={styles.circularTabWrapper}>
				{state.routes.map((route, index) => {
					const {options} = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const getIcon = () => {
						switch (route.name) {
							case 'home':
								return isFocused ? (
									<View style={styles.icon}>
										<HomeActive alignSelf={'center'} />
									</View>
								) : (
									<View style={styles.icon}>
										<HomeInActive alignSelf={'center'} />
									</View>
								);
							case 'community':
								return isFocused ? (
									<View style={styles.icon}>
										<GroupChatActive alignSelf={'center'} />
									</View>
								) : (
									<View style={styles.icon}>
										<GroupChatInActive
											alignSelf={'center'}
										/>
									</View>
								);
							case 'explore':
								// return isFocused ? (
								//   <View style={styles.exploreWarpper}>
								//     <View style={styles.logoWrapper}>
								//       <Text style={{alignSelf: 'center'}}>LOGO</Text>
								//     </View>
								//     {/* <Image style={styles.logo} source={Images.campusPert} /> */}
								//     <View style={[styles.exploricon, styles.activeColor]}>
								//       <Amigos alignSelf={'center'} />
								//     </View>
								//   </View>
								// ) : (
								return (
									<View style={styles.exploreWarpper}>
										<View style={styles.logoWrapper}>
											<Text style={{alignSelf: 'center'}}>
												LOGO
											</Text>
										</View>
										<View
											style={[
												styles.exploricon,
												styles.inactiveColor,
											]}>
											{/* <Amigos /> */}
										</View>
									</View>
								);
							case 'marketplace':
								return isFocused ? (
									<View style={styles.icon}>
										<MarketPlaceActive
											alignSelf={'center'}
										/>
									</View>
								) : (
									<View style={styles.icon}>
										<MarketPlaceInActive
											alignSelf={'center'}
										/>
									</View>
								);
							case 'chat':
								return isFocused ? (
									<View style={styles.icon}>
										<ChatActive alignSelf={'center'} />
									</View>
								) : (
									<View style={styles.icon}>
										<ChatInActive alignSelf={'center'} />
									</View>
								);
						}
					};

					// if (route.name === 'Home') {
					//   isFocused ? Images.home : Images.chat;
					// } else if (route.name === 'Settings') {
					//   isFocused ? 'ios-list-box' : 'ios-list';
					// }

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityStates={isFocused ? ['selected'] : []}
							accessibilityLabel={
								options.tabBarAccessibilityLabel
							}
							testID={options.tabBarTestID}
							onPress={
								route.name !== 'explore' ? onPress : () => {}
							}
							onLongPress={
								route.name !== 'explore'
									? onLongPress
									: () => {}
							}
							style={styles.root}
							key={label}>
							{getIcon()}
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: verticalScale(28),
		paddingBottom: verticalScale(40),
	},
	container: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		shadowRadius: 20,
		shadowColor: '#000000',
		elevation: 10,
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.2,
	},
	circularTabWrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	icon: {
		alignSelf: 'center',
	},
	exploricon: {
		alignSelf: 'center',
		borderRadius: 40,
		borderColor: 'rgba(255, 216, 85, 0.25)',
		borderWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		padding: 22,
	},
	inactiveColor: {
		backgroundColor: '#fffaeb',
	},
	activeColor: {
		backgroundColor: '#ffd855',
	},
	exploreWarpper: {
		flexDirection: 'column',
		position: 'absolute',
		top: verticalScale(-64),
		right: 0,
		left: 0,
		zIndex: 10,
	},
	logoWrapper: {
		marginVertical: verticalScale(10),
		backgroundColor: '#ffff',
		borderRadius: 23,
		paddingVertical: verticalScale(8),
		paddingHorizontal: scale(6),
	},
	logo: {
		// width: scale(100),
	},
});
export default MyTabBar;
