export function signup(credential) {
	return new Promise((resolve, rej) => {
		axios.post('/api/auth/signup', credential)
			.then(res => {
				resolve(res.data)
				axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
			})
			.catch(err => {
				rej(err.response.data)
			})
	})
}

export function login(credential) {
	return new Promise((resolve, rej) => {
		axios.post('/api/auth/login', credential)
			.then(res => {
				resolve(res.data)
				axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
			})
			.catch(err => {
				if (err.response.status == 401) {
					rej('Wrong email or password')
				} else {
					rej(err.response.data);
				}
			})
	})
}

export function logout(credential) {
	return new Promise((resolve, rej) => {
		axios.post('/api/auth/logout', credential)
			.then(res => {
				console.log(res)
			})
			.catch(err => {
				rej('Cannot logout')
			})
	})
}

export function getLocalUser() {
	const userStr = localStorage.getItem('user');

	if (!userStr) {
		return null;
	}

	return JSON.parse(userStr);
}
