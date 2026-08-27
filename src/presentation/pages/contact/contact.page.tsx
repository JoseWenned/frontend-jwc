import "./contact.style.scss";
import { motion } from "framer-motion";
import { useContactForm } from "../../hooks/contact/useContactForm";

// Animations
import {
    fadeLeft,
    fadeRight,
    staggerContainer,
} from "../../animations";

// Components
import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";

// Buttons
import { ButtonWhatsApp } from "../../fragments/buttons/buttonWhatsApp/buttonWhatsApp.component";

// Banner
import bannerContato from "../../../assets/images/Banners/filantropia-corporativa-apoia-os-esforcos-locais-do-banco-de-alimentos-para-aliviar-a-fome_38013-94227.avif";

export const ContatoPage = () => {
    const {
        submit,
        isSubmitting,
        status,
    } = useContactForm();

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;

        const formData = new FormData(form);

        const success = await submit(formData);

        if (success) {
            form.reset();
        }
    };

    const phone = "5588988965616";

    const message =
        "Olá! Gostaria de conhecer as soluções da JWC Distribuição.";

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <>

            {/* ==================================================
                HEADER
            ================================================== */}

            <Header />


            {/* ==================================================
                HERO
            ================================================== */}

            <motion.section
                className="contatoHero"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >

                <img
                    className="contatoHeroBackground"
                    src={bannerContato}
                    alt=""
                    aria-hidden="true"
                />

                <div className="contatoHeroOverlay" />


                <div className="contatoHeroContainer">

                    <div className="contatoHeroContent">

                        <motion.span
                            className="contatoHeroSubtitle"
                            variants={fadeLeft}
                        >
                            Fale conosco
                        </motion.span>


                        <motion.h1
                            className="contatoHeroTitle"
                            variants={fadeRight}
                        >
                            Vamos conversar?
                        </motion.h1>


                        <motion.p
                            className="contatoHeroDescription"
                            variants={fadeLeft}
                        >
                            Estamos prontos para entender suas necessidades
                            e encontrar as melhores soluções para o seu negócio.
                        </motion.p>

                    </div>

                </div>

            </motion.section>


            {/* ==================================================
                CONTATO
            ================================================== */}

            <section className="contato">

                <div className="contatoContainer">

                    {/* ==================================================
                        INFORMAÇÕES
                    ================================================== */}

                    <motion.div
                        className="contatoInformation"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeLeft}
                    >

                        <span className="contatoInformationEyebrow">
                            Entre em contato
                        </span>


                        <h2 className="contatoInformationTitle">
                            Estamos aqui para
                            <strong> ajudar você.</strong>
                        </h2>


                        <p className="contatoInformationDescription">
                            Seja para conhecer nosso portfólio, solicitar uma
                            cotação ou conversar sobre uma parceria, nossa
                            equipe está pronta para atender você.
                        </p>


                        {/* ==================================================
                            DADOS
                        ================================================== */}

                        <div className="contatoInformationList">

                            <div className="contatoInformationItem">

                                <div className="contatoInformationIcon">
                                    @
                                </div>

                                <div className="contatoInformationItemContent">

                                    <span>
                                        E-mail
                                    </span>

                                    <strong>
                                        jwcdistribuicaoelogisticaltda@gmail.com
                                    </strong>

                                </div>

                            </div>


                            <div className="contatoInformationItem">

                                <div className="contatoInformationIcon">
                                    ☎
                                </div>

                                <div className="contatoInformationItemContent">

                                    <span>
                                        Telefone
                                    </span>

                                    <strong>
                                        +55 (88) 9 8896-5616
                                    </strong>

                                </div>

                            </div>


                            <div className="contatoInformationItem">

                                <div className="contatoInformationIcon">
                                    ↗
                                </div>

                                <div className="contatoInformationItemContent">

                                    <span>
                                        Atendimento
                                    </span>

                                    <strong>
                                        Segunda a domingo, das 08h às 21h
                                    </strong>

                                </div>

                            </div>

                        </div>

                    </motion.div>


                    {/* ==================================================
                        FORMULÁRIO
                    ================================================== */}

                    <motion.div
                        className="contatoFormWrapper"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={fadeRight}
                        
                    >

                        <div className="contatoFormHeader">

                            <span className="contatoFormEyebrow">
                                Atendimento
                            </span>

                            <h2 className="contatoFormTitle">
                                Envie uma mensagem
                            </h2>

                            <p className="contatoFormDescription">
                                Preencha os campos abaixo e fale com nossa equipe.
                            </p>

                        </div>


                        <form 
                            className="contatoForm"
                            onSubmit={handleSubmit}
                        >

                            <div className="contatoFormRow">

                                <div className="contatoFormField">

                                    <label htmlFor="nome">
                                        Nome
                                    </label>

                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Seu nome"
                                        required
                                    />

                                </div>


                                <div className="contatoFormField">

                                    <label htmlFor="empresa">
                                        Empresa
                                    </label>

                                    <input
                                        id="empresa"
                                        name="empresa"
                                        type="text"
                                        placeholder="Nome da empresa"
                                    />

                                </div>

                            </div>


                            <div className="contatoFormRow">

                                <div className="contatoFormField">

                                    <label htmlFor="email">
                                        E-mail
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="seuemail@empresa.com"
                                        required
                                    />

                                </div>


                                <div className="contatoFormField">

                                    <label htmlFor="telefone">
                                        Telefone
                                    </label>

                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        placeholder="(00) 00000-0000"
                                    />

                                </div>

                            </div>


                            <div className="contatoFormField">

                                <label htmlFor="assunto">
                                    Assunto
                                </label>

                                <select
                                    id="assunto"
                                    name="assunto"
                                    defaultValue=""
                                    required
                                >

                                    <option value="" disabled>
                                        Selecione uma opção
                                    </option>

                                    <option value="orcamento">
                                        Solicitar orçamento
                                    </option>

                                    <option value="produtos">
                                        Conhecer produtos
                                    </option>

                                    <option value="parceria">
                                        Parceria comercial
                                    </option>

                                    <option value="outro">
                                        Outro assunto
                                    </option>

                                </select>

                            </div>


                            <div className="contatoFormField">

                                <label htmlFor="mensagem">
                                    Mensagem
                                </label>

                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows={5}
                                    placeholder="Como podemos ajudar?"
                                    required
                                />

                            </div>

                            {status.message && (
                                <div
                                    className={`contatoFormStatus contatoFormStatus--${status.type}`}
                                    role="alert"
                                >
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="contatoFormButton"
                                disabled={isSubmitting}
                            >
                                <span>
                                    {isSubmitting
                                        ? "Enviando..."
                                        : "Enviar mensagem"}
                                </span>

                                <strong>
                                    {isSubmitting
                                        ? "..."
                                        : "→"}
                                </strong>
                            </button>

                        </form>

                    </motion.div>

                </div>

            </section>

            {/* ==================================================
                CONTATO VIA WHATSAPP
            ================================================== */}

            <section className="contatoWhatsapp">

                <div className="contatoWhatsappContainer">

                    <div className="contatoWhatsappContent">

                        <span className="contatoWhatsappEyebrow">
                            Atendimento rápido
                        </span>

                        <h2 className="contatoWhatsappTitle">
                            Prefere falar diretamente conosco?
                        </h2>

                        <p className="contatoWhatsappDescription">
                            Se preferir, fale com nossa equipe pelo WhatsApp.
                            Estamos prontos para atender você.
                        </p>

                        <button
                            type="button"
                            className="contatoWhatsappButton"
                            onClick={() => {
                                window.open(
                                    whatsappLink
                                );
                            }}
                        >
                            <span className="contatoWhatsappButtonIcon">
                                ☎
                            </span>

                            <span className="contatoWhatsappButtonText">
                                Fale pelo WhatsApp
                            </span>

                            <span className="contatoWhatsappButtonArrow">
                                ↗
                            </span>
                        </button>

                    </div>

                </div>

            </section>


            {/* ==================================================
                FOOTER
            ================================================== */}

            <Footer />


            {/* ==================================================
                WHATSAPP
            ================================================== */}

            <ButtonWhatsApp />

        </>
    );
};