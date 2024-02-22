import { NextResponse } from "next/server";
import { client } from "~/sanity/lib/client";
import { PageInfo } from "~/typing";

export  async function GET (request:Request){
    const res:PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`)
    
   
    
  return NextResponse.json({res})
}