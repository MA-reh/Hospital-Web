const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 300;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 50);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
