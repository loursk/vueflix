<script>
import data from "@/data.js"
import MediaList from "./MediaList.vue"

export default{
  data () {
    return {
      search: '',
      data
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
      this.$refs.search.focus()
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
