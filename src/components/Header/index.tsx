import './styles.css'
import {Link} from "react-router-dom";
export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <Link to="/home"><h3>Github API</h3></Link>
            </div>
        </header>
    )
}