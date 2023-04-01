import { User } from "../models/user.model.mjs";

// delete all records in a table
await User.destroy({
    truncate: true,
    restartIdentity: true, // reset primary key
    casecase: true         // delete records in child tables with foreign-key reference
});

/* 1. build, save and create */
const user1 = User.build({  // use build() instead of new keyword to instantiate a model class
    firstName: 'Joe',
    lastName: 'Biden'
});

try {
    await user1.save();
    console.log('User has been saved to SQL database.');
} catch(e) {
    console.log('Error occurred saving user to SQL database: ', e);
}

// create = build + save
try {
    await User.create({
        firstName: 'Kamala',
        lastName: 'Harris'
    });
    console.log('User has been saved to SQL database.');
} catch(e) {
    console.log('Error occurred saving user to SQL database: ', e);
}

// toJSON() to log an instance
console.log(user1.toJSON());

/* 2. update */
// update a single property of an instance
user1.firstName = 'Hunter';

// update multiple properties of an instance
user1.set({
    firstName: 'Bill',
    lastName: 'Clinton'
});

// persist all changes made to an instance
await user1.save()

// persist a single property 'firstName'. 'lastName' in database is still 'Clinton', not 'Trump'
user1.lastName = 'Trump';

await user1.update({
    firstName: 'Hillary'
});

console.log(user1.toJSON());

/* 3. delete a record in a table */
// delete a single record 
await user1.destroy();

/* 4. reload an instance */
const user2 = User.build({
    firstName: 'Tom',
    lastName: 'Smith'
});
await user2.save();

user2.firstName = 'Jack';
user2.reload(); 
console.log(user2.firstName) // 'Tom'

// await sequelize.close();


