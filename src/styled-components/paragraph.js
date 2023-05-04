import styled from "styled-components";
import {variant} from 'styled-system'

export const P = styled('p')(
    {
        color:'white'
    },
    variant({
        prop:'size',
        variants:{
            20:{
                fontSize: '20px'
            }
        }
    }),
    variant({
        prop:'color',
        variants:{
            grey:{
                color: 'grey'
            }
        }
    })
)