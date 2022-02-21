import React from "react";
import { StyledContact } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
	return (
		<StyledContact id="Contact">
			<div className="container">
				<h2 className="contact__title title">Contact</h2>
				<p className="contact__text">Feel free to reach out :{")"}</p>
				<div className="contact-links">
					<a href="https://twitter.com/AnibalAndrade_" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
					
						@AnibalAndrade_
					</a>
					<a href="mailto:androso421@gmail.com" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
						androso421@gmail.com
					</a>
				</div>
			</div>
		</StyledContact>
	);
}
