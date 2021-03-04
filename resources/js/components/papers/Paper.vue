<template>
	<div
		id="paper-item"
		class=""
		:style="{
			minHeight: getSizes.height + 'px !important',
			width: getSizes.width + 'px !important',
			minWidth: getSizes.width + 'px !important',
			maxWidth: getSizes.width + 'px !important',
			fontSize: getSizes.font + 'px !important',
			lineHeight: getSizes.lineHeight + 'px !important',
			margin: 0,
		}"
	>
		<template v-if="!isEmpty(config)">
			<div
				class="PI-container-background-logo position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
				v-if="config.image && config.image.show"
			>
				<img
					v-if="config.image.data"
					:src="config.image.data.urlResized"
					class="PI-background-logo w-100"
				/>
				<!-- /.PI-background-logo -->
				<img
					v-else
					:src="require('../../assets/img/vc_logo_0.jpg')"
					class="PI-background-logo w-100"
				/>
				<!-- /.PI-background-logo -->
			</div>
			<!-- /.PI-container-background-logo -->

			<div
				class="PI-container-text position-relative w-100 h-100"
				:style="{
					padding: `${getSizes.marginVertical}px ${getSizes.marginHorizontal}px ${0}px ${getSizes.marginHorizontal}px`,
					minHeight: getSizes.height + 'px',
				}"
			>
				<div class="PI-header row" v-if="config.header">
					<div class="left-side col" v-if="config.header.leftSide">
						<div
							class="title text-uppercase"
							v-if="config.header.leftSide.title"
						>
							{{ config.header.leftSide.title }}
						</div>
						<!-- /.title -->
						<div
							class="sub-title text-uppercase"
							v-if="config.header.leftSide.subTitle"
						>
							{{ config.header.leftSide.subTitle }}
						</div>
						<!-- /.sub-title -->
						<template
							v-if="
								config.header.leftSide.logo && config.header.leftSide.logo.show
							"
						>
							<div
								v-if="config.header.leftSide.logo.data"
								class="container-logo"
							>
								<img
									class="logo"
									:src="config.header.leftSide.logo.data.urlResized"
								/>
								<!-- /.logo -->
							</div>
							<div v-else class="container-logo">
								<img
									class="logo"
									:src="require('../../assets/img/vc_logo_0.jpg')"
								/>
								<!-- /.logo -->
							</div>
						</template>
						<!-- /.container-logo -->
					</div>
					<!-- /.left-side -->

					<div class="right-side col" v-if="config.header.rightSide">
						<div class="date" v-if="config.header.rightSide.date">
							{{ config.header.rightSide.date }}
						</div>
						<!-- /.date -->
						<div class="title" v-if="config.header.rightSide.title">
							{{ config.header.rightSide.title }}
						</div>
						<!-- /.title -->
						<div class="sub-title" v-if="config.header.rightSide.subTitle">
							{{ config.header.rightSide.subTitle }}
						</div>
						<!-- /.sub-title -->
					</div>
					<!-- /.right-side -->
				</div>
				<!-- /.PI-header-->

				<div
					class="PI-body"
					v-if="config.body"
					:style="{ minHeight: (getSizes.height * 70) / 100 + 'px' }"
				>
					<div class="container-title" v-if="config.body.title">
						<h3
							v-html="config.body.title"
							class="title text-center w-100"
							:style="{
								paddingBottom: (getSizes.width * 3.5) / 100 + 'px',
							}"
						></h3>
						<!-- /.title -->
					</div>
					<!-- /.container-title -->

					<div class="row" v-if="config.body.cc" :style="{
						marginBottom: (getSizes.width * 5) / 100 + 'px'
					}">
						<div class="offset-6 col-6 container-cc">
							<h5 class="title p-0 m-0">
								<b>{{ config.body.cc.title }}</b>
							</h5>
							<!-- /.title -->
							<h5
								class="sub-title"
								:style="{
									paddingBottom: (getSizes.width * 2.5) / 100 + 'px',
								}"
							>
								<b> <u>Transmis</u> copie pour information à : </b>
							</h5>
							<!-- /.sub-title -->
							<ul
								class="list-persons"
								:style="{
									marginLeft: (getSizes.width * 1.5) / 100 + 'px',
									paddingLeft: (getSizes.width * 1.5) / 100 + 'px',
									borderBottomWidth: (getSizes.width * 0.4) / 100 + 'px',
								}"
							>
								<li
									class="list-item-person ml-0"
									v-for="(item, index) in config.body.cc.persons"
									:key="index"
									:style="{
										paddingLeft: (getSizes.width * 1.5) / 100 + 'px',
										paddingBottom: (getSizes.width * 3.5) / 100 + 'px',
									}"
								>
									{{ config.body.cc.prePerson + " " + item }}
								</li>
							</ul>
						</div>
						<!-- /.container-cc -->
					</div>
					<!-- /.row -->

					<p
						class="for w-100 text-justify"
						v-if="config.body.for"
						v-html="config.body.for"
					></p>
					<!-- /.for -->

					<div
						class="content w-100 text-justify"
						v-if="config.body.content"
						v-html="config.body.content"
					></div>
					<!-- /.content -->
				</div>
				<!-- /.PI-body-->

				<div class="PI-footer row pb-4" v-if="config.footer">
					<div class="left-side col" v-if="config.footer.leftSide"></div>
					<div class="right-side col" v-if="config.footer.rightSide">
						<div class="title pb-2" v-if="config.footer.rightSide.title">
							{{ config.footer.rightSide.title }}
						</div>
						<!-- /.title -->
						<div class="sub-title" v-if="config.footer.rightSide.subTitle">
							{{ config.footer.rightSide.subTitle }}
						</div>
						<!-- /.sub-title -->
					</div>
					<!-- /.right-side -->
				</div>
				<!-- /.PI-footer-->
			</div>
			<!-- /.PI-container-text -->
		</template>
		<div
			v-else
			class="overlay d-flex align-items-center justify-content-center p-4 text-center"
		>
			<h1>Nothing selected ! Please select a document for begin</h1>
		</div>
	</div>
	<!-- /#paper-item -->
</template>

<script>
import Print from "print-js";
import { jsPDF } from "jspdf";
import { isEmpty } from "../../helpers/Functions";

export default {
	name: "Paper",
	props: {
		config: {
			type: Object,
			default: Object,
		},
		width: {
			type: Number,
			default: 320,
		},
	},
	computed: {
		getConfig() {
			return !this.isEmpty(this.config) ? this.config : {};
		},
		getSizes() {
			//Longeur = Largeur * 1.414
			const width = this.width;
			const height = width * 1.414;
			const ratio = height / width;
			const modulo = height % width;
			const marginHorizontal = (width * 4) / 100;
			const marginVertical = (height * 3) / 100;
			const font = (width * 2.55) / 100;
			const lineHeight = (width * 3.51) / 100;

			return {
				height,
				width,
				ratio,
				modulo,
				marginHorizontal,
				marginVertical,
				font,
				lineHeight,
			};
		},
	},
	methods: {
		isEmpty(data) {
			return isEmpty(data);
		},
		launchPrint() {
			Print({
				printable: "paper-item",
				type: "html",
				maxWidth: 900,
				targetStyles: ["*"],
				style: `background:red`,
			});
		},
		exportToWord() {
			let paperItem = document.getElementById("paper-item").innerHTML,
				word = `<html
					xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
					<head>
						<meta charset='utf-8'>
						<title>VirtualClass Document</title>
					</head>
					<body>${paperItem}</body>
				</html>`;

			let source =
				"data:application/vnd.ms-word;charset=utf-8," +
				encodeURIComponent(word);
			let fileDownload = document.createElement("a");
			document.body.appendChild(fileDownload);
			fileDownload.href = source;
			fileDownload.download = "vr_doc.doc";
			fileDownload.click();
			document.body.removeChild(fileDownload);
		},
		exportToPDF() {
			const doc = new jsPDF();
			let paperItem = document.getElementById("paper-item");

			doc.html(paperItem, {
				callback: function (doc) {
					doc.save();
				},
				x: 1,
				y: 1,
			});
		},
	},
};
</script>

<style lang="scss">
#paper-item {
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
	position: relative;
	height: auto;
	max-height: auto;
	background-color: #fff;
	color: black;
	overflow: hidden;
	* {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
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
	h4 {
		font-size: 120%;
	}
	h5 {
		font-size: 100%;
	}
	h6 {
		font-size: 80%;
	}
	.marker {
		background-color: yellow;
	}
	.overlay {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-weight: 900;
		background-color: rgba($color: #000000, $alpha: 0.4);
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 5;
		color: white;
		> * {
			line-height: 150%;
		}
	}
	> .PI-container-background-logo {
		z-index: 1;
		opacity: 0.03;
		> .PI-background-logo {
		}
	}
	> .PI-container-text {
		z-index: 2;
		background: transparent !important;
		padding: 5%;
		> .PI-header {
			margin-bottom: 3%;
			> .left-side {
				font-weight: 800;
				> * {
					width: auto;
					text-align: center;
				}
				> .title {
					font-size: 70%;
				}
				> .sub-title {
					font-size: 70%;
				}
				> .container-logo {
					margin: 4% auto;
					> .logo {
						width: 35%;
					}
				}
			}
			> .right-side {
				text-align: right;
				font-size: 80%;
				line-height: 150%;
				> .sub-title {
					font-weight: 800;
				}
			}
		}
		> .PI-body {
			width: 100%;
			line-height: 200%;
			.container-cc {
				> .title,
				> .sub-title {
					font-size: 80%;
					font-weight: 700;
					line-height: 150%;
				}
				> .title {
				}
				> .sub-title {
				}
				> .list-persons {
					margin-left: 0;
					padding: 0;
					margin: 0;
					border-bottom-style: dashed;
					line-height: 0;
					> .list-item-person {
						font-size: 80%;
						padding-left: 0;
					}
				}
			}
			> .for,
			.content p {
				padding: 0;
				margin: 0;
			}
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
