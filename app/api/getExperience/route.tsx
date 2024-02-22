import { NextResponse } from "next/server";
import { client } from "~/sanity/lib/client";
import { Experience } from "~/typing";

export  async function GET (request:Request){
    const res:Experience = await client.fetch(`*[_type == "experience"]{
   ...,
      techs[]->,
        
    }`)
    
   
    
  return NextResponse.json({res})
}