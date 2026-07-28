import "./sectionFout.style.scss";

//Imagens 
import imagemDistribuidora from "../../../../assets/images/Banners/filantropia-corporativa-apoia-os-esforcos-locais-do-banco-de-alimentos-para-aliviar-a-fome_38013-94227.avif"

export const SectionFour = () => {
    const segmentos = [
        "DISTRIBUIDORES",
        "AUTO SERVIÇO",
        "VAREJO",
        "FOOD SERVICE",
        "ATACADO"
    ];
    return(
        <section className="containerSectionFour">
            <div className="containerSectionFourContent">
                <img className="imageDistribuidora" src={imagemDistribuidora} alt="Imagem distribuidora"/>
                <article className="containerArticle">
                    <h1>Conectando produtos, negócios e oportunidades.</h1>
                    <button>Fale conosco</button>
                </article>
            </div>
            <div className="containerMarquee">
                <div className="marquee">
                    {[...segmentos, ...segmentos, ...segmentos, ...segmentos].map(
                        (item, index) => (
                            <span key={index}>
                                •&nbsp;{item}
                            </span>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}