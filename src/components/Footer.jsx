import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {ThemeContext} from "./context/ThemeContext";

const Footer = () =>{

        let {dark} = useContext(ThemeContext);

    return(
        <div>
            <footer className={`text-center  ${dark ? "text-white dark-footer" : "footer"}`} >
                {/* Grid container */}
                    <div className="container pt-4">
                {/* Section: Social media */}
                        <section className="mb-4">
                    {/* Facebook */}
                            <a
                                className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                >
                                    <i className="fab fa-facebook-f"></i>
                            </a>

                   {/* Twitter */}
                            <a
                            className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-twitter"></i>
                            </a>

                    {/* Google */}
                            <a
                            className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-google"></i>
                            </a>

                    {/* Instagram */}
                            <a
                            className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-instagram"></i>
                            </a>

                    {/* Linkedin */}
                            <a
                            className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            >       <i className="fab fa-linkedin"></i>
                            </a>
                    {/* Github */}
                            <a
                            className={`btn btn-link btn-floating btn-lg ${dark ? "text-light":"text-dark"} m-1`}
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
                <div className="text-center p-3 footer-2">
                        © 2023 Copyright:
                        <Link className={`${dark ? "text-secondary" : "text-dark"}`} to="/"> TiendaPC.com</Link>
                </div>
                {/* Copyright */}
            </footer> 


    </div>


);
}
export default Footer;