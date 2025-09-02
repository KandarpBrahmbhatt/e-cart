import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header>
                <div className="nav-bar">

                    <Link to="/">E-cart</Link>
                    <div className="search-bar">
                        <input type="text" placeholder='Search hear' />
                    </div>
                    <Link to="/cart">Cart</Link>

                </div>

                <div className="nav-bar-wrapper">
                    <div className="items">Filter By {"->"}</div>
                    <div className="items">No Filter</div>
                    <div className="items">Mobiles</div>
                    <div className="items">Leptops</div>
                    <div className="items">Teblets</div>
                    <div className="items">{">="}29999</div>
                    <div className="items">{">="}49999</div>
                    <div className="items">{">="}69999</div>
                    <div className="items">{">="}89999</div>

                </div>
            </header>
        </>
    )
}

export default Navbar
