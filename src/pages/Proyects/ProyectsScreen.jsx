import React, { useContext } from 'react'
import { ProyectItem } from './components'
import { DataContext } from '../../routers/DataContext';
import { Proyect } from './styled-components/proyects-layout';
import { Title } from '../../styled-components';
import { Spinner } from '../../components/common/Spinner';


const container = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
    }
};

export const ProyectsScreen = () => {

    const {Data} = useContext(DataContext)


    return (
        <Proyect className="content_proyects" variants={container} initial="hidden" animate="visible">
            <Title size="h1" weight="bold" margin="mb5">Proyectos</Title>
            <div className="proyects_content">
                {
                    (!Data.loaded)
                        ?<Spinner />
                        :Data.Proyects.map( proyect => <ProyectItem key={proyect} {...proyect}/>)
                }
            </div>
        </Proyect>
    )
}
