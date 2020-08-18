const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const boardRouter = require('./routes/board.route');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended:  true}));
app.use(express.json({limit: 5 * 1024 * 1024}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/board', boardRouter);

app.use(function(req, res, next) {
  next(createError(404));
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err: {};

  res.status(err.status || 500);
  res.send('error');
})

module.exports = app;
