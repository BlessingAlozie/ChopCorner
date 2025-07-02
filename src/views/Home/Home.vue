<template>
  <!--

Featured Dishes

Meal Planner / Pre-Order

About Section

Customer Testimonials

Operating Hours

Location / Map

Call-to-Action again

Footer -->

  <!-- <div class="body">

  </div> -->

  <div class="hero-video">
    <video autoplay muted loop playsinline class="hero-bg-video">
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-text">
      <h1>Eat Well, Live Easy</h1>
      <p>
        Let ChopCorner handle the cooking. Enjoy mouthwatering meals, delivered hot and fresh,
        whenever hunger strikes. Your time, your taste, our kitchen.
      </p>
      <button class="ordernow">Order Now</button>
    </div>
  </div>
  <div class="category-section">
    <h1>Our Services</h1>
    <div class="divider-with-icon">
      <div class="divider-line"></div>
      <img src="/public/dish.png" class="divider-icon" alt="Dish" />
      <div class="divider-line"></div>
    </div>

    <div class="category-wrapper">
      <!-- <h1>Our Services</h1> -->
      <div class="category">
        <div class="breakfast">
          <img src="" alt="" />
        </div>
        <div class="breakfast-content">
          <h3>Breakfast</h3>
        </div>
      </div>
      <div class="category">
        <div class="lunch"></div>
        <div class="breakfast-content">
          <h3>Lunch</h3>
        </div>
      </div>
      <div class="category">
        <div class="catering-services"></div>
        <div class="breakfast-content">
          <h3>Catering</h3>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Dishes Section -->
  <!-- <div class="featured-dishes-section">
    <h2>Featured Dishes</h2>
    <div class="featured-dishes-wrapper">
      <div class="dish-card">
        <img src="/public/user.png" alt="Jollof Rice" />
        <h3>Jollof Rice</h3>
        <p>Classic West African rice dish, served with grilled chicken and plantains.</p>
      </div>
      <div class="dish-card">
        <img src="/public/hero-image.png" alt="Breakfast Platter" />
        <h3>Breakfast Platter</h3>
        <p>Eggs, sausage, yam, and veggies for a perfect start to your day.</p>
      </div>
      <div class="dish-card">
        <img src="/public/hero-image.png" alt="Party Tray" />
        <h3>Party Tray</h3>
        <p>Perfect for groups—assorted meals and sides for every occasion.</p>
      </div>
    </div>
  </div> -->

  <!-- savor the taste of perfection -->
  <div class="savor-wrapper">
    <div class="savor-image">
      <div class="savor-text">
        <h1><i>Made Fresh, Just for You </i></h1>
        <p class="savor-subtitle">
          Experience the joy of every meal, crafted with care, delivered with love.
        </p>
        <button class="ordernow">Order Now</button>
      </div>
    </div>
  </div>

  <!-- signature dishes -->
  <div class="signature">
    <div class="signature-text">
      <img src="/public/dish.png" alt="">
      <h1>Our Signature dishes</h1>
      <p class="signature-subtitle">
        Discover the favorites our customers love, crafted for unforgettable taste and satisfaction.
      </p>
      <!-- <div class="menu"></div> -->
    </div>
    <div class="food-list">
      <div class="food-card" v-for="food in foods" :key="food.id">
        <img :src="food.image" alt="food.name" />
        <h3>{{ food.name }}</h3>
        <p>{{ food.desc }}</p>
        <div class="food-footer">
          <button class="outline">₦{{ food.price }}</button>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        {
          id: 1,
          name: 'Jollof Rice',
          desc: 'Classic West African rice dish with grilled chicken and plantains.  start to your day.',
          price: 2500,
          image: '/public/lunch.jpg',
        },
        {
          id: 2,
          name: 'Breakfast Platter',
          desc: 'Eggs, sausage, yam, and veggies for a perfect start to your day. start to your day.',
          price: 1800,
          image: '/public/breakfast.jpg',
        },
        {
          id: 3,
          name: 'Party Tray',
          desc: 'Perfect for groups—assorted meals and sides for every occasion. start to your day.',
          price: 12000,
          image: '/public/chicken.jpg',
        },
        {
          id: 1,
          name: 'Jollof Rice',
          desc: 'Classic West African rice dish with grilled chicken and plantains.  start to your day.',
          price: 2500,
          image: '/public/lunch.jpg',
        },
      ],
    }
  },
  methods: {
    foodList() {},
  },
}
</script>

<style>
/* import instrument serif for my heading */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* background-color: #000000; */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.hero-video {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}

.hero-video::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
}

.hero-text {
  position: relative;
  z-index: 2;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Add this line */
  margin-top: 50px;
}

.hero-text h1 {
  font-size: 4.5rem;
  margin-bottom: 0;
  padding: 10px;
  font-family: 'Poppins';
  line-height: 3rem;
}

.hero-text p {
  font-size: 16px;
  font-family: Arial;
  max-width: 750px;
  text-align: center;
  padding-top: 20px;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
.ordernow {
  background: rgb(255, 0, 0);
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  /* box-shadow: 0 2px 8px rgba(255, 152, 0, 0.15); */
  display: block;
  margin: 1rem auto 0 auto;
  /* Center horizontally and add top margin */
}

.ordernow:hover {
  background: rgb(212, 29, 29);
}

/* Category section */
.category-section {
  width: 100%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.category-section h1 {
  font-size: 35px;
}

.category-wrapper {
  width: 90%;
  justify-content: center;
  display: flex;
  margin: auto;
  gap: 15px;
  margin-top: 20px;
}

.category {
  width: 33%;
  height: 47vh;
  margin: 0 auto;
  display: flex;
}

.breakfast,
.lunch,
.catering-services {
  width: 70%;
  height: 47vh;
  /* margin: 20px 0; */
  background-image: url('/public/breakfast.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  float: left;
}

.breakfast-content {
  width: 30%;
  height: 47vh;
  background-color: rgb(0, 0, 0);
  color: #fff;
  float: left;
  text-align: right;
  padding: 0 20px;
}

.lunch {
  background-image: url('/public/lunch.jpg');
}

.catering-services {
  background-image: url('/public/catering.jpg');
}

.breakfast-content h3::after {
  content: '';
  display: block;
  width: 40px;
  /* Adjust width as needed */
  height: 3px;
  /* Adjust thickness as needed */
  background: #ff0000;
  /* Choose your underline color */
  margin-top: 8px;
  /* Space between text and underline */
  border-radius: 2px;
  margin-left: auto;
  /* For right alignment */
  margin-right: 0;
}

.divider-with-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 200px;
  margin-top: -10px;
}

.divider-line {
  flex: 1;
  height: 4px;
  width: 5px;
  /* background: linear-gradient(90deg, #ff0000 60%, #000000 100%); */
  border-radius: 2px;
  background: #000000;
  box-shadow: 0 2px 8px rgba(14, 14, 14, 0.15);
}

.divider-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 0 2px 8px rgba(14, 14, 14, 0.1);
}
/* savor section */
.savor-wrapper {
  width: 100%;
  height: 40rem;
  background-color: #ff1900;
  scroll-behavior: smooth;
}
.savor-image {
  height: 40rem;
  background-color: black;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/public/chickenbg2.jpg') no-repeat center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  align-content: center;
}
.savor-text {
  /* max-width: 400px; */
  /* background-color: red; */
  margin: auto;
}
.savor-image h1 {
  color: #fff;
  line-height: 2px;
  font-family: 'Instrument Serif', serif;
  font-size: 5rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 0;
}
.savor-image p {
  color: #fff;
  font-size: 20px;
  /* padding-top: -30px; */
  font-family: 'poppins';
  max-width: 500px;
  margin: 15px auto;
  text-align: center;
  margin-bottom: 20px;
}
/* signature */
.signature {
  height: 50rem;
  /* background-color: #b41616; */
  text-align: center;
  align-items: center;
  margin: 50px auto;
  width: 90%;
}
.signature-text{
  height: 200px;
  width: 800px;
  align-content: center;
  /* background-color: #fff; */
  margin: auto;
}
.signature-text img{
  width: 30px;
  height: 30px;
}
.food-list {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 150px;
}
.food-card {
  height: 320px;
  width: 24%;
  border-radius: 5px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.12);
}
.food-card img {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  margin-top: -120px;
  object-fit: fill;
  border: #000000 10px solid;
  box-shadow: 4px 4px 28px rgba(97, 96, 96, 0.12);
}
.food-card h3 {
  text-align: center;
  font-family: 'poppins';
  padding-top: 10px;
}
.food-card p {
  text-align: center;
  font-size: 12px;
  max-width: 200px;
  margin: 0 auto 30px;
  color: #605e5e;
}
.food-footer {

  height: 45px;
  display: flex;
  width: 80%;
  margin:auto ;
  justify-content: space-between;
  gap: 15px;
}
.food-footer button,
.outline {
  background-color: #ff0000;
  width: 50%;
  height: 42px;
  border-radius: 2rem;
  color: #ffffff;
  border: none;
  outline: none;
  position: end;
}
.food-footer button:hover{
  background: rgb(212, 29, 29);
  color: #ffffff;
}
.food-footer .outline {
  width: 38%;
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000;
}
.food-footer .outline:hover{
  background-color: #000000;
  color: #ffffff;
}
</style>
