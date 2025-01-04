<template>
  <v-container fluid class="login-page">
    <v-row class="fill-height">
      <v-col cols="12" md="6" class="form-section1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-form ref="form" v-model="valid">
                <p class="pargraph-name busnam titlebus">مميزات إضافية</p>

                <!-- Loop through checkboxes -->
                <v-row class="mb-5">
                  <v-col
                    cols="6"
                    v-for="(checkbox, index) in checkboxes"
                    :key="index"
                    class="column"
                  >
                    <v-checkbox
                      v-model="checkbox.selected"
                      :color="checkbox.color || 'success'"
                      :label="checkbox.label"
                      hide-details
                    ></v-checkbox>
                  </v-col>
                </v-row>

                <v-col class="column">
                  <p class="titlebus pargraph-name">صورة الغلاف</p>
                  <div class="file-upload">
                    <label class="upload-label" for="file-input">
                      <div v-if="preview" class="preview-container">
                        <img
                          :src="preview"
                          alt="Uploaded Image"
                          class="preview-image"
                        />
                      </div>
                      <div v-else class="icon-container">
                        <v-icon color="grey" size="32">mdi-arrow-down</v-icon>
                      </div>
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      @change="handleFileUpload"
                      class="file-input"
                    />
                  </div>
                </v-col>

                <v-col class="column" style="padding-top: 20px">
                  <p style="justify-self: right" class="titlebus">
                    صور تعرض العمل (إن وجد)
                  </p>
                  <v-row style="justify-content: space-around">
                    <div
                      v-for="(image, index) in images"
                      :key="index"
                      class="file-upload"
                    >
                      <label class="upload-label" :for="`file-input-${index}`">
                        <div v-if="image.preview2" class="preview-container">
                          <img
                            :src="image.preview2"
                            alt="Uploaded Image"
                            class="preview-image"
                          />
                        </div>
                        <div v-else class="icon-container">
                          <v-icon color="grey" size="32">mdi-arrow-down</v-icon>
                        </div>
                      </label>
                      <input
                        :id="`file-input-${index}`"
                        type="file"
                        accept="image/*"
                        @change="handleFileUpload2($event, index)"
                        class="file-input"
                      />
                    </div>
                  </v-row>
                </v-col>

                <v-col class="column mt-9">
                  <p class="pargraph-name busnam titlebus">
                    العنوان الفعلي للعمل (الشارع، المدينة)
                    <v-icon color="red">*</v-icon>
                  </p>
                  <v-text-field
                    label="الشارع - المدينة"
                    placeholder="الشارع - المدينة"
                    solo
                    :rules="[rules.required]"
                  ></v-text-field>
                </v-col>

                <v-col class="">
                  <v-row>
                    <p class="pargraph-name busnam titlebus">
                      أدخل الإحداثيات لموقع العمل
                      <a
                        href="https://www.latlong.net/"
                        class="link"
                        style="font-size: medium"
                        target="_blank"
                      >
                        (يمكنك الحصول علبهم من هذا الموقع latlong.net)
                      </a>
                    </p>
                    <v-row>
                      <v-col>
                        <p class="pargraph-name busnam">
                          Latitude
                          <v-icon color="red">*</v-icon>
                        </p>
                        <v-text-field
                          label="latitude"
                          placeholder="latitude"
                          solo
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <p class="pargraph-name busnam">
                          Longitude
                          <v-icon color="red">*</v-icon>
                        </p>
                        <v-text-field
                          label="longitude"
                          placeholder="longitude"
                          solo
                          :rules="[rules.required]"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-row>
                </v-col>

                <v-col style="padding: 0">
                  <v-btn
                    color="orange"
                    block
                    large
                    outlined
                    class="button"
                    @click="validateForm"
                  >
                    تسجيل دخول
                  </v-btn>
                </v-col>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="image-section d-none d-md-flex">
        <v-img
          src="/photo/login/guy.jpg"
          class="image fill-height"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      preview: null,
      street: "",
      latitude: "",
      longitude: "",
      files: [],
      images: [
        { preview2: null },
        { preview2: null },
        { preview2: null },
        { preview2: null },
      ],
      rules: {
        required: (value) => !!value || "هذا الحقل مطلوب",
      },
      checkboxes: [
        { label: "تتوفر خدمة WI-FI", selected: false },
        { label: "تتوفر خدمة الحجز عبر الإنترنت", selected: false },
        { label: "الموقع قريب على المواصلات", selected: false },
        { label: "تتوفر مواقف للسيارات", selected: false },
      ],
      socialLinks: [
        {
          label: "Facebook",
          placeholder: "رابط Facebook",
          model: "",
        },
        {
          label: "Instagram",
          placeholder: "رابط Instagram",
          model: "",
        },
        {
          label: "Twitter",
          placeholder: "رابط Twitter",
          model: "",
        },
      ],
    };
  },
  methods: {
    // validate() {
    //   if (this.$refs.form.validate()) {
    //     alert("Form is valid!");
    //   } else {
    //     alert("Please fill all required fields.");
    //   }
    // },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.preview = URL.createObjectURL(file);
      }
    },
    handleFileUpload2(event, index) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.images[index].preview2 = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    validateForm() {
      if (this.$refs.form.validate()) {
        this.$router.push("/");
      } else {
        alert("الرجاء ملء جميع الحقول المطلوبة.");
      }
    },
  },
};
</script>

<style scoped>
.column {
  padding: 0;
}

.file-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 85px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.file-input {
  display: none;
}

.upload-label {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.preview-image {
  max-width: 100%;
  /* max-height: 100%; */
  object-fit: cover;
  border-radius: 8px;
}

.titlebus {
  justify-self: right;
  font-size: larger;
  font-weight: bold;
  color: #34495e !important;
}
</style>
