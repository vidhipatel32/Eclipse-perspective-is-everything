import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Signup.css'
import { NavLink } from 'react-router-dom'
import './Style.css'
 const Signup = () => {
    let navigate = useNavigate()
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })

        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid Credentials")
        }
        else{
            navigate("/");
        }


    }
    const onchange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>

            
<nav>
                                <div className="container nav__container">

                                <NavLink to="/first"><h2>Eclipses: Perspective is Everything</h2></NavLink>

                                    <ul className="nav__menu" style={{justifyContent: 'end'}}>
                                        <li><NavLink to="/first">Home</NavLink></li>
                                        <li><NavLink to="/second">Types</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/signup">Signup</NavLink></li>
                                    </ul>
                                    <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
                                    <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
                                </div>
                            </nav>
                            {/* <!-- ----------------------------------- END OF NAVBAR ----------------------------------------- --> */}




            <div className='signup-container'>
                <form onSubmit={handleSubmit} className='signup-form'>
                    <div className="mb-3 form-group">
                        <label htmlFor="name" className="form-label">Name</label><br></br>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onchange} />
                    </div>
                    <div className="mb-3 form-group" >
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputlocation" className="form-label">location</label>
                        <input type="text" name='location' className="form-control" value={credentials.location} onChange={onchange} id="exampleInputlocation" />
                    </div>

                    <button type="submit" className=" m-3 btn btn-primary"> Submit </button> <br/>
                    <label className="form-label"> Already have an account? </label> <Link to="/login" className='m-3 btn btn-danger'> Login </Link>
                </form>
            </div>
        </>
    )
}
export default Signup