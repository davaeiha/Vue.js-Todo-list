<template>
    <tr v-for="item in items" :key="item.num" :style="{'text-decoration' : item.done ? 'line-through' : 'none'}">
        <th scope="row">{{item.num}}</th>
        <td>{{item.task}}</td>
        <td>
            <button  class="btn btn-danger" @click="removeItem(item.num)">Delete</button>
            <button  class="btn btn-success ms-1" @click="finished(item)">Finished</button>
        </td>
    </tr>
</template>

<script>import { mapMutations } from "vuex";

    export default{
        computed : {
            items(){
                return this.$store.state.items;
            },
        },
        methods:{
            ...mapMutations(['removeItem','finished'])
        }
    }
</script>
