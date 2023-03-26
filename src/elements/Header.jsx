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
                <h3>Парки</h3>
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
                <h3>Природні ландшафти</h3>
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
                <h3>Церкви</h3>
                <div>
                <p><NavLink to="/churches/0">{data.attractions[0].name}</NavLink></p>
                    <p><NavLink to="/churches/1">{data.attractions[1].name}</NavLink></p>
                    <p><NavLink to="/churches/2">{data.attractions[2].name}</NavLink></p>
                    <p><NavLink to="/churches/3">{data.attractions[3].name}</NavLink></p>
                    <p><NavLink to="/churches/4">{data.attractions[4].name}</NavLink></p>
                    <p><NavLink to="/churches/5">{data.attractions[5].name}</NavLink></p>
                    <p><NavLink to="/churches/6">{data.attractions[6].name}</NavLink></p>
                </div>
            </div>
        </header>
    )
}