<script>
import { useMediaStore } from '../stores/medias'

export default{
  data () {
    return {
      pos: 0 // position horizontale en px
    }
  },
  setup(){
    const store = useMediaStore()
    return { store }
  },  
  props: {
    // medias: {
    //   type: Array,
    //   default: () => [],
    //   required: true
    // },
    type: {
      type: String,
      default: '',
      required: false
    },
    search: String,
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    filterMedias(){
      if(this.search){
      return this.store.mediaState.filter(media => {
          return media.title.toLowerCase().includes(this.search.toLowerCase()).filter(media => {
        return media.type === this.type
      })
        })
      }

      return this.store.mediaState.filter(media => {
        return media.type === this.type
      })
    }
  },
  /**
   *  Filtre les séries
   */
  getSeries(){
    const series = this.store.mediaState.filter(media => {
      return media.type === "serie"
    })

    return series
  },
  methods: {
    prev() {
      this.pos = Math.min(0, this.pos + 600);
    },
    next() {
      const maxpos = this.$refs.slider.scrollWidth;
      const width = this.$refs.slider.clientWidth
      this.pos = Math.max(-maxpos + width, this.pos - 600);
    },
    getModal(e){
      // console.log(e.target.class);
      e.target.classList.add('modal')
    }
  }
}
</script>

<template>
  <div class="medialist">

    <h1>{{ title }}</h1>
    <input type="button" class="prev" title="Précédent" value="◀" aria-label="Défiler vers la précédente" v-on:click="prev">
    <input type="button" class="next" title="Suivant" value="▶" aria-label="Défiler vers la suite" v-on:click="next">
    <ul v-if="filterMedias.length > 0" :style="'transform: translateX('+ pos + 'px)'" ref="slider">
      <li v-for="media in filterMedias" :key="media.id" >
        <a href="#">
          <RouterLink :to="`/media/${media.id}`">
            <!-- <span class="visually-hidden">{{ media.title }}</span> -->
            <!-- pour cacher un élément sans le retirer des liseurs d'écran -->
            <h2 class="title">{{ media.title }}</h2>
            <img :src="'medias/'  + media.img" alt="" srcset="">
          </RouterLink>
        </a>
      </li>
    </ul>

    
    <ul v-if="type === 'serie'" :style="'transform: translateX('+ pos + 'px)'" ref="slider">
      <li v-for="media in getSeries" :key="media.id" >
        <a href="#">
          <RouterLink :to="`/media/${media.id}`">
            <!-- <span class="visually-hidden">{{ media.title }}</span> -->
            <!-- pour cacher un élément sans le retirer des liseurs d'écran -->
            <h2 class="title">{{ media.title }}</h2>
            <img :src="'medias/'  + media.img" alt="" srcset="">
          </RouterLink>
        </a>
      </li>
    </ul>

    <ul v-if="type === 'movie'" :style="'transform: translateX('+ pos + 'px)'" ref="slider">
      <li v-for="media in getSeries" :key="media.id" >
        <a href="#">
          <RouterLink :to="`/media/${media.id}`">
            <!-- <span class="visually-hidden">{{ media.title }}</span> -->
            <!-- pour cacher un élément sans le retirer des liseurs d'écran -->
            <h2 class="title">{{ media.title }}</h2>
            <img :src="'medias/'  + media.img" alt="" srcset="">
          </RouterLink>
        </a>
      </li>
    </ul>
    <!-- Aucun résultats -->
    <ul v-else>
      <li>Aucun média trouvé</li>
    </ul>
  </div>
</template>


<style>
.mediagallery input{
  z-index: 30;
  background: none;
  color: white;
  border: none;
  height: 200px;
  padding: 0px 10px;
  font-size: 30px;
}
.mediagallery .prev{
  left: 0;
}
.mediagallery .next{
  right: 0;
}
.mediagallery input:hover{
  transform: scale(1.2);
  cursor: pointer;
}
.mediagallery .prev{
  left: 0;
}
.mediagallery .next{
  right: 0;
}


.modal{
  /* position: absolute;
  width: 80vh;
  z-index: 99999;
  inset: 0; */
}
</style>
