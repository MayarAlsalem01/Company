import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n";


import './css/style.css'
import './css/responsive.css'
import Hero from "./Sections/Hero/Hero";
import Main from "./Sections/Main/Main";
import Footer from "./Sections/Footer/Footer";
import Contact from "./Sections/Contact/Contact";

const Company = () => {

    return (
        <>
            <I18nextProvider i18n={i18n} >
                <Hero />
                <Main />
                <Contact/>
                <p>update 4</p>
            </I18nextProvider>
        </>
    );
}
export default Company;