import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method !== 'POST'){
        return res.status(405).json({message: 'Method not allowed'});
    }

    try{
        const {name, contact, location } = req.body;

        if(!name || !contact || !location){
            return res.status(400).json({message: 'Name, contact and location are required'});
        }

        const submission = await prisma.submission.create({
            data: {
                name,
                contact,
                location
            }
        });

        res.status(201).json(submission);
    }catch(error){
        console.error(error);
        res.status(500).json({message: 'Something went wrong'});
    }finally{
        await prisma.$disconnect();
    }
}