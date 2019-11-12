import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Product.css';
import productHelper from '../helpers/productHelper';
import productService from '../services/productService';
// Componentes
import Header from '../components/header';

class Product extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: false,
            principal: null,
            price: null,
            discount: null,
            images: [],
            description: null
        }
    }
    getProduct = () => {
        productService.get(this.state.id)
        .then(product => 
            this.setState({
                principal: product.data.response.resources.images[0].url,
                price: product.data.response.list_price,
                discount: product.data.response.discount,
                images: product.data.response.resources.images,
                description: product.data.response.description
        }))
        .catch(() => this.props.history.push('/error'))
    }

    addImgPrincipal = (src) => {
        return this.setState({principal: src});
    }

    //Renderea una imagen con borde, si es la imagen principal
    secondaryImage = (src) => {
        const value = this.state.principal === src ? 
        'image_sec_border' : 'image_sec_normal';

        return (
            <div className={value}>
                <img src={ src } alt="" />
            </div>
        );
    }

    componentDidMount() {
        this.getProduct();
    }

    render() {
        return(
            <Fragment>
                <Header />
                <div className="product_container">
                    <div className="container_desktop">
                        <div className="left_side">
                            <div className="image_container">
                                <div className="main_image">
                                    <img 
                                        src={this.state.principal} 
                                        className="hoverImg" 
                                        alt="foto producto" 
                                    />
                                </div>

                                <div className="secondary_images">
                                    {
                                        this.state.images.map(el => (
                                            <div 
                                                onClick={ () => this.setState({principal: el.url}) }
                                                key={el.url}
                                            >
                                                { this.secondaryImage(el.url) }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>


                        <div className="rigth_side">
                            <div className="title_product">
                                <h4>{ this.state.description }</h4>
                            </div>

                            <div className="precio">
                                { productHelper.thereIsDiscount(this.state.discount, this.state.price) }           
                            </div>

                            <div className="button_pay">
                                <button 
                                onClick={ () => alert(`Felicidades has comprado ${this.state.description}`) }
                                >
                                    Comprar
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="container_mobile">
                        <div className="image_container">
                            <img src={this.state.principal} alt="foto producto" />
                        </div>

                        <div className="title_product">
                            <h4>{ this.state.description }</h4>
                        </div>

                        <div className="precio">
                            { productHelper.thereIsDiscount() }           
                        </div>
                        
                        <div className="button_pay">
                            <button 
                                onClick={ () => alert(`Felicidades has comprado ${this.state.description}`) }
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
          )
    }
}

export default withRouter(Product);