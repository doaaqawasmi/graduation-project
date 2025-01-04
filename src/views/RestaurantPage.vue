<template>
  <v-app>
    <ContentSection
      background="/photo/v3.png"
      heading="استمتع بأشهى الأطباق وأروع الأجواء!"
      headingColor="#FF9C00"
      description="نقدم لك دليلًا شاملًا لأفضل المطاعم في منطقتك، مع تقييمات مفصلة تغطي جودة الطعام، الخدمة، الأجواء، والأسعار. سواء كنت تبحث عن تجربة عشاء فاخرة، وجبة عائلية، أو مطعم يقدم مأكولات فريدة، ستجد هنا كل ما يناسب ذوقك. ابدأ رحلتك لاكتشاف مطاعم جديدة اليوم!"
      imageSrc="photo/RestMan.png"
      :imageWidth="550"
    />

    <v-content>
      <v-container>
        <v-col style="margin-top: 50px">
          <v-row justify="center">
            <v-col style="justify-content: center">
              <h1 class="son son2 title1">المطاعم</h1>
              <h2 class="son son2 title2">
                استمتع بتجربة تناول طعام لا تُنسى!
              </h2>
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
          image: "photo/Restaurants/SIZZLING.png",
          title: "مطعم SIZZLING",
          rating: 2,
          location: "مصر",
          description:
            "سيزلر هو أول مطعم ستيك هاوس متخصص في القاهرة منذ 2014. مع أول فرع لنا في المعادي ",
        },
        {
          image: "photo/Restaurants/mazaj.jpg",
          title: "مطعم مزاج",
          rating: 5,
          location: "فلسطين",
          description:
            "أطيب برجر ممكن تستمع فيه اطلبوا الآن سواء عن طريق الاتصال أو بزيارتنا مباشرة",
        },
        {
          image: "photo/Restaurants/FIRFLY.jpg",
          title: "مطعم FIRFLY",
          rating: 3,
          location: "الأردن",
          description:
            "مرحباً بكم في Firefly Burger، حيث نؤمن بتقديم أكثر من مجرد برجر لذيذ، وإسعاد براعم التذوق لديك.",
        },
        {
          image: "photo/Restaurants/Nisantasi.jpg",
          title: "مطعم Nisantasi",
          rating: 3.5,
          location: "مصر",
          description:
            "نيشانتاشي، وجهة المطبخ التركي في القاهرة، مملوكة من شركه لأكاديمية الدولية للأغذية.",
        },
        {
          image: "photo/Restaurants/wilys.jpg",
          title: "مطعم Wily's",
          rating: 2.5,
          location: "الأردن",
          description:
            "أسطورة الدجاج اللي اتفق على حُبهــا الجمييييع # الطعم _ الذكي",
        },
        {
          image: "photo/Restaurants/tapon.jpg",
          title: "مطعم الطابون",
          rating: 4.5,
          location: "فلسطين",
          description:
            "وجباتنا و أصنافنا بينا و بينهم علاقة حب كبيرة، بيشعر فيها كل عشاق مطعم الطابون",
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
