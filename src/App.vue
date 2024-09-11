<!-- App.vue -->
<template>
  <TheHeader></TheHeader>
  <TheCarousel></TheCarousel>
  <SectionOne></SectionOne>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheCarousel from './components/TheCarousel.vue'; 
import SectionOne  from './components/SectionOne.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheCarousel,
    SectionOne
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  
  font-family: "Roboto", sans-serif;
  

}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}
</style>
