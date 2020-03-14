import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState';


const Home = () => {

    const initialState = useInitialState(API); 
    return initialState.length ===0 ? <h1>Loaging</h1> : (
        <>
            <Search />

            {initialState.mylist.length > 0 &&

                (<Categorias title="Mi lista">
                    <Carrusel>
                        <ItemCarrusel />
                    </Carrusel>
                </Categorias>)
            }

            <Categorias title="Tendencias">
                <Carrusel>
                    {initialState.trends.map(item =>
                        <ItemCarrusel key={item.id} {...item}/>
                    )}
                </Carrusel>
            </Categorias>

            <Categorias title="Originales de PlatziVideo">
                <Carrusel>
                    {initialState.originals.map(item =>
                        <ItemCarrusel key={item.id} {...item}/>
                    )}
                </Carrusel>
            </Categorias>

        </>);

}

export default Home; 