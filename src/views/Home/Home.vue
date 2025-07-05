<template>
  <!-- what this is about -->
  <!-- Online food vendor who supplies meals to busy working class individuals, offices and
 companies, the goal is to help them focus more on thier jobs why we take good care of thier stomach -->

  <!-- what will the user journey be like?
 1. user login
 2. user browse through our website and is interseted because of how clean everything he/she sees,
 3.  -->


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
      <img src="/public/dish.png" alt="" />
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

  <!-- preorder section -->
  <div class="preorder-section">
    <div class="preorder-form">
      <form @submit.prevent="submitPreorder">
        <h2>Pre-Order Your Meal</h2>
        <!-- <label>
          Select Meal:
          <select v-model="preorder.meal" required >
            <option disabled value="">Choose a meal</option>
            <option v-for="food in foods" :key="food.id" :value="food.name">{{ food.name }}</option>
          </select>
        </label> -->
        <label>
          Your Name:
          <input type="text" v-model="preorder.name" required placeholder="Enter your name" />
        </label>
        <label>
          Delivery Date:
          <input type="date" v-model="preorder.date" required />
        </label>
        <label>
          Delivery Phone Number:
          <input type="tel" placeholder="eg. 08123456678" v-model="preorder.phone" required />
        </label>
        <label>
          Delivery Address:
          <input
            type="text"
            placeholder="eg. N0 3 oluyn street ikeja lagos state"
            v-model="preorder.adddress"
            required
          />
        </label>

        <textarea v-model="preorder.message" placeholder="Enter Message">Message</textarea>
        <button type="submit">Pre-Order Now</button>
        <!-- <div v-if="preorderSuccess" class="preorder-success">
          Thank you, {{ preorder.name }}! Your pre-order for {{ preorder.meal }} on
          {{ preorder.date }} has been received.
        </div> -->
      </form>
    </div>

    <div class="preorder-image-grid">
      <div class="preorder-image"></div>
      <div class="preorder-image-small"></div>
      <div class="preorder-image-medium"></div>
    </div>
  </div>
  <!-- 1. why choose us
2. FAQ Section -->
  <!-- filepath: c:\Users\alozi\ChopCorner\src\views\Home\Home.vue -->
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-brand">
        <h2>ChopCorner</h2>

        <div class="close-hour">
          <div class="footer-design-div">
            <img src="/public/dish.png" alt="ChopCorner Logo" class="footer-logo" />
          </div>
          <div class="close-hour-texts">
            <h4>Opening Hours</h4>
            <p>Mon - Fri (7:00am - 5:00pm)</p>
            <p>Sat (8:00am - 5:00pm)</p>
          </div>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Pre-Order</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <p>0812 345 6789</p>
        <p>hello@chopcorner.com</p>
        <p>Lagos, Nigeria</p>
      </div>
      <div class="footer-links">
        <h4>Follow Us</h4>
        <div class="footer-socials-content">
  <a href="#"><div class="dish"><img src="/public/facebook.png" alt="Facebook" /></div></a>
  <a href="#"><div class="dish"><img src="/public/instagram.png" alt="Instagram" /></div></a>
  <a href="#"><div class="dish"><img src="/public/twitter.png" alt="Twitter" /></div></a>
</div>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; {{ new Date().getFullYear() }} ChopCorner. All rights reserved.
    </div>
  </footer>
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
      preorder: {
        meal: '',
        date: '',
        name: '',
      },
      preorderSuccess: false,
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
  background:  linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
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
  color: #fff;
  font-size: 20px;
  /* padding-top: -30px; */
  font-family: 'poppins';
  max-width: 700px;
  margin: 15px auto;
  text-align: center;
  margin-bottom: 20px;
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
  height: 44rem;
  /* background-color: #00ff84; */
  text-align: center;
  align-items: center;
  margin: 50px auto;
  width: 90%;
}

.signature-text {
  height: 200px;
  width: 800px;
  align-content: center;

  margin: auto;
}

.signature-text img {
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
  margin: auto;
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

.food-footer button:hover {
  background: rgb(212, 29, 29);
  color: #ffffff;
}

.food-footer .outline {
  width: 38%;
  border: 1px solid #000000;
  background-color: transparent;
  color: #000000;
}

.food-footer .outline:hover {
  background-color: #000000;
  color: #ffffff;
}

/* preorder section */

.preorder-section {
  height: 50rem;
  width: 90%;
  margin: auto;
  display: flex;
  margin-bottom: 60px;
}

.preorder-form {
  width: 30%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  /* border-top-left-radius: 25px;
  border-bottom-left-radius: 25px; */
  gap: 1.5rem;
}

.preorder-form h2 {
  font-family: 'Poppins', Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #ff1900;
}

.preorder-form label {
  width: 100%;
  text-align: left;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.preorder-form input,
.preorder-form select,
.preorder-form textarea {
  width: 88%;
  padding: 0.8rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #ff1900;
  font-size: 1rem;
  margin-bottom: 1rem;
  background: #181818;
  margin-top: 1rem;
  color: #fff;
  outline: none;
  appearance: none;
}

.preorder-form textarea {
  height: 110px;
}

.preorder-form input:focus,
.preorder-form select:focus,
.preorder-form textarea:focus {
  border: 1.5px solid #ff1900;
}

.preorder-form select {
  width: 99%;
  padding: 0.8rem 2.5rem 0.8rem 1.5rem;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' fill='white' xmlns='http://www.w3.org/2000/svg'><path d='M4 6l4 4 4-4'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2em;
}

.preorder-form button {
  background: #ff1900;
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;
}

.preorder-form button:hover {
  background: #d41d1d;
}

/* .preorder-image {
  background-image: url('/public/chickenbg2.jpg');
  width: 50%;
  height: 50rem !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.preorder-image-small {
  background-image: url('/public/chickenbg2.jpg');
  width: 20%;
  height: 25rem !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.preorder-image-medium {
  background-image: url('/public/chickenbg2.jpg');
  width: 20%;
  height: 25rem !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
} */
.preorder-image-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  width: 70%;
}

.preorder-image,
.preorder-image-small,
.preorder-image-medium {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 25px;
}

.preorder-image {
  grid-row: 1 / span 2;
  grid-column: 1 / 2;
  min-height: 50rem;
  background-image: url('/public/delivery-man.jpg');
}

/*
.preorder-image-small {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  min-height: 195px;
  background-image: url('/public/breakfast.jpg');
} */

.main-footer {
  background: #181818;
  color: #fff;
  padding: 3rem 0 1rem 0;
  margin-top: 5rem;
  font-family: 'Poppins', Arial, sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-brand {
  flex: 1;
  min-width: 400px;
  text-align: left;
}
.footer-brand h2 {
  margin-bottom: 1.5rem;
  /* background-color: red; */
}

.close-hour {
  display: flex;
  color: #ffffff;
  gap: 15px;
  padding-top: 1px;
}

.footer-design-div {
  height: 90px;
  width: 90px;
  border-radius: 8px;
  align-content: center;
  text-align: center;
  background-color: #ffffff;
}
.footer-design-div img {
  margin: auto;
  width: 40px;
  height: 40px;
}
.close-hour-texts {
  align-content: start;
  display: flex;
  flex-direction: column;
  line-height: 1.2px;
  text-align: start;
  height: 90px;
}

.close-hour-texts h4 {
  margin-top: 12px;
  font-size: 1.1rem;
  color: #ff1900;
  margin-bottom: 19px;
}
.footer-links,
.footer-contact {
  flex: 1;
  min-width: 180px;
}

.footer-links h4,
.footer-contact h4 {
  margin-bottom: 0.7rem;
  color: #ff1900;
  font-size: 1.1rem;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ff1900;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #aaa;
  border-top: 1px solid #333;
  padding-top: 1rem;
}
.footer-socials-content{
  display: flex;
  gap: 10px;
}
.footer-socials-content .dish{
 height: 35px;
 display: flex;
  width: 35px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-socials-content .dish img{
  height: 20px;
  width: 20px;
text-align: center;
}
.footer-socials-content .dish:hover{
  background: #ff1900;
  color: #ffffff !important;
}

</style>
