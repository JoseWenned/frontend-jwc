import "./home.style.scss";

//Images
import BannerOne from '../../../assets/images/Banners/BannerOne.png';
import { Header } from '../../components/header/header.component';

export const HomePage = () => {
    return (
        <>
            <Header/>
            <section className="containerBannerOne">
                <img className="imageBannerOne" src={BannerOne} alt="Banner 1"/>
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