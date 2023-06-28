//キーワード検索
Vue.createApp({
  data: function () {
      return {
          keyword: '',
          users: []
      }
  },
  //jsonファイルを持ってきてusersで使えるようにする
  async function callApi() {
    const res = await fetch('data.json');
    const users = await res.json();
  return users;
},
  methods: {
    buttonClicked() {

      }
  },
  computed: {
      filteredUsers: function () {
          let users = [];
          for (let i in this.users) {
              let user = this.users[i];
              if (user.id.indexOf(this.keyword) !== -1 ||
                  user.name.indexOf(this.keyword) !== -1 ||
                  user.company.indexOf(this.keyword) !== -1 ||
                  user.division.indexOf(this.keyword) !== -1 ||
                  user.title.indexOf(this.keyword) !== -1) {
                users.push(user);
              }
          }
          return users;
      }
  }
}).mount("#app");
