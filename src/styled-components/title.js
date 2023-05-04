import styled from "styled-components";
import {variant} from 'styled-system'

export const Title = styled('div')(
    {
        color:'white'
    },
    variant({
        prop:'size',
        variants:{
            h1:{
                fontSize: '2em'
            },
            h2:{
                fontSize: '25px'
            }
        }
    }),
    variant({
        prop:'align',
        variants:{
            center:{
                textAlign: 'center'
            }
        }
    }),
    variant({
        prop:'weight',
        variants:{
            light:{
                fontWeight: '300'
            },
            bold:{
                fontWeight: 'bold'
            },
            mb2:{
                marginBottom: '20px'
            }
        }
    }),
    variant({
        prop:'margin',
        variants:{
            mb2:{
                marginBottom: '20px'
            },
            mb5:{
                marginBottom: '50px'
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