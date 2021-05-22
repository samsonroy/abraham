import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '@common/MyTabBar';

import Splash from '../containers/Landing';
import Home from '../containers/Home';
import Explore from '../containers/Explore';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="home" component={Home} />
			<Tab.Screen name="community" component={Explore} />
			<Tab.Screen name="explore" component={Explore} />
			<Tab.Screen name="marketplace" component={Explore} />
			<Tab.Screen name="chat" component={Explore} />
		</Tab.Navigator>
	);
}

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Splash"
				screenOptions={{
					headerShown: true,
					gestureEnabled: true,
				}}>
				<Stack.Screen
					name="Splash"
					component={Splash}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Landing"
					component={HomeTabs}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
