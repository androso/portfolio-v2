import { StyledNavbar } from "../styles";
import Link from "next/link";
import { useState, useEffect } from "react";


const links = [
    {title: "Home", href: "#Home"},
    {title: "About", href: "#About"},
    {title: "Projects", href: "#Projects"},
    {title: "Blog", href: "#Blog"},
    {title: "Contact", href: "#Contact"},
    {title: "Resumé", href: "/Resume-Anibal-Andrade.pdf", target: "_blank"},
]

export default function Navbar ({navIsOpen, setNavIsOpen}) {
    // const [navIsOpen, setNavIsOpen] = useState(null);
    
    const toggleNavbar = () => {
        setNavIsOpen(!navIsOpen);
    }
  
    return (
        <StyledNavbar >
                <div className={`nav ${navIsOpen ? "open" : "closed"}`}>
                    {links.map(link => {
                        return (
                            <Link href={link.href} key={link.title}>
                                <a 
                                  className="nav-item" 
                                  alt={link.title} 
                                  target={link.target ? link.target : ""}
                                  onClick={() => (setNavIsOpen(false))}
                                >
                                  {link.title}
                                </a>
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
            

        </StyledNavbar>
    )
}