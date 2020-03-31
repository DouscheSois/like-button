let clicks = 0;

function addLike() {
  clicks += 1;
  document.getElementById('number-of-likes').innerHTML = clicks;
};
