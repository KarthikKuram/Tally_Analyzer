const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      age: 45,
    };
  },
  methods: {
    changeTitle() {
      this.title = "Title Changed!";
    },
  },
});

app.mount("#app");
