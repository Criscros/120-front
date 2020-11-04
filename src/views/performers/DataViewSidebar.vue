<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "NUEVA" : "ACTUALIZAR" }} MODELO</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">

        <!-- Product Image -->
        <template v-if="dataImg">

     
        </template>
        <!-- TYPE CONECTION -->
        <vs-select
        class="mt-5 w-full"
        label="tipo de conexión"
        v-model="type_conection"
        >
        <vs-select-item :is-selected.sync="item.isSelected" :key="index" :value="item.value" :text="item.isSelected?item.selectedText:item.label" v-for="(item,index) in options" />
        </vs-select>
    
        <!-- NAME -->
        <vs-input label="Nombres" v-model="name" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
        <!-- LAST NAME -->
        <vs-input label="Apellidos" v-model="last_name" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

        <!-- NUMBER IDENTIFICATION -->
        <vs-input 
            v-validate="{ required: true, regex: /\d+(\.\d+)?$/ }"
            label="Numero identificacion" v-model="number_identification" class="mt-5 w-full" name="item-name"
         />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
        
        <vs-input
            type="date"
            label="Fecha nacimiento" v-model="birthday" class="mt-5 w-full" name="item-name" 
         />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
        
        <!-- EMAIL  -->
        <vs-input label="Email" v-model="email" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>

        <!-- PHONE  -->
        <vs-input label="Telefono" v-model="phone" class="mt-5 w-full" name="item-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('item-name')">{{ errors.first('item-name') }}</span>
    

      </div>
    </component>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Actualizar</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancelar</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {

      dataId: null,
      name: '',
      last_name: '',
      number_identification :'',
      birthday: '',
      email :'',
      phone :'',
      type_conection:0,
      options:[
        {value: 1, label: 'estudio', selectedText: 'studio', isSelected: false },
        {value: 2, label: 'casa', selectedText: 'casa', isSelected: false }
      ],
    

      dataCategory: null,
      dataImg: null,
      dataOrder_status: 'pending',
      dataPrice: 0,

      category_choices: [
        {text:'Audio', value:'audio'},
        {text:'Computers', value:'computers'},
        {text:'Fitness', value:'fitness'},
        {text:'Appliance', value:'appliance'}
      ],

      order_status_choices: [
        {text:'Pending', value:'pending'},
        {text:'Canceled', value:'canceled'},
        {text:'Delivered', value:'delivered'},
        {text:'On Hold', value:'on_hold'}
      ],
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 160,
        wheelSpeed: .60
      }
    }
  },
  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      } else {
        const { category, id, img, name, order_status, price } = JSON.parse(JSON.stringify(this.data))
        this.dataId = id
        this.dataCategory = category
        this.dataImg = img
        this.name = name

       
        this.dataOrder_status = order_status
        this.dataPrice = price
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid () {
      return !this.errors.any() && this.name && this.last_name && this.number_identification 
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
  },
  methods: {
    initValues () {
      if (this.data.id) return
      this.dataId = null
      this.dataName = ''
      this.dataCategory = null
      this.dataOrder_status = 'pending'
      this.dataPrice = 0
      this.dataImg = null
    },
    submitData () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            type_conection : this.type_conection,
            name: this.name,
            last_name: this.last_name,
            number_identification: this.number_identification,
            birthday : this.birthday,
            studio_id: '5f6a6b435f4dcd2133c1244e',
            phone: this.phone,
            email: this.email
          }

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch('dataList/updateItem', obj).catch(err => { console.error(err) })
          } else {
              
            delete obj.id
            obj.popularity = 0
            this.$store.dispatch('dataList/addItem', obj).catch(err => { console.error(err) }).then((response)=>{
                console.log('1ue honda', response)
            })
          }

          this.$emit('closeSidebar')
          this.initValues()
        }
      })
    },
    updateCurrImg (input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.dataImg = e.target.result
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);

    &:not(.ps) {
      overflow-y: auto;
    }
}
</style>
