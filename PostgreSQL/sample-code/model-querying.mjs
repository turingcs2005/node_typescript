import { sequelize } from "../db/connection.mjs";
import { Op } from "sequelize";
import { User } from "../models/user.model.mjs";

// delete all records in a table
await User.destroy({
    truncate: true,
    restartIdentity: true, // reset primary key
    casecase: true         // delete records in child tables with foreign-key reference
});

/* 1. insert many records */
await User.bulkCreate([
    { firstName: 'Claire', lastName: 'Wang' },
    { firstName: 'Kyle', lastName: 'Olsen' },
    { firstName: 'Panelope', lastName: 'Sanders' },
]);

const allUsers = await User.findAll();
allUsers.forEach( x => { console.log(x.toJSON()) } );

/* 2. delete records */
await User.destroy({
    where: { 
        [Op.and]: [
            { firstName: 'Bill' },
            { lastName: 'Clinton' }
        ]
    }
});

/* 3. load many record */
const someUsers = await User.findAll({
    attributes: ['lastName'],   // select fields to load
    where: {
        [Op.or]: [
            {firstName: 'Claire'},
            {lastName: 'Sanders'}
        ]
    }
});

someUsers.forEach( x => { console.log(x.toJSON())});

/* 4. load first record meeting criteria */
const oneUser = await User.findOne({
    where: { firstName: 'Claire' }
});

console.log(oneUser.toJSON());

/* 5. find or create (if not found) */
const [user, created] = await User.findOrCreate({  // created: boolean, indicating whether the instance was just created (if none was found)
    where: { firstName: 'Leanne' },
    defaults: {    // data values to be saved if none was found
        firstName: 'Josh',
        lastName: 'Hsieh'
    }
});

console.log(created); // true
console.log(user.toJSON());

/* 6. raw query */
// raw queries are dialect-specific. postgresql queries won't work on an MS SQL database
// raw queries do not associate returned data with a model
const rawQueryResult = await sequelize.query( 'SELECT * FROM public."Users"' ); // schema name must be prefixed to table name
const rawUsers = rawQueryResult[0]; // first element of returned array houses data array
rawUsers.forEach(x => {console.log(x)});