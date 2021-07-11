import { createRouter, createWebHistory } from "vue-router";

//pages
const Home = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/Home.vue");
const EventCreate = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventCreate.vue");
const EventList = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventList.vue");
const EventShow = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventShow.vue");

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home page",
      layout: "",
    },
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
    meta: {
      title: "EventList",
      layout: "",
    },
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
    meta: {
      title: "EventCreate",
      layout: "",
    },
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    meta: {
      title: "EventShow",
      layout: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
