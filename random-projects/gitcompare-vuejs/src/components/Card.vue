<template>
  <div class="card">
    <img :src="repo.owner.avatar_url" :alt="repo.owner.login + ' avatar'" />
    <h2>{{ repo.name }}</h2>
    <h3>{{ repo.owner.login }}</h3>
    <ul>
      <li>{{ repo.stargazers_count }} estrelas</li>
      <li>{{ repo.forks_count }} forks</li>
      <li>{{ repo.open_issues }} issues</li>
      <li>
        Último commit em
        {{ repo.updated_at.substring(0, 10).replaceAll("-", "/") }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);

  li {
    padding-right: 10px;
  }
  h2 {
    margin: 0;
    font-weight: bold;
  }
  h3 {
    font-weight: lighter;
    margin: 0;
  }

  img {
    border-radius: 50%;
    padding: 20px;
    max-width: 120px;
    min-width: 80px;
  }
}
</style>