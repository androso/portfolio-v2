import styled from "styled-components";

const StyledProjects = styled.section`
	
    text-align: center;
	
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.project__img-container {
		display: none;
	}
	.projects__title {
		font-size: 2rem;
		margin-bottom: var(--sm-margin-bottom);
	}
	.project__card {
		margin-bottom: 80px;
		padding-top: 15px;
		position: relative;
	}
	.project__title a{
		color: #e5feff;
        font-weight: 700;
		font-size: 1.5rem;
	}
	.project__title a:hover {
		text-decoration: underline;
	}
	.project__text-container {
		max-width: 300px;
		
	}
	.project__description {
		color: #bbd1d1;
		font-weight: 500;
		margin-bottom: var(--sm-margin-bottom);
	}
	.project__stack {
		color: var(--outstanding-shadow-text);
		font-weight: 400;
		margin-bottom: var(--xl-margin-bottom);
        padding: 0 10px;
	}
	.stack__item {
		margin-left: 12px;
	}
	.stack__item:first-child {
		margin-left: 0;
	}
	.project__links-container {
		display: flex;
		justify-content: flex-end;
		font-size: 25px;
	}

	.project__links-container a {
		display: flex;
		margin-left: 8px;
		color: #7d8989;
	}

	.project__background {
		z-index: -1;
		position: absolute;
		width: 108%;
		height: 110%;
		left: -12px;
		top: -13px;
		background: #272d37;
		box-shadow: 7px 9px 0px #6ab8b2a9;
		border-radius: 4px;
	}

	@media (min-width: 1024px) {
		.project__img-container {
			display: inline-block;
		}
		.project__img-container img {
			width: 400px;
			border-radius: 6px;
			margin-right: 30px;
		}
		.projects {
			text-align: left;
		}
		.project__card {
			display: flex;
		}
		.project__description {
			margin-bottom: var(--md-margin-bottom);
		}
		.project__stack {
			margin-bottom: var(--sm-margin-bottom);
		}
		.project__stack .styled-components {
			margin-left: 0;
		}
		.project__text-container {
			max-width: 369px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.project__background {
			left: 32%;
			width: 70%;
			height: 112%;
		}
	}
`;

export default StyledProjects;
