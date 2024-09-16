<template>
    <section class="secaoCards">
        <div class="textosSection">
            <h1 class="titleCard">Related to items you've viewed</h1>
            <h5 class="viewAll">View All</h5>
        </div>
        <div class="cards">
            <div v-for="(product, index) in products" :key="product.id" class="card">
                <img class="produtos" :src="product.image" alt="">
                <p class="nomeProdutos">{{ product.name }}</p>
                <div class="alinhamentoAvaliacao">
                    <img class="estrelasProdutos" src="../assets/avaliacao.png" alt="">
                    <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt="">
                    <p class="qtdComprada">{{ product.sold }}</p>
                </div>
                <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                        <h4 class="precoPromotion" v-if="product.discountedPrice">
                            {{ product.discountedPrice }}
                        </h4>
                        <h4 class="promotionPrice" v-if="product.discountedPrice">
                            {{ product.originalPrice }}
                        </h4>
                        <h4 class="priceStandard" v-else>
                            {{ product.originalPrice }}
                        </h4>
                    </div>
                </div>
                <div class="deliveryProduct">
                    <div class="textDelivery">
                        <p>Delivery</p>
                        <p class="dayDelivery">{{ product.deliveryDate }}</p>
                    </div>
                    <div class="buttonCart">
                        <button v-if="!product.addedToCart" @click="addProduct(index)" class="cartDelivery">
                            Add to cart
                        </button>

                        <div class="removerProduct" v-if="product.showTeste">
                            <p>1 in cart -</p> <p style="color: #007185
" class="removerCart" @click="removeProduct(index)">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>



export default {
    data() {
        return {
            teste: false,
            products: [
                {
                    id: 1,
                    name: 'Nike - Blazer Mid',
                    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5NBmFsoE0Q5OtAw4bFSagN3wMRkZNYOa6183HJnbxRF-39G7e4HghcMBzm0mx_XQ1qWRL-wnhxubbnhpah6DZU5zSqna_Y3psdZll60fdCC-MUXeO1FyU&usqp=CAE',
                    sold: '1,951',
                    discountedPrice: '60,00',
                    originalPrice: '72,00',
                    deliveryDate: 'Tue, Sep 17',
                    addedToCart: false,
                    showTeste: false


                },
                {
                    id: 2,
                    name: 'Garmin - Relógio',
                    image: 'https://garmin.vtexassets.com/arquivos/ids/159175/FR265_azul2.jpg?v=638174511087500000',
                    sold: '350',
                    originalPrice: '220,00',
                    deliveryDate: 'Fri, Sep 27',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 3,
                    name: 'Sony - Câmera',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC40WOOQ81lqf8_3NXoPxiI2450FHTr7neg&s',
                    sold: '789',
                    originalPrice: '250,00',
                    deliveryDate: 'Mon, Sep 23',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 4,
                    name: 'Apple - Magic KeyBoard',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2S3Kl8PBV_DuaNbQcIy-v1Kd7lgR9ZuGiA&s',
                    sold: '2,134',
                    originalPrice: '160,00',
                    deliveryDate: 'Thu, Sep 26',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 5,
                    name: 'QCY - Fone de ouvido',
                    image: 'https://m.media-amazon.com/images/I/51m93rTRMkL.jpg',
                    sold: '588',
                    originalPrice: '30,00',
                    deliveryDate: 'Wed, Sep 18',
                    addedToCart: false,
                    showTeste: false

                }
            ]
        }
    },
    methods: {

        addProduct(index) {
            const product = this.products[index];
            this.$store.commit('addProduct', product);
            this.products[index].addedToCart = true;
            this.products[index].showTeste = true;
        },
        removeProduct(index) {
            
            const product = this.products[index];
            this.$store.commit('removeProduct', product.id);
            this.products[index].addedToCart = false;
            this.products[index].showTeste = false;

        }
    }
}


</script>
<style>
.textosSection {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;
}

.viewAll {
    display: flex;
    margin-left: auto;
    color: #FF9900;
    margin-right: 10vh;
    cursor: pointer;
}

.textosSection h1 {
    margin-left: 15vh;
}

.card {
    height: 70vh;
    width: 14vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.produtos {
    object-fit: contain;
    width: 13vw;
    height: 22vh;
}

.cards {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 7vh;
}

.nomeProdutos {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
}

.estrelasProdutos {
    width: 5vw;
    height: 10vh;
    margin-right: 0.8vh;
}

.alinhamentoAvaliacao {
    display: flex;
    align-items: center;
}

.qtdComprada {
    color: #597FAF;
    font-size: 0.9rem;
}

.setaPraBaixo {
    width: 1.1vw;
}

.cifraoDolar {
    width: 1.2vw;
}

.precoProduto {
    display: flex;
    align-items: flex-start;
    margin-right: 3vh;
    height: 5vh;
}

.precoPromotion {
    font-size: 1.5rem;
    color: #00A8E1;
}

.promotionPrice {
    color: black;
    margin-left: 3vh;
    text-decoration: line-through;
    font-size: 1rem;
}

.prices {
    display: flex;
    align-items: flex-end;
}

.textDelivery {
    display: flex;
    align-items: center;
    gap: 0.9vh;
}

.dayDelivery {
    font-weight: bold;
}

.deliveryProduct {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
}

.cartDelivery {
    border-radius: 15px;
    height: 3vh;
    color: black;
    background-color: #ffd814;
    font-weight: bold;
    width: 5.7vw;
    align-self: stretch;
    cursor: pointer;
}

.priceStandard {
    font-size: 1.5rem;
    color: #000000;
}

.buttonCart {
    display: flex;
    align-items: flex-start;
    height: 7vh;
    width: 10vw;
}

.removerProduct{
    display: flex;
    align-items: center;
    gap: 0.7vh;
}

.removerProduct p {
    color: #565959;
    cursor: pointer;
    font-weight: bold;
}




</style>