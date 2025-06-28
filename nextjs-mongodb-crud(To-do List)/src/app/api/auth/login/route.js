import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import md5 from "js-md5";

export async function POST(req) {
	try {
    const { email, password } = await req.json()
    await dbConnect()
    console.log('for debug login password = ', password);
    const user = await User.findOne({ email });
    console.log('for debug login user = ', user);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      )
    }

    const hashedPassword = md5(password)
    if (user.password !== hashedPassword) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Return user data without sensitive information
    return NextResponse.json({
      id: user._id.toString(),
      email: user.email,
      name: user.name || user.email.split('@')[0],
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}