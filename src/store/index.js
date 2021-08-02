import { createStore } from "vuex";
import modules from "./modules";

export default createStore({
  state: {
    user: { id: "abc123", name: "Sanya" },
    categories: [
      "nature",
      "animal",
      "food",
      "music",
      "nature",
      "animal",
      "food",
      "music",
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false },
    ],
    events: [
      { id: 1, title: "...", organazier: "..." },
      { id: 2, title: "...", organazier: "..." },
      { id: 3, title: "...", organazier: "..." },
      { id: 4, title: "...", organazier: "..." },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    activeTodosCount: (state) => {
      return state.todos.filter((todo) => !todo.done).length;
    },
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id);
    },
  },
  modules,
});
