<template>
  <div class="wrapper">
    <h1>Event Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from "../components/EventCard";
import EventService from "@/services/EventService.js";

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
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
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
  h1 {
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: 700;
  }
}
</style>
