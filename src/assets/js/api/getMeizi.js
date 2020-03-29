import {baseURL} from "./config";
import axios from "axios";

function getMeizi(page,count){
  return new Promise(
    function(resolve,reject){
      axios.get(baseURL+`data/category/Girl/type/Girl/page/${page}/count/${count}`)
      .then(res=>{
        resolve(res);
      })
    }
  )
};

export {
  getMeizi
}