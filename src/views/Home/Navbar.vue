<template>
  <nav class="navbar">
    <div class="nav-brand">ChopCorner</div>
    <div class="navbar-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">Menu</router-link></li>
        <li><router-link to="/">Contact</router-link></li>
        <li><router-link to="/">Trendings</router-link></li>
        <li class="dropdown">
          <a href="">Order</a>
          <ul class="dropdown-content">
            <li><router-link to="/order">Pre-order</router-link></li>
            <li><router-link to="/order-history">Weekly Plan</router-link></li>
            <li><router-link to="/order-history">Catering</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navbar-icons">
       <router-link to="/"><img src="/shopping-basket.png" alt=""></router-link>
      <router-link to="/"><img src="/user.png" alt=""></router-link>
      <button class="ordernow">Order Now</button>

    </div>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: inter;
  color: #000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

/* Brand */
.nav-brand {
  font-size: 24px;
  font-weight: 600;
  color: rgb(255, 0, 0);
  line-height: 20px;
  font-family: ;
}

/* Menu */
.navbar-menu {
  margin-right: 40%;
}
.navbar-menu ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0;
}

/* .navbar-menu li {
  position: relative;
} */

.navbar-menu a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  padding: 6px 10px;
  /* transition: color 0.3s ease; */
}

.navbar-menu a:hover {
  color: rgb(255, 0, 0);
}
.dropdown {
  position: relative;
}

/* Dropdown */
.dropdown .dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: -50px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  flex-direction: column;
  padding: 8px 0;
  z-index: 10;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

.dropdown-content li {
  padding: 8px 16px;
}

.dropdown-content li a {
  color: #333;
  display: block;
}

.dropdown-content li a:hover {
  background-color: #f9f9f9;
  color: rgb(255, 0, 0);
}

/* Icons (Cart + Profile) */
.ordernow{
  background-color: rgb(255, 0, 0);
  color: #ffffff;
  padding:  8px 12px;
  border-radius: 2rem;
  border: none;
  outline: none;
  cursor: pointer;
}
.navbar-icons {
  display: flex;
  gap: 16px;
  align-items: center;
}
.navbar-icons img{
  height:25px;
  width: 25px;
}

.navbar-icons a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  padding: 6px 10px;
  transition: color 0.3s ease;
}

.navbar-icons a:hover {
  color: #e63946;
}
</style>
