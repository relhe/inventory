import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './header.styled';

const Header = () => <HeaderWrapper>Header Component</HeaderWrapper>;

Header.propTypes = {
    bla: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
