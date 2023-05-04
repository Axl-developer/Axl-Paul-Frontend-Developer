import React, { useEffect, useState } from 'react'

import { DataContext } from './routers/DataContext'
import { AppRouter } from './routers/AppRouter';

import { getData } from './helpers/getData';

export const MainApp = () => {

    const [Data, setData] = useState({Proyects:[],Skills:[],loaded:false})
    
    const awaitData = async() => {

        const {proyects,skills} = await getData(`${process.env.PUBLIC_URL}/assets/data.json`)
        const dataSend = {Proyects:proyects,Skills:skills,loaded:true}
        setData(dataSend)
    }

    useEffect(() => {
        setTimeout(() => {
            awaitData()
        }, 1500);
    }, [])
    

    return (
         <DataContext.Provider value={{Data,setData}}>
            <AppRouter />
        </DataContext.Provider>
    )
}
