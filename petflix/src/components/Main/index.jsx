import {ContainerMain, ContPerfis, ContDog, ImgDog1, ImgDog2, Name} from './styles.js'

import dog1 from '../../imgs/dog1.jpeg'
import dog2 from '../../imgs/dog2.jpeg'

export function Main() {
    return(
        <ContainerMain>
            <ContPerfis>
                <ContDog >
                    <ImgDog1 src={dog1} alt="imagem de dog para perfil1" />
                    <Name href="/Avaliacao_React_Petflix/pagina1">Milton</Name>
                </ContDog>
                <ContDog>
                    <ImgDog2 src={dog2} alt="imagem de dog para perfil2" />
                    <Name href="/Avaliacao_React_Petflix/pagina2">Mayara</Name>
                </ContDog>
            </ContPerfis>
        </ContainerMain>
    )
}