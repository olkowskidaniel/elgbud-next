import User from "@/models/User";
import connectDB from "@/config/database";
import { hashPassword } from "@/utils/hash";

export const POST = async (req) => {
  if (req.method === "POST") {
    const newUser = await req.json();

    await connectDB();

    // Check if user exists
    const userExists = await User.findOne({ username: newUser.username });
    if (userExists) {
      return new Response("A user with the same username already exists!", {
        status: 422,
      });
    }

    // Hash Password
    newUser.password = await hashPassword(newUser.password);

    // Store new user
    const user = new User(newUser);
    await user.save();

    return new Response("User signed up successfuly", { status: 201 });
  } else {
    return new Response("Invalid method", { status: 400 });
  }
};
