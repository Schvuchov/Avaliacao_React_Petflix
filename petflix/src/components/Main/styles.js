import styled from "styled-components";

export const ContainerMain = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContPerfis = styled.div`
    height: 300px;
    width: 600px;
    display: flex;
    justify-content: space-around;
`

export const ContDog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const ImgDog1 = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 30px;

`
export const ImgDog2 = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid black;
    border-radius: 30px;
`

export const Name = styled.a`
    color: #E50914;
    text-decoration: none;
    margin-bottom: 10px;
    font-size: 1.4em;
    font-weight: bold;
    &:hover {
        color: white;
        font-size: 1.6em;
        transition: 0.6;
    }
`