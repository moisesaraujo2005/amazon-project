
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'; 
import { EffectCoverflow,  Navigation } from 'swiper/modules'; 

const photos = [
  'https://a.storyblok.com/f/261604/2500x1500/0a7b38db4f/rotondo-vermillon-nonna-feuillage-chiesa-bouclette-creme-carlotta-marta-verre-rose.jpg/m/1940x0/filters:quality(80)',
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/37f44b83381427.60006dd5cd1f4.png',
 'https://newcomglobal.com/wp-content/uploads/2021/03/cs2102l0010_009_383979_gl_cs_cm_fy21q4_sm_latitude_family_li_1200x627_1_c.jpg',
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
  width: 99vw;
  height: 410px; 
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

@media screen and (max-width: 768px) { 

.mySwiper {
  height: 318px;
}
.swiper-slide img {
    width: 100%;
    height: 319px;
    object-fit: cover;

    
   

} }
</style>
