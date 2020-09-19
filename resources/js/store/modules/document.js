import DocsData from '../../mixins/documentsData';

const docs = DocsData();

const state = () => ({
	documents: docs,
	docSelected: null,
	error: null,
});

const getters = {
	getDocs(state) {
		return state.documents
	},
	getDocSelected(state) {
		return state.docSelected
	}
};

const mutations = {
	SELECT_DOCUMENT(state, payload) {
		state.docSelected = payload
	},
	SET_CONFIG_DOCUMENT_SELECTED(state, payload) {
		state.docSelected.config = payload
	}
};

const actions = {
	select_doc(context, data) {
		context.commit('SELECT_DOCUMENT', data);
	},
	set_config_doc_selected(context, data) {
		context.commit('SET_CONFIG_DOCUMENT_SELECTED', data);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
