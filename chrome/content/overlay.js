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
      if(e.ctrlKey == true)
        this.newTab(myURL, true);
      else
        this.newTab(myURL, false);
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
		//var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

		//if (prefManager.getIntPref("extensions.leo_search.reuse_tab") == 0) {
			var browser = top.document.getElementById("content");
			var newtab = browser.addTab(decodeURIComponent(url), {relatedToCurrent: true});
			if (foregroundTab) {
				browser.selectedTab = newtab;
			}
		//} else {
		//	this.openOrReuseTab("extensions.leo_search.resultTab", url, foregroundTab);
		//}
	},
	// Taken from https://developer.mozilla.org/en-US/docs/Code_snippets/Tabbed_browser
	openOrReuseTab: function(attrName, url, foregroundTab) {
		var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"]
							.getService(Components.interfaces.nsIWindowMediator);
		for (var found = false, index = 0, tabbrowser = wm.getEnumerator('navigator:browser').getNext().gBrowser;
			index < tabbrowser.tabContainer.childNodes.length && !found;
			index++) {

			var currentTab = tabbrowser.tabContainer.childNodes[index];

			if (currentTab.hasAttribute(attrName)) {
				found = true;
				gBrowser.getBrowserAtIndex(index).loadURI(url);

				if (foregroundTab) {
					tabbrowser.selectedTab = currentTab;
					tabbrowser.ownerDocument.defaultView.focus();
				}
			}
		}
		if (!found) {
			var browserEnumerator = wm.getEnumerator("navigator:browser");
			var tabbrowser = browserEnumerator.getNext().gBrowser;

			var newTab = tabbrowser.addTab(url);
			newTab.setAttribute(attrName, "leoOrg");

			if (foregroundTab) {
				tabbrowser.selectedTab = newTab;
				tabbrowser.ownerDocument.defaultView.focus();
			}
		}
	}
};

window.addEventListener("load", leo_search.onFirefoxLoad, false);
window.addEventListener("load", leo_search.onLoad, false);
