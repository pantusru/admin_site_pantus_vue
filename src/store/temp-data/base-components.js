//import Axios from 'axios'
import Vue from 'vue'

const state = () => ({
    input_search_value: {},
    input_index_value: {},
    html_editor: {},
    input_text_value: {},
    table_data: {},
    input_slug_value: {},
    input_price_value: {},
    input_vendor_code_value: {},  // Артикул
    text_area_value: {},
    input_phone_value: {},

})

const mutations = {

    setValueInputSearch(state, data) {
        Vue.set(state.input_search_value, data.key, data.value)
    },

    setValueInputIndex(state, data) {
        Vue.set(state.input_index_value, data.key, data.value)
    },

    setValueHtmlEditor(state, data) {
        Vue.set(state.html_editor, data.key, data.value)
    },

    setValueInputText(state, data) {
        Vue.set(state.input_text_value, data.key, data.value)
    },
    setValueTextArea(state, data) {
        Vue.set(state.text_area_value, data.key, data.value)
    },

    setDataTable(state, data){
        Vue.set(state.table_data, data.key, data.value)
    },

    setValueInputSlug(state, data){
        Vue.set(state.input_slug_value, data.key, data.value)
    },

    setValueInputPrice(state, data){
        Vue.set(state.input_price_value, data.key, data.value)
    },
    /// Установить значение Артикул-инпута
    setValueInputVendorCode(state, data){
        Vue.set(state.input_vendor_code_value, data.key, data.value)
    },

    setValueInputPhone(state, data){
        Vue.set(state.input_phone_value, data.key, data.value)
    },

}

const actions = {

}

const getters = {

    getValueInputSearch: state => key => {
        return state.input_search_value[key];
    },

    getValueInputIndex: state => key => {
        return state.input_index_value[key];
    },

    getValueHtmlEditor: state => key => {
        return state.html_editor[key];
    },

    getValueInputText: state => key => {
        return state.input_text_value[key];
    },

    getValueTextArea: state => key => {
        return state.text_area_value[key];
    },

    getDataTable: state => key => {
        return state.table_data[key];
    },

    getValueInputSlug: state => key => {
        return state.input_slug_value[key];
    },

    getValueInputPrice: state => key => {
        return state.input_price_value[key];
    },
    /// Получить значение артикул-инпута
    getValueInputVendorCode: state => key => {
        return state.input_vendor_code_value[key];
    },

    getValueInputPhone: state => key => {
        return state.input_phone_value[key];
    },

}

export default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
}
