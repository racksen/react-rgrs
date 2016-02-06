# React, Graphql, Relay - Demo
This demo project contain fully working simple React App with following Libs
- React, React Router, and Flux for ultra-responsive UI development
- Express to host Graphql API interface
- Graphql to fetch and mutate the data for the model
- Webpack for bundling  

##To get started:  
1. Install [NodeJS](http://www.nodejs.org)  
2. Download this [repo](https://github.com/racksen/react-rgrs.git)
3. Create your [Mongolab](https://mongolab.com/) repository as `rgrs` and collection as `links` with following document structure.
- `
{
    "title": "ThiramSoft",
    "url": "http://www.thiramsoft.com"
}
`
4. Copy the Mongolab url and create environment vairable as "MONGOLAB_RGS_URL"
5. If you're using windows, make sure you've installed VC++ runtime distributions to use kerberos
6. Open the command line of your choice and cd to the root directory of this repo on your machine  
7. `npm install` - Installs packages
8. `npm start` or `babel-node server.js` - Builds the express project.
9. Open another command line and run `webpack -wd` to build the jsx and js modules.
10. Open browser and navigate to [http://localhost:3000/](http://localhost:3000/).
11. You can see the list of links shown up.
