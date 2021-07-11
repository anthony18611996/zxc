<template>
  <div class="wrapper">
    <div class="event-header">
      <div class="eyebrow">@{{ event.id }} on {{ event.userId }}</div>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.title }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <h2>Event details</h2>
    <p>{{ event.body }}</p>

    <h2>
      Attendess
      <span class="badge-fill-gradient">{{
        event.body ? event.body.length : 0
      }}</span>
    </h2>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "EventShow",
  props: ["id"],
  data() {
    return {
      event: {},
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}
.event-header {
  background-color: aquamarine;
}
p {
  font-size: 14px;
}
h2 {
  font-size: 24px;
}
</style>
