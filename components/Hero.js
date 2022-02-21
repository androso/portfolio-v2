import React from "react";
import { StyledHero } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
	{
		href: "https://twitter.com/AnibalAndrade_",
		target: "_blank",
		classname: "blue-icon",
		icon: faTwitter,
	},
	{
		href: "https://github.com/androso",
		target: "_blank",
		classname: "blue-icon",
		icon: faGithub,
	},
	{
		href: "mailto:androso421@gmail.com",
		target: "_blank",
		classname: "blue-icon",
		icon: faEnvelope,
	},
	{
		href: "https://www.linkedin.com/in/an%C3%ADbal-andrade-329550194/",
		target: "_blank",
		classname: "blue-icon",
		icon: faLinkedin,
	},
	{
		href: "https://replit.com/@androsoa3",
		target: "_blank",
		classname: "blue-icon",
		icon: "replit"
	},
];

export default function Hero({title, subtitle}) {
	return (
		<StyledHero className="container" id="Home">

		  

      <Image 
        className="avatar"
        alt="Anibal Andrade"
        title="that's me!!"
        src="/avatar-ivvana.png"
        width="250"
        height="250"
      />
			<h1 className="title">{title}</h1>
			<h2 className="profession subtitle">{subtitle}</h2>
			<div className="landing__social-links">
				{socialLinks.map((link) => {
					return (
						link.icon === "replit" ? (
                            <a
                                href={link.href}
                                target={link.target}
                                className={link.classname}
                                key={link.href}
                                rel="noreferrer"
                            >
                                
                                <Image 
                                  id="replit-blue-icon"
                                  src="/replit-blue-period.svg"
                                  alt="replit icon"
                                />
                            </a>
                        ) : (
                            <a 
                              href={link.href} 
                              target={link.href} 
                              className={link.classname} 
                              key={link.href}
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon icon={link.icon} />
						                </a>
                        )
					);
				})}
				
			</div>
			<div className="landing learn-more">
				<Link href="#About">
					<a>
						<FontAwesomeIcon icon={faChevronDown} className="blue-icon"/>
					</a>
				</Link>
			</div>
		</StyledHero>
	);
}
