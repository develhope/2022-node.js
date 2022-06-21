import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./sqlite3-example.db");

db.serialize(() => {
    db.run("CREATE TABLE planets (name TEXT)");

    const statement = db.prepare("INSERT INTO planets VALUES (?)");

    for (let i = 1; i <= 10; i++) {
        statement.run(`Planet ${i}`);
    }

    statement.finalize();

    db.each("SELECT rowid AS id, name FROM planets", (error, row) => {
        console.log(row.id + ": " + row.name);
    });
});

db.close();
