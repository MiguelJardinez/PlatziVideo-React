import React from 'react';
import PropTypes from 'prop-types'
import '../assets/styles/components/ItemCarrusel.scss'; 
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';

const ItemCarrusel = ({ cover, title, year, contentRaiting, duration }) => (

    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={PlayIcon} alt="Play Icon" /> 
            <img className="carousel-item__details--img" src={PlusIcon} alt="Plus Icon" /> 
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{`${year} ${contentRaiting} ${duration}`}</p>
        </div>
      </div>

);

ItemCarrusel.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number
}
 
export default ItemCarrusel;