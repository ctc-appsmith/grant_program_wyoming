export default {
	async myFun2 () {
		console.log("access_token:", appsmith.store.access_token)
		console.log("expires_at:", appsmith.store.expires_at)
		console.log("expires_in:", appsmith.store.expires_in)
		console.log("page:", appsmith.store.page)
		console.log("refresh_token:", appsmith.store.refresh_token)
		console.log("token_type:", appsmith.store.token_type)
	}
}