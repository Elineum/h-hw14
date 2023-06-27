const getRangedNum = (min = 0, max = 1) => {
  return Math.floor(min + Math.random() * max);
};

const getRandomImg = () => {
  const wrapper = document.querySelector(".img-wrapper");
  const img = document.createElement("img");
  const firstImgDefault = 1;
  const lastImg = 9;

  wrapper.appendChild(img);
  img.src = `./src/images/${getRangedNum(firstImgDefault, lastImg)}.jpg`;
  img.alt = "random image";
};

getRandomImg();
