import { IUser, UserCredentials } from "models/user";

type DBUser = IUser & UserCredentials;

export const users: DBUser[] = [
	{
		id: 1,
		first_name: "Mace",
		last_name: "Dowtry",
		username: "user",
		gender: "male",
		password: "pass"
	},
	{
		id: 2,
		first_name: "Julianna",
		last_name: "Janisson",
		username: "jjanisson1",
		gender: "female",
		password: "qQ2?2@f>"
	},
	{
		id: 3,
		first_name: "Mercy",
		last_name: "Kleinstein",
		username: "mkleinstein2",
		gender: "female",
		password: "zH8%v?&qLI65"
	},
	{
		id: 4,
		first_name: "Pansie",
		last_name: "Sawfoot",
		username: "psawfoot3",
		gender: "female",
		password: "lH1_O$c1&J%Uwa"
	},
	{
		id: 5,
		first_name: "Claude",
		last_name: "Eivers",
		username: "ceivers4",
		gender: "female",
		password: "jY5`D$Bt"
	},
	{
		id: 6,
		first_name: "Gamaliel",
		last_name: "Sydenham",
		username: "gsydenham5",
		gender: "male",
		password: "fL5_We$dL9%`P{Yz"
	},
	{
		id: 7,
		first_name: "Karalee",
		last_name: "Redwing",
		username: "kredwing6",
		gender: "female",
		password: "tA2.L`!@9"
	},
	{
		id: 8,
		first_name: "Joya",
		last_name: "Baudinot",
		username: "jbaudinot7",
		gender: "female",
		password: "dE1{N/%.*NdpH"
	},
	{
		id: 9,
		first_name: "Brear",
		last_name: "Remer",
		username: "bremer8",
		gender: "female",
		password: "gG7|#t&kOpe"
	},
	{
		id: 10,
		first_name: "Stefania",
		last_name: "Burniston",
		username: "sburniston9",
		gender: "female",
		password: "hK5$LwVnRj=VOH"
	}
];
