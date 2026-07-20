import "./home.style.scss";

//Images
import BannerOne from '../../../assets/images/Banners/BannerOne.png';
import logo from '../../../assets/images/Banners/logo.png';
import slogKipolpas from "../../../assets/images/slog/LOGOCOMTRAÇADO.png"
import slogAmazon from "../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../assets/images/slog/slogan-perterfrut.png"

//Components
import { Header } from '../../components/header/header.component';


export const HomePage = () => {
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
            <section>
                <figure>
                    <img src={slogKipolpas} alt="Slog Kipolpas"/>
                    <img src={slogAmazon} alt="Slog Amazon"/>
                    <img src={slogPeterFrut} alt="Slog Peter Frut"/>
                </figure>
            </section>
            <section>
                <h2>Buscamos distribuidores parceiros em todo o Nordeste</h2>
                <button><img src="path/to/icon.png"/>Fale conosco</button>
                <button>Receber tabela de preços</button>
            </section>
            <section>
                <p>Vantagens de ser nosso parceiro</p>
                <h2>Mais benefícios para o seu negócio crescer</h2>

                <ul>
                    <li>
                        <img src="path/to/icon.png"/>
                        <h4>Alta saída</h4>
                        <p>Produtos com grande aceitação no mercado e giro garantido.</p>
                    </li>
                    <li>
                        <img src="path/to/icon.png"/>
                        <h4>Margem Atrativa</h4>
                        <p>30% a 40% de margem para nossos parceiros.</p>
                    </li>
                    <li>
                        <img src="path/to/icon.png"/>
                        <h4>Entrega confiável</h4>
                        <p>Logística rápida e segura com frota terceirizada especializada.</p>
                    </li>
                    <li>
                        <img src="path/to/icon.png"/>
                        <h4>Suporte comercial</h4>
                        <p>Apoio completo da nossa equipe para impulsionar suas vendas.</p>
                    </li>
                </ul>
            </section>
        </>
    )
}