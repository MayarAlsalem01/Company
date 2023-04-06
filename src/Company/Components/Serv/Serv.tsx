interface Props{
    headert:string;
    headerb:string;
    content:string;
    image:string
}
const Serv = (prop:Props)=>{
    return(
        <>
            <div className="service_box mt-0">
                            <div className="img-box">
                                <img src={prop.image} alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    {prop.headert} <br />
                                    {prop.headerb}
                                </h4>
                                <p>
                                    {prop.content}
                                </p>
                            </div>
                        </div>
        </>
    );
}
export default Serv;