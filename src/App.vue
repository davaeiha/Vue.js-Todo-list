<template>
  <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">       
          <div class="card-body p-4 card rounded-3">
            <h4 class="text-center my-3 pb-3">To Do App</h4>
            <add-to-do></add-to-do>
            <to-do-list></to-do-list>
          </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
import AddToDo from './components/AddToDo.vue';

export default{
  components : {
    'to-do-list':ToDoList,
    'add-to-do':AddToDo
  }
}
</script>


<style scoped>

section {
  background-color: #eee;
}
</style>
