import React, { Component } from 'react';
import Service from './Service';
import env from './Environment';

export default class Details extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             movie:'',
        } 
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.funGetDetails();
    }

    funGetDetails=()=>{
        const method ="/movie/"+this.props.match.params.id;
        const data = new Service();
        data.funGetMethod(method)
        .then((res)=>{
            this.setState({movie:res.data});
        })
        .catch(()=>{
            this.props.history.push("/");    
        })
    }
    

    render() {
        const {movie} = this.state;
        if(this.state.movie===''){
            return (
                <div className="display-4">Loading...</div>
            )
        }
        else{

            return (
                <div className="card">
                    <div className="row m-0 p-2">
                        <div className="col-md-4 p-2 text-center">
                            <img className="detailimg w-100" src={env.imgPath+movie.poster_path} alt={movie.id} />
                        </div>
    
                        <div className="col-md-8 p-3">
                            <div className="h1 my-3">{movie.title}</div>
                            <div className="display-4 my-4"><i className="fa fa-star fa-fw text-warning"></i> {movie.vote_average} / 10</div>
                            <div className="h3 my-3">
                                <i className="fa fa-calendar-o fa-fw text-warning"></i> {movie.release_date}
                            </div>
                            <div className="h3 my-3">
                                <i className="fa fa-thumbs-o-up fa-fw text-warning"></i> { movie.vote_count }
                            </div>
                            <div className="h3 my-3">
                            <i className="fa fa-language fa-fw text-warning"></i> { movie.original_language.toUpperCase() }
                            </div>
                            <div className="h3 mt-3">
                                <i className="fa fa-info-circle fa-fw text-warning"></i> { movie.status }
                            </div>
                        </div>
    
                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Genre</div>
                            {
                                movie.genres.map((genre)=>(
                                <button className="btn btn-light mr-3 mb-3" key={genre.name}>{genre.name}</button>
                                ))
                            }
                       
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Languages</div>
                            {
                                movie.spoken_languages.map((lang)=>(
                                <button className="btn btn-light mr-3 mb-3" key={lang.name}>{lang.name}</button>
                                ))
                            }
                       
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Original Title</div>
                            <div className="h1">
                            { movie.original_title }
                            </div>
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Duration</div>
                            <div className="h1">
                            { movie.runtime } mins.
                            </div>
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Production Company</div>
                            {
                                movie.production_companies.map((comp)=>(
                                <button className="btn btn-light mr-3 mb-3" key={comp.name}>{comp.name}</button>
                                ))
                            }
                        </div>
                        
                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Production Country</div>
                            {
                                movie.production_countries.map((country)=>(
                                <button className="btn btn-light mr-3 mb-3" key={country.name}>{country.name}</button>
                                ))
                            }
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Budget</div>
                            <div className="h1">
                            $ { movie.budget }
                            </div>
                        </div>

                        <div className="col-md-6 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Revenue</div>
                            <div className="h1">
                            $ { movie.revenue }
                            </div>
                        </div>

                        <div className="col-md-12 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Overview</div>
                            <div className="h1">
                            { movie.overview }
                            </div>
                        </div>

                        <div className="col-md-12 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Screenshot</div>
                            <div className="row m-0">
                                <div className="col-md-6 p-0">
                                    <img className="img-fluid" src={env.imgPath+movie.backdrop_path} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Tagline</div>
                            <div className="h1">
                            { movie.tagline }
                            </div>
                        </div>

                        <div className="col-md-12 p-2 mt-3">
                            <div className="h3 text-warning mb-3">Official Website</div>
                            <a className="btn btn-light btn-lg " href={ movie.homepage }>
                            { movie.homepage }
                            </a>
                        </div>

                        <div className="col-md-12 p-2 mt-3 mb-4">
                            <button className="btn btn-warning btn-lg">Find more similar movies</button>
                        </div>
                            
                    </div>
                </div>
            )

        }
        
    }
}
