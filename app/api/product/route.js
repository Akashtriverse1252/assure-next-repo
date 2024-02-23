import { NextResponse } from "next/server";
import db from "../../config/db";

export async function GET() {
  try {
    const [rows, fields] = await db.execute("SELECT * FROM home_collection");
    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Assuming the request body contains the data you want to insert
    const { name, email, phone } = await request.json();

    // Perform the SQL insertion using a parameterized query
    const [result] = await db.execute('INSERT INTO home_collection (name, email, phone) VALUES (?, ?, ?)', [
      name,
      email,
      phone,
    ]);

    // Check the affected rows to determine if the insertion was successful
    if (result.affectedRows === 1) {
      return NextResponse.json({ message: "Data inserted successfully" }, { status: 201 });
    } else {
      console.error("Error inserting data:", result);
      return NextResponse.json({ error: "Error inserting data" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Error processing request" }, { status: 500 });
  }
}