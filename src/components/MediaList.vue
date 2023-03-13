<script>
export default{
  props: {
    medias: Object,
    search: String,
    title: String
  },
  computed: {
    filterMedias(){
      if(this.search){
      return this.medias.filter(media => {
          return media.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }

      return this.medias
    }
  },
  methods: {
    getModal(e){
      // console.log(e.target.class);
      e.target.classList.add('modal')
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <ul v-if="filterMedias.length">
    <li v-for="media in filterMedias" :key="media.id" >
      <h2 class="title">{{ media.title }}</h2>
      <img :src="'medias/'  + media.img" alt="" srcset="" @click="getModal">
    </li>
  </ul>
  <!-- Aucun résultats -->
  <ul v-else>
    <li>Aucun média trouvé</li>
  </ul>
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
