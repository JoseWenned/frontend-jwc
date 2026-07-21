import "./home.style.scss";

//Images
import BannerOne from '../../../assets/images/Banners/BannerOne.png';
import logo from '../../../assets/images/Banners/logo.png';
import slogKipolpas from "../../../assets/images/slog/LOGOCOMTRAÇADO.png"
import slogAmazon from "../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../assets/images/slog/slogan-perterfrut.png"
import iconParceria from "../../../assets/images/icons/icon-parceira.png"
import iconDiamante from "../../../assets/images/icons/icon-diamante.png"
import iconSeta from "../../../assets/images/icons/icon-set-right.svg"
import iconSetaComCirculo from "../../../assets/images/icons/icon-seta-com-circulo.svg"

//Components
import { Header } from '../../components/header/header.component';

//Hooks
import { useSlogans } from '../../hooks/slogans.hook';


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
            <section className="containerParceiroIdeal">
                <div className="containerParceiroIdealContent">
                    <h2>PORQUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?</h2>
                    <article>
                        <img src={iconParceria} alt="icone parceria" />
                        <h3>REDE DE CLIENTES E PARCEIROS</h3>
                        <p>Nos destacamos pela versatilidade para atuar nas necessidades dos fornecedores e clientes.</p>
                    </article>
                    <article>
                        <img src={iconDiamante} alt="icone experiência e excelência" />
                        <h3>EXPERIÊNCIA E EXCELÊNCIA</h3>
                        <p>Reunimos infraestrutura de excelência e uma equipe experiente que é referência nos estados do Ceará e do Rio Grande do Norte.</p>
                    </article>
                    {/* <button>saiba mais <img src={iconSeta} alt="icone seta"/></button> */}
                    <button className="buttonSaibaMais">
                        <span>Saiba mais</span>
                        <img
                            className="iconArrow"
                            src={iconSeta}
                            alt="Seta"
                        />

                        <img
                            className="iconCircle"
                            src={iconSetaComCirculo}
                            alt="Seta com círculo"
                        />
                    </button>
                </div>
            </section>
            {/* <section>
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
            </section> */}
        </>
    )
}