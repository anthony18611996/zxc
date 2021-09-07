import { createStore } from "vuex";
import modules from "./modules";
import api from "@/instance/api";

const CALLBACK_URL = 'ddd';

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
  actions: {
    sendForm(context, payload) {
      console.log(payload);
      api
        .post(`${CALLBACK_URL}`, {
          ...payload,
        })
        .then(function (res) {
          alert("Заявка отправлена");
          res;
        })
        .catch(function (error) {
          alert(error);
        });
      context;
    },
  },
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
