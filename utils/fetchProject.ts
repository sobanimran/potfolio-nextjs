import { Project } from "~/typing";

export const fetchProjects =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,{next:{revalidate:100}});
    const data = await res.json();
    const projects:Project[]=data.res;
    
    return projects
}