"use strict";
(function(data,ui) {
    data.getShows()
      .then(res => ui.renderHomePage(res));
  
    
  
      
})(dataModule,uiModule)