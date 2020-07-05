import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <div>
            <ul>
            <li>
            <Link to="/">Landing page</Link>

            </li>
            <li>
            <Link to="/about">about</Link>

            </li>
            <li>
            <Link to="/articles">articles</Link>

            </li>
            <li>
            <Link to="/404">404</Link>

            </li>
            <li>
            <Link to="/staticqueiry">static query</Link>

            </li>
            
            </ul>
        </div>
    )
}

export default Navbar
