import { connectionRetries, dummyCredentials } from './config';
import { Connection, createConnection } from 'typeorm';

function initalPostgresConnection(): Promise<Connection> {
  return createConnection({
    ...dummyCredentials,
    database: 'postgres',
  });
}

module.exports = async () => {
  // Wait for database to open connection.
  console.log('Waiting for debio-postgres to resolve ⏰...');
  const mainConnection: Connection = await connectionRetries(
    initalPostgresConnection,
    40,
  );
  console.log('debio-postgres resolved! ✅');

  console.log('Building databases 🏗️...');
  await mainConnection.query(`CREATE DATABASE db_postgres;`);
  await mainConnection.query(`CREATE DATABASE db_location;`);
  await mainConnection.close();
  console.log('Database created successfully! 🏢');

  console.log('Beginning `db_postgres` migrations 🏇...');
  const dbPostgresMigration = await createConnection({
    ...dummyCredentials,
    database: 'db_postgres',
    entities: [],
    synchronize: true,
  });

  //TODO Inject Mock Data, migration To Postgres
  console.log('`db_location` migration successful! 🙌');
};
