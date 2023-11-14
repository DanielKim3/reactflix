import React from "react";
import PropTyeps from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototypes = {
  id: PropTyeps.number.isRequired,
  year: PropTyeps.number.isRequired,
  title: PropTyeps.string.isRequired,
  summary: PropTyeps.string.isRequired,
  poster: PropTyeps.string.isRequired,
};

export default Movie;
