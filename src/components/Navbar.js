import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo-32.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-2">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-1">
                            <Link to="/" className="nav-link">صفحه اصلی</Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link to="/" className="nav-link">درباره ما</Link>
                        </li>
                        
                        <li className="nav-item ml-1">
                            <Link to="/insert" className="nav-link">insert</Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link to="/edit" className="nav-link">edit</Link>
                        </li>
                        <li className="nav-item ml-1">
                            <Link to="/view" className="nav-link">view</Link>
                        </li>
                    </ul>
                </div>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav `
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.1rem;
    text-transform:capitalize !important;
}
`;


