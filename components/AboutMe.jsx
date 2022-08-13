import React from "react";
import { StyledAboutMe } from "../styles";

export default function AboutMe() {
	return (
		<StyledAboutMe className="about" id="About">
			<div className="container">
				<h2 className="about__title title">About Me</h2>
				<p className="about__text">
					I&apos;m a{" "}
					<span className="highlighted-paragraph">user-oriented</span> software
					engineer whose goal is building products that :
				</p>
				{/* <!-- FIND A WAY TO HIGHLIGHT EXPAND AND EASIER IN A SUBTLE WAY --> */}
				<ul className="about__goals-list">
					<li>
						<i>Expand</i> our intelligence.
					</li>
					<li>
						Aim to make our lives <i>easier</i>.
					</li>
				</ul>
				<p className="about__text">
					I love having a bird&apos;s eye view of what I&apos;m building, thus
					my decision to become{" "}
					<span className="highlighted-paragraph">full-stack</span>; I also have
					a{" "}
					<span className="highlighted-paragraph">
						<a
							href="https://blog.androsoa3.repl.co/"
							target="_blank"
							rel="noreferrer"
						>
							blog/garden
						</a>
					</span>{" "}
					where I write on the things I&apos;m learning.
				</p>
			</div>
		</StyledAboutMe>
	);
}
