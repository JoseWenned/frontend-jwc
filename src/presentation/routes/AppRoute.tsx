
// Pages
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home.page";
import { SobreNosPage } from "../pages/aboutMe/aboutMe.page";
import { ProdutosPage } from "../pages/products/products.page";
import { ContatoPage } from "../pages/contact/contact.page";
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