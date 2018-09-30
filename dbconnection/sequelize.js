const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const url = require('url');
const pkg = require('../package.json');

const root = path.normalize(`${__dirname}/../..`);
const envFile = path.join(root, '.env');
let config = {};
const { log } = console;
let env = {};
if (fs.existsSync(envFile)) {
    env = dotenv.config({ path: envFile });
    process.env.DEBUG = env.parsed.DEBUG;
    config = env.parsed || env;
} else {
  //   log(`.env file not found.
  // Please create manually or visit http://localhost:3000
  // Learn more at check installation docs at https://github.com/shoppre/api/blob/${pkg.version}/docs/Installation.md
  // Trying to connect with default settings.
  // `);
}

process.env.NODE_ENV = config.NODE_ENV || process.env.NODE_ENV || 'production';

const conn = url.parse(config.MYSQL);
const [username, password] = conn.auth.split(':');

const [host, port] = conn.hostname.split(':');
const settings = {
    database: conn.pathname.slice(1) || 'test_node',
    username: username || 'root',
    password: password || '',
    dialect: 'mysql',
    host: host || '127.0.0.1',
    port: port || 3306,
    seederStorage: 'sequelize',
};

module.exports = {
    development: settings,
    test: settings,
    production: settings,
};
