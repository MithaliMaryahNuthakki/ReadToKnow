import React, { Component } from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

import defaultImage from '../assets/image/news-placeholder.png';



class Article extends Component {
	render() {
		const {
			title,
			description,
			publishedAt,
			source,
			urlToImage,
			url
		} = this.props.article;
		let image = {uri:urlToImage};

		const time = moment(publishedAt || moment.now()).fromNow();

		return (
			
			<TouchableHighlight onPress={() => {
				Linking.openURL(url);
			  }} >
				<Card
					featuredTitle={title}
					featuredTitleStyle={{
						marginHorizontal: 5,
						textShadowColor: '#00000f',
						textShadowOffset: { width: 3, height: 3 },
						textShadowRadius: 3
					}}
					image={{
						uri: urlToImage
					}}
				>
					
											
						<Text style={{ marginBottom: 10,textAlign: 'left'}}>
							{description+'..' || 'Read more...'}
						</Text>
						<Text style={{marginBottom:10,textAlign: 'right', alignSelf: 'stretch',color:'#d98338'}}>
						Click to Read more
						</Text>
						
					
					<Divider style={{ backgroundColor: '#dfe6e9' }} />
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						<Card.Image source= {image} style={{height:100,width:100,padding:10,alignSelf:'center',marginTop:3}}></Card.Image>
						<Text
							style={{
								marginTop: 80 ,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{source.name.toUpperCase()}
						</Text>
						<Text
							style={{
								marginTop: 80 ,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{time}
						</Text>
					</View>
				</Card>
			</TouchableHighlight>
		);
	}
}

export default Article;