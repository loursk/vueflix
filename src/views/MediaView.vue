

<script>
import { useMediaStore } from "../stores/medias"
import { mapActions, mapState } from "pinia";

// const store = useMediaStore()

export default {

  data () {
    return{
      media: {}
    }
  },
  beforeMount() {
    this.media = this.getMediaById(parseInt(this.$route.params.id))
  },  
  mounted() {
    console.log(this.$route.params);
    console.log(this.media)
  },
  computed: {
    ...mapState(useMediaStore, {
      media: 'medias'
    }),
    getMedia(){
      return this.getMediaById(parseInt(this.$route.params.id))
    },
    mediaTitle(){
      return this.getMedia.title
    },
    mediaTube(){
      return this.getMedia.tube
    },
  },
  methods:{
    ...mapActions(useMediaStore, ['getMediaById'])
  }
}
</script>

<template>
  <main class="media"> 
    <!-- <MediaView /> -->
    item: {{ $route.params.id }}
    titre: {{ media.title }}
    
    <div style="width: 600px; height: 300px; position: relative; margin: 0 auto;">
      <iframe v-if="media.tube"
        :src="'https://www.youtube.com/embed/' + media.tube"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        width="600"
        height="300"></iframe>
    </div>
  </main>
</template>
