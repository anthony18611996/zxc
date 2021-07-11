import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Импорт компонента, который будем использовать как глобальный
import BaseIcon from "./components/BaseIcon";
//Обращаемся к методу createApp для создания глобального компонента
const app = createApp(App);
//Пример регистрации глобального компонента
app.component("BaseIcon", BaseIcon);

app.use(store).use(router).mount("#app");
