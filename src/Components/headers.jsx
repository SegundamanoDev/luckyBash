export const setHeaders = () => {
	const token = localStorage.getItem("token");
	const headers = {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	};
	return headers;
};
