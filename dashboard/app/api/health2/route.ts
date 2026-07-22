import { databaseConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";


 export async function GET() {
    const isConnected= databaseConnection();

    if(!isConnected) {
        return NextResponse.json(
            {
                status : "error",
                message : "database failed"
            },
            {
                status : 503
            }
        )
    }

    return NextResponse.json(
        {
            status : "ok",
            message: "database on"
        },
        {
            status: 200
        }
    )
}