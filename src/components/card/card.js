import React from 'react';
import PropTypes from 'prop-types';

function Card(Props) {
    return (
        <div className="Card">
            <p>Make: {Props.make}</p>
            <p>Model: {Props.model}</p>
            <p>Year: {Props.year}</p>
            <p>Origin: {Props.origin}</p>
            <p>Color: {Props.color}</p>
            <p>Price: $ {Props.price}</p>
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
