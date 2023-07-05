//data.jsonを持ってきてusersで使えるようにする
async function callApi() {
  const res = await fetch("data.json");
  const users = await res.json();
  return users;
}
//テーブルとして表示させる
async function lists() {
  let member = await callApi();
  let td = document.getElementById("list");
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
lists();

//100件の情報を消す機能
//↑この機能を使うところでdeleteList()を実行すればいい良い
function deleteList() {
  //変数宣言
  let list = document.getElementById("list");
  //子要素取得
  let members = document.getElementsByClassName("member");
  //子要素数取得
  let len = members.length;
  for (let i = 0; i < len; i++) {
    list.removeChild(members[0]);
  }
}
//ID
function textClick() {
  deleteList();
  sortChange1();
}
let num = 0;
async function sortChange1() {
  let member = await callApi();
  let td = document.getElementById("list");
  //変数を用意
  if (num == 0) {
    //id降順
    member.sort(function (a, b) {
      return b.id - a.id;
    });
    //変数numに1を再代入
    num = 1;
  } else if (num == 1) {
    //id昇順
    member.sort(function (a, b) {
      return a.id - b.id;
    });
    num = 0;
  }
  //memberを繰り返してブラウザに表示
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}

//ソートする機能を使いまわせるようにまとめる
async function rearranges1(type1, type2) {
  type1.sort((a, b) => {
    return a[type2].localeCompare(b[type2], "ja");
  });
}

//ソートする機能を使いまわせるようにまとめる
async function rearranges2(type1, type2) {
  type1.sort((a, b) => {
    return b[type2].localeCompare(a[type2], "ja");
  });
}

//名前
let num1 = 0;
function textClickName() {
  deleteList();
  sortChange2();
}
async function sortChange2() {
  let member = await callApi();
  let td = document.getElementById("list");
  //変数を用意
  if (num1 == 0) {
    //名前をソート
    rearranges1(member, "name");
    // 変数num1に1を再代入
    num1 = 1;
  } else {
    rearranges2(member, "name");
    num1 = 0;
  }
  //memberを繰り返してブラウザに表示
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//会社名
let num2 = 0;
function textClickCompany() {
  deleteList();
  sortChange3();
}
async function sortChange3() {
  let member = await callApi();
  let td = document.getElementById("list");
  //変数を用意
  if (num2 == 0) {
    //会社名をソート
    rearranges1(member, "company");
    //変数num2に1を再代入
    num2 = 1;
  } else {
    rearranges2(member, "company");
    num2 = 0;
  }
  //memberを繰り返してブラウザに表示
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//部署
let num3 = 0;
function textClickDivision() {
  deleteList();
  sortChange4();
}
async function sortChange4() {
  let member = await callApi();
  let td = document.getElementById("list");
  //変数を用意
  if (num3 == 0) {
    //部署をソート
    rearranges1(member, "division");
    //変数num3に1を再代入
    num3 = 1;
  } else {
    rearranges2(member, "division");
    num3 = 0;
  }
  //memberを繰り返してブラウザに表示
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}

//役職
let num4 = 0;
function textClickTitle() {
  deleteList();
  sortChange5();
}
async function sortChange5() {
  let member = await callApi();
  let td = document.getElementById("list");
  //変数を用意
  if (num4 == 0) {
    //役職をソート
    rearranges1(member, "title");
    //変数num4に1を再代入
    num4 = 1;
  } else {
    rearranges2(member, "title");
    num4 = 0;
  }
  //memberを繰り返してブラウザに表示
  member.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//IDを検索して表示させる機能を記述
//検索ボタン
function buttonClick1() {
  //100件の情報を消す機能
  let list = document.getElementById("list");
  //子要素取得
  let members = document.getElementsByClassName("member");
  //子要素数取得
  let len = members.length;
  for (let i = 0; i < len; i++) {
    list.removeChild(members[0]);
  }
  //変数宣言
  let select1 = document.form1.select1;
  let selectNum = select1.selectedIndex;
  let str = select1.options[selectNum].value;
  if (str == 1) {
    usersSearch();
  }
  if (str == 2) {
    usersSearch1();
  }
  if (str == 3) {
    usersSearch2();
  }
  if (str == 4) {
    usersSearch3();
  }
  if (str == 5) {
    usersSearch4();
  }
}
//member持ってくる
async function usersSearch() {
  let member = await callApi();
  let newMember = [];
  let td = document.getElementById("list");
  //100回繰り返す
  for (let i = 0; i < member.length; i++) {
    let input = document.getElementById("searchText");
    let getValue = input.value;
    let getId = member[i].id;
    //文字列を検索
    let members = String(getId).indexOf(getValue);
    if (member[i].id == getValue) {
      newMember.push(member[i]);
    }
  }
  //ブラウザに表示
  newMember.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//変数宣言
let checkButton1 = document.getElementById("checkButton1");
checkButton1.addEventListener("click", buttonClick1);
//名前を検索して表示させる機能を記述
//member持ってくる
async function usersSearch1() {
  let member = await callApi();
  //空の配列を用意する
  let newMember1 = [];
  let td = document.getElementById("list");
  //100回繰り返す
  for (let i = 0; i < member.length; i++) {
    let input = document.getElementById("searchText");
    let getValue1 = input.value;
    let getName = member[i].name;
    //文字列を検索
    let members = getName.indexOf(getValue1);
    if (members !== -1) {
      //空の配列に追加する
      newMember1.push(member[i]);
    }
  }
  //ブラウザに表示
  newMember1.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//会社名を検索して表示させる機能を記述
//member持ってくる
async function usersSearch2() {
  let member = await callApi();
  //空の配列を用意する
  let newMember2 = [];
  let td = document.getElementById("list");
  //100回繰り返す
  for (let i = 0; i < member.length; i++) {
    let input = document.getElementById("searchText");
    let getValue2 = input.value;
    let getCompany = member[i].company;
    //文字列を検索
    let members = getCompany.indexOf(getValue2);
    if (members !== -1) {
      //空の配列に追加する
      newMember2.push(member[i]);
    }
  }
  //ブラウザに表示
  newMember2.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//部署を検索して表示させる機能を記述
//member持ってくる
async function usersSearch3() {
  let member = await callApi();
  //空の配列を用意する
  let newMember3 = [];
  let td = document.getElementById("list");
  //100回繰り返す
  for (let i = 0; i < member.length; i++) {
    let input = document.getElementById("searchText");
    let getValue3 = input.value;
    let getDivision = member[i].division;
    //文字列を検索
    let members = getDivision.indexOf(getValue3);
    if (members !== -1) {
      //空の配列に追加する
      newMember3.push(member[i]);
    }
  }
  //ブラウザに表示
  newMember3.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//役職を検索して表示させる機能を記述
//member持ってくる
async function usersSearch4() {
  let member = await callApi();
  //空の配列を用意する
  let newMember4 = [];
  let td = document.getElementById("list");
  //100回繰り返す
  for (let i = 0; i < member.length; i++) {
    let input = document.getElementById("searchText");
    let getValue4 = input.value;
    let getTitle = member[i].title;
    //文字列を検索
    let members = getTitle.indexOf(getValue4);
    if (members !== -1) {
      //空の配列に追加する
      newMember4.push(member[i]);
    }
  }
  //ブラウザに表示
  newMember4.forEach(function (value) {
    td.insertAdjacentHTML(
      "beforeend",
      `<tr class="member"><td>${value.id}</td><td>${value.name}</td><td>${value.company}</td><td>${value.division}</td><td>${value.title}</td></tr>`
    );
  });
}
//新規情報追加の作成ボタン
function buttonClick2() {
  //各項目の変数宣言
  let newName = document.getElementById("newName");
  let newCompany = document.getElementById("newCompany");
  let newDivision = document.getElementById("newDivision");
  let newTitle = document.getElementById("newTitle");
  //名前の正規表現
  let reg1 = /[\u4E00-\u9FFF]/;
  //名前が空だった場合
  if (newName.value == "") {
    alert("名前が未入力です。");
    return false;
  }
  //名前が正しく入力されていなかった場合
  if (!newName.value.match(reg1)) {
    alert("名前を漢字で入力してください。");
    return false;
  }
  //会社名の正規表現
  let reg2 = /[\u4E00-\u9FFF]/;
  //会社名が空だった場合
  if (newCompany.value == "") {
    alert("会社名が未入力です。");
    return false;
  }
  //会社名が正しく入力されていなかった場合
  if (!newCompany.value.match(reg2)) {
    alert("会社名を漢字で入力してください。");
    return false;
  }
  //部署の正規表現
  let reg3 = /[\u4E00-\u9FFF]/;
  //部署が空だった場合
  if (newDivision.value == "") {
    alert("部署が未入力です。");
    return false;
  }
  //部署が正しく入力されていなかった場合
  if (!newDivision.value.match(reg3)) {
    alert("部署を漢字で入力してください。");
    return false;
  }
  //関数userAddition()を実行
  userAddition();
}
let result = 100;
function userAddition() {
  //insertAdjacentHTMLを使うために親要素のidを取得
  let element = document.getElementById("list");
  //各項目の変数宣言
  let inputName = document.getElementById("newName");
  let inputCompany = document.getElementById("newCompany");
  let inputDivision = document.getElementById("newDivision");
  let inputTitle = document.getElementById("newTitle");
  async function countId() {
    //空の配列を用意する
    let getIdArray = [];
    let member = await callApi();
    let td = document.getElementById("list");
    for (let i = 0; i < member.length; i++) {
      let getId = member[i].id;
      //空の配列に追加する
      getIdArray.push(getId);
    }
    function buttonClick3() {
      result++;
      console.log(result);
      //新規情報を追加したときにブラウザに表示
      element.insertAdjacentHTML(
        "beforeend",
        `<tr class="member"><td>${result}</td><td>${inputName.value}</td><td>${inputCompany.value}</td><td>${inputDivision.value}</td><td>${inputTitle.value}</td></tr>`
      );
    }
    buttonClick3();
  }
  countId();
}
