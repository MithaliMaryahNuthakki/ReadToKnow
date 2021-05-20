import React, { Component } from 'react';
import { FlatList,View,Text} from 'react-native';

import { getUSANews } from './fetchNews';
import Article from '../Article';

class SportsNews extends Component {
	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		this.fetchNews();
	};

	fetchNews = () => {
		getUSANews()
			.then(articles => {
				this.setState({ articles, refreshing: false });
			})
			.catch(() => this.setState({ refreshing: false }));
	};

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	render() {
		console.log(this.state.articles);
		return (
			<View>
				<Text style={{fontFamily:'Zapfino',fontSize:20,color:'hotpink',alignSelf:'center',marginTop:20}}> Sports News</Text>
			<FlatList
				data={this.state.articles}
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
			/>
			</View>
		);
	}
}

export default SportsNews;