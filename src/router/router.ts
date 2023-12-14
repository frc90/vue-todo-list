import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import RegisterViewVue from "../views/RegisterView.vue";
import LoginViewVue from "../views/LoginView.vue";
import NoteViewVue from "../views/NoteView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeViewVue,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterViewVue,
  },
  {
    path: "/login",
    name: "login",
    component: LoginViewVue,
  },
  {
    path: "/note",
    name: "note",
    component: NoteViewVue,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
