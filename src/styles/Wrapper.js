import styled, {css} from "styled-components";


const Wrapper = styled.div`

    width: 98vw;
    height: 5rem;

    ${
        props => {
            switch (props.id) {
                case 'navbar':
                    return css`
                        position: fixed;
                        background: rgba(255, 255, 255, 0.8);
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    `
                case 'menu':
                    return css`
                        display: flex;
                        flex-direction: row;
                        justify-content: end;
                    `
                case 'header':
                    return css`
                        height: 100vh;
                    `
                case 'main':
                    return css`
                        height: 100vh;
                    `
                case 'footer':
                    return css`
                        height: 10vh;
                    `
                default:
                    break;
            }
        }
    }

`

export default Wrapper;