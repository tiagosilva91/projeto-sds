import Footer from "components/footer";
import NavBar from "components/navbar";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="py-5">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                </div>
                <Link className="btn btn-primary btn-large"to='/dashboard'>
                    Acessar Dashboard
                </Link>
            </div>
            <Footer />
        </>
    );
}