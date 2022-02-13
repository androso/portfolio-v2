import { StyledNavbar } from "../styles";
import Link from "next/link";
import { useState } from "react";


const links = [
    {title: "Home", href: "#Home"},
    {title: "About", href: "#About"},
    {title: "Blog", href: "#Blog"},
    {title: "Projects", href: "#Projects"},
    {title: "Contact", href: "#Contact"},
    {title: "Resumé", href: "/Resume-Anibal-Andrade.pdf", target: "_blank"},
    
]

export default function Navbar () {
    const [navIsOpen, setNavIsOpen] = useState(null);

    const toggleNavbar = () => {
        setNavIsOpen(!navIsOpen);
        console.log(!navIsOpen);
    }
    return (
        <StyledNavbar >
            {/*
            <div className="navigation-container">  
                <Link href="/#Home">
                    <a className="navigation-links">Home</a>    
                </Link>
                <Link href="/#About">
                    <a className="navigation-links" >About</a>
                </Link>
                <Link href="/Blog">
                    <a className="navigation-links" >Blog</a>
                </Link>
                <Link href="/#Projects">
                    <a className="navigation-links">Projects</a>
                </Link>
                <Link href="/#Contact">
                    <a className="navigation-links">Contact</a>
                </Link>
                <Link href="/Resume-Anibal-Andrade.pdf">
                    <a className="navigation-links" target="_blank" alt="Resumé" >Resumé</a>
                </Link>
            </div>
            
            <button
                onClick={toggleNavbar}
                className={`nav__burger-button ${navIsOpen ? "Close" : "Open"}`}
            >
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
                <span className="toggle-bar"></span>
            </button>
            */}

            <div className="container">
                  
                <div className="nav">
                    {links.map(link => {
                        return (
                            <Link href={link.href}>
                                <a className="nav-item" alt={link.title} target={link.target ? link.target : ""}>{link.title}</a>
                            </Link>        
                        )
                    })}
                    
                </div>

                <button 
                  className={`toggle-container ${navIsOpen ? "open" : ""}`}
                  onClick={toggleNavbar}
                  >
                    <span className=" button-toggle"></span>
                    <span className=" button-toggle"></span>
                    <span className=" button-toggle"></span>
                    <span className=" button-toggle"></span>
                </button>
            </div>

        </StyledNavbar>
    )
}