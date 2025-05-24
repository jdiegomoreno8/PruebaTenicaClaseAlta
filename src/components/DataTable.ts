// Importación de módulos necesarios
import { getFirestore, collection, query, where, orderBy, onSnapshot, getDocs } from "firebase/firestore";

const db = getFirestore();

// 1. Consulta de tareas no completadas, ordenadas por dueDate
async function getPendingTasksOrdered() {
  const tasksQuery = query(
    collection(db, 'tasks'),
    where('completed', '==', false),
    orderBy('dueDate')
  );

  const snapshot = await getDocs(tasksQuery);
  snapshot.forEach((doc: { id: any; data: () => any; }) => {
    console.log(doc.id, '=>', doc.data());
  });
}

// 2. Listener en tiempo real para tareas no completadas
function listenToPendingTasks() {
  const tasksQuery = query(
    collection(db, 'tasks'),
    where('completed', '==', false),
    orderBy('dueDate')
  );

  return onSnapshot(tasksQuery, (snapshot: { docChanges: () => any[]; }) => {
    snapshot.docChanges().forEach((change: { type: string; doc: { data: () => any; }; }) => {
      if (change.type === 'added') {
        console.log('Tarea añadida: ', change.doc.data());
      }
      if (change.type === 'modified') {
        console.log('Tarea modificada: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Tarea eliminada: ', change.doc.data());
      }
    });
  });
}

//Autor: Juan Diego Ospina Moreno