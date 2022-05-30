import { useState } from 'react';
import './App.scss';

enum PersonStatus {
	Employee,
	Customer,
	Unkown,
}

interface IPerson {
	firstName: string;
	lastName: string;
	age: number;
	isMember: boolean;
	scores: number[];
	accessGroups: string[];
	status: PersonStatus;
}

const person: IPerson = {
	firstName: 'Georg',
	lastName: 'Deckner',
	age: 34,
	isMember: true,
	scores: [95, 80, 85],
	accessGroups: ['admins'],
	status: PersonStatus.Employee,
};

function App() {
	const [count, setCount] = useState(0);
	setCount(23);
	return (
		<div className="App">
			<p>
				The person {person.firstName} {person.lastName} is {person.age}{' '}
				years old. Their scoes are:{person.scores.join(',')}
			</p>
		</div>
	);
}

export default App;
