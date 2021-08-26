import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Импорт компонента, который будем использовать как глобальный
import BaseIcon from "./components/BaseIcon";
import BaseButton from "./components/form-elements/BaseButton";
import SectionName from "./components/SectionName";
//Обращаемся к методу createApp для создания глобального компонента
const app = createApp(App);
//Пример регистрации глобального компонента
app.component("BaseIcon", BaseIcon);
app.component("BaseButton", BaseButton);
app.component("SectionName", SectionName);

app.use(store).use(router).mount("#app");