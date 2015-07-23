var leo_search = {
  onLoad: function() {
    this.initialized = true;
    this.strings = document.getElementById("leo_search-strings");
  },
  onSearchCommand: function(e, lang, sitelang) {
    var query = window._content.window.getSelection();
    if(query != null) 
    {
      var myURL = "http://dict.leo.org/" + lang + "de?lang=" + sitelang + "&search=" + query;
      openNewTabWith(myURL, null, null, true);
    }
  }
};

window.addEventListener("load", leo_search.onLoad, false);
