<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
      </div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Rigo Café</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/menu">Menú</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-text>Navbar text</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <router-view />
      <br>
      <p>Hecho por RC (C)</p>
    </b-container>
  </div>
</template>

<style>
</style>
