import React from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/NotFound.css';
//Componentes
import Header from '../components/header';

const NotFound = props => {
    return (
        <div className="not-found">
            <Header />
            <div>
                <div className="image-container-err">
                    <img src="https://www.lifewire.com/thmb/3EIOYZ5khlS6vFT0p-vYQXRPOfM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc()/page-not-found-903607952-5c09527146e0fb0001e0b3e7.jpg" alt="" />
                </div>

                <div className="button-err">
                    <button onClick={ () => props.history.push('/') }>
                        Volver al listado
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NotFound);