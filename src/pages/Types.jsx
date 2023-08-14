import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {Heading,Button,Box} from "@chakra-ui/react"


const url=`https://pokeapi.co/api/v2/type`
// https://pokeapi.co/api/v2/type

const Types = () => {
  const [data, setData] = useState([])
  const [next, setNext] = useState("")


  const getData = (url) => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.results)
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

  }
  const handlePrev = () => {

  }
  return (
    <div>
      <br />  <br />
            <Heading>All Pokemon Types</Heading> <br />
            <Box bg='grey' w='100%' p={4} color='white'>
                {
                    data && data.map((el) => {
                        return <Box key={Date.now() + Math.random()} border={"1px"} w='100%' p={4} color='white'>
                            <p>Pokemon Type - {el.name}</p>
                            <Link to={`/types/${1}`}>View Details</Link>
                        </Box>
                    })
                } <br />
            </Box>
    </div>
  )
}

export default Types
