const express = require('express');

const request = require('request');

const app = express();

app.use(express.static('public'));

app.get("/tracking", (req, res) => {
    let trackingId = req;

    let trackingUrl =  "http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML= <TrackRequest USERID="+process.env.USERID+"> <TrackID ID="+trackingID+"></TrackID> </TrackRequest>"
    
    request(trackingUrl, (err, res, body) => {
        res.send(body);
        console.log(err);
    })

})
app.listen(process.env.PORT, () => {
    console.log(`server is running`);
})