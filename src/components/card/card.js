import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className="Card">
            <p>Make: {props.make}</p>
            <p>Model: {props.model}</p>
            <p>Year: {props.year}</p>
            <p>Origin: {props.origin}</p>
            <p>Color: {props.color}</p>
            <p>Price: $ {props.price}</p>
        </div>
    );
}

Card.propTypes = {
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.number,
    color: PropTypes.string,
    price: PropTypes.number,
};

Card.defaultProps = {
    make: 'Ford',
    model: 'Mustang',
    year: 1964,
    origin: 'USA',
    color: 'red',
    price: 35000,
};

export default Card;
