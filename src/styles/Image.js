import styled, { css } from "styled-components";


const Image = styled.img`
    ${
        props => {
            if (props.alt === 'LOGO') return css`
                width: 6rem;
                height: auto;
            `
        }
    }
`

export default Image;