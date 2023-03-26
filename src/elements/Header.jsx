import React from "react"
import data from "../data/data.json"
import { NavLink } from "react-router-dom"
import { ROUTES } from "../routes"

export default function Header() {
    return(
        <header>
            <div>
                <h3>Історико-культурні пам'ятки</h3>
                <div>
                    <p><NavLink to="/attractions/0">{data.attractions[0].name}</NavLink></p>
                    <p><NavLink to="/attractions/1">{data.attractions[1].name}</NavLink></p>
                    <p><NavLink to="/attractions/2">{data.attractions[2].name}</NavLink></p>
                    <p><NavLink to="/attractions/3">{data.attractions[3].name}</NavLink></p>
                    <p><NavLink to="/attractions/4">{data.attractions[4].name}</NavLink></p>
                    <p><NavLink to="/attractions/5">{data.attractions[5].name}</NavLink></p>
                    <p><NavLink to="/attractions/6">{data.attractions[6].name}</NavLink></p>
                </div>
            </div>
            <div>
                <h3>Замки</h3>
                <div>
                <p><NavLink to="/castles/0">{data.castles[0].name}</NavLink></p>
                    <p><NavLink to="/castles/1">{data.castles[1].name}</NavLink></p>
                    <p><NavLink to="/castles/2">{data.castles[2].name}</NavLink></p>
                    <p><NavLink to="/castles/3">{data.castles[3].name}</NavLink></p>
                    <p><NavLink to="/castles/4">{data.castles[4].name}</NavLink></p>
                    <p><NavLink to="/castles/5">{data.castles[5].name}</NavLink></p>
                    <p><NavLink to="/castles/6">{data.castles[6].name}</NavLink></p>
                </div>
            </div>
            <div>
                <h3>Парки</h3>
                <div>
                <p><NavLink to="/parks/0">{data.parks[0].name}</NavLink></p>
                    <p><NavLink to="/parks/1">{data.parks[1].name}</NavLink></p>
                    <p><NavLink to="/parks/2">{data.parks[2].name}</NavLink></p>
                    <p><NavLink to="/parks/3">{data.parks[3].name}</NavLink></p>
                    <p><NavLink to="/parks/4">{data.parks[4].name}</NavLink></p>
                    <p><NavLink to="/parks/5">{data.parks[5].name}</NavLink></p>
                    <p><NavLink to="/parks/6">{data.parks[6].name}</NavLink></p>
                </div>
            </div>
            <div>
                <h3>Природні ландшафти</h3>
                <div>
                <p><NavLink to="/landscapes/0">{data.landscapes[0].name}</NavLink></p>
                    <p><NavLink to="/landscapes/1">{data.landscapes[1].name}</NavLink></p>
                    <p><NavLink to="/landscapes/2">{data.landscapes[2].name}</NavLink></p>
                    <p><NavLink to="/landscapes/3">{data.landscapes[3].name}</NavLink></p>
                    <p><NavLink to="/landscapes/4">{data.landscapes[4].name}</NavLink></p>
                    <p><NavLink to="/landscapes/5">{data.landscapes[5].name}</NavLink></p>
                    <p><NavLink to="/landscapes/6">{data.landscapes[6].name}</NavLink></p>
                </div>
            </div>
            <div>
                <h3>Церкви</h3>
                <div>
                <p><NavLink to="/churches/0">{data.churches[0].name}</NavLink></p>
                    <p><NavLink to="/churches/1">{data.churches[1].name}</NavLink></p>
                    <p><NavLink to="/churches/2">{data.churches[2].name}</NavLink></p>
                    <p><NavLink to="/churches/3">{data.churches[3].name}</NavLink></p>
                    <p><NavLink to="/churches/4">{data.churches[4].name}</NavLink></p>
                    <p><NavLink to="/churches/5">{data.churches[5].name}</NavLink></p>
                    <p><NavLink to="/churches/6">{data.churches[6].name}</NavLink></p>
                </div>
            </div>
        </header>
    )
}