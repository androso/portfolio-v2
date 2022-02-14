import React from "react";
import { StyledHero } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

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

export default function Hero() {
	return (
		<StyledHero className="container">
			<Image
				className="avatar"
				src={"/avatar-ivvana.png"}
				alt="Anibal Andrade"
				width="203px"
				height="203px"
			/>
			{/* <img class="landing__avatar" src="/avatar-ivvana.png" alt="Anibal Andrade" title="that's me!! " /> */}
			<h1 className="title">Hey, I'm Anibal</h1>
			<h2 className="profession subtitle">Software Engineer && Content Creator</h2>
			<div className="landing__social-links">
				{socialLinks.map((link) => {
					return (
						link.icon === "replit" ? (
                            <a
                                href={link.href}
                                target={link.target}
                                className={link.classname}
                                key={link.href}
                            >
                                <img
                                    id="replit-blue-icon"
                                    src="/replit-blue-period.svg"
                                    alt="replit icon"
                                />
                            </a>
                        ) : (
                            <a href={link.href} target={link.href} className={link.classname} key={link.href}>
							    <FontAwesomeIcon icon={link.icon} />
						    </a>
                        )
					);
				})}
				
			</div>
			<div className="landing learn-more">
				<a href="#about_me">
					<i className="fas fa-chevron-down blue-icon"></i>
				</a>
			</div>
		</StyledHero>
	);
}
