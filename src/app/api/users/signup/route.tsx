import { connectToDB } from "@/configs/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    const { username, email, password } = reqBody;

    // check if user already exists
    const user = await User.findOne({ email: email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashPassword,
    }).save();

    return NextResponse.json(
      { message: "Created User successfully", success: true, user: newUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// TODO: ADD VALIDATION
