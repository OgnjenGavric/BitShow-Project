"use strict";
const uiModule =(function() {
    const mainRow = document.querySelector("#mainRow");
    let renderHomePage  = function (arr) {
        arr.forEach(element => {
            let divShow = `<div class="card pt-3" style="width: 18rem;">
            <img src=${element.image} class="card-img-top img-thumbnail alt="...">
            <div class="card-body">
              <a href="showInfoPage.html" id="info" class="card-lin text-decoration-none"><h5 class="card-title">${element.name}</h5></a>
            </div>
            </div>`
            mainRow.innerHTML += divShow;
        });
    }
    return {
        renderHomePage,
       
    }
})()