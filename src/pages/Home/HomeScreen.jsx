import React from 'react'
import { Fox, Greet } from './components'
import { Home,Content } from './styled-components'


export const HomeScreen = () => {

    return (
        <Home id="home" animate={{opacity:1}} initial={{opacity:0}}>
            <Content>
                <Fox />
                <Greet />
            </Content>
        </Home>
    )
}
