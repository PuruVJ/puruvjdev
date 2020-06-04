const worker = new Worker("worker.js");

worker.postMessage("Hello");
worker.onmessage = (e) => {
  e;
};

// worker.js
self.onmessage = (e) => {
  const message = e.data;
  console.log(message);
};
