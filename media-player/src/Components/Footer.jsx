import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100'>
            <div className='d-flex justify-content-evenly w-100'>
            <div style={{width:"350px"}} className="website">
                <h3><Link to={"/"} style={{ textDecoration: "none" }}>
                    <i class="fa-regular fa-circle-play fa-xl"></i>{' '}
                    Media Player
                </Link></h3>
                <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
                <h6>Code licensed MIT, docs CC BY 3.0.</h6>
                <p>Currently v5.2.3.</p>
            </div>
            <div style={{width:"200px"}}>
                <h4>Links</h4>
                <h5><Link to={"/home"} style={{ textDecoration: "none" }}> 
                    Home
                </Link></h5>
                <h5><Link to={"/"} style={{ textDecoration: "none" }}> 
                    Landing Page
                </Link></h5>
                <h5><Link to={"/Watch History"} style={{ textDecoration: "none" }}> 
                    Watch History
                </Link></h5>
            </div>
            <div style={{width:"200px"}}>
                <h4>Guides</h4>
                <h5>React</h5>
                <h5>React Bootstrap</h5>
                <h5>Routing</h5>
            </div>
            <div>
                <h4>Search</h4>
                <></>

            </div>
            </div>
            <p>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
        </div>
    )
}

export default Footer