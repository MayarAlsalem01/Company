import './css/style.css'
const Login = ()=>{
    return(
        <>
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Login #08</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Have an account?</h3>
						<form action="#" className="login-form">
		      		<div className="form-group">
		      			<input type="text" className="form-control rounded-left" placeholder="Username" required/>
		      		</div>
	            <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" required/>
	            </div>
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
	            		<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#">Forgot Password</a>
								</div>
	            </div>
	            <div className="form-group d-f">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Get Started</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
        
	</section>
        {/* <div dangerouslySetInnerHTML={{__html:'<script src="./js/jquery.min.js"></script> '}}></div>
        <div dangerouslySetInnerHTML={{__html:'<script src="./js/popper.js"></script> '}}></div>
        <div dangerouslySetInnerHTML={{__html:'<script src="./js/bootstrap.min.js"></script>'}}></div>
        <div dangerouslySetInnerHTML={{__html:'<script src="./js/main.js"></script>'}}></div> */}

  
  
  
        </>
    );
}
export default Login;