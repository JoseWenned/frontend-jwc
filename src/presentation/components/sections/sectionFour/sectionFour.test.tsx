import {
    render,
    screen,
    fireEvent,
} from "@testing-library/react";

import {
    describe,
    expect,
    it,
    vi,
    beforeEach,
} from "vitest";

import { MemoryRouter } from "react-router-dom";

import { SectionFour } from "./sectionFour.component";


/* ==================================================
   MOCK DO NAVIGATE
================================================== */

const mockNavigate = vi.fn();


/* ==================================================
   MOCK FRAMER MOTION
================================================== */

vi.mock("framer-motion", () => {

    const filterMotionProps = (
        props: Record<string, unknown>
    ) => {

        return Object.fromEntries(
            Object.entries(props).filter(
                ([key]) =>
                    ![
                        "variants",
                        "initial",
                        "animate",
                        "whileInView",
                        "viewport",
                        "whileHover",
                        "whileTap",
                        "transition",
                    ].includes(key)
            )
        );

    };


    const MotionSection = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        return (
            <section {...filterMotionProps(props)}>
                {children}
            </section>
        );

    };


    const MotionArticle = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        return (
            <article {...filterMotionProps(props)}>
                {children}
            </article>
        );

    };


    const MotionSpan = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        return (
            <span {...filterMotionProps(props)}>
                {children}
            </span>
        );

    };


    const MotionH2 = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        return (
            <h2 {...filterMotionProps(props)}>
                {children}
            </h2>
        );

    };


    const MotionButton = ({
        children,
        ...props
    }: React.PropsWithChildren<
        Record<string, unknown>
    >) => {

        return (
            <button {...filterMotionProps(props)}>
                {children}
            </button>
        );

    };


    return {

        motion: {

            section: MotionSection,

            article: MotionArticle,

            span: MotionSpan,

            h2: MotionH2,

            button: MotionButton,

        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),

    };

});


/* ==================================================
   MOCK REACT ROUTER
================================================== */

vi.mock("react-router-dom", async () => {

    const actual = await vi.importActual<
        typeof import("react-router-dom")
    >("react-router-dom");

    return {

        ...actual,

        useNavigate: () => mockNavigate,

    };

});


describe("SectionFour", () => {


    /* ==================================================
       RESET DOS MOCKS
    ================================================== */

    beforeEach(() => {

        vi.clearAllMocks();

    });


    /* ==================================================
       FUNÇÃO AUXILIAR
    ================================================== */

    const renderSectionFour = () => {

        return render(
            <MemoryRouter>
                <SectionFour />
            </MemoryRouter>
        );

    };


    /* ==================================================
       RENDERIZAÇÃO DA SEÇÃO
    ================================================== */

    it("deve renderizar a seção corretamente", () => {

        renderSectionFour();

        const section = document.querySelector(
            ".containerSectionFour"
        );

        expect(section).toBeInTheDocument();

    });


    /* ==================================================
       CONTAINER PRINCIPAL
    ================================================== */

    it("deve renderizar o conteúdo principal da seção", () => {

        renderSectionFour();

        const content = document.querySelector(
            ".containerSectionFourContent"
        );

        expect(content).toBeInTheDocument();

    });


    /* ==================================================
       IMAGEM
    ================================================== */

    it("deve renderizar a imagem do centro de distribuição", () => {

        renderSectionFour();

        const image = screen.getByRole("img", {
            name: "Centro de distribuição",
        });

        expect(image).toBeInTheDocument();

        expect(image).toHaveClass(
            "imageDistribuidora"
        );

    });


    /* ==================================================
       EYEBROW
    ================================================== */

    it("deve renderizar o texto institucional corretamente", () => {

        renderSectionFour();

        expect(
            screen.getByText(
                "JWC DISTRIBUIÇÃO & LOGÍSTICA"
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       CLASSE DO EYEBROW
    ================================================== */

    it("deve aplicar a classe correta ao texto institucional", () => {

        renderSectionFour();

        const eyebrow = screen.getByText(
            "JWC DISTRIBUIÇÃO & LOGÍSTICA"
        );

        expect(eyebrow).toHaveClass(
            "sectionFourEyebrow"
        );

    });


    /* ==================================================
       TÍTULO
    ================================================== */

    it("deve renderizar o título principal corretamente", () => {

        renderSectionFour();

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: /Conectando produtos,\s*negócios e oportunidades\./i,
            })
        ).toBeInTheDocument();

    });


    /* ==================================================
       TEXTO PRINCIPAL
    ================================================== */

    it("deve renderizar o texto principal do título", () => {

        renderSectionFour();

        expect(
            screen.getByText(
                "Conectando produtos,"
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       TEXTO EM DESTAQUE
    ================================================== */

    it("deve renderizar o texto em destaque do título", () => {

        renderSectionFour();

        expect(
            screen.getByText(
                "negócios e oportunidades."
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       STRONG
    ================================================== */

    it("deve utilizar strong para destacar negócios e oportunidades", () => {

        renderSectionFour();

        const strong = document.querySelector(
            ".sectionFourTitle strong"
        );

        expect(strong).toBeInTheDocument();

        expect(strong).toHaveTextContent(
            "negócios e oportunidades."
        );

    });


    /* ==================================================
       BOTÃO
    ================================================== */

    it("deve renderizar o botão Fale conosco", () => {

        renderSectionFour();

        const button = screen.getByRole("button", {
            name: "Fale conosco",
        });

        expect(button).toBeInTheDocument();

        expect(button).toHaveClass(
            "sectionFourButton"
        );

    });


    /* ==================================================
       TIPO DO ELEMENTO
    ================================================== */

    it("deve renderizar Fale conosco como um elemento button", () => {

        renderSectionFour();

        const button = screen.getByRole("button", {
            name: "Fale conosco",
        });

        expect(button.tagName).toBe("BUTTON");

    });


    /* ==================================================
       NAVEGAÇÃO
    ================================================== */

    it("deve navegar para a página de contato ao clicar no botão", () => {

        renderSectionFour();

        const button = screen.getByRole("button", {
            name: "Fale conosco",
        });

        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledTimes(1);

        expect(mockNavigate).toHaveBeenCalledWith(
            "/contato"
        );

    });


    /* ==================================================
       MARQUEE
    ================================================== */

    it("deve renderizar o container do marquee", () => {

        renderSectionFour();

        const container = document.querySelector(
            ".containerMarquee"
        );

        expect(container).toBeInTheDocument();

    });


    /* ==================================================
       MARQUEE PRINCIPAL
    ================================================== */

    it("deve renderizar o elemento principal do marquee", () => {

        renderSectionFour();

        const marquee = document.querySelector(
            ".marquee"
        );

        expect(marquee).toBeInTheDocument();

    });


    /* ==================================================
       GRUPOS DO MARQUEE
    ================================================== */

    it("deve renderizar exatamente dois grupos do marquee", () => {

        renderSectionFour();

        const groups = document.querySelectorAll(
            ".marqueeGroup"
        );

        expect(groups).toHaveLength(2);

    });


    /* ==================================================
       ITENS DO PRIMEIRO GRUPO
    ================================================== */

    it("deve renderizar 15 itens no primeiro grupo do marquee", () => {

        renderSectionFour();

        const groups = document.querySelectorAll(
            ".marqueeGroup"
        );

        const firstGroupItems =
            groups[0].querySelectorAll(
                ".marqueeItem"
            );

        expect(firstGroupItems).toHaveLength(15);

    });


    /* ==================================================
       ITENS DO SEGUNDO GRUPO
    ================================================== */

    it("deve renderizar 15 itens no segundo grupo do marquee", () => {

        renderSectionFour();

        const groups = document.querySelectorAll(
            ".marqueeGroup"
        );

        const secondGroupItems =
            groups[1].querySelectorAll(
                ".marqueeItem"
            );

        expect(secondGroupItems).toHaveLength(15);

    });


    /* ==================================================
       SEGMENTO DISTRIBUIDORES
    ================================================== */

    it("deve renderizar DISTRIBUIDORES seis vezes", () => {

        renderSectionFour();

        const items = screen.getAllByText(
            "DISTRIBUIDORES"
        );

        expect(items).toHaveLength(6);

    });


    /* ==================================================
       SEGMENTO AUTO SERVIÇO
    ================================================== */

    it("deve renderizar AUTO SERVIÇO seis vezes", () => {

        renderSectionFour();

        const items = screen.getAllByText(
            "AUTO SERVIÇO"
        );

        expect(items).toHaveLength(6);

    });


    /* ==================================================
       SEGMENTO VAREJO
    ================================================== */

    it("deve renderizar VAREJO seis vezes", () => {

        renderSectionFour();

        const items = screen.getAllByText(
            "VAREJO"
        );

        expect(items).toHaveLength(6);

    });


    /* ==================================================
       SEGMENTO FOOD SERVICE
    ================================================== */

    it("deve renderizar FOOD SERVICE seis vezes", () => {

        renderSectionFour();

        const items = screen.getAllByText(
            "FOOD SERVICE"
        );

        expect(items).toHaveLength(6);

    });


    /* ==================================================
       SEGMENTO ATACADO
    ================================================== */

    it("deve renderizar ATACADO seis vezes", () => {

        renderSectionFour();

        const items = screen.getAllByText(
            "ATACADO"
        );

        expect(items).toHaveLength(6);

    });


    /* ==================================================
       TOTAL DE ITENS
    ================================================== */

    it("deve renderizar exatamente 30 itens no marquee", () => {

        renderSectionFour();

        const items = document.querySelectorAll(
            ".marqueeItem"
        );

        expect(items).toHaveLength(30);

    });


    /* ==================================================
       CLASSE DOS ITENS
    ================================================== */

    it("deve aplicar a classe correta nos itens do marquee", () => {

        renderSectionFour();

        const items = document.querySelectorAll(
            ".marqueeItem"
        );

        expect(items.length).toBe(30);

        items.forEach((item) => {

            expect(item).toHaveClass(
                "marqueeItem"
            );

        });

    });


    /* ==================================================
       SEGUNDO GRUPO DECORATIVO
    ================================================== */

    it("deve marcar o segundo grupo do marquee como aria-hidden", () => {

        renderSectionFour();

        const groups = document.querySelectorAll(
            ".marqueeGroup"
        );

        expect(groups[1]).toHaveAttribute(
            "aria-hidden",
            "true"
        );

    });


    /* ==================================================
       PRIMEIRO GRUPO NÃO DEVE SER ARIA-HIDDEN
    ================================================== */

    it("não deve marcar o primeiro grupo do marquee como aria-hidden", () => {

        renderSectionFour();

        const groups = document.querySelectorAll(
            ".marqueeGroup"
        );

        expect(
            groups[0]
        ).not.toHaveAttribute(
            "aria-hidden"
        );

    });


    /* ==================================================
       MARCADORES
    ================================================== */

    it("deve renderizar os marcadores em todos os itens do marquee", () => {

        renderSectionFour();

        const bullets = document.querySelectorAll(
            ".marqueeItem small"
        );

        expect(bullets).toHaveLength(30);

        bullets.forEach((bullet) => {

            expect(bullet).toHaveTextContent("•");

        });

    });


    /* ==================================================
       CONTEÚDO DOS MARCADORES
    ================================================== */

    it("deve utilizar o marcador correto em cada item", () => {

        renderSectionFour();

        const bullets = document.querySelectorAll(
            ".marqueeItem small"
        );

        bullets.forEach((bullet) => {

            expect(
                bullet.textContent
            ).toBe("•");

        });

    });

});