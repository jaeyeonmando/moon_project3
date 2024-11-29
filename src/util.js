import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";
import emotion6 from "./img/emotion6.png";
import emotion7 from "./img/emotion7.png";
import emotion8 from "./img/emotion8.png";
import emotion9 from "./img/emotion9.png";
import emotion10 from "./img/emotion10.png";
import emotion11 from "./img/emotion11.png";
import emotion12 from "./img/emotion12.png";
import emotion13 from "./img/emotion13.png";
import emotion14 from "./img/emotion14.png";
import emotion15 from "./img/emotion15.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    case "6":
      return emotion6;
    case "7":
      return emotion7;
    case "8":
      return emotion8;
    case "9":
      return emotion9;
    case "10":
      return emotion10;
    case "11":
      return emotion11;
    case "12":
      return emotion12;
    case "13":
      return emotion13;
    case "14":
      return emotion14;
    case "15":
      return emotion15;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "매우 좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
  {
    id: 6,
    name: "아픔",
    img: getEmotionImgById(6),
  },
  {
    id: 7,
    name: "놀람",
    img: getEmotionImgById(7),
  },
  {
    id: 8,
    name: "슬픔",
    img: getEmotionImgById(8),
  },
  {
    id: 9,
    name: "으악",
    img: getEmotionImgById(9),
  },
  {
    id: 10,
    name: "흠",
    img: getEmotionImgById(10),
  },
  {
    id: 11,
    name: "화남",
    img: getEmotionImgById(11),
  },
  {
    id: 12,
    name: "귀여움",
    img: getEmotionImgById(12),
  },
  {
    id: 13,
    name: "흥분됨",
    img: getEmotionImgById(13),
  },
  {
    id: 14,
    name: "행복",
    img: getEmotionImgById(14),
  },
  {
    id: 15,
    name: "멋짐",
    img: getEmotionImgById(15),
  },
];

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
  
};

export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
};