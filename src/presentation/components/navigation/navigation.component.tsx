import "./navigation.style.scss";

export const Navigation = () => {
    return (
        <>
            <nav>
                <ul className="containerNavigation">
                    <li><a href="/">Início</a></li>
                    <li><a href="/sobre">Sobre nós</a></li>
                    <li><a href="/vantagens">Vantagens</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/como-funciona">Como funciona</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </>
    )
}