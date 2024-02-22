import { Experience } from "~/typing";

export const fetchExperiences =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,{next:{revalidate:100}});
    const data = await res.json();
    const experiences:Experience[]=data.res;
   
    return experiences
}