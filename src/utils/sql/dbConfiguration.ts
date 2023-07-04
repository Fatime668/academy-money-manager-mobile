import { SQLiteDatabase, enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'moneyManager.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS Operation(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    note TEXT,
    amount DOUBLE,
    type TEXT,
    addDate DATE
    );`;

  await db.executeSql(query);
};


// Date
// Amount
// Category
// Note
// Type - Income, Spending