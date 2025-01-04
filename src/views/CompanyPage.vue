<template>
  <v-app>
    <ContentSection
      background="/photo/v3.png"
      heading="كل ما تحتاجه في مكان واحد!"
      headingColor="#FF9C00"
      description="اكتشف أفضل الشركات المحلية التي تقدم الخدمات والمنتجات التي تبحث عنها. من خلال تقييمات تفصيلية وآراء المستخدمين، يمكنك اتخاذ قراراتك بثقة واختيار الشركات التي تلبي احتياجاتك بشكل مثالي. سواء كنت تبحث عن خدمات تقنية، شركات صيانة، أو أي قطاع آخر، نحن هنا لنساعدك في إيجاد الأفضل!"
      imageSrc="photo/Compogirl.png"
      :imageWidth="750"
    />

    <v-content>
      <v-container>
        <v-col style="margin-top: 50px">
          <v-row justify="center">
            <v-col style="justify-content: center">
              <h1 class="son son2 title1">جميع الشركات</h1>
              <h2 class="son son2 title2">
                اعثر على الشركات التي تلبي احتياجاتك بسهولة!
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
          image: "photo/Companies/abjd.jpg",
          title: "شركة أبجد",
          rating: 2,
          location: "الأردن",
          description:
            "البقالة والمواد التموينية · الأطعمة والوجبات الجاهزة · الأطعمة الصحية ومكملات الغذائية...",
        },
        {
          image: "photo/Companies/saraio.jpg",
          title: "شركة سرايو الوادية",
          rating: 5,
          location: "فلسطين",
          description:
            "مجموعة مصانع سرايو الوادية للصناعات الغذائية شركة رائدة في صناعة المواد الغذائية تاسست عام 1985.",
        },
        {
          image: "photo/Companies/bank.jpg",
          title: "بنك فيصل الإسلامي المصري",
          rating: 3,
          location: "مصر",
          description:
            "معدلات عائد الأوعية الادخارية · افتتاح فرع البنك الجديد بمصر الجديدة",
        },
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
