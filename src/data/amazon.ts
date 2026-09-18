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
       PRODUTOS
    ================================================== */

    produtos: [

        {
            nome: "Polpa de Açaí",

            informacoes: [
                "📦 Embalagem: 500g",
                "❄️ Conservação: manter congelado",
                "📅 Validade: 06 meses",
            ],

            imagem: imagemPolpaAcai,
        },

        {
            nome: "Açaí Tradicional",
            informacoes: [
                "📦 Embalagem: 500g",
                "❄️ Conservação: manter congelado",
                "📅 Validade: 06 meses",
            ],
            imagem: imagemPoteAcaiTradicional,
        },

        {
            nome: "Açaí + Morango",
            informacoes: [
                "📦 Embalagem: 500g",
                "❄️ Conservação: manter congelado",
                "📅 Validade: 06 meses",
            ],
            imagem: imagemPoteAcaiMorango,
        },

    ],
};
