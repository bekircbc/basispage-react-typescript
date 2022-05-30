export type Status = 'customer' | 'employee' | 'unknown';

export interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
	isMember: boolean;
	scores: number[];
	accessGroups: string[];
	status: Status;
}

export enum PersonStatus {
	Customer,
	Employee,
	Unknown,
}
