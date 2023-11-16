import styles from "./Movies.module.css"
import React, { useState } from "react";
import Movie from "../Movie/Movie";
import DataMovie from "../../utils/constants/DataMovie";

const Movies = (props) => {

   const {item} = props



    return (
        <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Other films</h2>
            <div className={styles.movie__container}>
            {
                item.map(function(data){
                return(
                   
                    <Movie key={data.id} title={data.title} date={data.date} image={data.image} genre={data.genre}/>
                    
                )
                })
            }
            </div>
            {/* <button onClick={handleClick}>tambah</button> */}
        </section>
        </div>
    )
}
export default Movies;