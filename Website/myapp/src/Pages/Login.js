import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { NavLink } from 'react-router-dom'
import './Style.css'
export default function Login() {
    
    const [credentials, setcredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid Credentials")
        }
        if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"))
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


            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>

                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1" className='form-label' >Email </label>
                        <input type="email" className='form-control form-label' name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className='form-label'>We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1" className='form-label'>Password</label>
                        <input type="password" name='password' className="form-control form-label" value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
                    </div>


                    <button type="submit" className=" m-3 btn btn-primary">Submit</button>
                    <p>
                    <label className='form-label'>Don't have an account?</label>
                     <Link to="/createuser" className='m-3 btn btn-danger'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

