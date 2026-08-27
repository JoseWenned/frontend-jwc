// Imagens Amazon
import imagemPolpaAcai from "../assets/images/produtos/amazon/Pacote Polpa de Açaí.png.png";
import imagemPoteAcaiTradicional from "../assets/images/produtos/amazon/Pote Açaí Amazon - Tradicional.png";
import imagemPoteAcaiMorango from "../assets/images/produtos/amazon/Pote Açaí Amazon - Açaí + Morango.png";

export const produtosAmazon = {

    /* ==================================================
       MARCA
    ================================================== */

    marca: "Amazon",


    /* ==================================================
       INFORMAÇÕES
    ================================================== */

    informacoes: [
        "❄️ Conservação: manter congelado",
    ],


    /* ==================================================
       PRODUTOS
    ================================================== */

    produtos: [

        {
            nome: "Polpa de Açaí",

            descricao:
                "Polpa de açaí para o preparo de bebidas, cremes, vitaminas e diversas receitas.",
            informacoes: [
                "📦 Embalagem: 500g",
                "❄️ Conservação: manter congelado",
                "📅 Validade: 06 meses",
            ],

            imagem: imagemPolpaAcai,
        },

        {
            nome: "Açaí Tradicional",

            descricao:
                "Açaí tradicional com textura cremosa e sabor marcante, ideal para servir puro ou acompanhado de diferentes complementos.",

            imagem: imagemPoteAcaiTradicional,
        },

        {
            nome: "Açaí + Morango",

            descricao:
                "A combinação do açaí com morango em uma opção cremosa e saborosa para diferentes ocasiões.",

            imagem: imagemPoteAcaiMorango,
        },

    ],
};
