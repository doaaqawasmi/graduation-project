<template>
  <v-app>
    <ContentSection
      background="/photo/h.png"
      heading="اكتشف أفضل الشركات المحلية بسهولة!"
      description="يوفر موقعنا دليلًا شاملاً يمكنك من خلاله البحث عن المطاعم، الفنادق، والمتاجر، وصالات الرياضة في منطقتك، مع تقييمات مفصلة من المستخدمين لمساعدتك في اتخاذ القرار الأفضل. سواء كنت تبحث عن خدمة مميزة أو عروض خاصة."
      additionalText="نحن هنا لتوصيلك بالأفضل!"
      imageSrc="photo/girlimg.png"
    />

    <v-content>
      <v-container v-for="section in sections" :key="section.title">
        <v-col style="margin-top: 50px">
          <v-row justify="center">
            <v-col style="justify-content: center">
              <h1 class="son son2 title1">{{ section.title }}</h1>
              <h2 class="son son2 title2">{{ section.subtitle }}</h2>
            </v-col>
          </v-row>

          <v-row>
            <CompanyCard
              v-for="item in section.items"
              :key="item.title"
              :image="item.image"
              :title="item.title"
              :rating="item.rating"
              :location="item.location"
              :description="item.description"
            />
          </v-row>

          <v-row style="justify-content: center; margin-top: 40px">
            <router-link :to="section.link" custom v-slot="{ navigate }">
              <v-btn
                color="#F39C12"
                class="white--text read"
                @click="navigate"
                role="link"
                style="width: 274px !important"
              >
                إكتشف المزيد
              </v-btn>
            </router-link>
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
      sections: [
        {
          title: "الشركات",
          subtitle: "أعثر على الشركات التي تلبي احتياجك بسهولة!",
          link: "/Company",
          items: [
            {
              image: "photo/Companies/jwwal.jpg",
              title: "شركة جوال",
              rating: 2,
              location: "فلسطين",
              description:
                "اطلبيها الآن بأوفر الأسعار من خلال متجر جوال الإلكتروني وبكل سهولة.",
            },
            {
              image: "photo/Companies/jeeny.jpg",
              title: "شركة Jeeny",
              rating: 4,
              location: "الأردن",
              description:
                "التنقّل مع جيني. تنقّل ووفّر بأمان وراحة! شركاؤنا العديدون متوفّرون دائمًا لخدمتك!",
            },
            {
              image: "photo/Companies/egyptair.jpg",
              title: "شركة EGYPTAIR",
              rating: 5,
              location: "مصر",
              description:
                "أول شركة طيران في الشرق الأوسط وأفريقيا سافر مع المصرية واستمتع بالرفاهية والراحة والخدمات المميزة!",
            },
          ],
        },
        {
          title: "المطاعم",
          subtitle: "استمتع بتجربة تناول طعام لا تُنسى!",
          link: "/Restaurant",
          items: [
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
        },
        {
          title: "الفنادق",
          subtitle: "اختر راحتك بكل ثقة!",
          link: "/Hotel",
          items: [
            {
              image: "photo/Hotel/fairmont.jpg",
              title: "فندق Fairmont",
              rating: 1.5,
              location: "مصر",
              description:
                "يتمتع فندق Fairmont Amman الفاخر والمصنف 5 نجوم بموقع مثالي في منطقة الدوار الخامس",
            },
            {
              image: "photo/Hotel/Mashtal.jpg",
              title: "فندق المشتل",
              rating: 3.5,
              location: "فلسطين",
              description:
                "فندق فاخر من فئة الخمس نجوم يقع شمال غرب مدينة غزّة وعلى شاطئها مباشرة.",
            },
            {
              image: "photo/Hotel/FourSeasons.jpg",
              title: "فندق Four Seasons",
              rating: 5,
              location: "الأردن",
              description:
                "يوفر فندق فورسيزونز عمّان مجموعة متنوعة من الغرف والأجنحة الفاخرة الحائزة على الجوائز .",
            },
          ],
        },
        {
          title: "صالات الرياضة",
          subtitle: "اكتشف أفضل الصالات الرياضية في منطقتك بسهولة!",
          link: "/Sport",
          items: [
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
          ],
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
