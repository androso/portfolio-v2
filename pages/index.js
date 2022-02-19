import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PageContainer, Projects, Hero, AboutMe, Contact, Blog } from "../components";
import { GlobalStyle } from "../styles";
import styled from "styled-components";
import { useState } from "react";

const Separator = styled.hr`
	border: none;
	height: 2px;
	background: var(--outstanding-shadow-text);
	opacity: 0.2;
`;

export default function Home() {
  const [navIsOpen, setNavIsOpen] = useState(null);
  
	return (
		<>
			<GlobalStyle 
        bodyOverflow={navIsOpen ? "hidden": "visible"}
      />
			<PageContainer 
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
      >
				<Hero 
					title="Hey, I'm Anibal"
					subtitle="Software Engineer && Content Creator"
				/>
				<Separator />
				<AboutMe />
				<Projects/>
				<Separator />
				<Blog
					
				/>
				<Separator />
				<Contact />
			</PageContainer>
		</>
	);
}