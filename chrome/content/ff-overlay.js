leo_search.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("ipopupshowing",
           function (e){ leo_search.showFirefoxContextMenu(e); }, false);
};

leo_search.showFirefoxContextMenu = function(event) {
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
};

window.addEventListener("load", leo_search.onFirefoxLoad, false);
