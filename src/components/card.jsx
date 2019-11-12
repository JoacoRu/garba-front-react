import React from 'react';
import { withRouter } from 'react-router-dom';
import productHelper from '../helpers/productHelper';
import '../styles/card.css';


const Card = props => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={ props.src } alt="producto imagen" />
            </div>
            <div className="precio">
                { productHelper.thereIsDiscount(props.discount, props.price) }
            </div>
            <div className="title">
                <h4> { props.title } </h4>
            </div>

            <div className="button">
                <button 
                    onClick={ () => props.history.push(`/product/${props.id}`) }
                >
                    VER MAS
                </button>
            </div>
        </div>
    );
}

export default withRouter(Card);