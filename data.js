/* ============================================================
   내용은 여기서 바꾸면 돼요
   - 글자만 고치면 됩니다. 따옴표(" ")와 쉼표(,)는 지우지 마세요.
   - 시간은 "몇 시간 전"(h)으로 적어요. (보는 사람 폰 시간 기준으로 자동 변환)
   ============================================================ */

const DATA = {
  owner: "범태영",
  passcode: "0808",
  carrier: "SKT",
  missedBadge: 0,
  wallpaper: "images/wall.jpg",
  dark: true,

  /* ---------- 홈 화면 ---------- */
  dday: { label: "해겸이형", text: "D+214", photo: "images/dday.jpg" },
  spotify: { title: "Kingslayer (feat. BABYMETAL)", artist: "Bring Me The Horizon",
             embed: "https://open.spotify.com/embed/playlist/1e3ApnwZ1h7f3rIH8WxY54",
             url: "https://open.spotify.com/playlist/1e3ApnwZ1h7f3rIH8WxY54?si=thBgxei8TNyFIooIe73B9w&utm_source=copy-link&pi=MWrNN08FTESpH&pt=76f8771045bb9d353059ed27bfd8dcd4" },
  folders: [
    { name: "기본", apps: ["camera", "photos", "navermap", "safari", "youtube", "gemini", "papago", "calc", "notes"] },
    { name: "게임", apps: ["mahjong", "ournote", "uma", "starrail", "roblox", "pjsk", "pogo", "minecraft", "blast"] }
  ],
  dock: ["phone", "kakao", "messages", "spotify"],
  badges: { phone: 6, kakao: 496, messages: 153 },

  /* ---------- 전화 (해겸이형 위주 + 아빠 1 + 김지옥 1) ---------- */
  contacts: [
    { name: "해겸이형♡", number: "010-0000-0214" },
    { name: "아빠",      number: "010-0000-0505" },
    { name: "김지옥",    number: "010-0000-0666" }
  ],
  recents: [
    { n: "해겸이형♡", t: "out",    h: 0.6 },
    { n: "해겸이형♡", t: "in",     h: 1.4 },
    { n: "해겸이형♡", t: "in",     h: 2.9 },
    { n: "해겸이형♡", t: "out",    h: 5 },
    { n: "아빠",      t: "missed", h: 7 },
    { n: "해겸이형♡", t: "in",     h: 9.5 },
    { n: "해겸이형♡", t: "out",    h: 26 },
    { n: "해겸이형♡", t: "in",     h: 28 },
    { n: "김지옥",    t: "in",     h: 33 },
    { n: "해겸이형♡", t: "out",    h: 50 },
    { n: "해겸이형♡", t: "missed", h: 53 },
    { n: "해겸이형♡", t: "in",     h: 74 },
    { n: "해겸이형♡", t: "out",    h: 98 },
    { n: "해겸이형♡", t: "in",     h: 122 },
    { n: "해겸이형♡", t: "out",    h: 146 }
  ],

  /* ---------- Safari ---------- (오래된 것 → 최근 순) */
  searches: ["멋있는 요리", "데이트룩", "치이카와", "쓰리디멀미 줄이는법", "아워노트 리세마라", "포테토남", "멋진 남자 조건", "멋진 남자"],

  /* ---------- 문자 ---------- */
  pinned: [
    { id: "hg", name: "해겸이형♡", avatar: "images/hg.jpg",
      messages: [
        { stamp: "어제 오후 11:42" },
        { from: "them", text: "태영아 그만하고 자" },
        { from: "me",   text: "네" },
        { stamp: "오늘 오전 3:00" },
        { game: true }
      ] }
  ],
  threads: [
    { name: "+82 2-0000-1204", h: 1.5, messages: [{ from: "them", text: "[Web발신]\n****치과입니다.\n범태영님의 예약은 10월 24일(토) 오후 2시 30분입니다.\n변경이 필요하시면 전화 부탁드립니다." }] },
    { name: "한진택배", h: 4, messages: [{ from: "them", text: "[Web발신]\n[한진택배]\n안녕하세요. 한진택배입니다.\n고객님의 물품을 금일 중 배송 예정입니다." }] },
    { name: "CJ대한통운", h: 20, messages: [{ from: "them", text: "[Web발신]\n[CJ대한통운_배송완료]\n고객님의 상품이 문 앞에 배송 완료되었습니다." }] },
    { name: "김지옥", h: 27, messages: [{ from: "them", text: "어쩌라는?" }] },
    { name: "쿠팡", h: 46, messages: [{ from: "them", text: "[Web발신]\n[쿠팡] 인증번호 [482913]를 입력해주세요." }] },
    { name: "아빠", h: 70, messages: [{ from: "them", text: "언제 들어오냐" }] },
    { name: "다크몬스터김철수", h: 120, messages: [{ from: "them", text: "아논쨩있음 ㅋ" }] }
  ],

  /* ---------- 사진 ---------- */
  photos: [
    { src: "images/photos/p01.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p02.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p03.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p04.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p05.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p06.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p07.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p08.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p09.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p10.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p11.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p12.gif", title: "", date: "", place: "" },
    { src: "images/photos/p13.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p14.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p15.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p16.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p17.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p18.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p19.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p20.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p21.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p22.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p23.jpg", title: "", date: "", place: "" },
    { src: "images/photos/p24.jpg", title: "", date: "", place: "" }
  ],

  /* ---------- 메모 ---------- */
  notes: [
    { title: "[할일]", date: "오늘", body: "[ ] 해겸이형한테 핫팩주기 (멋있게)\n[ ] 체육복 아무한테도 안주기 (점심시간에 해겸이형입혀주기)\n[ ] 수학문제집풀기\n[ ] 뱅드림 이벤트보기\n[ ] 작혼 뽑기\n[ ] 해겸이형이랑 전화하기" },
    { title: "[위시리스트]", date: "오늘", body: "닌텐도 스위치\n맥북 프로\n아이패드 프로\n엘든링\n철권" }
  ],

  /* ---------- 카카오톡 ---------- */
  kakaoUnread: 450,
  kakao: [
    { name: "해겸이형♡", avatar: "images/hg.jpg", fav: true, time: "오후 3:10", open: true,
      messages: [
        { from: "me",   text: "새우탕파스타", time: "오후 3:07" },
        { from: "them", text: "어제도 면 먹었잖아", time: "오후 3:08" },
        { from: "me",   text: "야채파스타", time: "오후 3:09" },
        { from: "me",   text: "토마토스파게티", time: "오후 3:09" },
        { from: "me",   text: "초밥", time: "오후 3:09" },
        { from: "them", text: "똥고양이", time: "오후 3:09" },
        { from: "me",   text: "아니에요", time: "오후 3:10" }
      ] },
    { name: "1-7 반톡!!", avatar: "images/kakao/def.jpg", muted: true, unread: 300, time: "오후 2:58", preview: "시험공부 안함?ㅋㅋ" },
    { name: "김지옥", avatar: "images/kakao/def.jpg", muted: true, time: "오후 2:41", preview: "ㄴㄴ" },
    { name: "카카오톡", avatar: "images/icons/kakao.png", time: "오후 1:20", preview: "[PC버전 자동로그인]" },
    { name: "김서기", avatar: "images/kakao/def.jpg", muted: true, unread: 1, time: "오후 12:47", preview: "마작 ㄱ" },
    { name: "카카오톡 선물하기", avatar: "images/icons/kakao.png", unread: 1, time: "오전 11:30", preview: "받은 선물이 있어요. 지금 확인해보세요!" },
    { name: "쿠팡", avatar: "images/icons/coupang.png", unread: 1, time: "오전 10:15", preview: "[쿠팡] 구매하신 상품은 어떠셨나요?" },
    { name: "다크몬스터김철수", avatar: "images/kakao/def.jpg", muted: true, unread: 3, time: "오전 9:02", preview: "태영이 ㅂㅅ" },
    { name: "카카오페이", avatar: "images/kakao/def.jpg", time: "어제", preview: "송금이 완료되었어요." },
    { name: "배달의민족", avatar: "images/kakao/baemin.jpg", unread: 1, time: "어제", preview: "(광고)[지급 완료] 배민클럽 총 10만원 혜택 드렸어요🎁..." },
    { name: "번개장터", avatar: "images/kakao/bungae.jpg", unread: 1, time: "어제", preview: "개인정보 이용내역 안내" },
    { name: "CUpost", avatar: "images/kakao/cu.jpg", time: "10월 19일", preview: "Nice to CU♡" }
  ]
};
