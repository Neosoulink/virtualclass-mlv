<template>
	<form class="centered-container" method="post" @submit.prevent="authenticate">
		<md-content class="md-elevation-3">
			<div class="title">
				<div class="md-title">LOGIN</div>
			</div>

			<div class="form">
				<md-field>
					<label>E-mail</label>
					<md-input v-model="form.email" autofocus></md-input>
				</md-field>

				<md-field md-has-password>
					<label>Password</label>
					<md-input v-model="form.password" type="password"></md-input>
				</md-field>
			</div>

			<div class="actions md-layout md-alignment-center-space-between">
				<md-button class="md-link" to="/"><md-icon>arrow_back</md-icon> Back home</md-button>
				<md-button type="submit" class="md-raised md-primary">Log in</md-button>
			</div>

			<div class="text-danger pt-3" role="alert" v-if="authError">
				<strong>{{ authError }}</strong>
			</div>

			<div class="loading-overlay" v-if="loading">
				<md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
			</div>
		</md-content>
		<div class="background" />
	</form>
</template>

<script>
import { login } from "../helpers/auth";
export default {
	name: "Login",

	data() {
		return {
			loading: false,
			form: {
				email: "",
				password: "",
			},
			error: null,
		};
	},
	methods: {
		authenticate() {
			this.loading = true;
			this.$store.dispatch("login");

			login(this.$data.form)
				.then((res) => {
					this.$store.commit("LOGIN_SUCCESS", res);
					this.$router.push({ path: "/dashboard" });
					this.loading = false;
				})
				.catch((error) => {
					this.$store.commit("LOGIN_FAILED", { error });
					this.loading = false;
				});
		},
	},
	computed: {
		authError() {
			return this.$store.getters.authError;
		},
	},
};
</script>
<style lang="scss">
.centered-container {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 100vh;
	.title {
		text-align: center;
		margin-bottom: 30px;
		img {
			margin-bottom: 16px;
			max-width: 80px;
		}
	}
	.actions {
		.md-button {
			margin: 0;
		}
	}
	.form {
		margin-bottom: 60px;
	}
	.background {
		/*background: url('../img/file-searching.jpg');
		background-position: center;
		background-size: cover;*/
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 0;
	}
	.md-content {
		z-index: 1;
		padding: 40px;
		width: 100%;
		max-width: 400px;
		position: relative;
	}
	.loading-overlay {
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
