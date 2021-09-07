<template>
  <div class="wrapper">
    <h1>Event Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>1
</template>

<script>
import EventCard from "../components/EventCard";
import { getPosts } from "../api/posts";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    getPosts()
      .then(({ data }) => {
        this.events = data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style lang="scss" scoped></style>
