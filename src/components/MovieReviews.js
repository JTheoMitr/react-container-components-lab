// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews}) => {

    const renderReviews = () => {
        return reviews.map(review => {
            return <li key={review.display_title}>{review.display_title}: {review.summary_short}</li>
        })
    }

    return(
        <div className='review-list'>
            <ul>
            {renderReviews()}
            </ul>
        </div>
    )

}

export default MovieReviews