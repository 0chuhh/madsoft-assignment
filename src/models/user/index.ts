export interface UserCredentials {
    username:string;
    password:string;
}

export type Gender = "male" | "female";

export interface IUser {
    id:number;
    first_name:string;
    last_name:string;
    gender:Gender;
}
