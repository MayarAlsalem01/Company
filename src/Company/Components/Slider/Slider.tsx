import CarouselIteam from "../CarouselIteam/CarouselIteam";

const Slider = () =>{
    return(
        <>
              <section className=" slider_section ">
                    {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
                        </ol> */}
                        <div className="carousel-inner">
                            <CarouselIteam active={true} />
                            {/* <CarouselIteam active={false}/>
                            <CarouselIteam active={false} /> */}
                        </div>
                        {/* <div className="carousel_btn-container">
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div> */}
                </section>
        </>
    );
}
export default Slider