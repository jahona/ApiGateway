const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');

const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');

const app = express();

app.use(logger('dev'));
app.use(bodyparser.json({limit: 50000000}));
app.use(bodyparser.urlencoded({limit: 5000000, extended: true}));

app.use(cookieParser());
//app.use(cors({origin: 'http://localhost:3030'}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/', indexRouter);
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
