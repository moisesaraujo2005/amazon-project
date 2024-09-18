<!-- App.vue -->
<template>


  <TheHeader></TheHeader>
  <TheCarousel></TheCarousel>
  <SectionOne></SectionOne>
  <SectionWatch></SectionWatch>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheCarousel from './components/TheCarousel.vue'; 
import SectionOne  from './components/SectionCardsOne.vue';
import SectionWatch from './components/SectionWatch.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheCarousel,
    SectionOne,
    SectionWatch
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
