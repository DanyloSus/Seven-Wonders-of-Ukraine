import React from "react"

export default function Top() {
    return(
        <div className="top">
          <div className="shadow"></div>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G8-oblRKVFk?autoplay=1&controls=0&loop=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
          <h1>Сім чудес <span className="Ukr">України</span></h1>
        </div>
    )
}