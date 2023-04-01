import { sequelize } from "../db/connection.mjs";
import { User } from "../models/user.model.mjs";

async function getUserByLastName(req, res) {
    const lastName = req.params.lastName;
    try {
        const user = await User.findOne({
            where: { lastName: lastName }
        });
        console.log(`Successfully found a user with last name ${lastName}`);
    } catch(e) {
        console.log('Error occured while looking for user: ', e);
    }
}

export { getUserByLastName }