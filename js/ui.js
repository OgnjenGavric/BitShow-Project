const uiModule = (function () {
    const mainContentWrapperEl = document.querySelector('#main-content');
    const searchDropdownEl = document.querySelector('#search-dropdown');

    const renderHomePage = (shows) => {
        let html = `
              <h1 class="m-3">All TV Shows</h1>
              <div id="show-list" class="row">
          
          `;

        shows.forEach((show) => {
            html += `
        <div class="col-md-4">
          <div class="show-item card mb-4 box-shadow" id="${show.id}">
            <img src="${show.coverUrl}" class="card-img-top" alt="${show.name}" style="max-height: 550px; width: 100%; display: block;"/>
            <h2 class="m-3">${show.name}</h2>
          </div>
              </div>
              `;
        });

        html += `</div>`;
        mainContentWrapperEl.innerHTML = html;
    };

    const renderSingleTvShowPage = (show) => {
        let castListHtml = '';
        show.cast.forEach((string) => {
            castListHtml += `
        <div class="cast-item">${string}</div>
        `;
        });
        let seasonList = '';
        show.seasons.forEach(({ startDate, endDate }) => {
            seasonList += `
        <div class="season-item">${startDate} - ${endDate}</div>
        `;
        });
        const finalHtml = `
      <div class="row m-3">
        <div class="col-md-4">
          <div class="p-5 rounded-3">
            <img class="card-img-top" src="${show.coverUrl}" alt="${show.name}" />
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-5 bg-light border rounded-3">
            <div class="card-body">
              <h2 class="card-title">${show.name}</h2>
              <div class="card-text">
                <h3>Seasons</h3>
                ${seasonList}
              </div>
              <div class="card-text">
                <h3>Cast</h3>
                ${castListHtml}
              </div>
              <div class="card-text">${show.summary}</div>
            </div>
            <a href="/" class="btn btn-outline-secondary" type="button">
              Home
            </a>
          </div>
        </div>
      </div>
      `;
        mainContentWrapperEl.innerHTML = finalHtml;
    };

    const renderSearchDropdown = (shows) => {
        shows.forEach((show) => {
            const itemEl = document.createElement('div');
            itemEl.setAttribute('id', show.id);
            //itemEl.classList.add('form-control');
            itemEl.classList.add('search-item');
            itemEl.textContent = show.name;
            searchDropdownEl.appendChild(itemEl);
        });
    };

    const clearDropdown = () => {
        searchDropdownEl.innerHTML = '';
    };
    return { renderHomePage, renderSearchDropdown, clearDropdown, renderSingleTvShowPage };
})();