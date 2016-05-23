module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'yumsnap'
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  }
};
