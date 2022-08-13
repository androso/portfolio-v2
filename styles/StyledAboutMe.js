import styled from "styled-components";

const StyledAboutMe = styled.section`
	padding-top: var(--section-top-padding);
	/* margin-bottom: var(--md-margin-bottom); */
	color: #fafafa;

	.container {
		padding: 0 40px;
	}
	.about__title {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 25px;
	}
	.about__text:first-of-type {
		margin-bottom: 8px;
	}
	.about__goals-list {
		padding-left: 40px;
		margin-bottom: 8px;
	}
	.highlighted-paragraph {
		color: var(--outstanding-shadow-text);
		font-weight: 500;
	}

`;
export default StyledAboutMe;
