const mongoose = require('mongoose')
const Connect = require('../config')


// var connectionURL = connect.connectionURL
mongoose.connect( Connect.connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
