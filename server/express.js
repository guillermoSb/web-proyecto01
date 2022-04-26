const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const ReactDOMServer = require("react-dom/server");
const App = require("../src/components/App");


// app.get(/\.(js|css|map|ico|png|svg|jpg|jpeg|gif|woff|woff2|mp4|webp)$/, express.static(path.resolve(__dirname, "../dist")));

app.use("*", (req, res) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), {
        encoding: "utf8",
    });

    // get HTML string from the `App` component
    let appHTML = ReactDOMServer.renderToString(<App />);

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

    // set header and status
    res.contentType('text/html');
    res.status(200);

    return res.send(indexHTML);
});

// run express server on port 9000
app.listen('9000', () => {
    console.log('Express server started at http://localhost:9000');
});