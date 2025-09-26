// Fetch a single program by ID
export async function fetchProgramById(id) {
	console.log('ENV URL (byId):', process.env.NEXT_PUBLIC_API_URL);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/programs/by-id/${id}`;
	console.log('fetchProgramById API URL:', apiUrl);
	const res = await fetch(apiUrl);
	if (!res.ok) throw new Error('Failed to fetch program');
	return res.json();
}

// Fetch all programs
export async function fetchPrograms() {
	console.log('ENV URL (all):', process.env.NEXT_PUBLIC_API_URL);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/programs';
	const res = await fetch(apiUrl);
	console.log('fetchPrograms API URL:', apiUrl);
	if (!res.ok) throw new Error('Failed to fetch programs');
	return res.json();
}
