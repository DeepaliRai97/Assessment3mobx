import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class AdminDashBoard extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		realm = new Realm({
			path: 'MovieSchema.realm',
			schema: [
				{
					name: 'Movies',
					properties: {
						movie_id: { type: 'int', default: 0 },
						moviename: 'string',
						generic: 'string',
						url: 'string',
					},
				},
			],
		})
	}
	render() {

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('AddMovie')}>
					<Text style={styles.buttonText}>Addmovie</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('DeleteMovie')}>
					<Text style={styles.buttonText}>DeleteMovie</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('EditMovie')}>
					<Text style={styles.buttonText}>EditMovie</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonText}
					onPress={() => this.props.navigation.navigate('GetMovie')}>
					<Text style={styles.buttonText}>GetMovie</Text>
				</TouchableOpacity>

			</View>

		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		paddingVertical: 10,
		marginBottom: 10,
		flexDirection: "column",
		color: '#ffffff',
	},
	buttonText: {
		textAlign: 'center',
		color: '#0B5149',
		fontWeight: '700',
		fontSize: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		marginTop: 20,
	},
});