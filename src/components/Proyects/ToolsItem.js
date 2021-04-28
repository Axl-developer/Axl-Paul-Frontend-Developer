import { motion } from 'framer-motion'
import React from 'react'

export const ToolsItem = ({T,cont}) => {
    
    const {name,logo} = T

    return (
        <motion.div className="Tools_Item" drag dragConstraints={cont}>
            <h2>{name}</h2>
            <div className="Tools_img_content">
                <img src={`https://axl-developer.github.io/Axl-Paul-Frontend-Developer/assets/logos/${logo}`} alt={name}/>
            </div>
        </motion.div>
    )
}
