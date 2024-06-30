const chat_id = "@NolyData",
  botID = "bot7169306144:AAHJsGKoC0L3DLywVuxMRYfWzHnW6QprIAM";
const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;
document.querySelector("#m-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  let text = JSON.stringify(
    Object.fromEntries(new FormData(e.target).entries()),
    null,
    2
  );
  const sendMessage = await fetch(telegramURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text }),
  });
  if (sendMessage.ok) alert("Message Sent!");
  else alert("Message Failed to send :( " + (await sendMessage.text()));
  e.target.reset();
});
