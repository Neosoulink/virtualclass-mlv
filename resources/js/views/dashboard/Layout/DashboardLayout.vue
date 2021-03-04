<template>
	<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
		<notifications></notifications>
		<side-bar
			:sidebar-item-color="sidebarBackground"
			:sidebar-background-image="sidebarBackgroundImage"
			title="VirtualClass"
			:icon="sidebarBackgroundImage"
		>
			<mobile-menu slot="content"></mobile-menu>
			<sidebar-link :to="{name: 'dashboard'}">
				<md-icon>dashboard</md-icon>
				<p>Dashboard</p>
			</sidebar-link>
			<sidebar-link :to="{name: 'dashboard-creation'}">
				<md-icon>note_add</md-icon>
				<p>Creation</p>
			</sidebar-link>
			<sidebar-link to="chart">
				<md-icon>pie_chart</md-icon>
				<p>Management</p>
			</sidebar-link>
			<sidebar-link to="user">
				<md-icon>person</md-icon>
				<p>My Profile</p>
			</sidebar-link>
				<sidebar-link :to="{name : 'dashboard-demo'}">
				<md-icon>star</md-icon>
				<p>Demo</p>
			</sidebar-link>
			<sidebar-link :to="{name: 'home'}">
				<md-icon>arrow_back</md-icon>
				<p>Go Home</p>
			</sidebar-link>
		</side-bar>

		<div class="main-panel">
			<top-navbar></top-navbar>

			<fixed-plugin
				:color.sync="sidebarBackground"
				:image.sync="sidebarBackgroundImage"
			>
			</fixed-plugin>

			<dashboard-content> </dashboard-content>

			<content-footer v-if="!$route.meta.hideFooter"></content-footer>
		</div>
	</div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
	components: {
		TopNavbar,
		DashboardContent,
		ContentFooter,
		MobileMenu,
		FixedPlugin
	},
	data() {
		return {
			sidebarBackground: "green",
			sidebarBackgroundImage: require("../../../assets/img/vc_logo_0.jpg")
		};
	}
};
</script>
