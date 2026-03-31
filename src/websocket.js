let socket;

export function connectWebSocket(onMessage) {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const host = window.location.host;

  socket = new WebSocket(`${protocol}://${host}`);

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
  };
}