<template>
	<div class="screen">
		<nav class="navbar py-3 px-4">
			<div>
				<md-avatar class="md-avatar-icon">
					<img :src="require('../assets/img/vc_logo_0.jpg')" alt="Avatar" />
				</md-avatar>
				<span class="md-medium text-uppercase">VirtualClass</span>
			</div>
			<div>
				<router-link to="/login">Login</router-link>
			</div>
		</nav>

		<md-content class="centered-content md-layout md-alignment-center-center">
				<img
					:src="require('../assets/img/file-searching.jpg')"
					alt="VirtualClassRepersentaion"
					class="img-presentation"
					srcset
				/>
			<div>
				<h1 class="md-display-3 font-weight-bold">VirtualClass</h1>
				<p>Trusted binder for your most important documents!</p>
			</div>
		</md-content>

		<content-footer :container="false" />
	</div>
</template>
<script>
import ContentFooter from "./dashboard/Layout/ContentFooter.vue";

export default {
	name: "MainHome",
	components: {
		ContentFooter,
	},
};
</script>

<style lang="scss">
.screen {
	background-color: white;
	min-height: 100vh;
}
.centered-content {
	position: relative;
	min-height: 78vh;
}
.img-presentation{
	width: 78vh;
}
</style>
