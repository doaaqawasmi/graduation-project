<template>
  <v-container class="transparent-header">
    <v-row align="center" justify="space-between">
      <!-- Logo -->
      <v-col cols="auto">
        <v-img width="220" height="50" src="photo/Logo/logoBizA.png" />
      </v-col>

      <!-- Navigation Links for Large Screens -->
      <v-col cols="auto" class="d-none d-md-flex">
        <v-btn
          v-for="(item, index) in menuItems"
          :key="index"
          text
          class="text-orange--text font-weight-bold"
          :to="item.link"
        >
          {{ item.label }}
        </v-btn>
      </v-col>

      <!-- Actions -->
      <v-col cols="auto" class="d-none d-md-flex align-center">
        <v-btn
          v-for="(item, index) in buttons"
          :key="index"
          :icon="item.icon"
          :outlined="item.outlined"
          :color="item.color"
          :to="item.link"
          class="ml-4 buttons text-orange--text"
          :style="item.style"
        >
          <v-icon v-if="item.icon">{{ item.iconName }}</v-icon>
          {{ item.label }}
        </v-btn>
      </v-col>

      <!-- Hamburger Menu for Small Screens -->
      <v-col cols="auto" color="#e28c0d" class="d-flex d-md-none align-center">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :to="item.link"
            >
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-btn icon color="#e28c0d">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn
                outlined
                color="#e28c0d"
                class="ml-4 buttons text-orange--text"
              >
                {{ loginText }}
              </v-btn>
              <v-btn outlined color="#e28c0d" class="buttons text-orange--text">
                {{ languageText }}
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderNavigation",
  data() {
    return {
      menuItems: [
        { label: "الرئيسية", link: "/" },
        { label: "الشركات", link: "/Company" },
        { label: "المطاعم", link: "/Restaurant" },
        { label: "الفنادق", link: "/Hotel" },
        { label: "صالات الرياضة", link: "/Sport" },
      ],
      loginText: "تسجيل دخول",
      languageText: "English",
      buttons: [
        {
          label: "",
          icon: true,
          iconName: "mdi-magnify",
          color: "#e28c0d",
          outlined: false,
          link: "/Search",
          style: { backgroundColor: "transparent" },
        },
        {
          label: "تسجيل دخول",
          icon: false,
          iconName: "",
          color: "#e28c0d",
          outlined: true,
          link: "/Login",
          style: {},
        },
        // {
        //   label: "English",
        //   icon: false,
        //   iconName: "",
        //   color: "#e28c0d",
        //   outlined: true,
        //   link: "",
        //   style: {},
        // },
      ],
    };
  },
};
</script>

<style scoped>
.transparent-header {
  background-color: transparent !important;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  box-shadow: none;
  padding-top: 15px !important;
}

.text-orange--text {
  color: #e28c0d !important;
  font-family: "ExpoLight";
  font-weight: bold;
}

.buttons {
  border-radius: 12px !important;
  background-color: white;
  border-radius: 4px !important;
}
</style>
