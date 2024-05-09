import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
  },
  password: String,
  verified: { type: Boolean, default: false },
});

const User = models.User || model("User", UserSchema);

export default User;
