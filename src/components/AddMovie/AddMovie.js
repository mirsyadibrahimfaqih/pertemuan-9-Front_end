import React, { useState } from 'react';
import styles from "./AddMovie.module.css";

const AddMovie = (props) => {
    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    
    const handleImage = (e) => {
        setImage(e.target.value);
    };
    

    
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleGenre = (e) => {
        setGenre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === "" && date === "") {
            alert("title dan date kosong");
        } else if (title === "") {
            alert("title kosong");
        } else if (date === "") {
            alert("date kosong");
        }else if (image ===""){
            alert("link kosong")
        } 
        else if (genre ===""){
            alert("genre kosong")
        }else {
            const movie = {
                id: 11,
                title: title,
                date: date,
                image: image,
                genre: genre, // Include the genre in the movie object
            };
            setMovies([...movies, movie]);
            alert("Movies baru telah ditambahkan")
        }
    };

    const genreOptions = ["Action","Thriller","Horror","Romance","Crime","Adventure","Mystery","Animation","Famili","Biography","History","Documentary","Wrestling","War","Music", "Comedy", "Drama", "Sci-Fi", "Fantasy", "Supsense","Short","Western","Musical","Science Fiction","Romance","Film-noir","Tv Movie","Life","Historical","School","Supernatural","Youth","Demons","News","Busines","Shounen","Mature","Psychological","Wuxia","Melodrama","Magic","Sports","Mecha","Friendship","Medical","Adult","Slice Of Life","Military","Live Action","Kids","Super Power","Shoujo","Samurai","Vampire","Game","Parody","Shounen","Seinen","Food","Investigation","Mandarin","Talk"]; // Add your list of genres

    return (
        <div className={styles.container}>
            <form className={styles.addmovie} onSubmit={handleSubmit}>
                <input className={styles.addmovie__input} id='title' type='text' value={title} onChange={handleTitle} placeholder="Masukkan judul" />
                <input className={styles.addmovie__input} id='image' type='text' value={image} onChange={handleImage} placeholder="Masukkan link" />
                <select className={styles.addmovie__input} id='genre' value={genre} onChange={handleGenre}>
                    <option value="" disabled>Pilih genre</option>
                    {genreOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <input className={styles.addmovie__input} id='date' type='date' value={date} onChange={handleDate} />
                <button className={styles.addmovie__button}>Simpan</button>
            </form>
        </div>
    );
};

export default AddMovie;
