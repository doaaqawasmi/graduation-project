<template>
  <v-app>
    <ContentSection
      background="/photo/v3.png"
      heading="جعلنا اختيار الفندق المثالي أسهل من أي وقت مضى!"
      headingColor="#FF9C00"
      description="استعرض أفضل الفنادق في منطقتك أو وجهتك القادمة مع تقييمات تفصيلية تشمل نظافة الغرف، جودة الخدمة، المرافق، والأسعار. خطط لرحلتك بسهولة واحجز إقامتك بثقة لتضمن تجربة مريحة لا تُنسى. سواء كنت مسافرًا للعمل أو الترفيه، نحن هنا لتوصيلك بأفضل الخيارات!"
      imageSrc="photo/hotelgirl1.png"
      :imageWidth="750"
    />

    <v-content>
      <v-container>
        <v-col style="margin-top: 50px">
          <v-row justify="center">
            <v-col style="justify-content: center">
              <h1 class="son son2 title1">جميع الفنادق</h1>
              <h2 class="son son2 title2">اختر راحتك بكل ثقة!</h2>
            </v-col>
          </v-row>

          <v-row>
            <CompanyCard
              v-for="(company, index) in companies"
              :key="index"
              :image="company.image"
              :title="company.title"
              :rating="company.rating"
              :location="company.location"
              :description="company.description"
            />
          </v-row>
        </v-col>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import CompanyCard from "@/components/CompanyCard.vue";
import ContentSection from "@/components/ContentSection.vue";

export default {
  name: "HomeView",
  data() {
    return {
      loaded: true,
      primaryColor: "#FF9C00",

      companies: [
        {
          image: "photo/Hotel/fairmont.jpg",
          title: "فندق Fairmont",
          rating: "1.5",
          location: "مصر",
          description:
            "يتمتع فندق Fairmont Amman الفاخر والمصنف 5 نجوم بموقع مثالي في منطقة الدوار الخامس",
        },
        {
          image: "photo/Hotel/Mashtal.jpg",
          title: "فندق المشتل",
          rating: "3.5",
          location: "فلسطين",
          description:
            "فندق فاخر من فئة الخمس نجوم يقع شمال غرب مدينة غزّة وعلى شاطئها مباشرة.",
        },
        {
          image: "photo/Hotel/FourSeasons.jpg",
          title: "فندق Four Seasons",
          rating: "5",
          location: "الأردن",
          description:
            "يوفر فندق فورسيزونز عمّان مجموعة متنوعة من الغرف والأجنحة الفاخرة الحائزة على الجوائز .",
        },
        {
          image: "photo/Hotel/SteigenbergerHotel/steigenberger.jpg",
          title: "فندق Steigenberger",
          rating: 4,
          location: "مصر",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Hotel/royal.jpg",
          title: "فندق الرويال",
          rating: 3,
          location: "الأردن",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Hotel/matthaf.jpg",
          title: "فندق المتحف",
          rating: 5,
          location: "فلسطين",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
      ],
    };
  },
  components: {
    CompanyCard,
    ContentSection,
  },
};
</script>

<style>
.son {
  font-size: 32px;
  font-family: "ExpoBook", sans-serif;
  color: #34495e;
}

.son2 {
  max-width: 90%;
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
