
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-2">
                <Link to="/">
                    <img src='../logo.png' width={40} alt="store" className="navbar-brand" />
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
                            <Link to="/insert" className="nav-link">تماس با ما</Link>
                        </li>
                        
                    </ul>
                </div>

                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                        سبد خرید
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        )
    }
}

const NavWrapper=styled.nav `
background:var(--mainBlue);
borderBottom:var(--mainBlue);
box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:0.9rem;
    text-transform:capitalize !important;
}
`;


