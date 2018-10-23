import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import styles from '../stl';
export default class detailMovie extends Component{
    constructor(props){
        super(props);
        this.state = {dataSource: []}
    }

    componentWillMount(){
         this.fetchData();
    }
    fetchData = async()=>{
        const imdbID = this.props.navigation.state.params.imdbIDName;
        let rootURL = 'https://api.themoviedb.org/';
        let apiKey = 'f7485fa464693c4a4b1b3e4b580e4d40';
        const id = imdbID;
        const url = `${rootURL}3/movie/${id}?api_key=${apiKey}&language=en-US`;
        const result = await fetch(url);
        const json = await result.json();
        this.setState({dataSource:json});
    }

     render(){
        const urlImage = `http://image.tmdb.org/t/p/w185${this.state.dataSource.poster_path}`;
         return(
             <ScrollView>
                <View style={styles.containerDetailMovie}>
                <View style={styles.containerImageAndScore}>
                    <View style={styles.containerImg}>
                        <Image style={styles.image} source={{uri:urlImage}}></Image>
                    </View>
                    <View style={styles.containerScore}>
                        <Text style={styles.Text}><Text style={styles.textTitle}>Vote average: </Text>{this.state.dataSource.vote_average}</Text>
                        <Text style={styles.Text}><Text style={styles.textTitle}>Vote count: </Text> {this.state.dataSource.vote_count}</Text>
                    </View>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.textTitle0}>{this.state.dataSource.title}</Text>
                    <Text style={styles.textYear}>{this.state.dataSource.tagline}</Text>
                    <Text style={styles.Text}><Text style={styles.textTitle}>Status: </Text> {this.state.dataSource.status}</Text>
                    <Text style={styles.Text}><Text style={styles.textTitle}>Release: </Text> {this.state.dataSource.release_date}</Text>
                    <Text style={styles.Text}><Text style={styles.textTitle}>Time: </Text> {this.state.dataSource.runtime} minutes</Text>
                    <Text style={styles.Text}><Text style={styles.textTitle}>Writer: </Text> {this.state.dataSource.overview}</Text>
                </View>
            </View>
             </ScrollView>
         )
     }
}
