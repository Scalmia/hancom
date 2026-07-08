const result = document.querySelector("#result");
const API = "http://localhost:3000/users";

const show = (label, data) => {
  result.textContent = `${label}: ${JSON.stringify(data, null, 2)}`;
};

const norm = (data) => 
  Array.isArray(data) 
    ? data.map(u => ({ id: u.id, name: u.name })) 
    : { id: data.id, name: data.name };

document.querySelector("#btn-create").addEventListener("click", async () => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Alice" })
  });
  show("CREATE", norm(await res.json()));
});

document.querySelector("#btn-read").addEventListener("click", async () => {
  const res = await fetch(API);
  const users = await res.json();
  show("READ result", norm(users));
});

document.querySelector("#btn-update").addEventListener("click", async () => {
  const res = await fetch(`${API}/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Bob" })
  });
  show("UPDATE result", norm(await res.json()));
});

document.querySelector("#btn-delete").addEventListener("click", async () => {
  const res = await fetch(`${API}/1`, {
    method: "DELETE",
  });
  show("DELETE result", "1번 사용자가 삭제되었습니다.");});
