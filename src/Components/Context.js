import React, { Component } from 'react';
import axios from 'axios';
import env from './Environment';
const Context = React.createContext();

export class Provider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            trendingMovies:"",
            topRatedMovies:"",
            popularMovies:"",
            upcomingMovies:"",
            topRatedSeries:"",
            popularSeries:"",
            airingToday:"",
            aboutToAir:""
            }
    }
    
    componentDidMount(){
        this.funGetTrending();
        this.funGetTopRated();
        this.funGetPopular();
        this.funGetUpcoming();
        this.funGetTopRatedSeries();
        this.funGetPopularSeries();
        this.funGetAiringToday();
        this.funGetOnTheAir();
    }
    

    funGetTrending(){

        const method="/trending/movie/week";

        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({trendingMovies:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
    }

    funGetTopRated(){

        const method="/movie/top_rated";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({topRatedMovies:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetPopular(){

        const method="/movie/popular";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({popularMovies:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetUpcoming(){

        const method="/movie/upcoming";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({upcomingMovies:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetTopRatedSeries(){

        const method="/tv/top_rated";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({topRatedSeries:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetPopularSeries(){

        const method="/tv/popular";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({popularSeries:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetAiringToday(){

        const method="/tv/airing_today";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({airingToday:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }

    funGetOnTheAir(){

        const method="/tv/on_the_air";
        axios.get(env.apiurl+method+env.apikey)
            .then((res)=>{
                this.setState({aboutToAir:res.data.results});
            })
            .catch((err)=>{
                console.log(err);
                this.props.history.push("/error")
            })
        
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;