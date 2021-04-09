<template>
  <div class="container mx-auto">
    <div class="">
      <div class="flex justify-center">
        <h3 class="lg:text-2xl">Preparate lo bueno esta por venir</h3>
      </div>
      <div class="flex justify-center h-full">
        <div class="center-element-cont font-contador">
          <div class="text-xl lg:text-6xl ">
            <span> {{ parserDays }}</span>
          </div>
          <div>
            <span> dias</span>
          </div>
        </div>
        <div class="center-element-cont font-contador">
          <div class="text-xl lg:text-6xl ">
            <span>{{ parserHours }}</span>
          </div>
          <div>
            <span>horas</span>
          </div>
        </div>
        <div class="center-element-cont font-contador">
          <div class="text-xl lg:text-6xl ">
            <span>{{ parserMinutes }}</span>
          </div>
          <div>
            <span> minutos </span>
          </div>
        </div>
        <div class="center-element-cont font-contador">
          <div class="text-xl lg:text-6xl ">
            <span>{{ parserSeconds }}</span>
          </div>
          <div>
            <span> segundos </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  /* eslint-disable */
  name: "Contador",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  computed: {
    parserDays() {
      return this.days < 10 ? "0" + this.days : this.days;
    },
    parserHours() {
      return this.hours < 10 ? "0" + this.hours : this.hours;
    },
    parserMinutes() {
      return this.days < 10 ? "0" + this.minutes : this.minutes;
    },
    parserSeconds() {
      return this.seconds < 10 ? "0" + this.seconds : this.seconds;
    },
  },
  methods: {
    loopDate: function() {
      setInterval(() => {
        let date_end = moment("2021-12-31 00:00"); //moment(new Date())//.format("YYYY-MM-DD HH:mm:ss");
        let date_init = moment(new Date());
        let date_between = date_end.diff(date_init);
        let date_days = date_end.diff(date_init, "d");
        let date_object = moment.duration(date_between)._data;
        this.days = date_days;
        this.hours = date_object.hours;
        this.minutes = date_object.minutes;
        this.seconds = date_object.seconds;

     
      }, 1000);
    },
  },
  created() {
    this.loopDate();
   
  },
};
</script>

<style scoped>
.center-element-cont {
  @apply m-4 flex flex-col items-center justify-center;
}
.font-contador {
  font-family: "RocknRoll One", sans-serif;
}
</style>
