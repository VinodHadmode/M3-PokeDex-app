import React from 'react'
import { Routes, Route } from "react-router-dom"
import PokemonPage from '../pages/PokemonPage'
import Types from '../pages/Types'
import Favourites from '../pages/Favourites'
import ViewDetails from '../pages/ViewDetails'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PokemonPage />} />
            <Route path='/types' element={<Types />} />
            <Route path='/favorites' element={<Favourites />} />
            <Route path='/pokemon/:{name}' element={<ViewDetails />} />
            <Route path='/types/:{id}' element={<ViewDetails />} />

            <Route path='*' element={<h2>Page not found</h2>} />
        </Routes>
    )
}

export default AllRoutes
