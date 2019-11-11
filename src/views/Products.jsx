import React, { PureComponent, Fragment } from 'react';
import '../styles/Products.css';
import productService from '../services/productService';
//componentes
import Card from '../components/card';
import Header from '../components/header';

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    bringProducts = async () => {
        let response;
        try {
            response = await productService.list();
            this.setState({products: response.data.items});
            this.removeProductsNotEnabled();
        } catch (err) {
            console.error('Los errores son:' + err);
        }
    }

    //Remueve los productos no habilitados para la venta
    removeProductsNotEnabled = () => {
        let products = [...this.state.products];
        let productsEnabled = products.filter((element)=> {
            return element.enabled;
        })
        this.setState({products: productsEnabled});
    }

    componentDidMount() {
        this.bringProducts();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="home">
                    <div className="products-container" >
                        {
                            this.state.products.map(product => (
                                <div className="card" key={ product.id }>
                                    <Card
                                        id={ product.id }
                                        src={ product.image_url }
                                        price={ product.list_price }
                                        title={ product.description }
                                        discount={ product.discount }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default Home;