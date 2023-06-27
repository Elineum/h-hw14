const getRangedNum = (min = 0, max = 1) => {
  return Math.floor(min + Math.random() * max);
};

const getRandomImg = () => {
  const tagImg = document.querySelector(".image");
  const firstImgDefault = 1;
  const lastImg = 9;

  tagImg.src = `./src/images/${getRangedNum(firstImgDefault, lastImg)}.jpg`;
};

getRandomImg();
