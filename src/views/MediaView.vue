

<script>
import { useMediaStore } from "../stores/medias"
import { mapActions } from "pinia";

// const store = useMediaStore()

export default {

  mounted() {
    console.log(this.$route.params);
  },
  computed: {
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
    titre: {{ mediaTitle }}
    
    <div style="width: 600px; height: 300px; position: relative; margin: 0 auto;">
      <iframe v-if="mediaTube"
        :src="'https://www.youtube.com/embed/' + mediaTube"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        width="600"
        height="300"></iframe>
    </div>
  </main>
</template>
