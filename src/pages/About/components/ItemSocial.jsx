import React from 'react'

export const ItemSocial = (social) => {
    
    return (
        <a href={social.url} target="_blank" rel="noopener noreferrer">
            <li>
                <i className={`${social.class}`} aria-hidden="true"></i>
            </li>
        </a>
    )
}
