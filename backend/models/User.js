import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 10,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 10,
    },
    email: {
      type: String,
      required: true,
      max: 20,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    location: String,
    card: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.createdAt
    delete returnedObject.updatedAt
    delete returnedObject.password
  }
})

const UserNobull = mongoose.model("UserNobull", UserSchema);
export default UserNobull;