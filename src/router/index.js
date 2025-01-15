import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import RestaurantPage from "@/views/RestaurantPage.vue";
import CompanyPage from "@/views/CompanyPage.vue";
import HotelPage from "@/views/HotelPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import SearchPage from "@/views/SearchPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SignupPage from "@/views/SignupPage.vue";
import BusinessInfo1 from "@/views/BusinessInfo1.vue";
import BusinessInfo2 from "@/views/BusinessInfo2.vue";
import ForgetPass from "@/views/ForgetPass.vue";
import SportPage from "@/views/SportPage.vue";
import UserProfile from "@/views/UserProfile.vue";
import UserBizProfile from "@/views/UserBizProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/Restaurant",
    name: "RestaurantPage",
    component: RestaurantPage,
  },
  {
    path: "/Company",
    name: "CompanyPage",
    component: CompanyPage,
  },
  {
    path: "/Hotel",
    name: "HotelPage",
    component: HotelPage,
  },
  {
    path: "/Product",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/Search",
    name: "SearchPage",
    component: SearchPage,
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/Signup",
    name: "SignupPage",
    component: SignupPage,
  },
  {
    path: "/Business1",
    name: "BusinessInfo1",
    component: BusinessInfo1,
  },
  {
    path: "/Business2",
    name: "BusinessInfo2",
    component: BusinessInfo2,
  },
  {
    path: "/ForgetPass",
    name: "ForgetPass",
    component: ForgetPass,
  },
  {
    path: "/Sport",
    name: "SportPage",
    component: SportPage,
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/UserBizProfile",
    name: "UserBizProfile",
    component: UserBizProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
