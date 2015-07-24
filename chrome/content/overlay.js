var leo_search = {
  onLoad: function() {
    this.initialized = true;
    this.strings = document.getElementById("leo_search-strings");
  },
  onSearchCommand: function(e, lang, sitelang) {
    // evil but done in one line... ;)
    var query = window._content.window.getSelection();
    if(query != null) 
    {
      var url = "http://dict.leo.org/" + lang + "de?lang=" + sitelang + "&search=" + query;
      if(e.ctrlKey == true)
        this.newTab(url, true);
      else
        this.newTab(url, false);
    }
  },
  onFirefoxLoad: function(event) {
    document.getElementById("contentAreaContextMenu")
            .addEventListener("popupshowing",
             function (e){ leo_search.showFirefoxContextMenu(e); }, false);
  },
  showFirefoxContextMenu: function(event) {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                          .getService(Components.interfaces.nsIPrefService);
    prefs = prefs.getBranch("extensions.leo_search.");

    if(!prefs.getBoolPref("boolende") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-en-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-en-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolesde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-es-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-es-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolfrde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-fr-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-fr-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolchde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-ch-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-ch-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolitde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-it-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-it-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolrude") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-ru-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-ru-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolplde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-pl-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-pl-de").hidden = false;
    }
    if(!prefs.getBoolPref("boolptde") || !gContextMenu.isTextSelected) {
      document.getElementById("context-leo_search-pt-de").hidden = true;
    } else {
      document.getElementById("context-leo_search-pt-de").hidden = false;
    }
  },
  newTab: function(url, foregroundTab) {
		var browser = top.document.getElementById("content");
		var newtab = browser.addTab(decodeURIComponent(url), {relatedToCurrent: true});
		if (foregroundTab) {
			browser.selectedTab = newtab;
		}
	}
};

window.addEventListener("load", leo_search.onFirefoxLoad, false);
window.addEventListener("load", leo_search.onLoad, false);
