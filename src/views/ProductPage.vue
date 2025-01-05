<template>
  <v-app>
    <v-content>
      <v-container class="product-page" style="padding-top: 100px !important">
        <v-row justify="center" align="center">
          <!-- Image Column -->
          <v-col cols="12" md="6" class="image-column">
            <v-carousel
              cycle
              hide-delimiters
              height="420"
              class="product-carousel"
            >
              <v-carousel-item
                v-for="(image, index) in product.images"
                :key="index"
              >
                <img
                  :src="image.src"
                  alt="Product Image"
                  class="product-image"
                />
              </v-carousel-item>
            </v-carousel>
          </v-col>

          <!-- Details Column -->
          <v-col cols="12" md="6" class="text-column">
            <h1 class="product-title">{{ product.name }}</h1>

            <v-row align="center" class="location-rating">
              <v-icon color="#ffa726" class="location-icon">
                mdi-map-marker
              </v-icon>
              <h2 class="location">{{ product.location }}</h2>
            </v-row>

            <v-rating
              :value="product.rating"
              color="amber"
              background-color="grey lighten-2"
              dense
              half-increments
              readonly
              size="20"
              class="rating"
            ></v-rating>

            <p class="description">{{ product.description }}</p>

            <v-btn
              class="feedback-btn"
              color="warning"
              outlined
              @click="dialog = true"
            >
              <span class="button-text">اخبرنا عن تجربتك</span>
            </v-btn>
          </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title
              class="justify-space-between"
              style="margin: 0 !important"
            >
              <span class="headline">أخبرنا عن تجربتك</span>
              <v-btn icon @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <!-- Rating Categories Popup -->
              <v-row dense>
                <v-col
                  cols="12"
                  v-for="(ratingItem, index) in ratingCategories"
                  :key="index"
                  class="rating-row"
                >
                  <v-rating
                    v-model="ratingItem.value"
                    color="amber"
                    background-color="grey lighten-2"
                  ></v-rating>
                  <span class="rating-title">{{ ratingItem.label }}</span>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-row class="comment-section" align="center">
                <v-avatar size="50" class="user-avatar">
                  <img :src="user.avatar" alt="User Avatar" />
                </v-avatar>
                <v-text-field
                  v-model="newComment"
                  placeholder="أضف تعليقا"
                ></v-text-field>
              </v-row>
              <v-row justify="end">
                <v-btn color="warning" @click="submitFeedback">إرسال</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>

    <v-content>
      <v-container style="padding-top: 50px">
        <v-row>
          <MapComponent
            :latitude="30.047218"
            :longitude="31.235592"
            markerText="Steigenberger Hotel"
            :zoom="20"
          />
        </v-row>
      </v-container>
    </v-content>

    <v-content>
      <v-container style="padding-top: 70px">
        <v-row>
          <!-- Ratings Section -->
          <v-col cols="12" md="6" class="text-right">
            <h3 class="title">التقييمات</h3>
            <v-row
              v-for="(rating, index) in ratings"
              :key="index"
              class="rating-row"
            >
              <v-col class="rathingstar">
                <v-rating
                  :value="rating.stars"
                  color="amber"
                  background-color="grey lighten-2"
                  half-increments
                  readonly
                  class="stars"
                ></v-rating>
              </v-col>
              <v-col class="rathingname">
                <span class="rating-title">{{ rating.name }}</span>
              </v-col>
            </v-row>
          </v-col>

          <v-divider vertical></v-divider>

          <!-- Contact Section -->
          <v-col cols="12" md="6" class="text-right">
            <h3 class="title">التواصل مع الفندق</h3>
            <p class="subtext">
              <v-icon
                color="orange"
                class="clickable"
                @click="goToWebsite(product.website)"
              >
                mdi-web
              </v-icon>
              تفضل بزيارة الموقع الإلكتروني للفندق
            </p>
            <v-row align="center" class="social-icons">
              <v-icon
                color="#ffa726"
                size="30"
                class="clickable"
                @click="goToWebsite(product.facebook)"
              >
                mdi-facebook
              </v-icon>
              <v-icon
                color="#ffa726"
                size="30"
                class="mx-2 clickable"
                @click="goToWebsite(product.instagram)"
              >
                mdi-instagram
              </v-icon>
              <v-icon
                color="#ffa726"
                size="30"
                class="clickable"
                @click="goToWebsite(product.twitter)"
              >
                mdi-twitter
              </v-icon>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-content>
      <v-container class="comments-section">
        <v-row>
          <!-- Title -->
          <v-col cols="12">
            <h2 class="comments-title">التعليقات</h2>
          </v-col>

          <!-- Comments -->
          <v-col
            cols="12"
            v-for="(comment, index) in comments"
            :key="index"
            class="comment-item"
          >
            <v-row>
              <!-- Profile Image -->
              <v-col cols="1">
                <v-avatar size="50">
                  <img :src="comment.avatar" alt="User Avatar" />
                </v-avatar>
              </v-col>

              <!-- Comment Content -->
              <v-col cols="11">
                <v-row align="center">
                  <h3 class="user-name">{{ comment.name }}</h3>
                  <v-rating
                    :value="comment.rating"
                    color="amber"
                    background-color="grey lighten-2"
                    dense
                    readonly
                    size="20"
                    class="rating"
                  ></v-rating>
                </v-row>
                <v-row>
                  <p class="user-comment">{{ comment.text }}</p>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MapComponent from "../components/MapComponent.vue";
export default {
  name: "ProductPage",
  data() {
    return {
      dialog: false,
      comment: "",
      newComment: "",
      user: {
        name: "نور علي",
        avatar: "photo/commentsgirl.png",
      },
      ratingCategories: [
        { label: "الموقع", value: 0 },
        { label: "الخدمة", value: 0 },
        { label: "الإنترنت", value: 0 },
        { label: "النظافة", value: 0 },
        { label: "القرب على المواصلات", value: 0 },
      ],
      product: {
        images: [
          { src: "photo/Hotel/SteigenbergerHotel/steigenberger.jpg" },
          { src: "photo/Hotel/SteigenbergerHotel/steigenberger-brakefast.jpg" },
          { src: "photo/Hotel/SteigenbergerHotel/steigenberger-food.jpg" },
          { src: "photo/Hotel/SteigenbergerHotel/steigenberger-pool.jpg" },
          { src: "photo/Hotel/SteigenbergerHotel/steigenberger-room.jpg" },
        ],
        // src: "photo/Hotel/steigenberger.jpg",
        name: "فندق Steigenberger",
        rating: 4,
        location: "مصر",
        description:
          "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه",
        website:
          "https://www.booking.com/hotel/eg/steigenberger-el-tahrir.html",
        facebook: "https://web.facebook.com/@steigenbergertahrir/?_rdc=1&_rdr#",
        instagram: "https://www.instagram.com/steigenbergertahrir/?hl=en",
        twitter: "https://twitter.com/steigenbergerca",
      },
      ratings: [
        { name: "الموقع", stars: 4 },
        { name: "الخدمة", stars: 5 },
        { name: "الإنترنت", stars: 3 },
        { name: "النظافة", stars: 5 },
        { name: "القرب على المواصلات", stars: 5 },
      ],
      comments: [
        {
          name: "نور علي",
          avatar: "photo/commentsgirl.png",
          rating: 5,
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
        },
        {
          name: "نور علي",
          avatar: "photo/commentsgirl.png",
          rating: 3,
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
        },
        {
          name: "نور علي",
          avatar: "photo/commentsgirl.png",
          rating: 4,
          text: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.",
        },
      ],
    };
  },
  methods: {
    calculateAverageRating() {
      const totalRatings = this.ratingCategories.reduce(
        (sum, item) => sum + item.value,
        0
      );
      return (totalRatings / this.ratingCategories.length).toFixed(1);
    },
    submitFeedback() {
      this.ratingCategories.forEach((category, index) => {
        const currentRating = this.ratings[index]; // Match by index
        currentRating.stars = parseFloat(
          ((currentRating.stars + category.value) / 2).toFixed(1)
        );
      });

      const averageRating = parseFloat(this.calculateAverageRating());
      this.product.rating = parseFloat(
        ((this.product.rating + averageRating) / 2).toFixed(1)
      );

      if (this.newComment) {
        const newFeedback = {
          name: this.user.name,
          avatar: this.user.avatar,
          rating: averageRating,
          text: this.newComment,
        };
        this.comments.push(newFeedback);
      }

      this.resetPopup();
      this.dialog = false;
    },
    resetPopup() {
      this.newComment = "";
      this.ratingCategories.forEach((item) => (item.value = 0));
    },
    goToWebsite(url) {
      window.open(url, "_blank");
    },
  },
  components: {
    MapComponent,
  },
};
</script>

<style scoped>
.feedback-btn {
  font-size: 18px !important;
  font-weight: bold;
  border-radius: 4px;
  padding: 0px 55px !important;
}

.button-text {
  color: #ffa726;
  font-family: "ExpoLight" !important;
}

.rating-title {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  color: #34495e;
}

.headline {
  color: #34495e !important;
  font-size: 18px !important;
  font-weight: bold !important;
}

.row--dense > .col,
.row--dense > [class*="col-"] {
  padding: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.rating-row {
  display: flex;
  align-items: center;
}
.comment-section {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  padding-bottom: 5px;
}

.user-avatar {
  margin-left: 10px;
}

.comment-input {
  flex-grow: 1;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 10px;
  font-family: "ExpoLight" !important;
  color: #34495e;
}

.comment-input .v-input__control {
  border: none !important;
  font-size: 16px !important;
}

.comment-input .v-input {
  box-shadow: none !important;
}
.text-column {
  text-align: right;
  padding: 20px;
}

.product-title {
  font-size: 28px;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 15px;
}

.location-rating {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.location {
  font-size: 24px;
  color: #34495e;
  margin: 0 10px;
  font-family: "ExpoLight" !important;
}

.location-icon {
  font-size: 24px;
}

.rating {
  margin-left: 10px;
  margin-bottom: 15px;
}

.description {
  font-size: 18px;
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 30px;
}

.feedback-btn {
  font-size: 18px !important;
  font-weight: bold;
  border-radius: 4px;
  padding: 0px 55px !important;
}

.button-text {
  color: #ffa726;
  font-family: "ExpoLight" !important;
}

/* .image-column {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.product-carousel {
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  max-width: 600px;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}
.v-application .title {
  font-size: 30px !important;
}
.title {
  font-weight: bold !important;
  color: #34495e !important;
  margin-bottom: 15px !important;
}
.subtext {
  font-size: 20px;
  color: #34495e;
  margin-bottom: 10px;
  font-weight: bold;
}
.social-icons {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  padding-right: 10px;
}
.rating-row {
  align-items: center;
}
.rating-title {
  font-size: 20px;
  font-weight: bold;
  color: #34495e;
}
.rathingname,
.rathingstar {
  padding-bottom: 0px !important;
  padding-top: 0px !important;
}
.rathingstar,
.stars {
  max-width: fit-content !important;
}
.comments-section {
  padding: 20px;
  padding-top: 50px;
}

.comments-title {
  font-family: "ExpoBold";
  font-size: 30px !important;
  color: #34495e;
  /* margin-bottom: 20px; */
}

.comment-item {
  margin-bottom: 20px;
}

.user-name {
  font-family: "ExpoBold";
  font-size: 18px;
  color: #34495e;
  margin-right: 10px;
}

.rating {
  margin-top: 5px;
}

.user-comment {
  font-family: "ExpoLight";
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}

.clickable {
  cursor: pointer;
}
</style>
