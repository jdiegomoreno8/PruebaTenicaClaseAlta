<template>
  <table class="task-table">
    <thead>
      <tr>
        <th class="titulo">Título</th>
        <th>Completada</th>
      </tr>
    </thead>
    <tbody>
      <!-- Iteramos sobre las tareas y mostramos una fila por cada una -->
      <tr v-for="task in tasks" :key="task.id">
        <td>{{ task.title }}</td>
        <td class="centered">
          <!-- Checkbox deshabilitado que indica si la tarea está completada -->
          <input type="checkbox" :checked="task.completed" disabled />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
// Declaramos que este componente recibe la propiedad 'tasks'
defineProps({
  tasks: Array
})
</script>

<style scoped>
/* Estilos básicos para la tabla */
.task-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  font-size: 16px;
  
}

/* Bordes para celdas y encabezados */
/* .task-table th, */
.task-table td {
  border: 1px solid #070707;
  padding: 0.75rem;
  text-align: left;
  color: black;
}

.task-table th {
    text-align: center;
    color: black;
}

/* Encabezado con fondo más claro */
.task-table thead {
  background-color: #194671;
}

/* Centrar el contenido del checkbox */
.centered {
  text-align: center;
}
#filter {
  padding: 0.3rem;
  font-size: 1rem;
}
</style>
