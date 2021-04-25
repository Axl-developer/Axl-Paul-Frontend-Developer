import React from 'react'

export const ToolsItem = ({T}) => {
    
    const {name,logo} = T

    return (
        <div className="Tools_Item">
            <h2>{name}</h2>
            <div className="Tools_img_content">
                <img src={`https://axl-developer.github.io/Axl-Paul-Frontend-Developer/assets/logos/${logo}`} alt={name}/>
            </div>
        </div>
    )
}
