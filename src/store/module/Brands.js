import Axios from 'axios'


const state = () => ({
    todos: [],

    // todos: [
    //     { id: 1, text: '...', done: true },
    //     { id: 2, text: '...', done: false }
    // ]


})
const mutations = {
    SetItem(state ,data){
        state.todos = data;
    },


}
const actions = {
    async Item({commit}){
            return  await Axios.get('http://194.67.113.201:8080/brands').then( res =>{
                commit("SetItem",res.data);
                //console.log('мы в действиях получили ', res.data['data']);
            })
        }

}
const getters = {
    GetItem: s => s.todos,

    getTodoById: state => id => {
        return state.todos.find(todo => todo.id === id);
    }

}
export  default {
    getters,
    actions,
    mutations,
    state,
    namespaced: true,
}