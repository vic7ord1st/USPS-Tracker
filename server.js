const express = require('express');

const request = require('request');

const xmltojson = require('xml-to-json-stream');
const xmlParser = xmltojson({attributeMode:false});

const app = express();

app.use(express.static('public'));

app.get("/tracking", (req, res) => {
    let trackingId = req.query.tracking;

     let trackingUrl =  "http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML= <TrackRequest USERID="+process.env.USERID+"> <TrackID ID="+trackingId+"></TrackID> </TrackRequest>"
    
    let result = request(trackingUrl, (err, res) => {
        return res;
    });

    let jsonOutput = xmlParser.xmltojson(result, (err, json) => {
        if(err){
            console.log("it's an error");
        }
        else{
            res.send(json);
        }
    })

})
app.listen(process.env.PORT, () => {
    console.log(`server is running`);
})