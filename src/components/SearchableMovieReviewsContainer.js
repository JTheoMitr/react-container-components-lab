import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'AxwkDRFzoXb03yGkIBszWdjAtNIKaavQ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            + '&query=';

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: '',
        reviews: []
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results,
                searchTerm: ''
            }, () => console.log(this.state))
        })
    }

    render() {
        return(
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='title' type='text' value={this.state.searchTerm}></input>
                    <input type='submit'></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer