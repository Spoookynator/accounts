class Account {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.creationDate = Date.now();
    this.settings = new Settings("default", false);
  }
}

class Settings {
    constructor(language, lightMode) {
      this.language = language;
      this.lightMode = lightMode;
    }
  }
const accounts = new Map();

function submit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMessage = document.getElementById("errorMessage");
  let loggedInMsg = document.getElementById("loggedInMsg");


  // input error handling
  if (username == "" || password == "") {
    errorMessage.innerHTML = "Both fields must be filled in";
    return;
  }
  if (password.length < 4) {
    errorMessage.innerHTML = "Password must be at least 4 characters";
    return;
  }

  errorMessage.innerHTML = "";
  //

  if (
    document.getElementById("loginSelect").classList.contains("selected") ===
    true
  ) {
    if (accounts.has(username)) {
      if (
        accounts.get(username).username == username &&
        accounts.get(username).password == password
      ) {
        loggedInMsg.innerHTML = `Logged in as ${username}`;
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return;

      } else {
        errorMessage.innerHTML = "Wrong Password or Username";
        return;
      }
    } else {
      errorMessage.innerHTML = "Username not found";
      return;
    }
  } else {
    if (accounts.has(username)) {
      errorMessage.innerHTML = "Username already taken";
      return;
    }
    let account = new Account(username, password);
    console.log(account);
    accounts.set(account.username, account);

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    errorMessage.innerHTML = "Successfully registered account!";
  }
}
