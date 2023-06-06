function checkUsername(username, userType) {
    if (userType === "admin" || userType === "manager") {
      return "Username valid";
    } else if (/^[A-Z][a-zA-Z]{4,9}$/.test(username)) {
      return "Username valid";
    } else {
      return "Username invalid";
    }
  }
  