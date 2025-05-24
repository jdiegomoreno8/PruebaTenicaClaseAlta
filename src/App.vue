<template>
  <div class="app-container">
    <!-- Encabezado con logo y nombre de la empresa -->
    <header class="app-header">
      <img src="/Logo.png" alt="Logo" class="logo" />
      <div class="company-text">
        <h1 class="company-name">Clase Alpha</h1>
        <h6 class="company-mision">Apoyo logístico</h6>
      </div>
    </header>

    <div class="content">
      <h2 class="page-title">Lista de Tareas</h2>

      <!-- Dropdown de filtro de tareas -->
      <div class="filter-bar">
        <label for="filter">Filtrar por estado: </label>
        <select v-model="filter" id="filter">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

      <!-- Tabla de tareas -->
      <TaskTable :tasks="filteredTasks" />

      <!-- Mensaje de error en caso de fallo en la API -->
      <p v-if="error" class="error-message">
        {{ error }}
      </p>
    </div>

    <!-- Pie de página -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Clase Alpha. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue' 
import TaskTable from './components/TaskTable.vue'

// Estado reactivo para tareas, filtro y error
const tasks = ref([])
const error = ref('')
const filter = ref('all')

// Función para obtener las tareas desde API
const fetchTasks = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) throw new Error('No se pudo cargar las tareas')
    const data = await response.json()
    tasks.value = data.slice(0, 10) // Solo los primeros 10 ítems
  } catch (err) {
    error.value = err.message
  }
}

// Ejecutar al montar el componente
onMounted(fetchTasks)

// Filtro de las tareas
const filteredTasks = computed(() => {
  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.completed)
  } else if (filter.value === 'pending') {
    return tasks.value.filter(task => !task.completed)
  }
  return tasks.value
})
</script>

<!-- Importación de estilos externos -->
<style scoped src="./assets/styles/app.css"></style>
