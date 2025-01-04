<template>
  <v-app>
    <ContentSection
      background="/photo/v3.png"
      heading="اكتشف أفضل الصالات الرياضية في منطقتك بسهولة وراحة!"
      headingColor="#FF9C00"
      description="يوفر موقعنا دليلًا شاملاً يحتوي على مجموعة متنوعة من الصالات الرياضية مع تقييمات تفصيلية تشمل جودة الأجهزة، نظافة المكان، مستوى الخدمة، وأجواء التمرين. سواء كنت تبحث عن صالة رياضية مجهزة بأحدث التقنيات، أو مكان يوفر حصص تدريبية متنوعة، ستجد كل ما تحتاجه هنا. ابدأ رحلتك نحو حياة صحية ونشطة اليوم!"
      imageSrc="photo/Gym/gymGuy.png"
      :imageWidth="750"
    />

    <v-content>
      <v-container>
        <v-col style="margin-top: 50px">
          <v-row justify="center">
            <v-col style="justify-content: center">
              <h1 class="son son2 title1">جميع الصالات الرياضية</h1>
              <h2 class="son son2 title2">
                أعثر على أفضل الصالات الرياضية في منطقتك بسهولة!
              </h2>
            </v-col>
          </v-row>

          <v-row>
            <CompanyCard
              v-for="(Gym, index) in Gyms"
              :key="index"
              :image="Gym.image"
              :title="Gym.title"
              :rating="Gym.rating"
              :location="Gym.location"
              :description="Gym.description"
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

      Gyms: [
        {
          image: "photo/Gym/X3gym.jpg",
          title: "X3 gym",
          rating: 4.5,
          location: "الأردن",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Gym/Technogym.jpg",
          title: "Technogym تكنو جيم",
          rating: 5,
          location: "فلسطين",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Gym/STEPGYM.jpg",
          title: "STEP GYM & SPA",
          rating: 3,
          location: "مصر",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Gym/FreindsFitness.jpg",
          title: "Freinds Fitness Gym",
          rating: 4,
          location: "فلسطين",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Gym/FitnessParkGym.jpg",
          title: "Fitness Park Gym",
          rating: 3.5,
          location: "الأردن",
          description:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
        },
        {
          image: "photo/Gym/EdgefitGym.jpg",
          title: "Edgefit Gym",
          rating: 5,
          location: "مصر",
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

<style></style>
