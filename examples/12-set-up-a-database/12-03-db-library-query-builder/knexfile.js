module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./knex-example.db",
        },
        migrations: {
            tableName: "knex_migrations",
        },
        useNullAsDefault: true,
    },
};
