import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  name: string;
  email: string;
  address: string;
  country: string;
  reference: string;
  pets_count: string;
  pets_types: string[];
}

const UserSchema = new mongoose.Schema<Users>({
  name: {
    type: String,
    required: [true, "No name found in the registration process."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "No email found in the registration process."],
    maxlength: [60, "Email cannot be more than 60 characters"],
  },
  address: {
    type: String,
    required: [true, "No address found in the registration process."],
    maxlength: [150, "Address cannot be more than 150 characters"],
  },
  country: {
    type: String,
    required: [true, "No country found in the registration process."],
    maxlength: [60, "Country cannot be more than 60 characters"],
  },
  reference: {
    type: String,
    required: [true, "No reference found in the registration process."],
    maxlength: [60, "Reference cannot be more than 60 characters"],
  },
  pets_count: {
    type: String,
    required: [true, "No pet count found in the registration process."],
    maxlength: [30, "Pet count cannot be more than 60 characters"],
  },
  pets_types: [
    {
      type: String,
      required: [true, "No pet type found in the registration process."],
      maxlength: [10, "Pet type cannot be more than 60 characters"],
    },
  ],
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
