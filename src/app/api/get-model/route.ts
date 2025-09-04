import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(request: Request) {
  const authHeader = request.headers.get("x-model-auth");
  if (authHeader !== "your-secret-token") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), "app/models/model.obj");
    const fileContent = fs.readFileSync(filePath, "utf8");
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "private, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error reading model file:", error);
    return NextResponse.json(
      { error: "Failed to load model" },
      { status: 500 },
    );
  }
}
