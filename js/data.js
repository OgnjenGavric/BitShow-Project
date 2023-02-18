"use strict";
const dataModule =(function() {
  class TvShow {
    constructor(id, name, rating, image) {
      this.id = id;
      this.name = name;
      this.rating = rating;
      this.image = image;
    }
  }

  class DetailedShow extends TvShow {
    constructor(id, name, image, castList, seasonsList, description) {
      super(id, name, image);
      this.castList = castList;
      this.seasonsList = seasonsList;
      this.description = description
    }
  }

  class Season {
    constructor(startDate, endDate) {
      this.startDate = startDate,
      this.endDate = endDate
    }
  }

  const getShows = () => {
    return fetch("https://api.tvmaze.com/show")
      .then(response => response.json()) 
      .then(shows => {
        const allShows = [];
        shows.map(show => {
          const createdShow = new TvShow(show.id, show.name, show.rating.average, show.image.original);
          allShows.push(createdShow);
        })
        allShows.sort((a,b) => b.rating - a.rating);
        const top50 = allShows.slice(0,50);
        return top50;
      })
  }

  const searchShow = (input) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(response => response.json())
      .then(data => data.slice(0, 10).map(({ show }) => {
          const { name, id, image } = show;
          const imageSearch = image ? image.original : "";
          return new TvShow(name, id, imageSearch);
        })
      )
  }

  return {
    getShows,
    searchShow
  }

})()