import { Social } from "~/typing";

export const fetchSocials =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,{next:{revalidate:100}});
    const data = await res.json();
    const socials:Social[]=data.res;

    return socials
}