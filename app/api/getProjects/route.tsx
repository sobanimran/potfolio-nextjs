import { NextResponse } from "next/server";
import { client } from "~/sanity/lib/client";
import { Project } from "~/typing";

export  async function GET (request:Request){
    const res:Project[] = await client.fetch(`*[_type == "projects"]{
      ...,
      techs[]->,
        
    }`)
    
   
    
  return NextResponse.json({res})
}