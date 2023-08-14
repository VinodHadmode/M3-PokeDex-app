import React from 'react'
import { Box, Center,UnorderedList,ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <Box >
                <UnorderedList  bg="teal" color='white'>
                    <div>
                        <ListItem border={"1px solid black"}>
                            <Link to="/">Pokémon Page</Link>
                        </ListItem>
                    </div>
                    <div>
                        <ListItem border={"1px solid black"}>
                            <Link to="/types">Types Page</Link>
                        </ListItem>
                    </div>

                    <div>
                        <ListItem border={"1px solid black"}>
                            <Link to="/favorites">Favorites Page</Link>
                        </ListItem>
                    </div>

                </UnorderedList>

            
        </Box>
    )
}

export default Home
