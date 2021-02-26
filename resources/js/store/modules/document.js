import docTemplates from '../../mixins/defaultDocTemplates';

const docs = docTemplates();

const state = () => ({
	docList: docs,
	selectedDoc: {},
	error: null,
});

const getters = {
	getDocs(state) {
		return state.documents
	},
	getDocSelected(state) {
		return state.selectedDoc
	}
};

const mutations = {
	SELECT_DOCUMENT(state, payload) {
		state.selectedDoc = payload
	},
	SET_CONFIG_SELECTED_DOCUMENT(state, payload) {
		state.docSelected.config = payload
	},
	CLEAR_SELECTED_DOC(state) {
		state.docSelected = {};
	},
	ADD_TO_DOC_LIST(state, payload) {
		state.docList = { ...state.docList, payload };
	},
	REMOVE_TO_DOC_LIST(state, payload) {
		state.docList = state.docList.filter(doc => doc.name != payload.name);
	},
	SET_ERROR(state, payload) {
		state.error = payload;
	}
};

const actions = {
	selectDoc(context, data) {
		if (typeof data != 'object' || !Object.keys(data).length)
			return context.commit('SET_ERROR', "This document it's not available")

		context.commit('SELECT_DOCUMENT', data);
	},
	setConfigSelectedDoc(context, data) {
		context.commit('SET_CONFIG_SELECTED_DOCUMENT', data);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
