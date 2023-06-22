// Vue.createApp({
//   data: function () {
//     return {
//       sort: {
//         key: '',
//         isAsc: false,
//         members: []
//       },
//     }
//   },
//   created: async function () {
//     const res = await fetch('data.json');
//     const users = await res.json();
//     this.members = users;
//   },

//   computed: {
//     filteredList: function () {
//       let newList = [];
//       for (let i = 0; i < this.members.length; i++) {
//       }
//     }
//   }
//   count: function () {
//     return this.filteredList.length;
//   },
// }).mount("#app");
