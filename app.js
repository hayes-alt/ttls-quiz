const TERMS = [
  { term: "AOV", answer: "每一笔订单的平均金额，AOV = 总 GMV ÷ 订单数。", traps: ["每个用户平均带来的收入，常用于衡量用户营收贡献。", "每千次播放带来的成交金额，常用于判断内容变现效率。", "广告带来的直接收入与广告花费之间的比值。"] },
  { term: "AOI", answer: "兴趣区域，用于圈选一片区域的人群、内容或门店。", traps: ["地图上具有明确经纬度的单个兴趣点。", "用户从首次触达到最后活跃的总时长。", "固定广告资源按天或按周买断的投放模式。"] },
  { term: "ARPU", answer: "每用户平均收入，ARPU = 总营收 ÷ 总用户数。", traps: ["每一笔订单的平均金额。", "用户生命周期价值，由 LT 与 ARPU 相乘得到。", "每次行动或转化带来的广告成本。"] },
  { term: "BD", answer: "业务拓展人员，通常负责线下门店合作洽谈。", traps: ["超级大客户，通常是全国性头部品牌。", "区域重点客户或区域连锁大客户。", "平台算法推荐流的首页内容入口。"] },
  { term: "BAU", answer: "日常状态、常规运营、按部就班的业务状态。", traps: ["活动期销售表现除以基期销售表现的倍数。", "企业商家合规核验流程。", "按成交结果付费的推广模式。"] },
  { term: "爆发系数", answer: "活动或大促期间销售表现与日常基期销售表现的比值。", traps: ["广告带来的直接收入除以广告花费。", "成交 GMV 除以播放量再乘以 1000。", "总 GMV 除以订单数后得到的平均订单金额。"] },
  { term: "B2B Marketing", answer: "企业向其他企业推广产品或服务的营销方式。", traps: ["平台向个人消费者发券促销的零售活动。", "按用户浏览行为自动推荐视频内容的算法流。", "用户实名身份核验与人脸认证流程。"] },
  { term: "CRM", answer: "以客户为中心的战略、技术与流程体系，用于优化客户全生命周期互动。", traps: ["只表示客服工单系统，不涉及销售或营销。", "按成交额抽佣的达人合作模式。", "圈选商圈范围做投放或统计的地理区域。"] },
  { term: "CVR", answer: "转化率，CVR = 转化次数 ÷ 点击量或曝光量。", traps: ["点击率，表示看到内容后点进去的比例。", "每次有效转化所需广告成本。", "千次观看成交金额。"] },
  { term: "CTR", answer: "点击率，CTR = 点击次数 ÷ 曝光次数。", traps: ["转化率，表示点击后完成目标动作的比例。", "广告支出回报率，表示花 1 元广告带来多少收入。", "平均客单价，表示每笔订单平均金额。"] },
  { term: "CPA", answer: "每次行动成本，CPA = 总广告费 ÷ 转化数。", traps: ["按销售结果抽佣，不成交不付费。", "按固定时间买断资源位或达人服务。", "每千次播放产生的成交金额。"] },
  { term: "CPT", answer: "按固定时间付费，如按天、按周买断广告位或达人服务。", traps: ["按成交付费，卖出去后按比例抽佣。", "按有效转化付费，通常用总广告费除以转化数。", "用户生命周期价值，用于衡量长期贡献。"] },
  { term: "CPS", answer: "按销售或成交付费，成交后按成交额比例抽佣。", traps: ["按曝光买量，曝光越多费用越高。", "按固定时间买断广告位。", "按每次行动成本核算获客效率。"] },
  { term: "DAU", answer: "日活跃用户数，一天内至少使用过一次产品的独立用户数。", traps: ["页面浏览次数，同一用户多次访问可重复累加。", "独立访客数，常用于统计一段时间真实来人。", "用户生命周期总时长。"] },
  { term: "FYP", answer: "打开 App 第一眼看到的算法推荐流。", traps: ["商品详情页，承接用户下单转化。", "商家职人号的员工直播入口。", "企业向企业营销的销售链路。"] },
  { term: "GMV", answer: "商品交易总额，用于衡量业务销售规模。", traps: ["每一笔订单的平均金额。", "广告支出回报率。", "每千次播放带来的成交金额。"] },
  { term: "GPM", answer: "千次观看成交金额，GPM = 成交 GMV ÷ 播放量 × 1000。", traps: ["平均客单价，GPM = 总 GMV ÷ 订单数。", "广告回报率，GPM = 广告收入 ÷ 广告花费。", "点击率，GPM = 点击次数 ÷ 曝光次数。"] },
  { term: "货补", answer: "货物或货品补贴，用商品、库存或货品作为补偿。", traps: ["商家可销售的全部商品资源池。", "活动期间销售相对平销期的倍数。", "达人按销售额获得的佣金比例。"] },
  { term: "货盘", answer: "可销售商品资源池，是品类、价格、库存和供应链的整体组合。", traps: ["平台用货品替代现金发放的补贴。", "用户在推荐页刷到内容后的点击行为。", "企业商家入驻时的主体合规审核。"] },
  { term: "基期日均 GMV", answer: "作为对比基准时期的平均每日 GMV。", traps: ["活动当天峰值 GMV。", "每 1000 次播放产生的成交金额。", "每个用户平均带来的收入。"] },
  { term: "KA", answer: "具有连锁门店的大客户，是重要业务合作伙伴。", traps: ["区域重点客户或区域连锁大客户。", "超级大客户，如全国性头部品牌。", "中小门店、个体户或普通商家。"] },
  { term: "KYB", answer: "商家主体合规核验或企业尽调，面向企业/商家。", traps: ["个人实名认证和身份核验。", "按销售结果付费的抽佣模式。", "用户生命周期价值的计算方法。"] },
  { term: "KYC", answer: "实名认证或用户身份核验，面向个人。", traps: ["企业商家营业执照与主体核验。", "区域商圈人群圈选。", "用户生命周期总时长。"] },
  { term: "LBS", answer: "基于位置服务，利用定位提供附近查询、导航、广告推送等服务。", traps: ["商品详情页的页面转化承接。", "按固定时间买断资源位的广告模式。", "用户生命周期价值。"] },
  { term: "LT", answer: "用户生命周期，指从首次触达到最后一次活跃的总时长。", traps: ["用户生命周期价值，衡量长期收入贡献。", "每用户平均收入。", "活动期相比基期的销售爆发倍数。"] },
  { term: "LTV", answer: "用户生命周期价值，LTV = LT × ARPU。", traps: ["日活跃用户数，衡量一天内独立活跃人数。", "成交 GMV 除以播放量再乘以 1000。", "广告支出回报率。"] },
  { term: "LKA", answer: "区域重点客户或区域连锁大客户。", traps: ["具有全国影响力的超级大客户。", "任意中小门店或个体商家。", "线下拓展门店合作的业务员。"] },
  { term: "OTA", answer: "在线旅行社或在线酒店、旅游、票务预订平台。", traps: ["热门目的地和高转化玩乐场所。", "基于位置服务。", "地理信息系统里的兴趣点。"] },
  { term: "POI", answer: "兴趣点，地图上具有明确位置和语义属性的地点。", traps: ["兴趣区域，用来圈选一片区域。", "推荐页算法流。", "商品详情页。"] },
  { term: "PDP", answer: "商品详情页，承接商品图、价格、评价和购买按钮等转化信息。", traps: ["地图上的兴趣点。", "每次行动成本。", "用户从推荐流进入的首页内容页。"] },
  { term: "PV", answer: "浏览次数，可重复累加；PV 看流量高低。", traps: ["独立用户数；UV 看真实来人多少。", "日活跃用户数。", "每用户平均收入。"] },
  { term: "ROAS", answer: "广告支出回报率，ROAS = 广告带来的直接收入 ÷ 广告花费。", traps: ["总收入除以投入成本，衡量整体投入产出。", "总广告费除以转化数，衡量获客成本。", "点击次数除以曝光次数，衡量点击效率。"] },
  { term: "ROI", answer: "投入产出比，ROI = 总收入 ÷ 投入成本。", traps: ["广告支出回报率，只看广告直接收入和广告花费。", "千次观看成交金额。", "平均客单价。"] },
  { term: "SKA", answer: "超级大客户，通常是头部大品牌企业。", traps: ["区域重点客户或区域连锁大客户。", "中小商家或小规模连锁。", "线下拓展合作的业务员。"] },
  { term: "手搜", answer: "手动搜索，用户主动去搜索页输入关键词找内容。", traps: ["算法推荐流自动推送内容。", "收藏、分享、关注等复合种草行为。", "对营销干预做实验组和对照组比较。"] },
  { term: "SBD", answer: "TT 生活服务餐饮行业的超级品牌日。", traps: ["TT 生活服务酒旅行业的超品日 IP。", "企业向企业营销的简称。", "超级大客户。"] },
  { term: "SBG", answer: "TT 生活服务酒旅行业的超品日 IP 名称。", traps: ["餐饮行业的超级品牌日。", "区域重点客户。", "基于位置服务。"] },
  { term: "SMB", answer: "中小商家或中小企业，如小门店、个体户、小规模连锁。", traps: ["超级大客户，通常是头部品牌。", "具有连锁门店的大客户。", "业务拓展人员。"] },
  { term: "商职", answer: "商家职人号，归商家所有，可让员工发内容、直播、挂团购。", traps: ["平台官方达人账号，归达人个人所有。", "线下 BD 人员的门店拜访账号。", "只用于企业内部排班的员工号。"] },
  { term: "TTD", answer: "热门目的地，平台重点运营的顶流景点或玩乐场所。", traps: ["商品详情页。", "在线旅行预订平台。", "一片可投放圈选的兴趣区域。"] },
  { term: "Uplift", answer: "增量增益，衡量营销干预相比无干预带来的额外效果。", traps: ["活动期销售表现相对平销期的倍数。", "广告收入除以广告花费。", "用户从首次触达到最后活跃的时长。"] },
  { term: "UV", answer: "独立用户数或来访人数；UV 看真实来人多少。", traps: ["浏览次数，同一用户多次访问会重复累加。", "一天内活跃过的独立用户数。", "每用户平均收入。"] },
  { term: "WOM", answer: "口碑营销，通过人与人之间的信任和交流传播品牌信息。", traps: ["手动搜索内容形成的主动需求。", "按销售成交额抽佣的达人合作。", "商品库存和供应链的整体组合。"] },
  { term: "心智", answer: "复合指标，心智 = 手搜 + 收藏复访 + 分享复访 + 关注复访。", traps: ["收藏 + 分享 + 有效访问 POI 详情页 + 关注 + 截屏 + 看商职主页。", "活动期日均 GMV ÷ 基期日均 GMV。", "成交 GMV ÷ 播放量 × 1000。"] },
  { term: "种草", answer: "复合指标，包含收藏、分享、有效访问 POI 详情页、关注、截屏、看商职主页。", traps: ["手搜 + 收藏复访 + 分享复访 + 关注复访。", "活动期相比基期的销售爆发倍数。", "按成交结果付费的营销模式。"] }
];

const QUESTION_COUNT = 10;
const LETTERS = ["A", "B", "C", "D"];
let round = 1;
let currentQuestions = [];
let locked = false;
let playerName = "";

const loginDialog = document.querySelector("#loginDialog");
const loginForm = document.querySelector("#loginForm");
const playerNameInput = document.querySelector("#playerName");
const quizScreen = document.querySelector("#quizScreen");
const quizForm = document.querySelector("#quizForm");
const playerLine = document.querySelector("#playerLine");
const roundLabel = document.querySelector("#roundLabel");
const answeredLabel = document.querySelector("#answeredLabel");
const scoreLabel = document.querySelector("#scoreLabel");
const summaryPanel = document.querySelector("#summaryPanel");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryText = document.querySelector("#summaryText");
const resetButton = document.querySelector("#resetButton");
const submitButton = document.querySelector("#submitButton");
const hintText = document.querySelector("#hintText");
const passDialog = document.querySelector("#passDialog");
const passMessage = document.querySelector("#passMessage");
const confettiLayer = document.querySelector("#confettiLayer");
const dialogCloseButton = document.querySelector("#dialogCloseButton");
const retryDialog = document.querySelector("#retryDialog");
const retryTitle = document.querySelector("#retryTitle");
const retryMessage = document.querySelector("#retryMessage");
const retryButton = document.querySelector("#retryButton");
const reviewButton = document.querySelector("#reviewButton");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function buildQuestion(term) {
  const options = shuffle([term.answer, ...term.traps]).map((text, index) => ({
    key: LETTERS[index],
    text,
    correct: text === term.answer
  }));

  return {
    term: term.term,
    prompt: `关于「${term.term}」，以下哪一项解释最准确？`,
    answer: term.answer,
    options
  };
}

function pickQuestions() {
  currentQuestions = shuffle(TERMS).slice(0, QUESTION_COUNT).map(buildQuestion);
}

function renderQuiz() {
  locked = false;
  quizForm.innerHTML = "";
  summaryPanel.className = "summary-panel";
  summaryTitle.textContent = "随机 10 题，全部答对通过";
  summaryText.textContent = "提交后会展示正确答案，未满分需要再次测试。";
  hintText.textContent = "请选择每道题的一个答案。";
  submitButton.disabled = false;
  submitButton.textContent = "提交答案";
  playerLine.textContent = `答题者：${playerName}`;
  roundLabel.textContent = `第 ${round} 轮`;
  scoreLabel.textContent = "需全对";
  updateAnsweredCount();

  currentQuestions.forEach((question, index) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const head = document.createElement("div");
    head.className = "question-head";
    head.innerHTML = `
      <span class="question-number">${index + 1}</span>
      <p class="question-title">${question.prompt}</p>
    `;

    const options = document.createElement("div");
    options.className = "options";

    question.options.forEach((option) => {
      const id = `q${index}-${option.key}`;
      const label = document.createElement("label");
      label.className = "option";
      label.setAttribute("for", id);
      label.innerHTML = `
        <input id="${id}" type="radio" name="q${index}" value="${option.key}" />
        <span class="option-key">${option.key}</span>
        <span class="option-text">${option.text}</span>
      `;
      options.appendChild(label);
    });

    const note = document.createElement("p");
    note.className = "result-note";
    note.id = `note-${index}`;

    card.append(head, options, note);
    quizForm.appendChild(card);
  });
}

function updateAnsweredCount() {
  const answered = currentQuestions.filter((_, index) => quizForm.querySelector(`input[name="q${index}"]:checked`)).length;
  answeredLabel.textContent = `${answered}/${QUESTION_COUNT} 已答`;
}

function gradeQuiz() {
  let correctCount = 0;
  let answeredCount = 0;

  currentQuestions.forEach((question, index) => {
    const selected = quizForm.querySelector(`input[name="q${index}"]:checked`);
    const note = document.querySelector(`#note-${index}`);
    const labels = [...quizForm.querySelectorAll(`input[name="q${index}"]`)].map((input) => input.closest(".option"));

    labels.forEach((label) => {
      const input = label.querySelector("input");
      const option = question.options.find((item) => item.key === input.value);
      label.classList.toggle("correct", option.correct);
      label.classList.toggle("wrong", selected && input.checked && !option.correct);
    });

    if (selected) {
      answeredCount += 1;
      const picked = question.options.find((item) => item.key === selected.value);
      if (picked.correct) correctCount += 1;
    }

    note.classList.add("visible");
    note.textContent = selected
      ? `正确答案：${question.options.find((item) => item.correct).key}。${question.answer}`
      : `未作答。正确答案：${question.options.find((item) => item.correct).key}。${question.answer}`;
  });

  return { correctCount, answeredCount };
}

function startNewRound() {
  pickQuestions();
  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showModal(dialog) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function launchConfetti() {
  confettiLayer.innerHTML = "";
  const count = 48;
  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDelay = `${Math.random() * 420}ms`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    confettiLayer.appendChild(piece);
  }
}

function showPassDialog() {
  passMessage.textContent = `${playerName}，恭喜通关！`;
  launchConfetti();
  showModal(passDialog);
}

function showRetryDialog(correctCount) {
  retryTitle.textContent = `本轮答对 ${correctCount}/10`;
  retryMessage.textContent = "未达到 10/10 通关标准。页面已展示正确答案，请回看错题后确认再次答题。";
  showModal(retryDialog);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  playerName = playerNameInput.value.trim();
  if (!playerName) return;
  loginDialog.close();
  quizScreen.classList.remove("hidden");
  startNewRound();
});

quizForm.addEventListener("change", updateAnsweredCount);

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (locked) return;

  const { correctCount, answeredCount } = gradeQuiz();
  locked = true;
  submitButton.disabled = true;
  scoreLabel.textContent = `${correctCount}/10`;

  if (correctCount === QUESTION_COUNT) {
    summaryPanel.className = "summary-panel is-pass";
    summaryTitle.textContent = "通过：10/10 全部答对";
    summaryText.textContent = "你已经掌握这轮 TTLS 术语测试。可以换一套继续练习。";
    hintText.textContent = "本轮已通过。";
    submitButton.textContent = "已通过";
    showPassDialog();
  } else {
    summaryPanel.className = "summary-panel is-fail";
    summaryTitle.textContent = `未通过：答对 ${correctCount}/10`;
    summaryText.textContent = answeredCount < QUESTION_COUNT
      ? `本轮还有 ${QUESTION_COUNT - answeredCount} 题未作答。请先回看正确答案，再确认再次答题。`
      : "需要满分才可通过。请先回看正确答案，再确认再次答题。";
    hintText.textContent = "正确答案已展示在每道题下方。";
    submitButton.textContent = "等待再次答题";
    showRetryDialog(correctCount);
  }
});

resetButton.addEventListener("click", () => {
  round += 1;
  startNewRound();
});

dialogCloseButton.addEventListener("click", () => {
  passDialog.close();
});

retryButton.addEventListener("click", () => {
  retryDialog.close();
  round += 1;
  startNewRound();
});

reviewButton.addEventListener("click", () => {
  retryDialog.close();
});

loginDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});

retryDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});

showModal(loginDialog);
