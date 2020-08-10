<template>
	<div class="content">
		<div class="md-layout">

			<div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25" >
				<stats-card data-background-color="green">
					<template slot="header">
						<md-icon>insert_drive_file</md-icon>
					</template>

					<template slot="content">
						<p class="category"></p>
						<h3 class="title">New document</h3>
					</template>

					<template slot="footer">
						<router-link to="/dashboard/creation/new" class="stats">
							<md-icon>login</md-icon> Create a new document
						</router-link>
					</template>
				</stats-card>
			</div>

			<router-view></router-view>

		</div>
	</div>
</template>
<script>
import { StatsCard } from "../../components";

export default {
	name: "DashboardCreation",
	components: {
		StatsCard,
	},
};
</script>
