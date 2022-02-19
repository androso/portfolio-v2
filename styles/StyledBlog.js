import styled from 'styled-components';

const Blog = styled.section`
    text-align: center;
    padding-top: var(--section-top-padding);
    margin-bottom: 100px;
    .title {
        font-size: 2rem;
    }
    .shadow-subtitle {
        margin-bottom: 40px;
    }
    .shadow-subtitle.date {
        margin-bottom: 0;
        font-size: 1rem;
        text-align: center;
    }
    .feed-head {
        display: flex;
        justify-content: center; 
        margin-bottom: 25px;
    }
    .feed-head .featured-text,
    .shadow-subtitle.date {
        width: 30%;   
    }
    .featured-text {
        display: none;
        text-align: left;
    }
    .line-divider,
    .blog__main-data {
        width: 70%;
    }
    .line-divider {
        display: inline-block;
        background-color: var(--outstanding-text);
        min-height: 2px;
        max-height: 3px;
        align-self: center;
    }
    
    .blog__post {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 15px;
        transition: background-color .3s ease;
        border-radius: 10px;
        padding: 10px 0;
    }
    .blog__post:hover {
        background-color: rgba(26, 37, 51,  1);
    }
    .blog__main-data{
        text-align: center;
    }
    .blog__title {
        font-size: 1.2rem;
        /* color: var(--outstanding-text); */
        font-weight: bold;
    }
    .blog__description {
        display: none;
    }

    @media (min-width: 700px) {
        .container {
            padding: 0 40px;
        }
        .featured-text {
            display: initial;
        }
        .blog__post {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px 30px 10px 0;
        }
        .shadow-subtitle.date {
            text-align: left;
            padding-left: 20px;
        }
        .blog__description {
            display: initial;
            color: var(--subtitle-color);
            font-size: 1rem
        }
        .blog__main-data{
            text-align: left;
        }
        .feed-head {
            justify-content: space-between; 
            padding: 0 30px 0 0;
        }
    }
    
`;
export default Blog