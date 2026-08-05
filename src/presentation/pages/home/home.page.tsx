import "./home.style.scss";

//Images
import BannerOne from '../../../assets/images/Banners/BannerOne.png';
import logo from '../../../assets/images/Banners/logo.png';
import slogKipolpas from "../../../assets/images/slog/LOGOCOMTRAÇADO.png"
import slogAmazon from "../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../assets/images/slog/slogan-perterfrut.png"


//Components
import { Header } from '../../components/header/header.component';

//Hooks
import { useSlogans } from '../../hooks/slogans.hook';
import { SectionThree } from "../../components/sections/sectionThree/sectionThree.component";
import { Footer } from "../../components/footer/footer.component";
import { SectionFour } from "../../components/sections/sectionFour/sectionFour.component";
import { SectionFive } from "../../components/sections/sectionFive/sectionFive.component";
import { SectionSix } from "../../components/sections/sectionSix/sectionSix.component";
import { SectionTwo } from "../../components/sections/sectionTwo/sectionTwo.component";


export const HomePage = () => {
    const { sectionRef, isVisible } = useSlogans();

    return (
        <>
            <Header/>
            <section className="containerBannerOne">
                <img className="imageBannerOne" src={BannerOne} alt="Banner 1 Tamamho L2560PX A1902PX"/>

                <div className="containerLogo">
                    <img className="imageLogo" src={logo} alt="Logo"/>                    
                </div>

                <p className="textLogo">SEU MELHOR PARCEIRO EM SOLUÇÕES COMPLETAS NA DISTRIBUIÇÃO DE ALIMENTOS CONGELADOS NO CE E RN</p>

                <button className="buttonFaleConoscoOne">FALE CONOSCO</button>
            </section>
            <section
                ref={sectionRef}
                className={`containerSlogans ${isVisible ? "show" : ""}`}
            >
                <figure className="containerSlog">
                    <img className="imageSlogCompany" src={slogKipolpas} alt="Kipolpas" />
                    <img className="imageSlogCompany" src={slogAmazon} alt="Amazon Açaí" />
                    <img className="imageSlogCompany" src={slogPeterFrut} alt="Peter Frut" />
                </figure>
            </section>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
        </>
    )
}