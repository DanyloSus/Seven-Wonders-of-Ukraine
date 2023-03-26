import React from "react"
import { useLoaderData } from "react-router-dom"
import "./Att.css"

export default function AttPage () {
    const att = useLoaderData()
    return(
        <>
            <div className="top">
                <div className="shadow"></div>
                <video src={att.video} autoPlay loop muted />
                <h1>{att.name}</h1>
            </div>
            <div>
                <p  dangerouslySetInnerHTML={ { __html: att.text }} className="att-text"></p>
                <img src={att.img} className="att-img" />
                <div dangerouslySetInnerHTML={ { __html: att.map }} className="att-map"></div>
                <div className="att-social">
                    <p>Соцмережа</p>
                    <a href={att.link}>
                        <img src="../facebook.svg" className="att-facebook" /> 
                    </a>
                </div>
            </div>
            
        </>
    )
}