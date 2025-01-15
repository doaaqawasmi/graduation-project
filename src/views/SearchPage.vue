<template>
  <v-container style="padding-top: 100px; height: 100%">
    <!-- Search Bar -->
    <v-row justify="center" class="mb-5" dir="rtl">
      <v-col cols="12" md="6">
        <div dir="rtl" class="formdiv">
          <v-text-field
            dir="rtl"
            v-model="searchQuery"
            label="إبحث"
            @keydown.enter="performSearch"
            class="pt-1 pr-2 forminput"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>

    <v-container v-if="!searchQuery && searchHistory.length">
      <v-row>
        <h3>آخر عمليات البحث:</h3>
      </v-row>
      <v-row>
        <v-chip
          v-for="(query, index) in searchHistory"
          :key="index"
          class="mr-2"
          @click="searchQuery = query"
        >
          {{ query }}
        </v-chip>
      </v-row>
    </v-container>

    <!-- filteredCompanies (Show only after pressing Enter) -->
    <v-container>
      <v-row v-if="searchQuery && computedFilteredLists.length">
        <v-row v-for="list in computedFilteredLists" :key="list.name">
          <CompanyCard
            v-for="item in list.data"
            :key="item.id"
            :image="item.image"
            :title="item.title"
            :rating="item.rating"
            :location="item.location"
            :description="item.description"
            :link="item.link"
            :buttonText="item.buttonText"
          />
        </v-row>
      </v-row>

      <!-- Show a message if there are no results -->
      <v-row v-else-if="searchQuery">
        <p>No results found for "{{ searchQuery }}".</p>
      </v-row>
    </v-container>

    <!-- Section: Three Random Cards -->
    <v-container style="margin-top: 50px">
      <h1 class="text-center" style="color: #e28c0d">اكتشف المزيد</h1>
      <v-row>
        <v-col
          v-for="(card, index) in randomCards"
          :key="index"
          cols="12"
          md="4"
        >
          <CompanyCard
            :image="card.image"
            :title="card.title"
            :rating="card.rating"
            :location="card.location"
            :description="card.description"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CompanyCard from "@/components/CompanyCard.vue";

export default {
  name: "SearchPage",
  components: {
    CompanyCard,
  },
  data() {
    return {
      searchQuery: "",
      searchHistory: [],
      showResults: false,
      Companies: [
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
      hotels: [
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
      restorants: [
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
      Gym: [
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
      randomCards: {
        company: null,
        hotel: null,
        restaurant: null,
        gym: null,
      },
    };
  },
  mounted() {
    this.generateRandomCards();
  },
  computed: {
    computedFilteredLists() {
      const query = this.searchQuery.toLowerCase();
      return [
        {
          name: "Companies",
          data: this.Companies.filter((item) => this.matchesQuery(item, query)),
        },
        {
          name: "Hotels",
          data: this.hotels.filter((item) => this.matchesQuery(item, query)),
        },
        {
          name: "Restorants",
          data: this.restorants.filter((item) =>
            this.matchesQuery(item, query)
          ),
        },
        {
          name: "Gym",
          data: this.Gym.filter((item) => this.matchesQuery(item, query)),
        },
      ].filter((list) => list.data.length); // Only include lists with data
    },
  },
  methods: {
    performSearch() {
      if (this.searchQuery.trim() !== "") {
        this.showResults = true;
        // Add the query to the history if it's not a duplicate
        if (!this.searchHistory.includes(this.searchQuery.trim())) {
          this.searchHistory.unshift(this.searchQuery.trim());
        }
        // Limit the history to the last 5 searches
        if (this.searchHistory.length > 5) {
          this.searchHistory.pop();
        }
      } else {
        this.showResults = false;
      }
    },
    matchesQuery(item, query) {
      return (
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    },
    generateRandomCards() {
      this.randomCards.company = this.getRandomItem(this.Companies);
      this.randomCards.hotel = this.getRandomItem(this.hotels);
      this.randomCards.restaurant = this.getRandomItem(this.restorants);
      this.randomCards.gym = this.getRandomItem(this.Gym);
    },
    getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    },
  },
};
</script>

<style>
.v-application--is-ltr .v-text-field .v-label {
  left: auto !important;
}
</style>
