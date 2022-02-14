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
            
                <div className={`nav ${navIsOpen ? "open" : "closed"}`}>
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
            

        </StyledNavbar>
    )
}