import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import More from './More/More';
import Preloader from '../Preloader/Preloader';
import { useSelector } from 'react-redux';

function Movies({
    loggedIn,
    onClick,
    isOpen,
    movies,
    saveMovies,
    more,
    setMore,
    setMovies,
    checked,
    setChecked,
    checkedYes,
    setPreloader,
    preloader,
    list,
    setList,
    preloaderNotFound,
    setPreloaderNotFound,
    preloaderSearch,
    setPreloaderSearch,
    preloaderError,
    setPreloaderError,
    setCounter,
    counter
}) {
    const movie = useSelector(state => state.movie.movie);
    return (
        <section className={isOpen ? 'movies_noScroll' : 'movies'}>
            <Header loggedIn={loggedIn} movie={movie} onClick={onClick} />
            <SearchForm setMovies={setMovies}
                movies={movies}
                checked={checked}
                setChecked={setChecked}
                movie={movie}
                setPreloader={setPreloader}
                setList={setList}
                setPreloaderNotFound={setPreloaderNotFound}
                setPreloaderSearch={setPreloaderSearch}
                setPreloaderError={setPreloaderError}
                setMore={setMore}
                setCounter={setCounter} />
            <Preloader preloader={preloader} preloaderNotFound={preloaderNotFound} preloaderSearch={preloaderSearch} preloaderError={preloaderError} />
            <MoviesCardList movie={movie} movies={movies} saveMovies={saveMovies} list={list} />
            <More more={more} setCounter={setCounter} counter={counter} setMovies={setMovies} />
            <Footer />
        </section>
    );
}

export default Movies;