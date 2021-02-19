require("@babel/polyfill/noConflict");
import axios from "axios";
async function doSearch(search) {
  try {
    let result = await axios(
      "https://forkify-api.herokuapp.com/api/search?q=" + search
    );
    const a = result.data.recipes;
    console.log(a);
    result = await axios(
      "https://forkify-api.herokuapp.com/api/get?rId=" + a[1].recipe_id
    );
    console.log(result);
  } catch (error) {
    alert("aldaa: " + error);
  }
}
doSearch("pizza");
