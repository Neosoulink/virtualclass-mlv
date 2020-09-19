<template>
	<div class="content" id="home-dashboard">
		<h1 class="title">Quick and secure creation of documents</h1>
		<div class="md-layout md-gutter md-alignment-center">
			<md-button :to="{name: 'dashboard-creation'}" class="md-raised md-primary">Get started</md-button>

			<md-button :to="{name: 'dashboard-demo'}">
				<span class="text-dark">Demo</span>
			</md-button>
		</div>
	</div>
	<!-- /.content -->
</template>
<script>
import { StatsCard } from "../../components";

export default {
	name: "DashboardHome",
	components: {
		StatsCard,
	},
};
</script>

<style lang="scss">
#home-dashboard {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title {
		font-weight: 500;
		text-transform: uppercase;
		font-size: 40px;
	}
	.actions {
		display: flex;
		width: 15vw;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>
