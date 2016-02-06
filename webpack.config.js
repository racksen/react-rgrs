module.exports ={
  entry : "./js/App.jsx",
  output : {
    path : __dirname + "/public",
    filename : "bundle.js"
  },
  module:{
    loaders: [
      { test: [/\.jsx$/, /\.js$/], exclude: /node_modules/, loader: "react-hot!babel"}
    ]
  }
};
