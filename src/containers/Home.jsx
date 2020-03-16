import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel'

const Home = ({ myList, trends, originals }) => {

    return (
        <>
            <Header />
            <Search isHome />

            {myList.length > 0 &&

                (<Categorias title="Mi lista">
                    <Carrusel>
                        {myList.map(item =>
                            <ItemCarrusel
                                key={item.id}
                                {...item}
                                isList
                            />
                        )}
                    </Carrusel>
                </Categorias>)
            }

            <Categorias title="Tendencias">
                <Carrusel>
                    {trends.map(item =>
                        <ItemCarrusel key={item.id} {...item} />
                    )}
                </Carrusel>
            </Categorias>

            <Categorias title="Originales de PlatziVideo">
                <Carrusel>
                    {originals.map(item =>
                        <ItemCarrusel key={item.id} {...item} />
                    )}
                </Carrusel>
            </Categorias>

        </>);

}

const mapStateToProps = state => {

    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    };

};

export default connect(mapStateToProps, null)(Home);