
// Pages
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home.page";
import { SobreNosPage } from "../pages/sobreNos/sobreNos.page";
import { ProdutosPage } from "../pages/produtos/produtos.page";
import { ContatoPage } from "../pages/contato/contato.page";
// import { LogisticaPage } from "../pages/Logistica/Logistica.page";
// import { MerchandisingPage } from "../pages/Merchandising/Merchandising.page";
// import { SobrePage } from "../pages/Sobre/Sobre.page";
// import { NotFoundPage } from "../pages/NotFound/NotFound.page";

export const AppRoutes = () => {
    return (
            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/sobre-nos"
                    element={<SobreNosPage />}
                />

                <Route
                    path="/produtos"
                    element={<ProdutosPage />}
                />

                <Route
                    path="/contato"
                    element={<ContatoPage />}
                />
{/* 
                

                <Route
                    path="/merchandising"
                    element={<MerchandisingPage />}
                />

                <Route
                    path="/sobre"
                    element={<SobrePage />}
                />

                <Route
                    path="*"
                    element={<NotFoundPage />}
                /> */}

            </Routes>
    );
};