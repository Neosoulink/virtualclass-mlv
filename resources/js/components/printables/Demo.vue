<template >
	<div class="d-none">
		<main id="printable" class="position-relative m-0 p-0 pt-2">
			<img :src="getThemeLogo" alt="theme" class="background-theme" width="1200" />
			<div class="content-text">
				<header>
					<div class="header-left-side d-inline-block text-center">
						<div class="header-title m-0 p-0 pb-1">
							<div>République démocratique du congo</div>
							<div>{{ status }}</div>
						</div>
						<div class="container-header-logo py-2">
							<img :src="getThemeLogo" alt="logo header" class="header-logo" />
						</div>
					</div>
					<!-- /.header-left-side -->
					<div class="header-right-side">
						<div>Kinshasa le {{ dateString }}</div>
						<div>
							<b>This document is {{ status }} a {{ confidentiality }}</b>
						</div>
					</div>
					<!-- /.header-right-side -->
				</header>
				<!-- /header -->

				<template v-if="isLetter">
					<template v-if="letterType != null">
						<template v-if="letterType != 'Copy Transmitted'">
							<div class="simple-letter-section text-center mb-4">
								<h2 class="title-section text-uppercase d-inline-block">Lettre ouvert à {{ forPerson }}</h2>
							</div>
							<!-- /.simple-letter-section -->
						</template>

						<template v-else>
							<div class="row mb-4">
								<div class="offset-6 col-6 copy-transmited-section">
									<h4 class="title-section">
										<b>N° CAB/MIN-UH/ here</b>
									</h4>
									<h4 class="subtitle-section p-0 m-0 pb-2">
										<b>
											<u>Transmis</u> copie pour information à :
										</b>
									</h4>
									<ul class="list-group-person list-group">
										<li
											class="list-item-person ml-0 mb-2"
											v-for="(item, index) in copyTransmitted"
											:key="index"
										>Son exelance {{ item }}</li>
									</ul>
								</div>
								<!-- /.copy-transmited-section -->
							</div>
							<!-- /.row -->

							<div class="row mb-4">
								<div class="col-6">
									<h4 class="object-title">Objet : {{ object }}</h4>
								</div>
								<!-- /.object-title -->

								<div class="col-6 text-uppercase">
									<h4 class="for-person">à {{ object }}</h4>
									<div>
										<b>KINSAHSA/GOMBE</b>
									</div>
								</div>
								<!-- /.for-person -->
							</div>
							<!-- /.row -->
						</template>
					</template>
				</template>

				<div class="editor-datas" :class="{ 'add-ident-p' : isLetter }">
					<p class="pb-0 mb-0" v-if="isLetter">{{ forPerson }}</p>
					<p>
						<span v-html="editorData" style=" font-size: 1.5em; line-height: 35px; text-align: justify; "></span>
					</p>
				</div>
				<!-- /.editor-datas -->

				<footer>
					<h4
						class="text-right"
						style="opacity: 1;margin-top: 100px; text-transform: uppercase;word-spacing: 0.3vw;white-space:"
					>
						<b>{{ isLetter ? 'Lettre' : 'Documment' }} adressé à {{ forPerson }}</b>
						<br />
					</h4>
				</footer>
			</div>
		</main>
		<!-- /#printable -->
	</div>
</template>

<script>
import Print from "print-js";
export default {
	name: "DemoPrintable",
	props: {
		isLetter: {
			type: Boolean,
			default: false,
		},
		isDocument: {
			type: Boolean,
			default: false,
		},
		letterType: {
			default: null,
		},
		documentType: {
			default: null,
		},
		copyTransmitted: {
			type: Array,
		},
		forPerson: {
			type: String,
		},
		establishment: {
			type: String,
		},
		object: {
			type: String,
		},
		confidentiality: {
			type: String,
		},
		status: {
			type: String,
		},
		editorData: {
			type: String,
		},
		themeLogo: {
			type: String,
		},
	},
	data() {
		return {};
	},
	computed: {
		dateString() {
			let d = new Date();

			let datestring =
				("0" + d.getDate()).slice(-2) +
				"-" +
				("0" + (d.getMonth() + 1)).slice(-2) +
				"-" +
				d.getFullYear() +
				" " +
				("0" + d.getHours()).slice(-2) +
				":" +
				("0" + d.getMinutes()).slice(-2);

			return datestring;
		},
		getThemeLogo() {
			return this.themeLogo
				? this.themeLogo
				: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg";
		},
	},
	methods: {
		launchPrint() {
			Print({
				printable: "printable",
				type: "html",
				maxWidth: 900,
				targetStyles: ["*"],
			});
		},
	},
	mounted() {},
};
</script>
<style>
.add-ident-p > p {
	/*text-indent: 52%;*/
}
#printable {
	height: 100%;
	width: 100%;
}
#printable * {
	color: #222;
	font-family: serif;
}
.background-theme {
	opacity: 0.1;
	position: absolute;
	z-index: 0;
	margin: auto;
	margin-top: 35vh;
	width: 100%;
}
.content-text {
	position: relative;
	z-index: 10;
	width: 100%;
}
.header-left-side {
	position: relative;
}
.header-left-side > .header-title {
	text-transform: uppercase;
	font-weight: 700;
	font-size: 0.95em;
}
.header-left-side > .container-header-logo {
}
.header-left-side > .container-header-logo > .header-logo {
	z-index: -1;
	height: 92px;
}
.header-right-side {
	position: absolute;
	right: 0;
	top: 0;
	font-size: 1em;
}
.simple-letter-section > .title-section {
	padding-bottom: 5px;
	border-bottom: 4px solid;
}
.copy-transmited-section > .title-section {
	text-transform: uppercase;
	margin: 0;
	padding: 0;
	font-weight: 700;
}
.copy-transmited-section > .subtitle-section {
	font-weight: 700;
}
.list-group-person {
	font-size: 1.25em;
	margin-left: 20px;
	padding: 0 0 20px;
	border-bottom: 2px dashed;
}
.list-group-person > .list-item-person {
	padding-left: 20px;
}
.object-title,
.for-person {
	vertical-align: text-top;
}
.editor-datas > p {
	font-size: 1.5em;
	line-height: 35px;
	text-align: justify;
}
</style>
