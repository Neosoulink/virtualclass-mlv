import docTemplates from '../../mixins/defaultDocTemplates';

const docs = docTemplates();

const state = () => ({
	docList: docs,
	selectedDoc: {},
	error: null,
});

const getters = {
	getDocList(state) {
		return state.docList;
	},
	getSelectedDoc(state) {
		return state.selectedDoc;
	}
};

const mutations = {
	SET_SELECTED_DOC(state, payload) {
		state.selectedDoc = payload
	},
	SET_SELECTED_DOC_CONFIG(state, payload) {
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
	setSelectedDoc(context, data) {
		if (typeof data != 'object' || !Object.keys(data).length)
			return context.commit('SET_ERROR', "This document it's not available")

		context.commit('SET_SELECTED_DOC', data);
	},
	setSelectedDocConfig(context, data) {
		context.commit('SET_SELECTED_DOC_CONFIG', data);
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
