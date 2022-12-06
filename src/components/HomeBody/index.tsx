import './styles.css';
import {Link} from "react-router-dom";

export default function HomeBody() {
    return (
        <section className="home-section">
            <h1>Desafio Github API</h1>
            <h3>DevSuperior - Escola de programação</h3>
            <Link to="/search">
                <button>Começar</button>
            </Link>
        </section>
    );
}