import { Skill } from "~/typing";

export const fetchSkills =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`,{next:{revalidate:100}});
    const data = await res.json();
    const skills:Skill[]=data.res;
    
    return skills
}