const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const path = require('path');

const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

// Enables use of helper functions
const hbs = exphbs.create({helpers});

const sess = {
    secret: 'Super secret secret',
    cookie: {
    // Session will expire in 60 minutes
        expires: 60 * 60 * 1000
      },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, '<folder_name>')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}. http://localhost:${PORT}`));
});