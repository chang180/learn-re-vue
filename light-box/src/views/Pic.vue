<template>
  <div class="Pic">
    <h1>This is an Pic page</h1>
    <div class="bigPic">{{ $route.params.id }}</div>
  </div>
</template>
<script>
export default {
  mounted(){
    if(this.$route.meta.lightbox){
      this.$store.commit("LIGHTBOX")
    }
  },
  updated(){
    if(this.$route.meta.lightbox){
      this.$store.commit("LIGHTBOX")
    }
  },
}
</script>

<style lang="scss">
.bigPic{
  width:600px;
  height:400px;
  border:5px solid;
  margin:0 auto;
}
</style>
