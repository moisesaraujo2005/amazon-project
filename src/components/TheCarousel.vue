
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; 
import { EffectCoverflow,  Navigation } from 'swiper/modules'; 

const photos = [
  'https://a.storyblok.com/f/261604/2500x1500/0a7b38db4f/rotondo-vermillon-nonna-feuillage-chiesa-bouclette-creme-carlotta-marta-verre-rose.jpg/m/1940x0/filters:quality(80)',
  'https://files.oaiusercontent.com/file-nRC2DU3aaFhVcr00qu7ArRZJ?se=2024-09-11T13%3A32%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D76f3cfe2-984b-485e-915f-4ec0d25bed93.webp&sig=RqzIombch%2BQKQ6aqmkrEzqCKacKmTGhix5pP9AH9jQg%3D',
  require('@/assets/pikaso_embed.jpeg'),
  'https://img.freepik.com/fotos-gratis/criancas-nao-binarias-de-vista-superior-brincando-com-um-jogo-colorido_23-2148779611.jpg?t=st=1725627355~exp=1725630955~hmac=b060049d99359c221e3fe431ab0f160a8f4e0c45f9c3ab6b7b0b5e9b269b7221&w=826'
];
</script>

<template>
  <Swiper
    :modules="[EffectCoverflow, Navigation]"
    effect="coverflow"
    navigation
    class="mySwiper"
  >
    <SwiperSlide v-for="(photo, index) in photos" :key="index">
      <img :src="photo" alt="Photo" />
    </SwiperSlide>
  </Swiper>
</template>

<style>
.mySwiper {
  width: 98.9vw;
  height: 350px; 
}

.swiper-slide {
  display: flex;
  align-items: center; 
  justify-content: center; 
}

.swiper-slide img {
  width: 100%; 
  height: 500px; 
  object-fit: cover;
  
}


.swiper-button-prev, .swiper-button-next {
  color: #000000; 
  width: 60px; 
  height: 40px; 
  

}

.swiper-button-prev:after, .swiper-button-next:after {
  font-size: 50px;
}

</style>
