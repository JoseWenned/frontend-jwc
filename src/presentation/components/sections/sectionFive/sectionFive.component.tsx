
import "./sectionFive.style.scss";
import { Link } from "react-router-dom";

import iconArrowCircle from "../../../../assets/images/icons/icon-seta-com-circulo.svg";
import { useSlogans } from "../../../hooks/slogans.hook";
export const SectionFive = () => {
    const { sectionRef, isVisible } = useSlogans();
    return (
        <section 
            ref={sectionRef}
            className={`containerSectionFive ${isVisible ? "show" : ""}`}
        >
            <div className="containerSectionFiveContent">
                <div 
                    className={`containerSectionFiveTitle ${
                        isVisible ? "show" : ""
                    }`}
                >
                    <h1 className="titleSectionFive">
                        Conheça soluções completas para sua rede
                    </h1>
                </div>
                <article className="containerSectionFiveCards">
                    <Link to="/comercial" className={`cardSectionFive ${isVisible ? "show" : ""}`}>
                        <h3 className="titleCardSectionFive">
                            Comercial
                        </h3>
                        <p className="descriptionCardSectionFive">
                            Na JWC Distribuição & Logística, acreditamos que uma boa parceria começa muito antes da primeira venda...
                        </p>
                        <span>Saiba mais<img src={iconArrowCircle} alt="Saiba mais"/></span>
                    </Link>
                    <Link to="/logistica" className={`cardSectionFive ${isVisible ? "show" : ""}`}>
                        <h3 className="titleCardSectionFive">
                            Logística
                        </h3>
                        <p className="descriptionCardSectionFive">
                            Nossa operação logística é planejada para garantir eficiência...
                        </p>
                        <span>Saiba mais<img src={iconArrowCircle} alt="Saiba mais"/></span>
                    </Link>
                    <Link to="/merchandising" className={`cardSectionFive ${isVisible ? "show" : ""}`}>
                        <h3 className="titleCardSectionFive">
                            Merchandising
                        </h3>
                        <p className="descriptionCardSectionFive">
                            Fortalecemos a presença das marcas no ponto de venda...
                        </p>
                        <span>Saiba mais<img src={iconArrowCircle} alt="Saiba mais"/></span>
                    </Link>
                </article>
            </div>
        </section>
    );
};