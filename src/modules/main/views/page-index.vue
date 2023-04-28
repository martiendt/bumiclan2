<script setup lang="ts"></script>

<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h1>Main Menu</h1>
    </div>
    <div class="main-content-body">
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <router-link to="/clash-of-clan" class="btn btn-primary btn-2xl h-32"
          >Clash of Clan</router-link
        >
        <router-link to="/physique" class="btn btn-info btn-2xl h-32">Physique</router-link>
        <router-link to="/mental" class="btn btn-success btn-2xl h-32">Mental</router-link>
        <router-link to="/health" class="btn btn-danger btn-2xl h-32">Health</router-link>
        <router-link to="/contribution-meeting" class="btn btn-warning btn-2xl h-32"
          >Contribution Meeting</router-link
        >
        <router-link to="/training" class="btn btn-2xl btn-secondary h-32">Training</router-link>
      </div>
    </div>
  </div>
</template>
