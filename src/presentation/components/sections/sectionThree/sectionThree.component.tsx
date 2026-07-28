import "./sectionThree.style.scss";
//Imagens icons
import iconMissao from '../../../../assets/images/icons/icons8-troféu-30.svg';
import iconVisao from '../../../../assets/images/icons/icons8-olho-30.svg';
import iconValores from '../../../../assets/images/icons/icons8-estrela-30.svg';
import iconMapa from '../../../../assets/images/icons/ChatGPT_Image_24_de_jul._de_2026__23_58_59-removebg-preview.png';

import { useSlogans } from "../../../hooks/slogans.hook";

export const SectionThree = () => {
    const { sectionRef, isVisible } = useSlogans();
    
    return (
        <section 
            ref={sectionRef}
            className="containerSectionThree"
        >
            <div className="containerSectionThreeContent">
                <div className="containerSectionThreeContentArticles">
                    <article className={`articleSectionThree ${isVisible ? "show" : ""}`}>
                        <div className="containerSectionThreeContentArticlesTitle">
                            <img src={iconMissao} alt="icone missão" />
                            <h2 className="titleSectionThree">MISSÃO</h2>   
                        </div>
                        <p className="textSectionThree">Distribuir produtos de qualidade com eficiência logística, fortalecendo parcerias comerciais e contribuindo para o desenvolvimento econômico.</p>
                    </article>
                    <article className={`articleSectionThree ${isVisible ? "show" : ""}`}>
                        <div className="containerSectionThreeContentArticlesTitle">
                            <img src={iconVisao} alt="icone visão" />
                            <h2 className="titleSectionThree">VISÃO</h2>
                        </div>
                        <p className="textSectionThree">Ser reconhecida como uma das principais distribuidoras da região Nordeste, destacando-se pela excelência operacional, confiança e compromisso com clientes, fornecedores e parceiros.</p>
                    </article>
                    <article className={`articleSectionThree ${isVisible ? "show" : ""}`}>
                        <div className="containerSectionThreeContentArticlesTitle">
                            <img src={iconValores} alt="icone valores" />
                            <h2 className="titleSectionThree">VALORES</h2>
                        </div>
                        <p className="textSectionThree">Trabalho, comprometimento, qualidade, sustentabilidade com ética e transparência.</p>
                    </article>
                </div>

                <div className={`containerSectionThreeContentMap ${isVisible ? "show" : ""}`}>
                    <img className="imgSectionThree" src={iconMapa} alt="icone mapa" />
                </div>
            </div>
        </section>
    )
}