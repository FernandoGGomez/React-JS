import React from "react";
import { Link } from "react-router-dom";

const Footer = () =>{

    return(
        <div>
            <footer className="text-center text-white n" >
                {/* Grid container */}
                    <div className="container pt-4">
                {/* Section: Social media */}
                        <section className="mb-4">
                    {/* Facebook */}
                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                >
                                    <i className="fab fa-facebook-f"></i>
                            </a>

                   {/* Twitter */}
                            <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-twitter"></i>
                            </a>

                    {/* Google */}
                            <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-google"></i>
                            </a>

                    {/* Instagram */}
                            <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-instagram"></i>
                            </a>

                    {/* Linkedin */}
                            <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-linkedin"></i>
                            </a>
                    {/* Github */}
                            <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-github"></i>
                            </a>
                    </section>
                {/* Section: Social media */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center text-dark p-3 m" >
                        © 2020 Copyright:
                        <Link className="text-dark" to="/">TiendaPC.com</Link>
                </div>
                {/* Copyright */}
            </footer> 


    </div>


);
}
export default Footer;