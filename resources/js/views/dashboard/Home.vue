<template>
	<div class="content">
		<div class="md-layout">
			<div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
				<stats-card data-background-color="green">
					<template slot="header">
						<md-icon>file_copy</md-icon>
					</template>

					<template slot="content">
						<p class="category">Documents créé</p>
						<h3 class="title">+9</h3>
					</template>

					<template slot="footer">
						<router-link to="/dashboard/creation" class="stats">
							<md-icon>login</md-icon> Afficher
						</router-link>
					</template>
				</stats-card>
			</div>
			<div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
				<stats-card data-background-color="green">
					<template slot="header">
						<md-icon>content_copy</md-icon>
					</template>

					<template slot="content">
						<p class="category">Archive</p>
						<h3 class="title">
							+9 <small>docs</small>
						</h3>
					</template>

					<template slot="footer">
						<router-link to="/dashboard/management" class="stats">
							<md-icon>login</md-icon> Afficher
						</router-link>
					</template>
				</stats-card>
			</div>

			<div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
				<stats-card data-background-color="green">
					<template slot="header">
						<md-icon>email</md-icon>
					</template>

					<template slot="content">
						<p class="category">Couriels</p>
						<h3 class="title">99+</h3>
					</template>

					<template slot="footer">
						<router-link to="/dashboard/email" class="stats">
							<md-icon>login</md-icon> Afficher
						</router-link>
					</template>
				</stats-card>
			</div>

		</div>
	</div>
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
