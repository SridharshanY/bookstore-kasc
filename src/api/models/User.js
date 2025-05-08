import mongoose from "mongoose";

const user = new mongoose.Schema(
    {
        name: {
            type: String
        },
        username: {
            type: String
        },
        dob: {
            type: Date
        },
        phone: {
            type: String
        },
        email: {
            typpe: String
        },
        password: {
            type: String
        }
    }
)

const User = mongoose.model('User', user)

export default User