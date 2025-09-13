
import mongoose from "mongoose";

import { getEnvVar } from "../utils/getEnvVar.js";




export const initMongoConnection = async () => {
    try {
        const user = getEnvVar("MONGODB_USER");
        const pwd = getEnvVar("MONGODB_PASSWORD");
        const url = getEnvVar("MONGODB_URL");
        const db = getEnvVar("MONGODB_DB");

        await mongoose.connect(`mongodb+srv://mongodb+srv://vladyslavanishchenko_db_user:E4uJf4i5QSgFJtGb@artmarvl.wko9smn.mongodb.net/?retryWrites=true&w=majority&appName=ARTMARVL`);

        console.log("Mongo connection successfully established!");

    } catch(e) {
        console.log('Error while setting up mongo connection', e);
        throw e;

    }
};
