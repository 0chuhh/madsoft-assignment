import { IUser } from "models/user";

export interface ITest {
    id:number;
    name:string;
    description:string;
    active:boolean;
    time_limit:number;
    members:IUser[]
}

// export interface ITestMembers {
//     user_id:IUser['id'];
//     test_id:ITest['id']
// }