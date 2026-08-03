import "./sectionFive.style.scss";

export const SectionFive = () => {
    return (
        <section className="containerSectionFive">

            <div className="containerSectionFiveContent">

                <div className="containerSectionFiveTitle">
                    <h1 className="titleSectionFive">
                        Conheça soluções completas para sua rede
                    </h1>
                </div>

                <article className="containerSectionFiveCards">

                    <div className="cardSectionFive">

                        <h3 className="titleCardSectionFive">
                            Comercial
                        </h3>

                        <p className="descriptionCardSectionFive">
                            Na JWC Distribuição & Logística, acreditamos que uma boa parceria começa muito antes da primeira venda...
                        </p>

                        <button className="buttonCardSectionFive">
                            Saiba mais
                        </button>

                    </div>

                    <div className="cardSectionFive">

                        <h3 className="titleCardSectionFive">
                            Logística
                        </h3>

                        <p className="descriptionCardSectionFive">
                            Nossa operação logística é planejada para garantir eficiência...
                        </p>

                        <button className="buttonCardSectionFive">
                            Saiba mais
                        </button>

                    </div>

                    <div className="cardSectionFive">

                        <h3 className="titleCardSectionFive">
                            Merchandising
                        </h3>

                        <p className="descriptionCardSectionFive">
                            Fortalecemos a presença das marcas no ponto de venda...
                        </p>

                        <button className="buttonCardSectionFive">
                            Saiba mais
                        </button>

                    </div>

                </article>

            </div>

        </section>
    );
};