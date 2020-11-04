<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="knowledge-base-page" style="margin : 20px">
        <!-- JUMBOTRON -->
        <!-- <div class="knowledge-base-jumbotron">
            <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Dedicated Source Used on Website</h1>
                <p class="text-white">Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p>
                <vs-input icon-no-border placeholder="Search Topic or Keyword" v-model="knowledgeBaseSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" />
            </div>
        </div> -->

        <!-- KNOWLEDGE BASE CARDS  -->
        <div class="vx-row" >
                <div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base"
              
                  v-for="item in filteredKB" :key="item.id" 
                  @click="$router.push(item.url).catch(() => {})">
                    <vx-card class="text-center cursor-pointer"   :style="item.style" >
                        <img :src="item.graphic" alt="graphic" width="180" class="mx-auto mb-4">
                        <h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
                        <small>{{ item.description }}</small>
                    </vx-card>
                </div>
            </div>
    </div>
</template>

<script>

export default{
  data () {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [
        {
          id          : 1,
          title       : 'Ser estudio webcam',
          description : 'requisitos para ser un estudio webcam.',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/administrar-estudio-webcam',
          style       : 'background-color :#E8C921'
        },
        {
          id          : 2,
          title       : 'ser webcamer',
          description : 'que necesito para ser modelo webcam',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/pages/knowledge-base/category',
          style       : 'background-color:#0791e6'
        },
        {
          id          : 3,
          title       : 'plataforma de pagos',
          description : 'utiliza tu propia plataforma de pagos para modelos y sub studios',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/pages/knowledge-base/category',
          style       : 'background-color : #AEDA00'
        },
        {
          id          : 4,
          title       : 'plataforma para generar nomina',
          description : 'automatiza tu pago liquidacion de nomina.',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/pages/knowledge-base/category',
          style       : 'background-color : #E66CEF'
        },
        {
          id          : 5,
          title       : 'Tutoriales',
          description : 'Gummi bears pudding icing sweet caramels chocolate',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/pages/knowledge-base/category',
          style       : 'background-color : #FF6363'
        },
        {
          id          : 6,
          title       : 'Noticias',
          description : 'Dragée jelly beans candy canes pudding cake wafer. Muffin croissant.',
          graphic     : require('@/assets/images/pages/graphic-1.png'),
          url         : '/pages/knowledge-base/category',
          style       : 'background-color : #F97308'
        }
      ]
    }
  },
  computed: {
    filteredKB () {
      return this.kb.filter((item) => item.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()) || item.description.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase()))
    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
    background-image: url('../../assets/images/pages/knowledge-base-cover.jpg');
    background-size: cover;

}
</style>
