import React from "react"
import Navbar from "./Navbar"
import "../../node_modules/normalize.css/normalize.css"
import "../styles/global.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.js"

export default function Layout({ children }) {
    return (

            <div className="layout container">
                <Navbar />
                <div className="content">
                    { children }
                </div>
                <footer className="fixed-bottom">
                    Copyright 2022 coding w/ beto
                </footer>
            </div>

            
    )
}
