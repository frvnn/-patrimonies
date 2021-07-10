import React from 'react'

function Card({title, imageSource, text, estado}) {
    return (
        <div className="card text-center">
        <img src={imageSource} alt="img1" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{text}</p>
                <span><button className="btn btn-warning"></button></span>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card

