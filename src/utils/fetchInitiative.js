export async function fetchInitiativeById(id) {
	console.log('ENV URL (byId):', process.env.NEXT_PUBLIC_API_URL);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/initiatives/by-id/${id}`;
	console.log('fetchInitiativeById API URL:', apiUrl);
	const res = await fetch(apiUrl);
	if (!res.ok) throw new Error('Failed to fetch initiative');
	return res.json();
}

export async function fetchInitiatives() {
	console.log('ENV URL (all):', process.env.NEXT_PUBLIC_API_URL);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/initiatives';
	const res = await fetch(apiUrl);
	console.log('API URL:', apiUrl);
	if (!res.ok) throw new Error('Failed to fetch initiatives');
	return res.json();
}
