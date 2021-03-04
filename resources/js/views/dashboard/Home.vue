<template>
	<div id="home-dashboard" class="content">
		<div class="row">
			<div class="col-sm-4">
				<stats-card
					:to="{ name: 'dashboard-creation' }"
					data-background-color="green"
					class="rounded stats-card"
				>
					<template slot="header">
						<md-icon>note_add</md-icon>
					</template>

					<template slot="content">
						<h3 class="card-subtitle py-2">Creation</h3>
					</template>

					<template slot="footer">
						<router-link :to="{ name: 'dashboard-creation' }" class="stats pb-2">
							<md-icon>open_in_browser</md-icon>
							Create new document
						</router-link>
					</template>
				</stats-card>
			</div>
			<!-- /.col-sm-4 -->

			<div class="col-sm-4">
				<stats-card data-background-color="green" class="rounded">
					<template slot="header">
						<md-icon>star</md-icon>
					</template>

					<template slot="content">
						<h3 class="card-subtitle py-2">Demo</h3>
					</template>

					<template slot="footer">
						<routerLink :to="{ name: 'dashboard-demo' }" class="stats pb-2">
							<md-icon>open_in_browser</md-icon>
							Checkout Demo
						</routerLink>
					</template>
				</stats-card>
			</div>
			<!-- /.col-sm-4 -->

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
}
</style>
