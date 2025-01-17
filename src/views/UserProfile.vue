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
                  :type="field.type"
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
                style="width: 150px"
              >
                حفظ التعديلات
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <v-container style="padding-top: 70px">
      <v-row>
        <v-row>
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
          type: "email",
        },
        {
          label: "إسمك بالكامل",
          placeholder: "إسمك بالكامل",
          value: "نور علي",
          editable: false,
          type: "fullname",
        },
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
    saveChanges() {
      // Logic for saving changes
      alert("تم حفظ التعديلات بنجاح!");
      // Reset edit mode
      this.editableFields = { email: false, name: false };
    },
  },
};
</script>

<style>
.text-right {
  text-align: right;
  color: #34495e;
}
.flex-grow-1 {
  flex-grow: 1;
  margin-bottom: 0 !important;
  width: 500px;
}
.flex-grow-1.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none !important;
}
</style>
