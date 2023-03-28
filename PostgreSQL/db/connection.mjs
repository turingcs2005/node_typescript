import { Sequelize } from "sequelize";
import dotenv from "dotenv"; 
dotenv.config();

const { POSTGRESQL_USER, POSTGRESQL_DATABASE, POSTGRESQL_PASSWORD } = process.env;

// connect to PostgreSQL database 
const PostgreSQL_Connection_String = `postgres://${POSTGRESQL_USER}:${POSTGRESQL_PASSWORD}@localhost:5432/${POSTGRESQL_DATABASE}`;
const sequelize = new Sequelize(PostgreSQL_Connection_String, {
    logging: false
});

async function connectToPostgreSQL() {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to PostgreSQL database!');
    } catch (e) {
        console.log('Error occured while trying to connect PostgreSQL database: ', e);
    }
}

connectToPostgreSQL();

export { sequelize };