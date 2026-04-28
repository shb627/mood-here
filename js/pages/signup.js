export function passwordConfirm() {
  const passWord = document.getElementById("passWord");
  const pwConfirm = document.getElementById("pwConfirm");
  const pwError = document.getElementById("pwError");
  const pwComplete = document.getElementById("pwComplete");

  if (passWord && pwConfirm && pwError && pwComplete) {
    pwError.style.display = "none";
    pwComplete.style.display = "none";

    pwConfirm.addEventListener("input", () => {
      if (pwConfirm.value === "") {
        pwError.style.display = "none";
        pwComplete.style.display = "none";
      } else if (pwConfirm.value === passWord.value) {
        pwError.style.display = "none";
        pwComplete.style.display = "block";
      } else {
        pwError.style.display = "block";
        pwComplete.style.display = "none";
      }
    });
  }
}

export function authNumber() {
  const phoneNumber = document.getElementById("phoneNumber");
  const authNum = document.getElementById("authNum");
  const authNumActive = document.getElementById("authNumActive");
  const completeAuth = document.getElementById("completeAuth");

  if (phoneNumber && authNum && completeAuth && authNumActive) {
    authNum.style.display = "none";
    authNumActive.style.display = "none";
    completeAuth.style.display = "none";

    pwConfirm.addEventListener("input", () => {
      if (pwConfirm.value === "") {
        pwError.style.display = "none";
        pwComplete.style.display = "none";
      } else if (pwConfirm.value === passWord.value) {
        pwError.style.display = "none";
        pwComplete.style.display = "block";
      } else {
        pwError.style.display = "block";
        pwComplete.style.display = "none";
      }
    });
  }
}
