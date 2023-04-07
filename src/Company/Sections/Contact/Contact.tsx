import { Button } from '@mui/material';
import './contact.css'
const Contact = () => {
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="container-sm contact_heading">
                    <h2>
                        Contact Us
                    </h2>
                    <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className="container-sm">
                    <form>
                    <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Name</label>
                                <input type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label >Phone number</label>
                                <input type="tel" className="form-control" id="inputNumber4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label >Select Service</label>
                                <select id="inputState" className="form-control">
                                    <option ></option>
                                    <option>...</option>
                                </select>
                            </div>

                        </div>

                        <div className="form-group">
                            <label >Message</label>
                            <textarea className="form-control" id="inputMessage" placeholder="" />
                        </div>
                

                <div className="d-flex justify-content-center">
                    <Button variant='contained' type="submit" className="" color='primary'>Send</Button>
                </div>
                    </form>
                </div>
        </section >
        </>
    )
}
export default Contact;