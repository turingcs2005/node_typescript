import express from "express";
const router = express.Router();
import { getUserByLastName } from "../controllers/user.controllers.mjs";

router.get('/getUserByLastName/:lastName', getUserByLastName);

export { router };
