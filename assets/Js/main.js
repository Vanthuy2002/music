const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let playList = $(".playlist");
let heading = $("header h2");
let cdThumb = $(".cd .cd-thumb");
let audio = $("#audio");
const cd = $(".cd");
let playBtn = $(".btn-toggle-play");
let player = $(".player");
let progress = $("#progress");
let nextBtn = $(".btn-next");
let prevBtn = $(".btn-prev");
let randomBtn = $(".btn-random");
let repeatBtn = $(".btn-repeat");
let messElement = document.querySelector(".message");
const PLAYER_STORAGE = "F8__PLAYER";

/* Việc cần làm : 
1. Render song ra view
2. Thu nhỏ bài hát khi vuốt
3. Lấy ra bài hát đầu tiên
4. Quay CD khi phát nhạc
6. Next Song / Prev Song / Random Song / Repeat Song
5. Tua bài hát 
7. Tự sang bài mới khi hết bài cũ
8. Active song lên khi hát
9. Đảm bảo song được active luôn hiện trên views UI
10. Play song khi click vào danh sách
11. Hiện ra thông báo bài hát*/

const app = {
  song: [
    {
      name: "Biết Ông Thương Không",
      singer: "Thủy Nguyễn",
      path: "./assets/music/BIẾT ÔNG THƯƠNG KHÔNG.mp3",
      img: "./assets/img/nn.jpg",
    },
    {
      name: "Đường tôi chở em về",
      singer: "Singer 2",
      path: "./assets/music/Đường Tôi Chở Em Về.mp3",
      img: "./assets/img/a15f06f41d79337c6ebde50c20969fee.png",
    },
    {
      name: "Lửng và Ler.mp3",
      singer: "Singer 3",
      path: "./assets/music/Lửng và Ler.mp3",
      img: "./assets/img/lofi-girl-making-beat.jpg",
    },
    {
      name: "Sang Xin Mịn.mp3",
      singer: "Singer 4",
      path: "./assets/music/Sang Xịn Mịn.mp3",
      img: "./assets/img/anh-nhac.jpg",
    },
    {
      name: "Thu Cuối.mp3",
      singer: "Singer 5",
      path: "./assets/music/Thu Cuối.mp3",
      img: "./assets/img/lofi-girl-making-beat.jpg",
    },
    {
      name: "Người Em Cố Đô.mp3",
      singer: "Singer 5",
      path: "./assets/music/Người Em Cố Đô.mp3",
      img: "./assets/img/lofi-girl-making-beat.jpg",
    },
    {
      name: "Thuyền Quyên.mp3",
      singer: "Singer 5",
      path: "./assets/music/Thuyền Quyên.mp3",
      img: "./assets/img/anh-nhac.jpg",
    },
  ],
};
