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

import { ContatoPage } from "../../../../src/presentation/pages/contact/contact.page";
import React from "react";


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


    const MotionComponent = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        const filteredProps =
            filterMotionProps(props);

        return (
            <div {...filteredProps}>
                {children}
            </div>
        );

    };


    const MotionHeading = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        const filteredProps =
            filterMotionProps(props);

        return (
            <h1 {...filteredProps}>
                {children}
            </h1>
        );

    };


    const MotionHeadingTwo = ({
        children,
        ...props
    }: React.PropsWithChildren<Record<string, unknown>>) => {

        const filteredProps =
            filterMotionProps(props);

        return (
            <h2 {...filteredProps}>
                {children}
            </h2>
        );

    };


    return {

        motion: {

            section: MotionComponent,

            div: MotionComponent,

            article: MotionComponent,

            span: MotionComponent,

            p: MotionComponent,

            button: MotionComponent,

            a: MotionComponent,

            h1: MotionHeading,

            h2: MotionHeadingTwo,

        },

        AnimatePresence: ({
            children,
        }: React.PropsWithChildren) => (
            <>{children}</>
        ),

    };

});


/* ==================================================
   MOCK HEADER
================================================== */

vi.mock("../../../../src/presentation/components/header/header.component", () => ({
    Header: () => (
        <header data-testid="header">
            Header
        </header>
    ),
}));


/* ==================================================
   MOCK FOOTER
================================================== */

vi.mock("../../../../src/presentation/components/footer/footer.component", () => ({
    Footer: () => (
        <footer data-testid="footer">
            Footer
        </footer>
    ),
}));


/* ==================================================
   MOCK WHATSAPP
================================================== */
vi.mock(
    "../../../../src/presentation/fragments/buttons/buttonWhatsApp/buttonWhatsApp.component",
    () => ({
        ButtonWhatsApp: () => (
            <a
                href="https://wa.me/5588988965616"
                data-testid="button-whatsapp"
                aria-label="Fale conosco pelo WhatsApp"
            >
                WhatsApp
            </a>
        ),
    })
);


/* ==================================================
   DESCRIBE
================================================== */

describe("ContatoPage", () => {

    beforeEach(() => {

        vi.clearAllMocks();

        vi.stubGlobal(
            "open",
            vi.fn()
        );

    });


    /* ==================================================
       FUNÇÃO DE RENDERIZAÇÃO
    ================================================== */

    const renderContatoPage = () => {

        return render(
            <MemoryRouter>
                <ContatoPage />
            </MemoryRouter>
        );

    };


    /* ==================================================
       RENDERIZAÇÃO PRINCIPAL
    ================================================== */

    it(
        "deve renderizar todas as principais áreas da página",
        () => {

            renderContatoPage();


            /* HEADER */

            expect(
                screen.getByTestId("header")
            ).toBeInTheDocument();


            /* HERO */

            expect(
                screen.getByText("Fale conosco")
            ).toBeInTheDocument();


            expect(
                screen.getByRole("heading", {
                    level: 1,
                    name: "Vamos conversar?",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByText(
                    /Estamos prontos para entender suas necessidades/i
                )
            ).toBeInTheDocument();


            /* CONTATO */

            expect(
                screen.getByText("Entre em contato")
            ).toBeInTheDocument();


            expect(
                screen.getByRole("heading", {
                    level: 2,
                     name: /Estamos aqui para\s*ajudar você\./i,
                })
            ).toBeInTheDocument();


            expect(
                screen.getByText(
                    /Seja para conhecer nosso portfólio/i
                )
            ).toBeInTheDocument();


            /* FORMULÁRIO */

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Envie uma mensagem",
                })
            ).toBeInTheDocument();


            /* WHATSAPP */

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name:
                        "Prefere falar diretamente conosco?",
                })
            ).toBeInTheDocument();


            /* FOOTER */

            expect(
                screen.getByTestId("footer")
            ).toBeInTheDocument();


            /* BOTÃO FLUTUANTE */

            expect(
                screen.getByTestId(
                    "button-whatsapp"
                )
            ).toBeInTheDocument();

        }
    );


    /* ==================================================
       HERO
    ================================================== */

    it(
        "deve renderizar o título principal do hero",
        () => {

            renderContatoPage();


            expect(
                screen.getByRole("heading", {
                    level: 1,
                    name: "Vamos conversar?",
                })
            ).toBeInTheDocument();

        }
    );


    it(
        "deve renderizar a descrição do hero",
        () => {

            renderContatoPage();


            expect(
                screen.getByText(
                    /Estamos prontos para entender suas necessidades e encontrar as melhores soluções para o seu negócio\./i
                )
            ).toBeInTheDocument();

        }
    );


    /* ==================================================
       INFORMAÇÕES DE CONTATO
    ================================================== */

    it("deve renderizar o título da área de informações", () => {
        renderContatoPage();

        const titulo = screen.getByRole("heading", {
            level: 2,
            name: /Estamos aqui para.*ajudar você\./i,
        });

        expect(titulo).toBeInTheDocument();
    });


    it(
        "deve renderizar o e-mail de contato",
        () => {

            renderContatoPage();


            expect(
                screen.getByText(
                    "jwcdistribuicaoelogisticaltda@gmail.com"
                )
            ).toBeInTheDocument();

        }
    );


    it(
        "deve renderizar o telefone de contato",
        () => {

            renderContatoPage();


            expect(
                screen.getByText(
                    "+55 (88) 9 8896-5616"
                )
            ).toBeInTheDocument();

        }
    );


    it(
        "deve renderizar o horário de atendimento",
        () => {

            renderContatoPage();


            expect(
                screen.getByText(
                    "Segunda a domingo, das 08h às 21h"
                )
            ).toBeInTheDocument();

        }
    );


    /* ==================================================
       FORMULÁRIO
    ================================================== */

    it(
        "deve renderizar todos os campos do formulário",
        () => {

            renderContatoPage();


            expect(
                screen.getByLabelText("Nome")
            ).toBeInTheDocument();


            expect(
                screen.getByLabelText("Empresa")
            ).toBeInTheDocument();


            expect(
                screen.getByLabelText("E-mail")
            ).toBeInTheDocument();


            expect(
                screen.getByLabelText("Telefone")
            ).toBeInTheDocument();


            expect(
                screen.getByLabelText("Assunto")
            ).toBeInTheDocument();


            expect(
                screen.getByLabelText("Mensagem")
            ).toBeInTheDocument();

        }
    );


    it(
        "deve renderizar o botão de envio do formulário",
        () => {

            renderContatoPage();


            expect(
                screen.getByRole("button", {
                    name: /Enviar mensagem/i,
                })
            ).toBeInTheDocument();

        }
    );


    /* ==================================================
       CAMPOS DO FORMULÁRIO
    ================================================== */

    it(
        "deve permitir preencher os campos do formulário",
        () => {

            renderContatoPage();


            const nome =
                screen.getByLabelText("Nome");

            const empresa =
                screen.getByLabelText("Empresa");

            const email =
                screen.getByLabelText("E-mail");

            const telefone =
                screen.getByLabelText("Telefone");

            const mensagem =
                screen.getByLabelText("Mensagem");


            fireEvent.change(
                nome,
                {
                    target: {
                        value: "João da Silva",
                    },
                }
            );


            fireEvent.change(
                empresa,
                {
                    target: {
                        value: "Empresa Teste",
                    },
                }
            );


            fireEvent.change(
                email,
                {
                    target: {
                        value: "teste@empresa.com",
                    },
                }
            );


            fireEvent.change(
                telefone,
                {
                    target: {
                        value: "(88) 99999-9999",
                    },
                }
            );


            fireEvent.change(
                mensagem,
                {
                    target: {
                        value:
                            "Gostaria de conhecer os produtos.",
                    },
                }
            );


            expect(nome).toHaveValue(
                "João da Silva"
            );


            expect(empresa).toHaveValue(
                "Empresa Teste"
            );


            expect(email).toHaveValue(
                "teste@empresa.com"
            );


            expect(telefone).toHaveValue(
                "(88) 99999-9999"
            );


            expect(mensagem).toHaveValue(
                "Gostaria de conhecer os produtos."
            );

        }
    );


    /* ==================================================
       SELECT
    ================================================== */

    it(
        "deve renderizar todas as opções do campo assunto",
        () => {

            renderContatoPage();


            expect(
                screen.getByRole("option", {
                    name:
                        "Selecione uma opção",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByRole("option", {
                    name:
                        "Solicitar orçamento",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByRole("option", {
                    name:
                        "Conhecer produtos",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByRole("option", {
                    name:
                        "Parceria comercial",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByRole("option", {
                    name:
                        "Outro assunto",
                })
            ).toBeInTheDocument();

        }
    );


    it(
        "deve permitir selecionar um assunto",
        () => {

            renderContatoPage();


            const select =
                screen.getByLabelText(
                    "Assunto"
                );


            fireEvent.change(
                select,
                {
                    target: {
                        value: "parceria",
                    },
                }
            );


            expect(select).toHaveValue(
                "parceria"
            );

        }
    );


    /* ==================================================
       WHATSAPP
    ================================================== */

    it(
        "deve renderizar a seção de atendimento pelo WhatsApp",
        () => {

            renderContatoPage();


            expect(
                screen.getByText(
                    "Atendimento rápido"
                )
            ).toBeInTheDocument();


            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name:
                        "Prefere falar diretamente conosco?",
                })
            ).toBeInTheDocument();


            expect(
                screen.getByText(
                    /Se preferir, fale com nossa equipe pelo WhatsApp/i
                )
            ).toBeInTheDocument();

        }
    );


    it(
        "deve renderizar o botão de contato pelo WhatsApp",
        () => {

            renderContatoPage();


            expect(
                screen.getByRole("button", {
                    name:
                        /Fale pelo WhatsApp/i,
                })
            ).toBeInTheDocument();

        }
    );


    it(
        "deve abrir o WhatsApp ao clicar no botão",
        () => {

            renderContatoPage();


            const button =
                screen.getByRole("button", {
                    name:
                        /Fale pelo WhatsApp/i,
                });


            fireEvent.click(button);


            expect(
                window.open
            ).toHaveBeenCalledTimes(1);


            expect(
                window.open
            ).toHaveBeenCalledWith(
                expect.stringContaining(
                    "https://wa.me/5588988965616"
                )
            );

        }
    );


    /* ==================================================
       BOTÃO WHATSAPP FLUTUANTE
    ================================================== */

    it(
        "deve renderizar o botão flutuante do WhatsApp",
        () => {

            renderContatoPage();


            const button =
                screen.getByTestId(
                    "button-whatsapp"
                );


            expect(
                button
            ).toBeInTheDocument();


            expect(
                button
            ).toHaveAttribute(
                "aria-label",
                "Fale conosco pelo WhatsApp"
            );

        }
    );


    /* ==================================================
       FORMULÁRIO — ESTRUTURA
    ================================================== */

    it(
        "deve renderizar apenas um formulário",
        () => {

            const { container } =
                renderContatoPage();


            const forms =
                container.querySelectorAll(
                    "form"
                );


            expect(forms).toHaveLength(1);

        }
    );


    it(
        "deve renderizar os campos com os respectivos tipos",
        () => {

            renderContatoPage();


            expect(
                screen.getByLabelText("Nome")
            ).toHaveAttribute(
                "type",
                "text"
            );


            expect(
                screen.getByLabelText("Empresa")
            ).toHaveAttribute(
                "type",
                "text"
            );


            expect(
                screen.getByLabelText("E-mail")
            ).toHaveAttribute(
                "type",
                "email"
            );


            expect(
                screen.getByLabelText("Telefone")
            ).toHaveAttribute(
                "type",
                "tel"
            );

        }
    );


    /* ==================================================
       FOOTER
    ================================================== */

    it(
        "deve renderizar o Footer",
        () => {

            renderContatoPage();


            expect(
                screen.getByTestId("footer")
            ).toBeInTheDocument();

        }
    );

});