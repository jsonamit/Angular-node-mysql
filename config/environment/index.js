const path = require('path');
const dotenv = require('dotenv');

const root = path.normalize(`${__dirname}/../../..`);

const env = dotenv.config({ path: path.join(root, '.env') }).parsed;


const config = {
    all: {
        env: 'development',
        port: process.env.PORT || 5000,
        ip: process.env.IP || '0.0.0.0',
        root,
    },
    development: {

    },

    staging: {

    },

    production: {

    },
};

//const conf = Object.assign(env, config.all, config[process.env.NODE_ENV || 'development']);
const conf = Object.assign(env, config.all);

module.exports = conf;
