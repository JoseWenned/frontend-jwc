import "./navigation.style.scss";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="containerNavigation">
                <li className="containerNavigation__item">
                    <a href="/">Início</a>
                </li>
                <li className="containerNavigation__item">
                    <a href="/sobre">Sobre nós</a>
                </li>
                <li className="containerNavigation__item">
                    <a href="/vantagens">Vantagens</a>
                </li>
                <li className="containerNavigation__item">
                    <a href="/produtos">Produtos</a>
                </li>
                <li className="containerNavigation__item">
                    <a href="/como-funciona">Como funciona</a>
                </li>
                <li className="containerNavigation__item">
                    <a href="/contato">Contato</a>
                </li>
            </ul>
        </nav>
    );
};