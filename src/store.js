import { createStore } from "vuex";

const store = createStore({
    state:{
        // numbers : 0,
        items : []
    },
    getters : {
        getNumber(state){
            return state.items.length
        }
    },
    mutations:{
        addItem(state,item){
            state.items.push(item)
        },
        removeItem(state,num){
            
            state.items = state.items.filter(item => item.num !== num)
            // console.log(state.items)
        },
        finished(state,item){
            item.done = !item.done
        }
    }
});


export default store;