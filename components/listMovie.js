import React,{Component} from 'react';
import {View,Text,TouchableOpacity,FlatList,Image} from 'react-native';
import styles from '../stl';

class listItem extends Component{
    render(){
          const urlImage = `http://image.tmdb.org/t/p/w185${this.props.item.poster_path}`;
        return(
            <View style={styles.containerListItem}>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={{uri:urlImage}}/>
                </View>
                <TouchableOpacity style={styles.flexes} onPress={()=>
                    this.props.navigate('detail',{imdbIDName:this.props.item.id})}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.Text}>{this.props.item.title}</Text>
                    </View>
                    <View style={styles.viewForward}>
                         <Text style={styles.forward}>></Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class listMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
          data: []
      }
    }

    componentWillMount(){
         this.fetchData();
    }
    fetchData = async()=>{
        //https://api.themoviedb.org/3/movie/top_rated?api_key=f7485fa464693c4a4b1b3e4b580e4d40&language=en-US&page=1
        let rootURL = 'https://api.themoviedb.org/';
        let apiKey = 'f7485fa464693c4a4b1b3e4b580e4d40';
        let url = `${rootURL}3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
        const response = await fetch(url);
        const json = await response.json();
        this.setState({data:json.results});
    }
     render(){
         const { navigate } = this.props.navigation;
         return(
             <View style={styles.container}>
                 <FlatList
                    data = {this.state.data}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem={({item})=>{
                         return(
                             <listItem item={item} navigate={navigate}></listItem>
                         );
                     }}
                 />
             </View>
         );
     }

}
