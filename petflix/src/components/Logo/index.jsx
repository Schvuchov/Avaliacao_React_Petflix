import {Container, ImgLogo} from './styles.js'

import images from '../../imgs/images.png'

export function Logo() {
    return(
        <Container>
            <ImgLogo src={images} alt='imagem logo Petflix'/>
        </Container>
    )
}