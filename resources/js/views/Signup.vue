<template>
	<form class="centered-container" method="post" @submit.prevent="newUser">
		<md-content class="md-elevation-3">
			<div class="title">
				<div class="md-title">Sign up</div>
			</div>

			<div class="form">
				<md-field>
					<label>E-mail</label>
					<md-input
						v-model="form.email"
						type="email"
						name="email"
						autocomplete="email"
						autofocus
					></md-input>
				</md-field>

				<md-field>
					<label>Username</label>
					<md-input
						v-model="form.username"
						name="name"
						autocomplete="username"
						autofocus
					></md-input>
				</md-field>

				<md-field md-has-password>
					<label>Password</label>
					<md-input
						v-model="form.password"
						autocomplete="current-password"
						type="password"
					></md-input>
				</md-field>

				<md-field md-has-password>
					<label>confirm-Password</label>
					<md-input
						v-model="form.password_confirmation"
						autocomplete="current-password"
						type="password"
					></md-input>
				</md-field>
			</div>

			<div class="actions md-layout md-alignment-center-space-between">
				<md-button class="md-link" to="/">
					<md-icon>arrow_back</md-icon>Go home
				</md-button>
				<md-button type="submit" class="md-raised md-primary"
					>Sign up</md-button
				>
			</div>

			<div class="md-layout mt-4">
				<p>
					Alredy have an account ?
					<router-link to="/login">Login now !</router-link>
				</p>
			</div>

			<div class="text-danger pt-3" role="alert" v-if="authError">
				<strong>{{ authError }}</strong>
			</div>

			<div class="loading-overlay" v-if="loading">
				<success-check v-if="isLoggedIn" />
				<md-progress-spinner
					md-mode="indeterminate"
					:md-stroke="2"
					v-else
				></md-progress-spinner>
			</div>
		</md-content>

		<div class="background" />
	</form>
</template>

<script>
import { signup } from "../helpers/auth";
import Validate from "validate.js";
import SuccessCheck from "../components/progess/SuccessCheck";

export default {
	name: "Signup",
	components: { SuccessCheck },
	data() {
		return {
			loading: false,
			form: {
				email: "",
				username: "",
				password: "",
				password_confirmation: "",
			},
			error: null,
		};
	},
	computed: {
		authError() {
			return this.$store.getters["user/authError"];
		},
		isLoggedIn() {
			return this.$store.getters["user/isLoggedIn"];
		},
	},
	methods: {
		newUser() {
			this.loading = true;

			let data = this.form;
			let constraint = {
				email: {
					presence: { allowEmpty: false },
				},
				username: {
					presence: { allowEmpty: false },
					length: { minimum: 5 },
				},
				password: {
					presence: { allowEmpty: false },
					length: { minimum: 8 },
				},
				password_confirmation: {
					equality: "password",
				},
			};

			let validation = Validate(data, constraint);

			if (!validation) {
				signup(this.$data.form)
					.then((res) => {
						this.$store.commit("user/LOGIN_SUCCESS", res);
						setTimeout(() => {
							this.$router.push({ path: "/dashboard" });
						}, 2000);
						console.log(res);
					})
					.catch((error) => {
						this.$store.commit("user/LOGIN_FAILED", { error });
						this.loading = false;
						console.log(error);
					});
			} else {
				console.log(validation);
				this.loading = false;
			}
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
	min-height: 100vh;
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
