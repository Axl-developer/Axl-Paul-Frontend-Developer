import styled from "styled-components";
import {variant} from 'styled-system'
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)(
    variant({
        prop:'color',
        variants:{
            greenyellow:{
                color: 'greenyellow'
            }
        }
    }),
    variant({
        prop:'margin',
        variants:{
            5:{
                marginLeft: '5px'
            }
        }
    })
)