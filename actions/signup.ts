"use server";

import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function UserSignup(values: any) {
  await dbConnect();
  await User.create(values);
}
