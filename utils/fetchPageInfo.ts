import { PageInfo } from "~/typing";

export const fetchPageInfo =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,{next:{revalidate:100}});
    const data = await res.json();
    const pageInfo:PageInfo=data.res;
    
    return pageInfo
}