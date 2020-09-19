import DocsData from '../../mixins/documentsData';

const docs = DocsData();

const state = () => ({
	documents: docs,
	newPaperConfig: null,
	error: null,
});

const getters = {
	getDocs(state) {
		return state.documents
	},
	getNewDocConfig(state) {
		return state.newPaperConfig
	}
};

const mutations = {
	NEW_DOC_CONFIGURATION(state, payload) {
		state.newPaperConfig = payload
	}
};

const actions = {
	new_doc_config(context, data) {
		context.commit('NEW_DOC_CONFIGURATION', data);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
