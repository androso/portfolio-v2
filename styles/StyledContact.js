import styled from "styled-components";

const StyledContact = styled.section`
    .contact-links {
        display: inline-grid;
        /* background-color: red; */
        margin-top: 20px;
        margin-bottom: 100px;
    }
	a {
		color: #fafafa;
		transition: color 0.3s ease;
	}

    a svg {
        height: 1rem;
        margin-right: 5px;
    }
	a:hover {
		color: var(--outstanding-shadow-text);
	}
	.container {
		text-align: center;
	}
	.contact__title {
		font-size: 3rem;
	}
	.contact__text {
		margin-bottom: var(--sm-margin-bottom);
	}
`;
export default StyledContact;
