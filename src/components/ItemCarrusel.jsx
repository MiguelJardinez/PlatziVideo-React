import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/ItemCarrusel.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png'
import { Link } from 'react-router-dom';

const ItemCarrusel = (props) => {

  const { id, cover, title, year, contentRaiting, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, contentRaiting, duration
    })
  }

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  }


  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="" />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={PlayIcon}
              alt="Play Icon"
            />
          </Link>

          {
            isList ?

              <img
                className="carousel-item__details--img"
                src={RemoveIcon}
                alt="Remove icon"
                onClick={() => handleDeleteFavorite(id)}
              />
              :

              <img
                className="carousel-item__details--img"
                src={PlusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
          }

        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRaiting} ${duration}`}</p>
      </div>
    </div>

  )
};

ItemCarrusel.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number
}

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}

export default connect(null, mapDispatchToProps)(ItemCarrusel);