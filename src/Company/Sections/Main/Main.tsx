
import Welcome from '../../images/welcome.png'
import CButton from '../../Components/ButtonLink/ButtonLink';
import Services from '../Services/Servies';
const Main = () => {
    return (
        <>
            <section className="welcome_section layout_padding">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>
                            Welcome To Our Company
                        </h2>
                    </div>
                    <div className="layout_padding2">
                        <div className="img-box">
                            <img src={Welcome}alt="" />
                        </div>
                        <div className="detail-box">
                            <p>
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            </p>
                            <div>
                                <CButton/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* serv start */}
            <Services/>

        </>
    );
}
export default Main;