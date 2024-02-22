import { NextResponse } from "next/server";
import { client } from "~/sanity/lib/client";
import { Social } from "~/typing";

export  async function GET (request:Request){
    const res:Social[] = await client.fetch(`*[_type == "social"]`)
    
   
    
  return NextResponse.json({res})
}