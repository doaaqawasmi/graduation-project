<template>
  <v-app>
    <HeaderCompo />
    <router-view />
    <FooterCompo />
  </v-app>
</template>

<script>
import HeaderCompo from "@/components/HeaderCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";

export default {
  components: {
    HeaderCompo,
    FooterCompo,
  },
};
</script>

<style>
body {
  font-family: "Cairo", sans-serif;
  direction: rtl;
}
</style>
