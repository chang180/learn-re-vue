<template>
  <div class="about">
    <h1>This is an Piclist page</h1>
    <router-link to="/pic/1" class="pic">1</router-link>
    <router-link to="/pic/2" class="pic">2</router-link>
  </div>
</template>
<style lang="scss">
.pic{
  display:inline-block;
  width:150px;
  height:100px;
  margin:20px;
  border:2px solid;
}
</style>
