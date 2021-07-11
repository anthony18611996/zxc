<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="event-card-shadow">
      <span class="eyebrow"> @{{ event.id }} on {{ event.userId }} </span>
      <h4 class="title">
        {{ event.title }}
      </h4>
      <BaseIcon name="users"> {{ event.body }}</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<style lang="scss" scoped>
.event-card-shadow {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 400px;
  border: 2px solid #42b983;
  margin-bottom: 15px;
  padding: 10px;
  color: #000;
  transition: ease-in-out 0.5s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: 2px solid transparent;
  }
  span {
    color: red;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;
  }
}
</style>
