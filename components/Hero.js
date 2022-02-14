import React from "react";
import { StyledHero } from "../styles";
import Image from "next/image";

export default function Hero() {
	return (
		<StyledHero className="container">
        <Image className="landing__avatar" src={"/avatar-ivvana.png"} alt="Anibal Andrade" width="203px" height="203px"/>
				<img class="landing__avatar" src="/public/avatar-ivvana.png" alt="" />
				<h1 class="landing__name title">Hey, I'm Anibal</h1>
				<h2 class="landing__profession subtitle">
					Software Engineer && Content Creator
				</h2>
				<div class="landing__social-links">
					<a
						href="https://twitter.com/AnibalAndrade_"
						target="_blank"
						class="blue-icon"
					>
						<i class="fab fa-twitter"></i>
					</a>
					<a
						href="https://github.com/androso"
						target="_blank"
						class="blue-icon"
					>
						<i class="fab fa-github"></i>
					</a>
					<a
						href="mailto:androso421@gmail.com"
						target="_blank"
						class="blue-icon"
					>
						<i class="fas fa-envelope"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/an%C3%ADbal-andrade-329550194/"
						target="_blank"
						class="blue-icon"
					>
						<i class="fab fa-linkedin"></i>
					</a>
					<a
						href="https://replit.com/@androsoa3"
						target="_blank"
						class="blue-icon"
					>
						<img
							id="replit-blue-icon"
							src="./img/replit-blue-period.svg"
							alt="replit icon"
						/>
					</a>
				</div>
				<div class="landing learn-more">
					<a href="#about_me">
						<i class="fas fa-chevron-down blue-icon"></i>
					</a>
				</div>
			
		</StyledHero>
	);
}
