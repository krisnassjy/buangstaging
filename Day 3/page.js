let db = [
  {
    email: "krisnassjy@gmail.com",
    password: "123456",
  },
];

const checkIsLogin = () => {
  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (!isLogin) {
    window.location.href = "login.html";
    setTimeout(() => {
      Toastify({
        text: "Belum Login",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }, 1000);
  }
};

const login = () => {
  const dataLogin = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  if (dataLogin.email && dataLogin.password) {
    let res = Boolean(
      db.find((item) => {
        return (
          item.email === dataLogin.email && item.password === dataLogin.password
        );
      })
    );

    if (res) {
      window.location.href = "2.html";
      localStorage.setItem("isLogin", true);
    } else {
      Toastify({
        text: "Email dan Password Salah",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  } else {
    Toastify({
      text: "Masukkan email dan password!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
};

const logout = () => {
  localStorage.setItem("isLogin", false);
  window.location.href = "login.html";
};

const create = () => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;

  let data = JSON.parse(localStorage.getItem("data")) ?? [];

  console.log(data, "data");
  let input = {
    id: data.length !== 0 ? data[data.length - 1]?.id + 1 : 0,
    name: name,
    price: price,
    desc: desc,
  };

  data.push(input);

  localStorage.setItem("data", JSON.stringify(data));

  document.getElementById("name").value = null;
  document.getElementById("price").value = null;
  document.getElementById("desc").value = null;
};

window.location.pathname.split("/").pop() !== "login.html" && checkIsLogin();