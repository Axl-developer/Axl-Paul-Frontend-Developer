import React, { useEffect, useState } from 'react'
import { DataContext } from './routers/DataContext'
import { AppRouter } from './routers/AppRouter';
import { useFetch } from './hooks/useFetch';

export const MainApp = () => {

    const [Data, setData] = useState({Proyects:[],Skills:[]})

    const {state:{data:data1,loading}} = useFetch('./assets/proyects.json')

    const {state:{data:data2,loading:loading2}} = useFetch('./assets/skills.json')

    useEffect(() => {
        const data = {Proyects:data1,Skills:data2}
        setData(data)
    }, [loading,loading2])
    
    return (
        
            <>
            {
                (loading && loading2)
                    ?<h1>loading</h1>
                    :<DataContext.Provider value={{Data,setData}}>
                        <AppRouter />
                    </DataContext.Provider>
            }
            </>
    )
}
