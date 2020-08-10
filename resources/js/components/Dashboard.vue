<template>
	<div class="page-container">
		<md-app md-waterfall md-mode="fixed" class="h-100">
			<md-app-toolbar class="md-primary">
				<span class="md-title">My Title</span>
			</md-app-toolbar>

			<md-app-drawer md-permanent="full">
				<md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

				<md-list>
					<md-list-item>
						<md-icon>move_to_inbox</md-icon>
						<router-link class="md-list-item-text" to="/dashboard/">Home</router-link>
					</md-list-item>

					<md-list-item>
						<md-icon>send</md-icon>
						<a href="#" class="md-list-item-text" @click.prevent="logout">Logout</a>
					</md-list-item>

					<md-list-item>
						<md-icon>delete</md-icon>
						<span class="md-list-item-text">Trash</span>
					</md-list-item>

					<md-list-item>
						<md-icon>error</md-icon>
						<span class="md-list-item-text">Spam</span>
					</md-list-item>
				</md-list>
			</md-app-drawer>

			<md-app-content>
				<router-view></router-view>
			</md-app-content>
		</md-app>
	</div>
</template>

<style lang="scss" scoped>
.md-app {
	max-height: 800px;
	border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
	width: 230px;
	max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
	name: "Dashboard",
	methods: {
		logout(){
			this.$store.commit('LOGOUT');
			this.$router.push('/login');
		}
	},
};
</script>
