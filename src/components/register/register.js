import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';

function Register(props) {
    return (
        <div className="Register">
            <p>
                Register of {props.count} {props.carMake} {props.CarModel} available in the current inventory!
            </p>
            <Card make="Ford" model="Mustang" year={1964} origin="USA" color="red" price={35000} />
        </div>
    );
}

Register.propTypes = {
    count: PropTypes.number,
    carMake: PropTypes.string,
    carModel: PropTypes.string,
};

Register.defaultProps = {
    count: 0,
    carMake: 'Ford',
    carModel: 'Mustang',
};

export default Register;
