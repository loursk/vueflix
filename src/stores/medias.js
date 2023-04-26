import { defineStore } from 'pinia'

export const useMediaStore = defineStore('medias', {
  state: () => ({mediaState: []}),

  actions: {
    getMediaById(mediaId){
      return this.mediaState.find((media) => media.id === mediaId)
    },


    // actualise le store avec des medias externes (de l'api)
    setMedias(medias){
      this.mediaState = medias 
    }


  }
})
