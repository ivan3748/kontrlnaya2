<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/users" class="nav-link">Users</router-link>
      <router-link v-if="!isAuthenticated" to="/login" class="nav-link">Login</router-link>
      <router-link v-if="isAuthenticated" to="/profile" class="nav-link">Profile</router-link>
      <button v-if="isAuthenticated" @click="logout" class="logout-button">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.isAuthenticated = !!localStorage.getItem('token');
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isAuthenticated = false;
      this.$router.push('/');
    },
  },
  watch: {
    $route() {
      this.isAuthenticated = !!localStorage.getItem('token');
    },
  },
};
</script>

<style scoped>
/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #1a1a1a; /* Темный фон */
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Навигация */
nav {
  background-color: #333; /* Черный фон */
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #444; /* Легкая линия снизу */
}

.nav-link {
  color: #ccc; /* Светло-серые ссылки */
  text-decoration: none;
  margin-right: 15px;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff; /* Белый цвет на hover */
}

button.logout-button {
  background-color: #444; /* Темный фон для кнопки */
  color: white;
  border: 1px solid #555; /* Легкая рамка */
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button.logout-button:hover {
  background-color: #555; /* Немного светлее */
  color: #ccc;
}

/* Контент страницы */
router-view {
  flex: 1;
  padding: 20px;
  background-color: #222; /* Темный фон для содержимого */
  border-radius: 8px;
  margin: 20px;
}

/* Параметры кнопок */
button {
  background-color: #444;
  color: #ccc;
  border: none;
  padding: 8px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
}

button:hover {
  background-color: #555;
  color: white;
}
</style>
