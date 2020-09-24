<template>
	<div
		id="paper-item"
		class="bg-white position-relative text-dark"
		:style="{
			minHeight: size.height + 'px',
			width: size.width + 'px',
			fontSize: getFontSize + 'px',
		}"
	>
		<div
			class="container-PI-background-logo position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
		>
			<img
				:src="require('../../assets/img/vc_logo_0.jpg')"
				class="PI-background-logo w-100"
			/>
			<!-- /.PI-background-logo -->
		</div>
		<!-- /.container-PI-background-logo -->

		<div class="PI-content-text position-relative w-100 h-100">
			<div class="PI-header row" v-if="getConfig.header">
				<div class="left-side col" v-if="getConfig.header.leftSide">
					<div class="container-logo" v-if="getConfig.header.leftSide.logo">
						<img class="logo" :src="getConfig.header.leftSide.logo" />
						<!-- /.logo -->
					</div>
					<!-- /.container-logo -->
					<div class="title" v-if="getConfig.header.leftSide.title">
						{{ getConfig.header.leftSide.title }}
					</div>
					<!-- /.title -->
					<div class="sub-title" v-if="getConfig.header.leftSide.subTitle">
						{{ getConfig.header.leftSide.subTitle }}
					</div>
					<!-- /.sub-title -->
				</div>
				<!-- /.left-side -->

				<div class="right-side col" v-if="getConfig.header.rightSide">
					<div class="date" v-if="getConfig.header.rightSide.date">
						{{ getConfig.header.rightSide.date }}
					</div>
					<!-- /.date -->
					<div class="title" v-if="getConfig.header.rightSide.title">
						{{ getConfig.header.rightSide.title }}
					</div>
					<!-- /.title -->
					<div class="sub-title" v-if="getConfig.header.rightSide.subTitle">
						{{ getConfig.header.rightSide.subTitle }}
					</div>
					<!-- /.sub-title -->
				</div>
				<!-- /.right-side -->
			</div>
			<!-- /.PI-header-->

			<div class="PI-body" v-if="getConfig.body">
				<div class="container-title" v-if="getConfig.body.title">
					<h3
						class="title text-center w-100"
						v-html="getConfig.body.title"
					></h3>
					<!-- /.title -->
				</div>
				<!-- /.container-title -->

				<div
					class="content text-justify w-100"
					v-if="getConfig.body.content"
					v-html="getConfig.body.content"
				></div>
				<!-- /.content -->
			</div>
			<!-- /.PI-body-->

			<div class="PI-footer row" v-if="getConfig.footer">
				<div class="left-side col" v-if="getConfig.footer.leftSide"></div>
				<div class="right-side col" v-if="getConfig.footer.rightSide">
					<div class="title" v-if="getConfig.footer.rightSide.title">
						{{ getConfig.footer.rightSide.title }}
					</div>
					<!-- /.title -->
					<div class="sub-title" v-if="getConfig.footer.rightSide.subTitle">
						{{ getConfig.footer.rightSide.subTitle }}
					</div>
					<!-- /.sub-title -->
				</div>
				<!-- /.right-side -->
			</div>
			<!-- /.PI-footer-->
		</div>
		<!-- /.PI-content-text -->
	</div>
	<!-- /#paper-item -->
</template>

<script>
import Fitty from "fitty";

export default {
	name: "Paper",
	props: {
		config: {
			type: Object,
			default: null,
		},
		size: {
			type: Object,
			default: () => {
				return {
					height: "410",
					width: "320",
				};
			},
		},
	},
	computed: {
		getConfig() {
			const doc = this.$store.getters["document/getDocSelected"];
			if (this.config) {
				return this.config;
			} else if (doc) {
				return doc.config;
			} else {
				return {
					body: {
						title: "default Title",
						content: "Body here",
					},
				};
			}
		},
		getFontSize() {
			const ratio = (this.size.height / this.size.width) * 100;
			return ratio / 10;
		},
	},
};
</script>

<style lang="scss">
#paper-item {
	height: auto;
	max-height: auto;
	* {
		font-size: inherit;
	}
	h1 {
		font-size: 200%;
	}
	h2 {
		font-size: 180%;
	}
	h3 {
		font-size: 150%;
	}
	> .container-PI-background-logo {
		z-index: 1;
		opacity: 0.03;
		> .PI-background-logo {
		}
	}
	> .PI-content-text {
		z-index: 2;
		background: transparent !important;
		padding: 1vw;
		> .PI-header {
			> .left-side {
			}
			> .right-side {
			}
		}
		> .PI-body {
			width: 100%;
			min-height: 50vh;
		}
		> .PI-footer {
			> .left-side {
			}
			> .right-side {
			}
		}
	}
}
</style>
