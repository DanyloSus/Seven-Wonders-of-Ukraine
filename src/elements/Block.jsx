import React from "react"
import { NavLink } from "react-router-dom"

export default function Blocks(props) {
    return (
        <div className={"block " + props.left}>
          <div className={"images " + props.left}>
            <img src={props.img[0]}
              className="first"
            />
            <img src={props.img[1]}
              className="second"
            />
            <img src={props.img[2]}
              className="third"
            />
            <img src={props.img[3]}
              className="fourth"
            />
            <img src={props.img[4]}
              className="fifth"
            />
            <img src={props.img[5]}
              className="sixth"
            />
            <img src={props.img[6]}
              className="seventh"
            />
          </div>
          <div className="content">
            <h1>{props.h1}</h1>
            <p>{props.text}</p>
            <NavLink to={props.link}><button className="content-button">Більше</button></NavLink>
          </div>
        </div>
    )
}