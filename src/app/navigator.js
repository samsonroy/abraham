import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '@common/MyTabBar';

import Splash from '../containers/Landing';
import Home from '../containers/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
	return (
		<Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="home" component={Home} />
			<Tab.Screen name="community" component={Home} />
			<Tab.Screen name="explore" component={Home} />
			<Tab.Screen name="marketplace" component={Home} />
			<Tab.Screen name="chat" component={Home} />
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
					name="Home"
					component={Home}
					options={{headerShown: false}}
				/>
				<Stack.Screen
					name="Home"
					component={HomeTabs}
					options={{headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
