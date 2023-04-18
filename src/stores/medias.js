import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMediaStore = defineStore('medias', {
  state: () => ({medias: []}),

  actions: {
    getMediaById(mediaId){
      return this.medias.find((media) => media.id === mediaId)
    }
  }
})
