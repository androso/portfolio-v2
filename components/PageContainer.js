import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from './Footer';

export default function PageContainer({ footer, children, ...customMetaData }) {
	const router = useRouter();
	const meta = {
		title: "Anibal Andrade - Software Engineer, Creator, Designer",
		description:
			"My goal is to help build products that will expand our intelligence and provide tools for people with underrepresented backgrounds",
		favicon: "/public/favicon.ico",
        image: "/public/avatar-ivvana.png",
		type: "website",
		...customMetaData,
	};
	return (
		<div className="page-wrapper">
			<Head>
				<title>{meta.title}</title>
				<meta content={meta.description} name="description" />
				<meta
					property="og:url"
					content={`https://www.anibalandrade.me${router.asPath}`}
				/>
				<link
					rel="canonical"
					href={`https://www.anibalandrade.me${router.asPath}`}
				/>
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Anibal Andrade" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@anibalandrade_" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && (
					<meta property="article:published_time" content={meta.date} />
				)}
			</Head>
            <Navbar />
            {footer && <Footer />}
		</div>
	);
}
