import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite";

export const Header = observer(() => {
    return (
        <header>
            <h1>Campy-Wampy</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/app">About</Link>
                <Link to="/product/24?name=rere">Cart</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
})