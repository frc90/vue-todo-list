
<template>
  <div class="container mt-5">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/note">Notes</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>