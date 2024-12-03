<template>
  <div class="users">
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.firstName }} {{ user.lastName }}</strong> - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { users: [] };
  },
  async created() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    this.users = data.users;
  },
};
</script>

<style scoped>
.users {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>
