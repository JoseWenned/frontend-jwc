import "./home.style.scss";

//Images

//Components
import { Header } from '../../components/header/header.component';

//Hooks
import { SectionThree } from "../../components/sections/sectionThree/sectionThree.component";
import { Footer } from "../../components/footer/footer.component";
import { SectionFour } from "../../components/sections/sectionFour/sectionFour.component";
import { SectionFive } from "../../components/sections/sectionFive/sectionFive.component";
import { SectionSix } from "../../components/sections/sectionSix/sectionSix.component";
import { SectionTwo } from "../../components/sections/sectionTwo/sectionTwo.component";
import { SectionOne } from "../../components/sections/sectionOne/sectionOne.component";
import { BannnerPrincipal } from "../../components/bannerPrincipal/bannerPrincipal.component";
import { ButtonWhatsApp } from "../../fragments/buttons/buttonWhatsApp/buttonWhatsApp.component";


export const HomePage = () => {
    return (
        <>
            <Header/>
            <BannnerPrincipal/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <Footer/>
            <ButtonWhatsApp/>
        </>
    )
}