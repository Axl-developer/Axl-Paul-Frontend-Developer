import React, { useEffect, useState } from 'react'
import { DataContext } from './routers/DataContext'
import { AppRouter } from './routers/AppRouter';
import { useFetch } from './hooks/useFetch';
import { Load } from './Load2';

export const MainApp = () => {

    const [Data, setData] = useState({Proyects:[],Skills:[]})

    const {state:{data,loading}} = useFetch('./assets/data.json')

    useEffect(() => {
        if(data){
            const dataSend = {Proyects:data[1].proyects,Skills:data[0].skills}
            setData(dataSend)
        }
    }, [data])
    
    return (
        
            <>
            {
                (loading)
                    ?<Load />
                    :<DataContext.Provider value={{Data,setData}}>
                        <AppRouter />
                    </DataContext.Provider>
            }
            </>
    )
}
