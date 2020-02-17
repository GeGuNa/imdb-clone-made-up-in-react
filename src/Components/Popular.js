import React, { Component } from 'react';
import Service from './Service';
import Card from './Card';

export default class Popular extends Component {
    constructor(props) {
        super(props)

        this.state = {
            moviesList:[],
        }
    }

    componentDidMount(){
        this.funGetMovies();
    }

    funGetMovies(){

        const method="/movie/popular";
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            console.log(res.data.results);
            this.setState({moviesList:res.data.results});
        })
        
    }

    funGetDetails=(id)=>{
        console.log(id)
        this.props.history.push(`/details/${id}`);
    }
    
    render() {
        const {moviesList} = this.state;
        return (
            <div>
                <div className="display-4 mb-3">Most Popular Movies <i className="fa fa-thumbs-o-up"></i></div>
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
