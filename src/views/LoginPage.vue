<template>
  <v-container fluid class="login-page">
    <v-row class="fill-height">
      <v-col cols="12" md="6" class="form-section">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="title mb-3" style="font-size: xx-large !important">
                تسجيل الدخول
              </h1>
              <p class="first-p">
                ليس لديك حساب بعد؟
                <a href="/Signup" class="highlighted-link">عمل حساب جديد</a>
              </p>
              <v-row>
                <v-divider class="mt-3 ml-3"></v-divider>
                <p class="second-p">أو</p>
                <v-divider class="mt-3 mr-3"></v-divider>
              </v-row>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-form ref="form" v-model="valid">
                <p class="third-p">
                  البريد الإلكتروني
                  <v-icon color="red">*</v-icon>
                </p>
                <v-text-field
                  label="البريد الإلكتروني"
                  placeholder="أدخل بريدك الإلكتروني"
                  solo
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                  type="email"
                ></v-text-field>
                <p class="forth-p">
                  كلمة السر
                  <v-icon color="red">*</v-icon>
                </p>
                <v-text-field
                  v-model="password"
                  label="كلمة السر"
                  placeholder="أكتب كلمة السر"
                  solo
                  :rules="[rules.required]"
                  :type="showPassword ? 'text' : 'password'"
                  append-icon="mdi-eye"
                  @click:append="togglePasswordVisibility"
                />
                <a href="/ForgetPass" class="forgot-password">
                  هل نسيت كلمة السر؟
                </a>
                <v-btn
                  color="orange"
                  block
                  large
                  outlined
                  class="mt-4 button"
                  @click="validateForm"
                >
                  تسجيل دخول
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-col cols="12" md="6" class="image-section d-none d-md-flex">
        <v-img
          src="/photo/login/logingirl.jpg"
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
      street: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "هذا الحقل مطلوب",
        counter: (value) => value.length <= 20 || "20 حرف على الأكثر",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "إيميل غير صحيح";
        },
      },
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert("Form is valid!");
      } else {
        alert("Please fill all required fields.");
      }
    },
    validateForm() {
      if (this.$refs.form.validate()) {
        this.$router.push("/");
      } else {
        alert("الرجاء ملء جميع الحقول المطلوبة.");
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
.image {
  max-width: 100%;
  height: fit-content !important;
}

.login-page {
  min-height: 100vh;
  padding: 0 !important;
  background-color: #fafafa !important;
}

.image-section {
  padding: 0;
}

.form-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #fafafa;
  padding-top: 70px !important;
}

.title {
  font-weight: bold !important;
  color: #34495e !important;
}

.first-p {
  font-size: x-large;
  color: #34495e;
}

.highlighted-link {
  color: #ffa726 !important;
  font-weight: bold;
  text-decoration: none;
}

.second-p {
  font-size: larger;
  font-weight: bold;
  color: #ffa726;
}

.third-p,
.forth-p {
  justify-self: right;
  font-size: larger;
  color: #34495e;
  font-family: "ExpoLight" !important;
}

.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
  border: 1px solid #ccc;
}

.forgot-password {
  display: block;
  /* margin-top: 8px; */
  font-size: larger;
  font-weight: bold;
  color: #ffa726 !important;
  text-decoration: none;
}

.fill-height {
  height: fit-content;
}

.button {
  font-size: larger !important;
  font-weight: bold !important;
  border: 2px solid !important;
}
</style>
