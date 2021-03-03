<template>
	<div id="home-dashboard" class="content">
		<div class="row">
			<div class="col-sm-4">
				<stats-card data-background-color="green" class="rounded">
					<template slot="header">
						<md-icon>description</md-icon>
					</template>

					<template slot="content">
						<h3 class="card-subtitle m-0">Creation</h3>
					</template>

					<template slot="footer">
						<routerLink :to="{ name: 'dashboard-creation' }" class="stats">
							<md-icon>description</md-icon>
							Create new doc
						</routerLink>
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
						<h3 class="card-subtitle m-0">Demo</h3>
					</template>

					<template slot="footer">
						<routerLink :to="{ name: 'dashboard-demo' }" class="stats">
							<md-icon>description</md-icon>
							Preview demo version
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
