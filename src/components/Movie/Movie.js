import React from 'react';
import styles from './Movie.module.css'

const Movie = (props) => {
    const {title, date, image, genre }= props
    return (
                     <div className={styles.movie}>
                    <img
                    className={styles.movie__image}
                    src={image}
                    alt=""
                    />
                    <h2 className={styles.movie__title}>{title}</h2>
                    <h4 className={styles.movie__date}>{genre}</h4>
                    <p className={styles.movie__date}>{date}</p>
                </div>
    );
}

export default Movie;
