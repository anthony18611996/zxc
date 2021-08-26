import { createRouter, createWebHistory } from "vue-router";

//middlewares
import auth from "../middlewares/auth";

//pages
const Home = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/Home.vue");
const EventCreate = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventCreate.vue");
const EventList = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventList.vue");
const EventShow = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/EventShow.vue");
const Game = () =>
  import(/* webpackChunkName: "view-[request]" */ "@/pages/GamePage.vue");

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "Home page",
    },
  },
  {
    path: "/",
    name: "event-list",
    component: EventList,
    meta: {
      title: "Gravity",
    },
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
    meta: {
      title: "EventCreate",
      layout: "profile",
      middlewares: [auth],
    },
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    meta: {
      title: "EventShow",
    },
  },
  {
    path: "/game",
    name: "game",
    component: Game,
    props: true,
    meta: {
      title: "Game",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  if (to.meta.middlewares) {
    let canGoNext = true;
    to.meta.middlewares.forEach((middleware) => {
      if (!canGoNext) return;
      const isValid = middleware(router);
      if (!isValid) canGoNext = false;
    });
    if (canGoNext) return next();
  } else {
    return next();
  }
});

export default router;
