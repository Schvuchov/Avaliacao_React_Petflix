import {ContainerMain, ContPerfis, ContDog, ImgDog1, ImgDog2, Name} from './styles.js'

import dog1 from '../../imgs/dog1.png'
import dog2 from '../../imgs/dog2.png'

export function Main() {
    return(
        <ContainerMain>
            <ContPerfis>
                <ContDog>
                    <ImgDog1 src={dog2} alt="imagem de dog para perfil1" />
                    <Name href="/pagina1">Geremias</Name>
                </ContDog>
                <ContDog>
                    <ImgDog2 src={dog1} alt="imagem de dog para perfil2" />
                    <Name href="/pagina2">Juvenal</Name>
                </ContDog>
            </ContPerfis>
        </ContainerMain>
    )
}