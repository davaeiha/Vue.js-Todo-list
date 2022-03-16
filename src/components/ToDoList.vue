<template>
    <table class="table mb-4">
        <thead>
        <tr>
            <th scope="col">No.</th>
            <th scope="col">Todo item</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
            <to-do-item></to-do-item>
        </tbody>
    </table>
</template>

<script>
import ToDOItem from './ToDoItem.vue'
export default{
    components : {
        'to-do-item':ToDOItem
    }
}
</script>
