<template>
  <v-app style="padding-top: 120px">
    <v-container class="my-5">
      <v-row justify="right">
        <v-col cols="12" md="12">
          <v-form>
            <v-row>
              <h1 class="text-right">معلومات حسابك:</h1>
            </v-row>
            <!-- Email Section -->
            <v-row
              v-for="(field, index) in userFields"
              :key="index"
              align="center"
              class="mt-4"
            >
              <v-col>
                <h2 class="text-right">{{ field.label }}</h2>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="field.value"
                  class="flex-grow-1"
                  :label="field.placeholder"
                  solo
                  :disabled="!field.editable"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn
                  color="teal"
                  class="ml-3"
                  style="color: white; width: 100px"
                  @click="editField(index)"
                >
                  تعديل
                </v-btn>
              </v-col>
            </v-row>

            <!-- Save Button -->
            <v-row justify="start" class="mt-4">
              <v-btn
                color="warning"
                class="text-white"
                @click="saveChanges"
                style="width: 170px; font-size: larger"
              >
                حفظ التعديلات
              </v-btn>
            </v-row>

            <v-row class="mt-15">
              <h1 class="text-right">معلومات شركتك:</h1>
            </v-row>
            <!-- Email Section -->
            <v-row
              v-for="(field, index) in companyFields"
              :key="index"
              align="center"
              class="mt-4"
            >
              <v-col>
                <h2 class="text-right">{{ field.label }}</h2>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="field.value"
                  class="flex-grow-1"
                  :label="field.placeholder"
                  solo
                  :disabled="!field.editable"
                ></v-text-field>
              </v-col>
              <v-col>
                <!-- <v-btn
                  color="teal"
                  class="ml-3"
                  style="color: white; width: 100px"
                  @click="editCompanyField(index)"
                >
                  تعديل
                </v-btn> -->
              </v-col>
            </v-row>

            <v-row class="mt-15">
              <h2 class="text-right">روابط وسائل التواصل الإجتماعي:</h2>
            </v-row>
            <!-- Email Section -->
            <v-row
              v-for="(field, index) in SocialFields"
              :key="index"
              align="center"
              class="mt-4"
            >
              <v-col>
                <h3 class="text-right">{{ field.label }}</h3>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="field.value"
                  class="flex-grow-1 SocialFields"
                  :label="field.placeholder"
                  solo
                  :disabled="!field.editable"
                ></v-text-field>
              </v-col>
              <v-col>
                <!-- <v-btn
                  color="teal"
                  class="ml-3"
                  style="color: white; width: 100px"
                  @click="editSocialField(index)"
                >
                  تعديل
                </v-btn> -->
              </v-col>
            </v-row>

            <v-row>
              <h2 class="text-right mt-10">صور العمل:</h2>
            </v-row>

            <v-row>
              <v-col v-for="(image, index) in images" :key="index">
                <img
                  :src="image.src"
                  alt="Product Image"
                  class="product-image1"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-row class="mt-10">
          <h1 class="text-right">الأعمال التي أعجبتك:</h1>
        </v-row>
      </v-row>

      <!-- Cards Section -->
      <v-row>
        <v-col
          v-for="(card, index) in likedCards"
          :key="index"
          cols="12"
          md="4"
        >
          <CompanyCard
            :title="card.title"
            :image="card.image"
            :rating="card.rating"
            :location="card.location"
            :description="card.description"
            :buttonText="card.buttonText"
            :isFavorite="true"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CompanyCard from "../components/CompanyCard.vue";
export default {
  components: {
    CompanyCard,
  },
  data() {
    return {
      email: "noor@gmail.com",
      fullName: "نور علي",
      preview: null,
      files: [],
      editableFields: {
        email: false,
        name: false,
      },
      likedCards: [
        {
          image: "photo/Companies/abjd.jpg",
          title: "شركة أبجد",
          rating: 2,
          location: "الأردن",
          description:
            "البقالة والمواد التموينية · الأطعمة والوجبات الجاهزة · الأطعمة الصحية ومكملات الغذائية...",
        },
        {
          image: "photo/Hotel/fairmont.jpg",
          title: "فندق Fairmont",
          rating: "1.5",
          location: "مصر",
          description:
            "يتمتع فندق Fairmont Amman الفاخر والمصنف 5 نجوم بموقع مثالي في منطقة الدوار الخامس",
        },
      ],
      userFields: [
        {
          label: "البريد الإلكتروني الخاص بك",
          placeholder: "البريد الإلكتروني الخاص بك",
          value: "noor@gmail.com",
          editable: false,
        },
        {
          label: "إسمك بالكامل",
          placeholder: "إسمك بالكامل",
          value: "نور علي",
          editable: false,
        },
      ],
      companyFields: [
        {
          label: "البريد الإلكتروني الخاص بالعمل",
          placeholder: "البريد الإلكتروني الخاص بالعمل",
          value: "Jawwal@gmail.com",
          editable: false,
        },
        {
          label: "إسم العمل",
          placeholder: "إسم العمل",
          value: "شركة جوال",
          editable: false,
        },
        {
          label: "رقم الهاتف الخاص بالعمل",
          placeholder: "رقم الهاتف الخاص بالعمل",
          value: "05955646879",
          editable: false,
        },
        {
          label: "الموقع الإلكتروني للعمل ",
          placeholder: "الموقع الإلكتروني للعمل ",
          value: "http://jawwal",
          editable: false,
        },
        {
          label: "نوع العمل",
          placeholder: "نوع العمل",
          value: "شركة",
          editable: false,
        },
        {
          label: "أوقات العمل",
          placeholder: "أوقات العمل",
          value: "الاثنين - الجمعة: 9 صباحًا - 6 مساءً",
          editable: false,
        },
        {
          label: "وصف العمل",
          placeholder: "وصف العمل",
          value: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس  النص العربى.",
          editable: false,
        },
        {
          label: "العنوان الفعلي للعمل",
          placeholder: "العنوان الفعلي للعمل ",
          value: "الرمال-غزة",
          editable: false,
        },
        {
          label: "Latitude",
          placeholder: "Latitude",
          value: "26.848043",
          editable: false,
        },
        {
          label: "Longitude",
          placeholder: "Longitude",
          value: "33.987627",
          editable: false,
        },
      ],
      SocialFields: [
        {
          label: "Facebook",
          placeholder: "Facebook",
          value: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس  النص العربى.",
          editable: false,
        },
        {
          label: "Instagram",
          placeholder: "Instagram",
          value: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس  النص العربى.",
          editable: false,
        },
        {
          label: "Twitter",
          placeholder: "Twitter",
          value: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس  النص العربى.",
          editable: false,
        },
      ],
      images: [
        { src: "photo/Hotel/SteigenbergerHotel/steigenberger.jpg" },
        { src: "photo/Hotel/SteigenbergerHotel/steigenberger-brakefast.jpg" },
        { src: "photo/Hotel/SteigenbergerHotel/steigenberger-food.jpg" },
        { src: "photo/Hotel/SteigenbergerHotel/steigenberger-pool.jpg" },
        { src: "photo/Hotel/SteigenbergerHotel/steigenberger-room.jpg" },
      ],
    };
  },
  methods: {
    editField(field) {
      // this.$set(this.editableFields, field, !this.editableFields[field]);
      this.$set(
        this.userFields[field],
        "editable",
        !this.userFields[field].editable
      );
    },
    editCompanyField(index) {
      this.$set(
        this.companyFields[index],
        "editable",
        !this.companyFields[index].editable
      );
    },
    editSocialField(index) {
      this.$set(
        this.SocialFields[index],
        "editable",
        !this.SocialFields[index].editable
      );
    },
    saveChanges() {
      // Logic for saving changes
      alert("تم حفظ التعديلات بنجاح!");
      // Reset edit mode
      this.editableFields = { email: false, name: false };
    },
  },
  computed: {
    fieldPairs() {
      // Split fields into pairs for two columns
      return this.companyFields.reduce((pairs, field, index) => {
        if (index % 2 === 0) pairs.push([]);
        pairs[pairs.length - 1].push(field);
        return pairs;
      }, []);
    },
  },
};
</script>

<style>
.SocialFields {
  color: cornflowerblue;
}

.product-image1 {
  height: 150px;
  width: 200px;
  border-radius: 5px;
}

.file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.upload-label {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid #ccc;
  border-radius: 8px;
}

.file-input {
  display: none;
}

.add-photo-column {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
}

.plusButton {
  border-radius: 50% !important;
  height: 70px !important;
  width: 70px !important;
  color: white !important;
  background-color: #49bf5a !important;
}
</style>
