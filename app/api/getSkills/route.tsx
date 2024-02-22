import { NextResponse } from "next/server";
import { client } from "~/sanity/lib/client";
import { Skill } from "~/typing";

export  async function GET (request:Request){
    const res:Skill[] = await client.fetch(`*[_type == "skill"]`)
    
   
    
  return NextResponse.json({res})
}