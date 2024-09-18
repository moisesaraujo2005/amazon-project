<!-- App.vue -->
<template>


  <TheHeader></TheHeader>
  <TheCarousel></TheCarousel>
  <SectionOne></SectionOne>
  <SectionWatch></SectionWatch>
  <SectionCardsTwo></SectionCardsTwo>
  <SectionGiftCard></SectionGiftCard>
  <SectionsCardsThree></SectionsCardsThree>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheCarousel from './components/TheCarousel.vue'; 
import SectionOne  from './components/SectionCardsOne.vue';
import SectionWatch from './components/SectionWatch.vue';
import SectionCardsTwo from './components/SectionCardsTwo.vue';
import SectionGiftCard from './components/SectionGiftCard.vue';
import SectionsCardsThree from './components/SectionsCardsThree.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheCarousel,
    SectionOne,
    SectionWatch,
    SectionCardsTwo,
    SectionGiftCard,
    SectionsCardsThree
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
