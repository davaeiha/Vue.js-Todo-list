<template>
    <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
        @submit.prevent="addItem($event)"
    
    >
        <div class="col-12">
            <div class="form-outline">
                <input type="text" id="form1" class="form-control" placeholder="Enter a task here" />
            </div>
        </div>

        <div class="col-12">
            <button type="submit" class="btn btn-primary">Save</button>
        </div>
    </form>
</template>

<script>import { mapGetters } from "vuex";

export default{
    computed:{
        ...mapGetters(['getNumber']),
    },
    methods:{
        addItem(){
            const num = this.getNumber +1;          
            const task = document.getElementById('form1').value;
            const done = false;

            this.$store.commit('addItem',{num,task,done})
            
        }
    },
    beforeUpdate(){

    }
}
</script>
