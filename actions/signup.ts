"use server";

import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function UserSignup(user: any) {
  console.log("UserSignup", user);

  // await dbConnect();

  // try {
  //   const user = await User.create(values);
  //   return user;
  // } catch (error: any) {
  //   throw new Error(error.message);
  // }
}
