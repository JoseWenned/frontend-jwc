import "./footer.style.scss"

//Imagens 
import iconLinkedin from '../../../assets/images/icons/iconLinkedinGray.png'
import iconInstagram from '../../../assets/images/icons/iconInstagramGray.png'
import iconFacebook from '../../../assets/images/icons/iconFacebookGray.png'
import logo from '../../../assets/images/Banners/logo.png'

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
                    <button>Início</button>
                    <button>Sobre Nós</button>
                    <button>Vantagens</button>
                    <button>Produtos</button>
                    <button>Como funciona</button>
                    <button>Contato</button>
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
            <section className="containerFooterContent">
                <div>
                    <p className="textFooter">© 2026 JWC Distribuição e Logística. Todos os direitos reservados.</p>
                </div>
            </section>
        </footer>
    )
}   