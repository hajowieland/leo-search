function leo_search() 
{
  var query = window._content.document.getSelection();
  if(query != null) 
  {
    var myURL = "http://dict.leo.org/?lp=ende&lang=de&searchLoc=0&cmpType=relaxed&relink=on&sectHdr=on&spellToler=std&search=" + query;
    openNewTabWith(myURL, null, null, true);
  }
}

/*
function hide_show_meuitem() 
{
  var query = window._content.document.getSelection();
  if(query != null)
  {
    document.getElementById("leo_search").hidden = false;
  } 
  else
  {
    document.getElementById("leo_search").hidden = true;
  }
}
*/

