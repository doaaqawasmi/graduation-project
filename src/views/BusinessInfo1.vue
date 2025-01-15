<template>
  <v-container fluid class="login-page">
    <v-row class="fill-height">
      <v-col cols="12" md="6" class="form-section1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="title mb-3" style="font-size: xx-large !important">
                دعنا نتحدث قليلا عن العمل الخاص بك
              </h1>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-form ref="form" v-model="valid">
                <!-- Loop for paired inputs -->
                <v-row v-for="(fieldPair, index) in pairedFields" :key="index">
                  <v-col
                    cols="12"
                    md="6"
                    v-for="(field, idx) in fieldPair"
                    :key="idx"
                  >
                    <p class="pargraph-name busnam">
                      {{ field.label }}
                      <v-icon v-if="field.required" color="red">*</v-icon>
                    </p>
                    <v-text-field
                      :label="field.label"
                      :placeholder="field.placeholder"
                      :solo="true"
                      :rules="field.rules"
                      v-model="field.model"
                      :type="field.type || 'text'"
                      class="displ social"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- Description Field (Full Width) -->
                <v-col style="padding-left: 0; padding-right: 0">
                  <p class="pargraph-name busnam">
                    وصف العمل
                    <v-icon color="red">*</v-icon>
                  </p>
                  <v-text-field
                    label="وصف العمل"
                    placeholder="أكتب مفصل عن العمل"
                    solo
                    :rules="[rules.required]"
                    v-model="workDescription"
                    type="text"
                    class="displ social"
                  ></v-text-field>
                </v-col>

                <v-col>
                  <p class="pargraph-name busnam mb-3">
                    روابط وسائل التواصل الإجتماعي (إن وجد)
                  </p>

                  <v-row cols="12">
                    <v-col
                      v-for="(social, index) in socialLinks"
                      :key="index"
                      cols="12"
                    >
                      <v-row align="center">
                        <v-col cols="2" class="text-end" style="padding: 0">
                          <p class="pargraph-name busnam">{{ social.label }}</p>
                        </v-col>
                        <v-col cols="10" style="padding: 0">
                          <v-text-field
                            :label="social.label"
                            :placeholder="social.placeholder"
                            solo
                            v-model="social.model"
                            class="social"
                            type="url"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col style="padding-top: 30px">
                  <a class="forgot-password" @click="validateForm">
                    التالي
                    <v-btn icon color="#ffa726">
                      <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                  </a>
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
      workDescription: "",
      rules: {
        required: (value) => !!value || "هذا الحقل مطلوب",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "إيميل غير صحيح";
        },
      },
      fields: [
        {
          label: "الإسم العمل",
          placeholder: "أدخل إسم العمل",
          model: "",
          rules: [(v) => !!v || "هذا الحقل مطلوب"],
          required: true,
        },
        {
          label: "البريد الإلكتروني الخاص بالعمل",
          placeholder: "أدخل البريد الإلكتروني",
          model: "",
          rules: [(v) => !!v || "هذا الحقل مطلوب", (v) => this.rules.email(v)],
          required: true,
        },
        {
          label: "الموقع الإلكتروني للعمل (إن وجد)",
          placeholder: "أدخل الموقع الإلكتروني للعمل",
          model: "",
          rules: [],
        },
        {
          label: "رقم الهاتف الخاص بالعمل",
          placeholder: "أدخل رقم الهاتف الخاص بالعمل",
          model: "",
          rules: [(v) => !!v || "هذا الحقل مطلوب"],
          required: true,
        },
        {
          label: "أوقات العمل",
          placeholder: "أدخل أوقات العمل",
          model: "",
          rules: [(v) => !!v || "هذا الحقل مطلوب"],
          required: true,
        },
        {
          label: "نوع العمل",
          placeholder: "أدخل نوع العمل",
          model: "",
          rules: [(v) => !!v || "هذا الحقل مطلوب"],
          required: true,
        },
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
  computed: {
    pairedFields() {
      const pairs = [];
      for (let i = 0; i < this.fields.length; i += 2) {
        pairs.push(this.fields.slice(i, i + 2));
      }
      return pairs;
    },
  },
  methods: {
    validateForm() {
      if (this.$refs.form.validate()) {
        this.$router.push("/Business2");
      } else {
        alert("الرجاء ملء جميع الحقول المطلوبة.");
      }
    },
  },
};
</script>

<style>
/*.login-page {
  padding-top: 70px !important;
}*/
.form-section1 {
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: center;
  background-color: #fafafa;
  padding-top: 70px !important;
}
.busnam {
  font-size: large;
}

.social.v-text-field.v-text-field--solo .v-input__control {
  min-height: auto !important;
}

.social.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none !important;
}

.displ.v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0 !important;
}

@media (max-width: 1272px) {
  /* .title {
    font-size: 1.5rem !important;
  } */

  .pargraph-name {
    font-size: medium !important;
  }

  .button {
    font-size: 0.9rem !important;
  }

  .busnam {
    font-size: medium;
  }

  .displ,
  .social {
    font-size: medium;
  }
}
</style>
