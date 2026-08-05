import "./sectionSix.style.scss";

//Imagens
import transportadora from "../../../../assets/images/Banners/melhores-transportadoras-para-ecommerce-.webp";

export const SectionSix = () => {
    return(
        <section
            className="sectionSix"
            style={{ backgroundImage: `url(${transportadora})` }}
        >
            <div className="sectionSixOverlay">
                <div className="sectionSixContainer">

                    <div className="sectionSixContent">
                        <h2 className="sectionSixTitle">
                            FAÇA PARTE DESSA HISTÓRIA.
                            <br />
                            SEJA JWC DISTRIBUIÇÃO.
                        </h2>
                    </div>

                    <button className="sectionSixButton">
                        FALE CONOSCO
                    </button>

                </div>
            </div>
        </section>
    )
}