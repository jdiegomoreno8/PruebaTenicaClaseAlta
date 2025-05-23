<template>
  <div class="app-container">
    <!-- Encabezado con logo y nombre de empresa -->
    <header class="app-header">
      <img src="/Logo.png" alt="Logo" class="logo" />
      <div class="company-text">
        <h1 class="company-name">Clase Alta</h1>
        <h6 class="company-mision">Apoyo logístico</h6>
      </div>
    </header>

    <div class="content">
      <h2 class="page-title">Lista de Tareas</h2>

      <!-- Filtro -->
      <div class="filter-bar">
        <label for="filter">Filtrar por estado: </label>
        <select v-model="filter" id="filter">
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="pending">Pendientes</option>
        </select>
      </div>

      <!-- Tabla -->
      <TaskTable :tasks="filteredTasks" />

      <!-- Mensaje de error -->
      <p v-if="error" class="error-message">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import TaskTable from './components/TaskTable.vue'

const tasks = ref([])
const error = ref('')
const filter = ref('all')

const fetchTasks = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) throw new Error('No se pudo cargar las tareas')
    const data = await response.json()
    tasks.value = data.slice(0, 10)
  } catch (err) {
    error.value = err.message
  }
}

onMounted(fetchTasks)

const filteredTasks = computed(() => {
  if (filter.value === 'completed') {
    return tasks.value.filter(task => task.completed)
  } else if (filter.value === 'pending') {
    return tasks.value.filter(task => !task.completed)
  }
  return tasks.value
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  font-family: Arial, sans-serif;
background: #F2994A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.app-header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: white;
  border-bottom: #000;
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 1rem;
}

.company-name {
  font-size: 1.5rem;
  margin: 0;
}

.company-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;
  color: black;
}

.company-mision {
  font-size: 0.85rem;
  margin: 0;
  font-weight: normal;
  opacity: 0.9;
}

.content {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

.page-title {
  text-align: center;
  margin-bottom: 1rem;
  color: #000;
}

.filter-bar {
  margin-bottom: 1rem;
  text-align: center;
  color: #000;
}

#filter {
  padding: 0.3rem;
  font-size: 1rem;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
