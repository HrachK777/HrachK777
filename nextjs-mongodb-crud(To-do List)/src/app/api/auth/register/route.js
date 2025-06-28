import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import md5 from "js-md5";


export async function GET() {
	await dbConnect();
	const datas = await User.find({});
	return NextResponse.json(datas);
}

export async function POST(req) {
	const data = await req.json();
	if (data !== null) {

		await dbConnect();
		const { email, password } = data;
		const alreayExists = await User.findOne({ email });
		if (alreayExists) {
			return NextResponse.json({ status: 'fail', msg: 'already email exists.' });
		}

		const hashedpassword = md5(password);
		const user = await User.create({ email, password: hashedpassword });

		return NextResponse.json({ user, status: 'success', msg: "register success" });
		// return NextResponse.json({
		// 	id: user._id.toString(),
		// 	email: user.email,
		// 	name: user.name || user.email.split('@')[0],
		// })
	} else {
		return NextResponse.json(null);
	}
}