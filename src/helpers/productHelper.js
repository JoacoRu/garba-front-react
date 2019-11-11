import React from 'react';

const addDiscountToPrice = (price, discount) => {
    return price - (Math.floor((discount * price) / 100));
}

const normalicePrice = (price) => {
    let response;
    var priceArray;   
    switch (true) {
        case (price >= 1000 && price < 10000):
            priceArray = price.toString().split('');
            priceArray[0] = `${priceArray[0]}.`;
            response = priceArray.join('');
            break;
        case (price >= 10000 && price < 100000):
            priceArray = price.toString().split('');
            priceArray[1] = `${priceArray[1]}.`;
            response = priceArray.join('');
            break;
        case (price >= 100000 && price < 1000000):
            priceArray = price.toString().split('');
            priceArray[2] = `${priceArray[2]}.`;
            response = priceArray.join('');
            break;
        default:
            response = price
            break;
    }
    return response;
}

const normaliceDiscount = (price, discount) => {
    const withDiscount = addDiscountToPrice(price, discount);
    return normalicePrice(withDiscount);
}

const thereIsDiscount = (discount, price) => discount === 0 ?
    (<h5 className="price-without-discount">${ normalicePrice(price) }</h5>)
    :
    (<div>
        <h5 className="price-with-discount">${ normaliceDiscount(price, discount) }</h5>
        <div className="discount-container">
            <span className="discount-price">${ normalicePrice(price) }</span>
            <span className="discount">%{ discount }</span>
        </div>
    </div>);

export default {
    addDiscountToPrice,
    normalicePrice,
    normaliceDiscount,
    thereIsDiscount
}