import * as SQLite from "expo-sqlite/legacy";

const db = SQLite.openDatabase("sessions.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, user TEXT NOT NULL, token TEXT NOT NULL, nombreCompleto TEXT NOT NULL, nombreUsuario TEXT NOT NULL)",
                [],
                () => resolve(),
                (_, error) => {
                    reject(error)
                }
            );
        });
    });
    return promise
}

export const insertSession = ({user, localId, token, nombreCompleto, nombreUsuario}) => {
    const promise = new Promise((accept, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO sessions (user, localId, token, nombreCompleto, nombreUsuario) VALUES (?, ?, ?, ?, ?)",
                [user, localId, token, nombreCompleto, nombreUsuario],
                (_, result) => accept(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM sessions",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise
}

export const deleteSession = ({localId}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM sessions WHERE localId = ?",
                [localId],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise
}