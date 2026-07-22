// import { PrismaClient } from "@prisma/client";

import { Prisma, PrismaClient } from "@prisma/client"

// export const prisma = new PrismaClient();

// export async function checkDatabaseConnection() : Promise<boolean> {
//     try{
//         await prisma.$queryRaw`select 1`;
//         return true
//     } catch (error) {
//         console.error(`database connection failed : ${error}`)
//         return false
//     }
// }



// for practice


export async function databaseConnection() : Promise<boolean> {
    
    const prisma = new PrismaClient();

    try{
        await prisma.$queryRaw`select 1`
        return true;
    } catch(error) {
        console.error(`database connection failed, ${error}`)
        return false
    }

}