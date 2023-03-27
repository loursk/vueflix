

<script>
export default {
  mounted() {
    console.log(this.$route.params);
  }  
}
</script>

<template>
  <main class="media"> 
    <!-- <MediaView /> -->
    item: {{ $route.params.id }}
  </main>
</template>