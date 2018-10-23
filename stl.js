import React,{Component} from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:5,
        marginRight:5,
        marginTop:2,
        marginBottom:2
    },

    containerListItem:{
        flexDirection:'row',
        flex:1,
        margin:1,
        height: 130,
        borderBottomWidth:0.25
    },
    containerDetailMovie:{
        flex:1,
        marginLeft:5,
        marginRight:5,
        marginTop:2,
        marginBottom:2,
        flexDirection:'row'
    },
    containerImageAndScore:{
        flex:1,
        flexDirection:'column',
        padding:2
    },
    containerInfo:{
        flex:2,
        padding:2
    },
    containerImg:{
        flex:1,
        borderBottomWidth:1
    },
    containerScore:{
        flex:1
    },
    image:{
        flex:1,
    },
    viewImage:{
        flex:1,
    },
    textYear:{
        fontSize:25
    },
    Text: {
        fontSize: 20
    },
    textTitle0:{
        fontWeight:'bold'
    },
    textTitle:{
        fontSize:30,
        fontWeight:'bold'
    },
    viewTitle:{
        flex:5,
        fontSize:15,
        marginTop:0,
        marginLeft:3,
        marginRight:3,
        padding:2,
    },
    forward:{
        fontSize:25,
        opacity:10,
    },
    viewForward:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:10,
    },
    flexes:{
        flex:3,
        flexDirection:'row'
    }
})
