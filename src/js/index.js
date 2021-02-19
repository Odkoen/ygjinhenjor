require("@babel/polyfill/");
import Search from "./model/Search";
import { elements } from "./view/base";
import * as searchView from "./view/searchView";


/*
web appiin tuluv
hailtiin query ur dun
tuhain uzuulj bga jor
likelsan jor
zahialj baigaa jor nairlaga
*/
  const state = {};
  const controlSearch = async() => {
    //webees hailtiin tulhuur ug gargaj awna
    const query = searchView.getInput();
    
    if(query){
       //shineer hailtiin object uusgene
       state.search = new Search(query);
        //hailt hiihed zoriulj delgetsiig beldene
        searchView.clearSearchQuery();
        searchView.clearSearchResult();
    //hailtiig guitsetgene
    await state.search.doSearch();
    //hailtiin ur dung delgetsend gargana
    if(state.search.result === undefined) alert("Food not found!");
    else searchView.renderRecipes(state.search.result);
    }
    
  }
elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});