<template>
  <!--
  Navbar (done)

Hero Section → with "Order Now", "Reserve"

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
  
</template>

<style>
/* import instrument serif for my heading */
@import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;700&display=swap");

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  background-color: #000000;
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
  align-items: center; /* Add this line */
  margin-top: 50px;
}

.hero-text h1 {
  font-size: 4.5rem;
  margin-bottom: 0;
  padding: 10px;
  font-family: "Poppins";
  line-height: 3rem;
}
.hero-text p {
  font-size: 16px;
  font-family:  Arial;
  max-width: 750px;
  text-align: center;
  padding-top: 20px;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}
.hero-text .ordernow {
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
  margin: 1rem auto 0 auto; /* Center horizontally and add top margin */
}
.hero-text .ordernow:hover {
  background: rgb(212, 29, 29);
}
</style>
