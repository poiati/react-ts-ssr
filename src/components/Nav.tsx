import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <h2>Navigation</h2>

            <ul>
                <li>
                    <Link to="/">/</Link>
                </li>
                <li>
                    <Link to="/foo">/foo</Link>
                </li>
                <li>
                    <Link to="/async">/async-fetch</Link>
                </li>
            </ul>
        </div>
    )
}
