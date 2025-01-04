<template>
  <v-col style="margin-right: inherit">
    <v-card
      :loading="loading"
      max-width="374"
      style="border-radius: 10px; justify-self: center"
      min-height="450"
    >
      <v-img :src="image" height="170"></v-img>

      <v-card-title>{{ title }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="rating"
            color="amber"
            background-color="grey lighten-2"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>
        </v-row>

        <div class="my-4 subtitle">
          <v-icon color="#ffa726">mdi-map-marker</v-icon>
          {{ location }}
        </div>

        <div class="discription">{{ description }}</div>
      </v-card-text>

      <v-card-actions>
        <router-link to="/Product" custom>
          <v-btn
            outlined
            color="warning"
            class="buttons text-orange--text"
            width="340"
          >
            {{ buttonText }}
          </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CompanyCard",
  props: {
    image: String,
    title: String,
    rating: {
      type: Number,
      default: 4,
    },
    location: String,
    description: String,
    link: {
      type: String,
      default: "#",
    },
    buttonText: {
      type: String,
      default: "المزيد",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.read {
  padding: 20px 25px !important;
  font-size: 15px !important;
  border-radius: 7px !important;
  font-family: "ExpoLight" !important;
  font-weight: bold !important;
}

.buttons {
  border-radius: 4px !important;
  background-color: white;
}

.text-orange--text {
  color: #ffa726 !important;
  font-family: "ExpoLight";
  font-weight: bold;
}

.v-card__actions {
  justify-content: center;
}

.v-card__title,
.subtitle,
.discription {
  font-family: "ExpoLight";
  font-weight: bold !important;
  color: #34495e;
}

.v-card__title {
  font-size: 1.8rem !important;
  margin-bottom: 12px;
  margin-top: 12px;
}

.subtitle {
  font-size: 1.3rem !important;
  padding-top: 8px;
}

.discription {
  font-size: 1.1rem !important;
}

.title1 {
  font-size: 3rem;
  justify-self: center;
}

.title2 {
  font-size: 2rem;
  justify-self: center;
}
</style>
