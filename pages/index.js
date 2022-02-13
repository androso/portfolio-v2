import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PageContainer, Project, Hero} from "../components";
import { GlobalStyle } from "../styles";

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<PageContainer>
				<Hero />
			</PageContainer>
		</>
	);
}