import { useRouteError } from "react-router-dom"
import "./ErrorPage.css"

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return(
        <div className="error">
            <h1>Якась помилка &#x1F937;</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}