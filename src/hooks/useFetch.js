import { useEffect, useState } from "react"
import { getSkills } from "../helpers/getSkills"


export const useFetch = (url) => {

    const [state, setstate] = useState({data:null, loading:true, error:null})

    useEffect(() => {
        getSkills(url)
        .then(skill =>{
            setTimeout(() => {
                setstate({
                    data:skill,
                    loading:false
                })
            }, 1500);
        }).catch(err => {
            window.location = '/home'
        })
    }, [url])

    return {state};
}
