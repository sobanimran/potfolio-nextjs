interface SanityBody {
    _updatedAt:string;
    _createdAt:string;
    _id:string;
    _rev:string;
}
export interface Social extends SanityBody {
    _type:"social";
    title:string;
    url: string;
}
interface Image {
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    };
};
 export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address:string;
    bgInfo:string;
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;

 }
 export interface Technology extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
 }
 export interface Skill extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
 }
 export interface Project extends SanityBody {
    title : string
    _type:"projects";
    image:Image;
    linkToBuild:string
    summary:string;
    techs:Technology[];
 }
 export interface Experience extends SanityBody {
    jobTitle : string
    companyName:string
    companyImage:Image
    dateStarted:Date
    dateEnded:Date
    isWorking:boolean
    _type:"experience";
    points:string[];
    linkToBuild:string
    summary:string;
    techs:Technology[];
 }