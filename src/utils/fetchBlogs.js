// Fetch a single blog by ID
export async function fetchBlogById(id) {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + `/programs/by-id/${id}`;
	// const username = process.env.NEXT_PUBLIC_API_USER;
	// const password = process.env.NEXT_PUBLIC_API_PASS;
	// const headers = new Headers();
	// if (username && password) {
	// 	headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
	// }
	const res = await fetch(apiUrl);
	if (!res.ok) throw new Error('Failed to fetch blog');
	return res.json();
}
// Utility to fetch blogs from backend API
// Uses basic auth from environment variables

export async function fetchBlogs() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/programs';
	// const username = process.env.NEXT_PUBLIC_API_USER;
	// const password = process.env.NEXT_PUBLIC_API_PASS;
	// const headers = new Headers();
	// if (username && password) {
	// 	headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));
	// }
	const res = await fetch(apiUrl);
	console.log('API URL:', apiUrl);
	if (!res.ok) throw new Error('Failed to fetch blogs');
	return res.json();
}
