import "./brandProdutos.style.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
    fadeLeft,
    fadeRight,
} from "../../../presentation/animations";

interface Produto {
    nome: string;
    descricao: string;
    imagem: string;
    informacoes?: string[];
}

interface BrandProductProps {
    marca: string;
    produtos: Produto[];
}

export const BrandProdutos = ({
    marca,
    produtos,
}: BrandProductProps) => {

    const [produtoAtual, setProdutoAtual] = useState(0);

    const produto = produtos[produtoAtual];

    const proximoProduto = () => {
        setProdutoAtual((atual) =>
            atual === produtos.length - 1
                ? 0
                : atual + 1
        );
    };

    const produtoAnterior = () => {
        setProdutoAtual((atual) =>
            atual === 0
                ? produtos.length - 1
                : atual - 1
        );
    };

    return (

        <section className="brandProduct">

            <div className="brandProductContainer">

                {/* ==================================================
                    CONTEÚDO
                ================================================== */}

                <AnimatePresence mode="wait">

                    <motion.div
                        key={produto.nome}
                        className="brandProductContent"
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <span className="brandProductBrand">
                            {marca}
                        </span>


                        <h2 className="brandProductTitle">
                            {produto.nome}
                        </h2>


                        <p className="brandProductDescription">
                            {produto.descricao}
                        </p>


                        {/* ==================================================
                            INFORMAÇÕES
                        ================================================== */}

                        {produto.informacoes &&
                            produto.informacoes.length > 0 && (

                                <ul className="brandProductInformation">

                                    {produto.informacoes.map(
                                        (informacao, index) => (

                                            <li
                                                key={index}
                                                className="brandProductInformationItem"
                                            >
                                                {informacao}
                                            </li>

                                        )
                                    )}

                                </ul>

                            )}


                        {/* ==================================================
                            CONTROLES
                        ================================================== */}

                        {produtos.length > 1 && (

                            <div className="brandProductControls">

                                <button
                                    type="button"
                                    className="brandProductArrow"
                                    onClick={produtoAnterior}
                                    aria-label="Produto anterior"
                                >
                                    ←
                                </button>


                                <div className="brandProductCounter">

                                    <span className="brandProductCounterCurrent">
                                        {String(produtoAtual + 1).padStart(2, "0")}
                                    </span>

                                    <span className="brandProductCounterDivider">
                                        /
                                    </span>

                                    <span className="brandProductCounterTotal">
                                        {String(produtos.length).padStart(2, "0")}
                                    </span>

                                </div>


                                <button
                                    type="button"
                                    className="brandProductArrow"
                                    onClick={proximoProduto}
                                    aria-label="Próximo produto"
                                >
                                    →
                                </button>

                            </div>

                        )}

                    </motion.div>

                </AnimatePresence>


                {/* ==================================================
                    IMAGEM
                ================================================== */}

                <AnimatePresence mode="wait">

                    <motion.div
                        key={produto.imagem}
                        className="brandProductImageContainer"
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >

                        <img
                            className="brandProductImage"
                            src={produto.imagem}
                            alt={produto.nome}
                        />

                    </motion.div>

                </AnimatePresence>

            </div>

        </section>

    );
};