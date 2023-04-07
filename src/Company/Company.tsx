import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n";


import './css/style.css'
import './css/responsive.css'
import Hero from "./Sections/Hero/Hero";
import Main from "./Sections/Main/Main";

const Company = () => {

    return (
        <>
            <I18nextProvider i18n={i18n} >
                <Hero />
                <Main />
                <p>Updating</p>
            </I18nextProvider>
        </>
    );
}
export default Company;