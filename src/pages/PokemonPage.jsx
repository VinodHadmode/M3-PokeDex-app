import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import {Heading,Button,Box} from "@chakra-ui/react"


const url = `https://pokeapi.co/api/v2/pokemon`

const PokemonPage = () => {
    const [data, setData] = useState([])
    const [next, setNext] = useState("")
    const [prev, setPrev] = useState("")



    const getData = (url) => {
        fetch(url).then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.results)
                setNext(data.next)
                setPrev(data.previous)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData(url)
    }, [])

    // console.log("data in state", data);

    const handleNext = () => {
        console.log("next", next);
        getData(next)
    }
    const handlePrev = () => {
        console.log("prev", prev);
        getData(prev)
    }
    return (
        <div>
            <br />  <br />
            <Heading>All Pokemon</Heading> <br />
            <Box bg='grey' w='100%' p={4} color='white' >
                
                {
                    data && data.map((el) => {
                        return <Box key={Date.now() + Math.random()} border={"1px"} w='100%' p={4} color='white'>
                            <p>Pokemon Name - {el.name}</p>
                        </Box>
                    })
                } <br />
            </Box>
            <br /> 
            <Button colorScheme='blue' onClick={handlePrev}>Prev</Button>
            <Button colorScheme='blue' onClick={handleNext}>Next</Button>
            
        </div>
    )
}

export default PokemonPage
