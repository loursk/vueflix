<script>
// import data from "@/data.js" // remplacée par la reqûete vers l'API => fetchData
import MediaList from "./MediaList.vue"
import { useMediaStore } from "../stores/medias"

export default{
  data () {
    return {
      search: '',
      data: []
    }
  },
  components: {
    MediaList
  },
  computed: {
    /**
     *  Filtre les Films
     */
    getMovies(){
      return this.data.filter(media => {

        return media.type === "movie"
      })
    },
    /**
     *  Filtre les séries
     */
    getSeries(){
      return this.data.filter(media => {
        return media.type === "serie"
      })
    },
    /**
     *  Filtre les médias des années 90
     */
    getNineties(){
      return this.data.filter(media => {
        return media.year > 1990 && media.year <= 2000
      })
    }
  },
  mounted () {
      this.fetchData()
      this.$refs.search.focus()
  },
  methods: {
    async fetchData(){
      const response = await fetch(import.meta.env.VITE_URL_API)
      this.data = await response.json();

      const store = useMediaStore()
      store.$patch({
        medias: this.data
      })
    }
  }
}
</script>

<template>
  
  <p class="search">
    <label for="searchtxt">Recherche</label>
    <input id="searchtxt" type="search" v-model="search" ref="search">
  </p>
  <main class="mediagallery">
    
    <!-- affichage des films -->    
    <MediaList :medias="getMovies" :search="search" title="Films"/>

    <!-- affichage des séries -->
    <MediaList :medias="getSeries" :search="search" title="Séries"/>

    <!-- années 90 -->
    <MediaList :medias="getNineties" :search="search" title="Années 90"/>

    <!-- Aucun résultats -->
    <!-- <ul v-if="!getMovies.length && !getSeries.length">
      <li>Aucun média trouvé</li>
    </ul> -->

  </main>
</template>
