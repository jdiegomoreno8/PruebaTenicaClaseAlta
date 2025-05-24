<template>
  <table class="task-table">
    <thead>
      <tr>
        <th class="titulo">Título</th>
        <th>Completada</th>
      </tr>
    </thead>
    <tbody>
      <!-- Mostrar tareas una por una -->
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.title }}</td>
        <td class="centered">
          <!-- Checkbox deshabilitado-->
          <input type="checkbox" :checked="task.completed" disabled />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
// Recibir las tareas como propiedad
defineProps({
  tasks: Array
})
</script>

<style scoped src="../assets/styles/task-table.css"></style>
