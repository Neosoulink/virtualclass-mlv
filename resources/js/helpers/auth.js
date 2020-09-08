export function signup(credential) {
	return new Promise((resolve, rej) => {
		axios.post('/api/auth/signup', credential)
			.then(res => {
				//resolve(res.data)
				console.log(res)
				//axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
			})
			.catch(err => {
				//if (err === 401) {
				//	console.log('Wrong data');

				//}
				console.log(err)
				rej('Wrong data')
			})
	})
}

export function login(credential) {
	return new Promise((resolve, rej) => {
		axios.post('/api/auth/login', credential)
			.then(res => {
				resolve(res.data)
				console.log(res)
				axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
			})
			.catch(err => {
				if (err === 401) {
					console.log('Wrong email or password');

				}
				rej('Wrong email or password')
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
