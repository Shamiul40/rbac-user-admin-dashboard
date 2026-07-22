import { checkDatabaseConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    
    const isConnected = await checkDatabaseConnection();

    if(!isConnected) {
        return NextResponse.json(
            {
                status : "error",
                message : "Database Connection failed"

            },
            {
                status : 503 
            }
        )
    }

    return NextResponse.json(
        {
           status : "ok",
           message : "Database connected Succesfully" 
        },
        {
            status : 200
        }
    )


}