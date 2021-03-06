import {post} from "jquery";
import ServerActions from "../actions/ServerActions";

let API = {
  fetchLinks(){
    console.log("1. In API");
    post("/graphql",{
        query: `{
          links {
            _id,
            title,
            url
          }
        }`
    }).done(resp=>{
      ServerActions.receiveLinks(resp.data.links);
    });
  }
};

export default API;





// import {get} from "jquery";
// import ServerActions from "../actions/ServerActions";
// let API = {
//   fetchLinks(){
//     console.log("1. In API");
//     //Ajax request to datalink
//
//     get("/data/links").done(resp=>{
//       ServerActions.receiveLinks(resp);
//     });
//   }
// };
//
// export default API;
