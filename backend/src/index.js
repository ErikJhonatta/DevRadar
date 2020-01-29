const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const cors = require('cors');
const http = require('http');
const { setupWebSocket } = require('./webSocket')


const app = express();
const server = http.Server(app);

setupWebSocket(server);


mongoose.connect('mongodb+srv://ErikJhonatta:SenhaDatabase@semanaomnistack-2ots2.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);