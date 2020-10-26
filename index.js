startBtn = document.querySelector("#btnStart");
stopBtn = document.querySelector("#btnStop");
(colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"]),
  (randomIntegerFromInterval = (max) => {
    return Math.floor(Math.random() * (max + 1));
  }),
  (setRandomColor = () => {
    const color = colors[randomIntegerFromInterval(colors.length - 1)];
    console.log(color);
    document.body.style.backgroundColor = color;
  });

let interval = undefined;

startBtn.addEventListener("click", (e) =>
  interval
    ? interval
    : (interval = setInterval(() => {
        startBtn.setAttribute("disabled", true);
        setRandomColor();
      }, 1000))
);
stopBtn.addEventListener("click", (e) => {
  startBtn.removeAttribute("disabled");
  clearInterval(interval);
  interval = null;
});
