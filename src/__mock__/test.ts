import { ITest } from "models/test";
import { users } from "./user";

const tests: ITest[] = [
    {
        id: 0,
        name: 'TEST 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        active:true,
        time_limit:600,
        members:[users[0]]
    },
    {
        id: 1,
        name: 'TEST 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        active:true,
        time_limit:1200,
        members:[users[0]]
    },
];

const getTestsByUserId = (user_id:number):Promise<ITest[]> => {
    return Promise.resolve(tests.filter(t=>t.members.find(m=>m.id===user_id)));
}

const getTestByTestId = (test_id:number):Promise<ITest | null> => {
    return Promise.resolve(tests.find(t=>t.id === test_id) || null);
}

export default {
    tests,
    getTestsByUserId,
    getTestByTestId
}