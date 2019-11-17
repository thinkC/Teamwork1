const express = require('express');
const app = express();

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/feed/v1', (req, res, next) => {
    const gifA = [
        { status: 'success' },
        {
            _id: 'iy6ytey5t',
            createdOn: 'Nov 17 2019',
            title: 'My First gif',
            description: ' This gif is a flower',
            imageUrl: 'https://media.giphy.com/media/Tia2InBEWaQgckP3UG/giphy.gif',
            userId: 'abc123',
        },
        {
            _id: 'iy6yte4rtg',
            createdOn: 'Nov 17 2019',
            title: 'My Second gif',
            description: ' This gif is a house',
            imageUrl: 'http://giphygifs.s3.amazonaws.com/media/7eAvzJ0SBBzHy/giphy.gif',
            userId: 'abc123',
        }
    ]
    res.status(200).json(gifA)
})

app.use((req, res) => {
    res.json({
        'message': 'request successful'
    })
})

module.exports = app;