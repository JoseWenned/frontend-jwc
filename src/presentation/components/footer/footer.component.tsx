import "./footer.style.scss"
import { Link } from "react-router-dom";

//Imagens 
import iconLinkedin from '../../../assets/images/icons/iconLinkedinGray.png'
import iconInstagram from '../../../assets/images/icons/iconInstagramGray.png'
import iconFacebook from '../../../assets/images/icons/iconFacebookGray.png'
import logo from '../../../assets/images/Banners/689167c3-4937-4691-bb0f-35fba9788737-removebg-preview.png'

export const Footer = () => {
    return (
        <footer className="containerFooter">
            <section className="containerFooterContent">
                <div className="containerFooterContentInfomation">
                    <img className="imageLogoFooter" src={logo} alt="Logo"/>

                    <h3 className="textFooter">Matriz: </h3>
                    <p>Vereador Efésio Costa N-496</p>
                </div>
                <div className="containerFooterContentInfomation">
                    <h3 className="textFooter">Navegue:</h3>
                    <Link className="footerLink" to="/">
                        Início
                    </Link>
                    <Link className="footerLink" to="/sobre">
                        Sobre Nós
                    </Link>
                    <Link className="footerLink" to="/vantagens">
                        Vantagens
                    </Link>
                    <Link className="footerLink" to="/vantagens">
                        Produtos
                    </Link>
                    <Link className="footerLink" to="/vantagens">
                        Como Funciona
                    </Link>
                    <Link className="footerLink" to="/vantagens">
                        Contato
                    </Link>
                </div>
                <div className="containerFooterContentContact">
                    <h3 className="textFooter">Contato:</h3>
                    <p className="footerContactText">
                        +55 (88) 9 8896-5616
                    </p>
                    <p className="footerContactText">
                        jwcdistribuicaoelogisticaltda@gmail.com
                    </p>
                </div>
                <div className="containerFooterContentInfomationAtendimento">
                    <h3 className="textFooter">Atendimento:</h3>
                    <ul className="containerFooterContentInfomationAtendimentoList">
                        <li>
                            <a><img className="imageRedesFooter" src={iconFacebook} alt="Facebook"/></a>
                        </li>
                        <li>
                            <a><img className="imageRedesFooter" src={iconLinkedin} alt="Linkedin"/></a>
                        </li>
                        <li>
                            <a><img className="imageRedesFooter" src={iconInstagram} alt="Instagram"/></a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="containerFooterContentBottom">
                <div className="containerFooterBarraTextFooter">
                    <p className="textFooter">© 2026 JWC Distribuição e Logística. Todos os direitos reservados.</p>
                </div>
            </section>
        </footer>
    )
}   