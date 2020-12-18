import React from 'react';

function Product(props){
    return (
        <div className="product">
            <h3>{ props.name }</h3>
            <h4>Av { props.author }</h4>
            <p>{ props.text }</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product