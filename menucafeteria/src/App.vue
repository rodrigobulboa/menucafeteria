<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>Al Rigo café</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Inicio</b-nav-item>
            <b-nav-item to="/menu">Menú</b-nav-item>
            <b-nav-item to="/about">A cerca de</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br />
      <router-view />
      <p>Hecho por RC (C)</p>
    </b-container>
  </div>
</template>

<style>
</style>