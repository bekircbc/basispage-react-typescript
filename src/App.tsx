import { useState } from 'react';
import { IPerson, PersonStatus } from './data/interfaces';
import './App.scss';

const person: IPerson = {
	firstName: 'Georg',
	lastName: 'Deckner',
	age: 34,
	isMember: true,
	scores: [95, 80, 85],
	accessGroups: ['admins', 'backupAdmins'],
	status: 'customer',
};

function App() {
	const [count, setCount] = useState(0);
	setCount(23);
	return (
		<div className="App">
			<p>
				{person.status === 'customer' && (
					<p>
						The person {person.firstName} {person.lastName} is
						{person.age} years old. Their scores are :
						{person.scores.join(',')} and his status is:
						{person.status}
					</p>
				)}
			</p>
		</div>
	);
}

export default App;
