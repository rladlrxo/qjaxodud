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

  /* ---------- 홈 화면 ---------- */
  dday: { label: "해겸이형", text: "D+214", photo: "images/dday.jpg" },
  spotify: { title: "Kingslayer (feat. BABYMETAL)", artist: "Bring Me The Horizon",
             embed: "https://www.youtube.com/embed/videoseries?list=PLMF1BBv7curs",
             url: "https://youtube.com/playlist?list=PLMF1BBv7curs&si=qWq_Mvup8E4N2EXS" },
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
    { name: "김지옥", h: 27, messages: [
      { stamp: "어제 오후 10:18" },
      { from: "them", text: "태영아" },
      { from: "me",   text: "(아아또왜부르는지원... 똥이나밟았으면좋겠군) ㅇ" },
      { from: "them", text: "ㅇ" },
      { from: "me",   text: "어쩌라는?" }
    ] },
    { name: "쿠팡", h: 46, messages: [{ from: "them", text: "[Web발신]\n[쿠팡] 인증번호 [482913]를 입력해주세요." }] },
    { name: "아빠", h: 50, messages: [
      { stamp: "9월 29일 (화) 오후 7:12" },
      { from: "them", text: "오늘 집 치워라" },
      { from: "me",   text: "네" },
      { from: "them", text: "침대 이불도 갈고" },
      { from: "me",   text: "ㄴ" },
      { from: "them", text: "?" },
      { from: "me",   text: "네" },
      { stamp: "그저께 오후 8:40" },
      { from: "them", text: "라면" },
      { from: "me",   text: "다 먹었습니다" },
      { from: "them", text: "사놔라" },
      { from: "me",   text: "ㄴ" },
      { from: "them", text: "?" },
      { from: "me",   text: "넵" }
    ] }

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
    { title: "할일", date: "오늘",
      body: "해겸이형한테 핫팩주기 (멋있게)\n체육복 아무한테도 안주기 (점심시간에 해겸이형입혀주기)\n수학문제집풀기\n뱅드림 이벤트보기\n작혼 뽑기\n해겸이형이랑 전화하기" },
    { title: "위시리스트", date: "오늘",
      body: "닌텐도 스위치\n맥북 프로\n아이패드 프로\n엘든링\n철권" }
  ],

  /* ---------- Gemini ---------- */
  gemini: {
    mode: "자동 모드",
    prompt: "귀여운 남자 매력 있는 것 같음? 나는 원래 키도 크고 부숭부숭하고 좀 남자다운? 그런 사람인데 애인이 자꾸 귀엽? 고양이? 같다고 함 근데 매력?있는 건지 잘 모르겠음 애교를 부려야 하는 건가? 내 성격과 맞지 않는데 좀 더 고양이? 같고 귀여우려면 어떻게 해야 되는 건지 알려줘",
    answer: [
      "완전 매력 있습니다!",
      "애인이 '귀엽다', '고양이 같다'고 말하는 건 '억지로 애교를 부려라'라는 뜻이 절대 아닙니다.",
      "오히려 원래 키도 크고 묵직하고 남성적인 사람이 연인 앞에서만 은근히 툭툭 챙겨주거나, 가끔 엉뚱하거나, 애정 표현을 받았을 때 쑥스러워하면서도 은근히 좋아하는 모습에서 나오는 '의외의 갭모에(반전 매력)'를 보고 고양이 같다고 느끼는 경우가 많습니다.",
      "자기 성격에 맞지 않게 혀 짧은 소리를 내거나 인위적인 애교를 부릴 필요는 전혀 없습니다. 본래의 무덤덤한 성격을 유지하면서도 애인이 느낄 수 있는 '고양이 특유의 매력'을 살리는 방법 몇 가지를 정리해 드릴게요.",
      "## 1. 억지 애교 대신 '은근한 반응'",
      "고양이의 진짜 매력은 '대놓고 애교 부리기'가 아니라 '은근하게 마음을 여는 타이밍'에 있습니다. 평소처럼 무덤덤하게 있다가, 옆에 가만히 있을 때 말없이 슬쩍 다가와 몸을 기대거나 손을 잡는 식의 행동이 훨씬 효과적입니다.",
      "**추천 행동**: 애인이 머리를 쓰다듬을 때 피하지 않고 가만히 있기, 칭찬을 들었을 때 \"됐어요\" 하면서도 귀가 빨개지는 것 정도면 충분합니다.",
      "## 2. '갭'을 숨기지 않기",
      "평소 이미지가 크고 듬직할수록, 사소한 틈이 더 귀엽게 보입니다. 좋아하는 게임이나 음식 이야기가 나왔을 때 평소보다 말이 빨라지거나, 졸릴 때 말수가 줄어드는 모습 같은 것들이요.",
      "**주의**: 일부러 연출하면 바로 티가 납니다. 숨기지 않는 것만으로 충분합니다.",
      "## 3. 짧게, 그러나 확실하게 표현하기",
      "긴 애정 표현이 어색하다면 길이를 줄이고 타이밍만 맞추세요. \"보고 싶었어요\" 한마디, 헤어질 때 한 번 더 돌아보기, 연락에 바로 답장하기. 무뚝뚝한 사람이 하는 짧은 표현은 수다스러운 표현보다 훨씬 강하게 남습니다.",
      "## 4. '고양이 같다'는 말을 받아치지 않기",
      "애인이 그렇게 말할 때 \"내가 왜요\"라고 정색하면 거기서 끊깁니다. \"그래요?\" 정도로 받아주면 애인은 계속 그 모습을 보고 싶어 합니다. 사실 이 반응 자체가 가장 고양이 같은 반응이기도 합니다.",
      "정리하자면, 지금 성격을 바꿀 필요는 전혀 없습니다. 애인은 이미 있는 그대로의 모습에서 그 매력을 발견한 상태니까요. 바꿔야 할 게 있다면 '표현을 아예 안 하는 것' 정도입니다."
    ]
  },

  /* ---------- 카카오톡 ---------- */
  kakaoUnread: 450,
  kakao: [
    { name: "해겸이형♡", avatar: "images/hg.jpg", fav: true, time: "오후 3:10", open: true,
      messages: [
        { from: "them", text: "태영이 밥 먹었어?", time: "오후 2:51" },
        { from: "me",   text: "네", time: "오후 2:52" },
        { from: "me",   text: "새우탕파스타 먹었어요", time: "오후 2:52" },
        { from: "them", text: "또?", time: "오후 2:53" },
        { from: "me",   text: "오늘 처음 먹는 건데", time: "오후 2:53" },
        { from: "them", text: "어제도 면 먹었잖아", time: "오후 2:54" },
        { from: "me",   text: "아니에요", time: "오후 2:54" },
        { from: "them", text: "맞는데요", time: "오후 2:55" },
        { from: "me",   text: "안", time: "오후 2:55" },
        { from: "me",   text: "아니에요", time: "오후 2:55" },
        { from: "them", text: "맞는데요", time: "오후 2:56" },
        { from: "me",   text: "어제는 야채파스타 먹었어요", time: "오후 2:57" },
        { from: "them", text: "토마토스파게티 먹었다며", time: "오후 2:58" },
        { from: "them", text: "밥을 먹어야지", time: "오후 2:58" },
        { from: "me",   text: "큼큼... 네", time: "오후 3:00" },
        { from: "me",   text: "형은", time: "오후 3:00" },
        { from: "me",   text: "뭐 먹었어요", time: "오후 3:00" },
        { from: "them", text: "형은", time: "오후 3:01" },
        { from: "me",   text: "초ㅂㅡ바", time: "오후 3:02" },
        { from: "them", text: "초밥 시켜 먹었어", time: "오후 3:02" },
        { from: "them", text: "뭐야 ㅋㅋㅋ", time: "오후 3:02" },
        { from: "me",   text: "예상했어요", time: "오후 3:03" },
        { from: "them", text: "똥고양이", time: "오후 3:08" },
        { from: "me",   text: "아니에요", time: "오후 3:09" },
        { from: "them", text: "맞는데요", time: "오후 3:09" },
        { from: "me",   text: "아니에요", time: "오후 3:10" }
      ] },
    { name: "1-7 반톡!!", avatar: "images/kakao/bantok.jpg", muted: true, unread: 300, time: "오후 2:58", preview: "시험공부 안함?ㅋㅋ" },
    { name: "김지옥", avatar: "images/kakao/def.jpg", muted: true, time: "오후 2:41", open: true,
      messages: [
        { from: "them", text: "ㄴㄴ", time: "오후 2:33" },
        { from: "me",   text: "ㄴㄴ", time: "오후 2:34" },
        { from: "them", text: "ㄴㄴ", time: "오후 2:36" },
        { from: "me",   text: "ㄴㄴ", time: "오후 2:37" },
        { from: "them", text: "ㄴㄴ", time: "오후 2:39" },
        { from: "me",   text: "ㄴㄴ", time: "오후 2:40" },
        { from: "them", text: "ㄴㄴ", time: "오후 2:41" }
      ] },
    { name: "카카오톡", avatar: "images/icons/kakao.png", time: "오후 1:20", preview: "[PC버전 자동로그인]" },
    { name: "김서기", avatar: "images/kakao/def.jpg", muted: true, time: "오후 12:47", open: true,
      messages: [
        { day: 4 },
        { from: "them", text: "마작 ㄱㄱ", time: "오후 4:21" },
        { from: "me",   text: "ㄴㄴ", time: "오후 4:25" },
        { day: 3 },
        { from: "them", text: "마작 ㄱㄱ", time: "오후 5:02" },
        { from: "me",   text: "ㄴㄴ", time: "오후 5:10" },
        { day: 2 },
        { from: "them", text: "마작 ㄱㄱ", time: "오후 3:48" },
        { from: "me",   text: "ㄴㄴ", time: "오후 3:55" },
        { day: 1 },
        { from: "me",   text: "해겸이형이랑 마작 ㄱ", time: "오후 7:30" },
        { from: "them", text: "ㄱㄱ", time: "오후 7:31" },
        { day: 0 },
        { from: "them", text: "ㄱㄱ", time: "오후 12:45" },
        { from: "me",   text: "ㄴㄴ", time: "오후 12:47" }
      ] },
    { name: "카카오톡 선물하기", avatar: "images/kakao/gift.jpg", unread: 1, time: "오전 11:30", preview: "받은 선물이 있어요. 지금 확인해보세요!" },
    { name: "쿠팡", avatar: "images/icons/coupang.png", unread: 1, time: "오전 10:15", preview: "[쿠팡] 구매하신 상품은 어떠셨나요?" },
    { name: "다크몬스터김철수", avatar: "images/kakao/def.jpg", muted: true, time: "오전 9:02", open: true,
      messages: [
        { from: "them", text: "학교 안오냐?", time: "오전 8:51" },
        { from: "me",   text: "큼큼... 오늘은 바쁜 일정이 있달까 ㅎ (뭐가 날 이렇게 힘들게 하는지... ㅋ 큰 힘엔 그만한 대가가 따르는 법이군) 오늘만큼은 다른 빵셔틀을 찾지 그래", time: "오전 8:58" },
        { from: "them", text: "지랄 ㅋㅋ", time: "오전 9:01" },
        { from: "them", text: "처기어와라", time: "오전 9:01" },
        { from: "me",   text: "웅", time: "오전 9:02" }
      ] },
    { name: "카카오페이", avatar: "images/kakao/kakaopay.jpg", time: "어제", preview: "송금이 완료되었어요." },
    { name: "배달의민족", avatar: "images/kakao/baemin.jpg", unread: 1, time: "어제", preview: "(광고)[지급 완료] 배민클럽 총 10만원 혜택 드렸어요🎁..." },
    { name: "번개장터", avatar: "images/kakao/bungae.jpg", unread: 1, time: "어제", preview: "개인정보 이용내역 안내" },
    { name: "CUpost", avatar: "images/kakao/cu.jpg", time: "10월 19일", preview: "Nice to CU♡" }
  ]
};
