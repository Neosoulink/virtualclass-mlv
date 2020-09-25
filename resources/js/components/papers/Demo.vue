<template >
	<div class="d-none">
		<main id="printable" class="position-relative m-0 p-0 pt-2">
			<img :src="getThemeLogo" alt="theme" class="background-theme" width="1200" />
			<div class="content-text">
				<header>
					<div class="header-left-side d-inline-block text-center">
						<div class="header-title m-0 p-0 pb-1">
							<div>République démocratique du congo</div>
							<div>{{ establishment }}</div>
						</div>
						<div class="container-header-logo py-2">
							<img :src="getThemeLogo" alt="logo header" class="header-logo" />
						</div>
					</div>
					<!-- /.header-left-side -->
					<div class="header-right-side">
						<div>Kinshasa le {{ dateHoursString }}</div>
						<div>
							<b>This document is {{ status }} & {{ confidentiality }}</b>
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
										<b>N° CAB/MIN-UH/ {{ dateString }}</b>
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
									<h4 class="for-person">à {{ forPerson }}</h4>
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

				<template v-if="isDocument">
					<div class="text-center title_document" v-if="documentType != 'Official press release'">
						<h2>Communiqué officiel N°36 DGI/DG/CO</h2>
					</div>
					<div class="text-center title_document" v-else>
						<h2>Rapport officiel destiné au {{ forPerson }}</h2>
					</div>
				</template>

				<div class="editor-datas">
					<p class="pb-0 mb-0" v-if="isLetter">{{ forPerson }}</p>
					<p v-html="editorData"></p>
				</div>
				<!-- /.editor-datas -->

				<footer>
					<h4 class="text-right end-page" v-if="isLetter">
						<b>{{ isLetter ? 'Lettre' : 'Documment' }} adressé à {{ forPerson }}</b>
						<br />
					</h4>
					<h4 class="text-right end-page" v-if="isDocument">
						Fais à kinshasa le {{ dateString }}
						<br />
						<div style="margin-top: 20px">{{ forPerson }}</div>
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
				" / " +
				("0" + (d.getMonth() + 1)).slice(-2) +
				" / " +
				d.getFullYear();
			return datestring;
		},
		dateHoursString() {
			let d = new Date();

			let datestring =
				("0" + d.getDate()).slice(-2) +
				" / " +
				("0" + (d.getMonth() + 1)).slice(-2) +
				" / " +
				d.getFullYear() +
				" à " +
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
#printable {
	height: 100%;
	width: 100%;
}
#printable * {
	color: #171717;
	font-family: Calibri, sans-serif;
}
#printable > .background-theme {
	opacity: 0.1;
	position: absolute;
	z-index: 0;
	margin: auto;
	margin-top: 35vh;
	width: 100%;
}
#printable > .content-text {
	position: relative;
	z-index: 10;
	width: 100%;
}
#printable .header-left-side {
	position: relative;
}
#printable .header-left-side > .header-title {
	text-transform: uppercase;
	font-weight: 700;
	font-size: 0.95em;
}
#printable .header-left-side > .container-header-logo {
}
#printable .header-left-side > .container-header-logo > .header-logo {
	z-index: -1;
	height: 92px;
}
#printable .header-right-side {
	position: absolute;
	right: 0;
	top: 0;
	font-size: 1em;
}
#printable .simple-letter-section > .title-section {
	padding-bottom: 5px;
	border-bottom: 4px solid;
}
#printable .copy-transmited-section > .title-section {
	text-transform: uppercase;
	margin: 0;
	padding: 0;
	font-weight: 700;
}
#printable .copy-transmited-section > .subtitle-section {
	font-weight: 700;
}
#printable .list-group-person {
	font-size: 1.25em;
	margin-left: 20px;
	padding: 0 0 20px;
	border-bottom: 2px dashed;
}
#printable .list-group-person > .list-item-person {
	padding-left: 20px;
}
#printable .title_document h2 {
	font-size: 1.8em;
	text-transform: uppercase;
	text-align: center;
	padding-bottom: 5px;
	border-bottom: 4px solid;
	display: inline-block;
	margin-bottom: 20px;
}
#printable .object-title,
#printable .for-person {
	vertical-align: text-top;
}
#printable .editor-datas {
	font-size: 1.5em;
	line-height: 35px;
	text-align: justify;
}
#printable .editor-datas p,
#printable .editor-datas a,
#printable .editor-datas li {
	font-size: inherit;
}
#printable .end-page {
	opacity: 1;
	margin-top: 80px;
	text-transform: uppercase;
	word-spacing: 0.3vw;
}
</style>
