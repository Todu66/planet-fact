import React, { useState } from "react";
import "./Header.css"




const HeaderLinks = (props) => {
    return <li><a href={props.link}>{props.name}</a></li>
}

class header extends React.Component {

    render () {

        return (
            <header>
                <nav>
                    <a><h1>THE PLANETS</h1></a>

                    <ul>
                        <HeaderLinks link="/" name="MERCURY" />
                        <HeaderLinks link="/venus" name="VENUS" />
                        <HeaderLinks link="/earth" name="EARTH" />
                        <HeaderLinks link="/mars" name="MARS" />
                        <HeaderLinks link="/jupiter" name="JUPITER" />
                        <HeaderLinks link="/saturn" name="SATURN" />
                        <HeaderLinks link="/uranus" name="URANUS" />
                        <HeaderLinks link="/neptune" name="NEPTUNE" />
                    </ul>
                </nav>
                <hr></hr>
            </header>
            
        )
    }
}

export default header