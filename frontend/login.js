const server = "http://localhost:3000";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  try {
    const data = await getAuth(username, password);
    if (!(data && data.success)) {
      alert(data?.message || "Login failed. Please try again.");
      return;
    }

    localStorage.setItem("userId", data.userId);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", data.token);

    window.location = "./main.html";
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred during login. Please try again later.");
  }
});

async function getAuth(username, password) {
  try {
    let res = await fetch(`${server}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    res = await res.json();
    return res;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
