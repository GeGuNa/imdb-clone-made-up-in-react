import React, { Component } from 'react';
import Service from './Service';
import Card from './Card';

export default class Upcoming extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList:[],
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetMovies();
    }

    funGetMovies(){

        const method="/movie/upcoming";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({moviesList:res.data.results});
        })
        .catch(()=>{
            this.props.history.push("/");    
        })
        
    }

    funGetDetails=(id)=>{
        this.props.history.push(`/details/${id}`);
    }
    
    render() {
        const {moviesList} = this.state;
        return (
            <div>
                <div className="display-4 mb-3">Upcoming Movies <i className="fa fa-rss"></i></div>
                <div className="row">
                {
                    moviesList.map((movie)=>(
                    <Card key={movie.id} movie={movie} funGetDetails={this.funGetDetails} />
                    ))
                }
                </div>
            </div>
        )
    }
}