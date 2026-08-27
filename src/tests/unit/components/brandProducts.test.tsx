import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { BrandProdutos } from "../../../presentation/components/brandProducts/brandProducts.component";

describe("BrandProdutos", () => {

    const produtos = [
        {
            nome: "Abacaxi",
            descricao:
                "Polpa de abacaxi com sabor refrescante e intenso.",
            imagem: "/images/abacaxi.png",
            informacoes: [
                "Embalagem de 100g",
                "Produto congelado",
                "Ideal para sucos",
            ],
        },
        {
            nome: "Morango",
            descricao:
                "Polpa de morango com sabor marcante e natural.",
            imagem: "/images/morango.png",
            informacoes: [
                "Embalagem de 100g",
                "Produto congelado",
            ],
        },
        {
            nome: "Manga",
            descricao:
                "Polpa de manga com sabor doce e tropical.",
            imagem: "/images/manga.png",
        },
    ];


    /* ==================================================
       RENDERIZAÇÃO
    ================================================== */

    it("deve renderizar a marca corretamente", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        expect(
            screen.getByText("Kipolpas")
        ).toBeInTheDocument();

    });


    it("deve renderizar o primeiro produto inicialmente", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Abacaxi",
            })
        ).toBeInTheDocument();

    });


    it("deve renderizar a descrição do produto atual", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        expect(
            screen.getByText(
                "Polpa de abacaxi com sabor refrescante e intenso."
            )
        ).toBeInTheDocument();

    });


    /* ==================================================
       INFORMAÇÕES
    ================================================== */

    it("deve renderizar as informações do produto", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        expect(
            screen.getByText("Embalagem de 100g")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Produto congelado")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Ideal para sucos")
        ).toBeInTheDocument();

    });


    it("não deve renderizar a lista de informações quando o produto não possui informações", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        const nextButton = screen.getByRole("button", {
            name: "Próximo produto",
        });

        await user.click(nextButton);

        await waitFor(() => {
            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Morango",
                })
            ).toBeInTheDocument();
        });

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {
            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Manga",
                })
            ).toBeInTheDocument();
        });

        expect(
            screen.queryByRole("list")
        ).not.toBeInTheDocument();

    });


    /* ==================================================
       IMAGEM
    ================================================== */

    it("deve renderizar a imagem do produto atual", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        const image = screen.getByRole("img", {
            name: "Abacaxi",
        });

        expect(image).toBeInTheDocument();

        expect(image).toHaveAttribute(
            "src",
            "/images/abacaxi.png"
        );

    });


    /* ==================================================
       CONTROLES
    ================================================== */

    it("deve renderizar os controles quando existem múltiplos produtos", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        expect(
            screen.getByRole("button", {
                name: "Produto anterior",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        ).toBeInTheDocument();

    });


    it("deve renderizar o contador inicial corretamente", () => {

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        const currentCounter = document.querySelector(
            ".brandProductCounterCurrent"
        );

        const totalCounter = document.querySelector(
            ".brandProductCounterTotal"
        );

        expect(currentCounter).toHaveTextContent("01");

        expect(totalCounter).toHaveTextContent("03");

    });


    /* ==================================================
       PRÓXIMO PRODUTO
    ================================================== */

    it("deve avançar para o próximo produto", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Morango",
                })
            ).toBeInTheDocument();

        });

    });


    it("deve atualizar o contador ao avançar para o próximo produto", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            const currentCounter = document.querySelector(
                ".brandProductCounterCurrent"
            );

            expect(currentCounter).toHaveTextContent("02");

        });

    });


    /* ==================================================
       VOLTAR PRODUTO
    ================================================== */

    it("deve voltar para o produto anterior", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Morango",
                })
            ).toBeInTheDocument();

        });

        await user.click(
            screen.getByRole("button", {
                name: "Produto anterior",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Abacaxi",
                })
            ).toBeInTheDocument();

        });

    });


    /* ==================================================
       LOOP PRÓXIMO
    ================================================== */

    it("deve voltar para o primeiro produto ao avançar a partir do último", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );


        // ==============================================
        // ABACAXI → MORANGO
        // ==============================================

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Morango",
                })
            ).toBeInTheDocument();

        });


        // ==============================================
        // MORANGO → MANGA
        // ==============================================

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Manga",
                })
            ).toBeInTheDocument();

        });


        // ==============================================
        // MANGA → ABACAXI
        // ==============================================

        await user.click(
            screen.getByRole("button", {
                name: "Próximo produto",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Abacaxi",
                })
            ).toBeInTheDocument();

        });


        // ==============================================
        // CONFIRMA CONTADOR
        // ==============================================

        const currentCounter = document.querySelector(
            ".brandProductCounterCurrent"
        );

        expect(currentCounter).toHaveTextContent("01");

    });


    /* ==================================================
       LOOP ANTERIOR
    ================================================== */

    it("deve ir para o último produto ao voltar quando está no primeiro", async () => {

        const user = userEvent.setup();

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtos}
            />
        );

        await user.click(
            screen.getByRole("button", {
                name: "Produto anterior",
            })
        );

        await waitFor(() => {

            expect(
                screen.getByRole("heading", {
                    level: 2,
                    name: "Manga",
                })
            ).toBeInTheDocument();

        });


        const currentCounter = document.querySelector(
            ".brandProductCounterCurrent"
        );

        expect(currentCounter).toHaveTextContent("03");

    });


    /* ==================================================
       PRODUTO ÚNICO
    ================================================== */

    it("não deve renderizar os controles quando existe apenas um produto", () => {

        const produtoUnico = [
            {
                nome: "Açaí",
                descricao:
                    "Açaí cremoso e de alta qualidade.",
                imagem: "/images/acai.png",
                informacoes: [
                    "Produto congelado",
                    "Ideal para sobremesas",
                ],
            },
        ];

        render(
            <BrandProdutos
                marca="Amazon"
                produtos={produtoUnico}
            />
        );

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Açaí",
            })
        ).toBeInTheDocument();

        expect(
            screen.queryByRole("button", {
                name: "Produto anterior",
            })
        ).not.toBeInTheDocument();

        expect(
            screen.queryByRole("button", {
                name: "Próximo produto",
            })
        ).not.toBeInTheDocument();

    });


    /* ==================================================
       PRODUTO SEM INFORMAÇÕES
    ================================================== */

    it("deve funcionar corretamente com produto sem informações", () => {

        const produtoSemInformacoes = [
            {
                nome: "Manga",
                descricao:
                    "Polpa de manga com sabor doce e tropical.",
                imagem: "/images/manga.png",
            },
        ];

        render(
            <BrandProdutos
                marca="Kipolpas"
                produtos={produtoSemInformacoes}
            />
        );

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Manga",
            })
        ).toBeInTheDocument();

        expect(
            screen.queryByRole("list")
        ).not.toBeInTheDocument();

    });


    /* ==================================================
       PRODUTO VÁLIDO
    ================================================== */

    it("deve renderizar corretamente um produto válido", () => {

        render(
            <BrandProdutos
                marca="Teste"
                produtos={[
                    {
                        nome: "Produto Teste",
                        descricao:
                            "Descrição do produto teste.",
                        imagem: "/images/teste.png",
                    },
                ]}
            />
        );

        expect(
            screen.getByRole("heading", {
                level: 2,
                name: "Produto Teste",
            })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Descrição do produto teste."
            )
        ).toBeInTheDocument();

        expect(
            screen.getByRole("img", {
                name: "Produto Teste",
            })
        ).toHaveAttribute(
            "src",
            "/images/teste.png"
        );

    });

});