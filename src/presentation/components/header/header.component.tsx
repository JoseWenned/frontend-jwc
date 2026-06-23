import "./header.style.scss"
import { Navigation } from "../navigation/navigation.component"

export const Header = () => {
    return (
        <>
            <section className="containerHeader">
                <h1>JWC Distribuição & Logística</h1>
                <Navigation/>
                <button><img src="path/to/icon.png"/>Fale conosco</button>
            </section>
        </>
    )
}