import "./home.style.scss";

//Images
import BannerOne from '../../../assets/images/Banners/BannerOne.png';
import logo from '../../../assets/images/Banners/logo.png';
import slogKipolpas from "../../../assets/images/slog/LOGOCOMTRAÇADO.png"
import slogAmazon from "../../../assets/images/slog/amazon-acai.png"
import slogPeterFrut from "../../../assets/images/slog/slogan-perterfrut.png"
import iconParceria from "../../../assets/images/icons/icon-parceira.png"
import iconDiamante from "../../../assets/images/icons/icon-diamante.png"
import iconTruck from "../../../assets/images/icons/icons8-em-trânsito-50.svg"
import iconSeta from "../../../assets/images/icons/icon-set-right.svg"
import iconSetaComCirculo from "../../../assets/images/icons/icon-seta-com-circulo.svg"

//Components
import { Header } from '../../components/header/header.component';

//Hooks
import { useSlogans } from '../../hooks/slogans.hook';


export const HomePage = () => {
    const { sectionRef, isVisible } = useSlogans();
    const { sectionRef: parceiroRef, isVisible: parceiroVisible } = useSlogans();

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
                    <h2 className={`titleParceiro ${parceiroVisible ? "show" : ""}`}>PORQUE A JWC É SEU PARCEIRO E DISTRIBUIDOR IDEAL?</h2>
                    <div
                        ref={parceiroRef}
                        className="containerParceiroIdealContentArticles"
                    >
                        <article 
                            className={`articleParceiroIdeal ${parceiroVisible ? "show" : ""}`}
                        >
                            <div className="containerIconParceiroIdeal">
                                <img className="icons" src={iconParceria} alt="icone parceiros comerciais" />
                            </div>
                            <h3 className="titlecomercial">PARCEIROS COMERCIAIS</h3>
                            <p className="descriptioncomercial">trabalha inicialmente com a distribuição dos produtos Kipolpas, Amazon Açaí e Peter Frut, oferecendo ao mercado uma linha completa de polpas, açaí, frutas congeladas com elevado padrão de qualidade e excelente aceitação pelos consumidores.</p>
                        </article>
                        <article 
                            className={`articleParceiroIdeal ${parceiroVisible ? "show" : ""}`}
                        >
                            <div className="containerIconParceiroIdeal">
                                <img className="icons" src={iconTruck} alt="icone área de atuação" />
                            </div>
                            <h3 className="titlecomercial">ÁREA DE ATUAÇÃO</h3>
                            <p className="descriptioncomercial">Atendimento inicial na região do Vale do Jaguaribe, Oeste Potiguar e cidades estratégicas do Ceará e Rio Grande do Norte, com expansão gradual conforme o crescimento das operações.</p>
                        </article>
                        <article 
                            className={`articleParceiroIdeal ${parceiroVisible ? "show" : ""}`}
                        >
                            <div className="containerIconParceiroIdeal">
                                <img className="icons" src={iconDiamante} alt="icone experiência e excelência" />
                            </div>
                            <h3 className="titlecomercial">COMPROMISSO COM NOSSOS CLIENTES</h3>
                            <p className="descriptioncomercial">Nosso compromisso é oferecer produtos de qualidade, atendimento ágil, logística confiável e condições comerciais que contribuam para o sucesso dos nossos parceiros.</p>
                        </article>
                    </div>
                    {/* <button>saiba mais <img src={iconSeta} alt="icone seta"/></button> */}
                 
                    <button
                        className={`buttonSaibaMais ${parceiroVisible ? "show" : ""}`}
                    >
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