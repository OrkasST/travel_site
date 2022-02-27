import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const SLink = styled(Link)`
    cursor: pointer;
    display: block;
    padding-top: 2rem;

    ${
        props => {
            if (props.to !== 'header') {
                return css`
                    text-align: center;
                    width: 6rem;
                    :hover {
                        border-bottom: 2px #a7421d solid;
                    }
                `
            } else {
                return css`
                    margin-left: 2rem;
                `
            }
        }
    }
`

export default SLink;