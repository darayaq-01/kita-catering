import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Provide the first name"],
    },
    lastName: {
      type: String,
      required: [true, "Provide the first name"],
    },
    email: {
      type: String,
      required: [true, "Provide the email address"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Provide a valid email address"],
    },
    children: [
      {
        name: { type: String },
        preferences: {
          type: "String",
          enum: ["none", "vegan", "vegetarian", "glutenSensitive"],
          default: "none",
        },
        facility: { type: String },
      },
    ],
    address: {
      street: { type: String, required: [true, "Provide a street"] },
      houseNumber: {
        type: Number,
        required: [true, "Provide the house number"],
        min: [1, "Only house numbers above 0"],
      },
      postalCode: { type: String, required: [true, "Provide the postal code"] },
      location: { type: String, required: [true, "Provide the location"] },
    },

    password: {
      type: String,
      required: [true, "Provide a password"],
      minlength: [5, "The password should be at least 8 characters"],
      // select:false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isClient: {
      type: Boolean,
      required: true,
      default: false,
    },
    // role: {
    //   type: String,
    //   enum: ["user", "client", "admin"],
    //   default: "user",
    // },
  },
  {
    timestamps: true,
  }
);

// methods - the password in the db is already hashed - now for comparison with the plain password from the input
// method called on a specific user, so the password can be accessed by this.password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// before(pre) 'save' run this function to encrypt the password - salt recommended is 12 rounds
userSchema.pre("save", async function (next) {
  // only when the password field is sent or modified, otherwise in the update section
  // it could auto generate a new hash when not excluded, so the user couldn't log in
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
