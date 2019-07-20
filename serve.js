const express = require('express');

const request = require('request');

const app = express();


app.listen(process.env.PORT, () => {
    console.log(`server is running`);
})