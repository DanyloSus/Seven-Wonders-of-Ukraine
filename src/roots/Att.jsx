import React from "react"
import { useLoaderData } from "react-router-dom"
import "./Att.css"

export default function AttPage () {
    const att = useLoaderData()
    return(
        <>
            <div className="top">
                <div className="shadow"></div>
                <iframe width="100%" height="100%" src={att.video + "?autoplay=1&controls=0&loop=1&mute=1"} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
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