/* ===== Pylon IPO Terminal — Robotics edition · dataset =====
   Robotics-related IPOs & IPO-watch names, China + United States.
   Compiled 11 Jul 2026 from exchange filings, company disclosures and press.
   Prices / market caps carry as-of dates; "n/d" = not disclosed.
   Broad robotics scope: humanoid, embodied-AI, industrial, warehouse, service,
   surgical, autonomous driving / robotaxi, lidar, drones & defense, components.
   Not investment advice. */

var SUB_LABEL = {
  humanoid:"Humanoid", embodied:"Embodied AI", auto:"Autonomous / Robotaxi",
  warehouse:"Warehouse", service:"Service robots", lidar:"Lidar",
  defense:"Defense / Drones", industrial:"Industrial", surgical:"Surgical",
  components:"Components", consumer:"Consumer"
};

var COMPANIES = [

/* ==================== CHINA ==================== */

{
  id:"unitree", co:"Unitree Robotics", cn:"宇树科技", ticker:"STAR Market (pending)",
  exchange:"STAR — Shanghai", mkt:"CN", sub:"humanoid",
  status:"approved", statusTxt:"IPO approved", listing:"Q3 2026 (expected)", listDate:"2026-08-15",
  deal:"~RMB 4.2bn (US$618m)", mcap:"~US$5.9bn (implied)", mcapAsOf:"3 Jul 2026 approval",
  oneLiner:"China's first listed pure-play humanoid company — and one of the few that is actually profitable.",
  thesis:"Unitree is the most commercially mature humanoid/quadruped maker in China, exporting globally and — unusually for the sector — turning a net profit. CSRC registration approval on 3 Jul 2026 (the fastest STAR clearance on record) sets up a Q3 2026 debut that would be the first pure-play humanoid listing in China, a landmark for the embodied-AI trade.",
  business:"Founded 2016 in Hangzhou, Unitree began with low-cost quadruped 'robot dogs' and expanded into full-size humanoids (H1, G1). Its price-aggressive, hardware-first model has made it the volume leader in consumer and research robotics, with 5,500+ humanoids shipped and a large global export base.",
  financials:"FY2025 revenue RMB 1.69bn (+333% YoY) with net profit RMB 278m — genuinely profitable. Q1 2026 revenue RMB 420m (+68.5% YoY) but net profit RMB 50m (−47.7% YoY) as competition compressed margins.",
  founder:"Wang Xingxing (王兴兴)", founderBg:"Founder, CEO & CTO. Robotics engineer and Shanghai University graduate; attended Xi Jinping's February 2025 tech symposium as a rising national tech figure.",
  peers:["UBTech Robotics","AgiBot","EngineAI","Figure AI"],
  risks:["Margin compression as price war intensifies across Chinese humanoid makers","Revenue still concentrated in research/consumer buyers rather than durable industrial contracts","Rich implied valuation (~US$5.9bn) versus a sub-RMB2bn revenue base"],
  catalysts:["STAR Market pricing & trading debut (Q3 2026)","Industrial humanoid order wins","H2/G1 humanoid volume ramp"],
  sources:[
    ["Caixin — Unitree wins approval for US$618m STAR IPO","https://www.caixinglobal.com/2026-07-03/unitree-robotics-wins-approval-for-618-million-star-market-ipo-102460136.html"],
    ["People's Daily — Unitree clears listing review","https://en.people.cn/n3/2026/0602/c90000-20462845.html"],
    ["Wikipedia — Wang Xingxing","https://en.wikipedia.org/wiki/Wang_Xingxing"]
  ]
},
{
  id:"ubtech", co:"UBTech Robotics", cn:"优必选", ticker:"9880.HK",
  exchange:"HKEX", mkt:"CN", sub:"humanoid",
  status:"listed", statusTxt:"Listed", listing:"Listed 29 Dec 2023", listDate:"2023-12-29",
  deal:"~HK$1bn (US$130m)", mcap:"~US$5.8bn", mcapAsOf:"Jun 2026",
  ipoPx:"HK$90.00", ipoNum:90.00, curPx:"~HK$90", curNum:90.00, pxAsOf:"Jun 2026",
  pxSrc:["companiesmarketcap.com — UBTech","https://companiesmarketcap.com/ubtech-robotics/marketcap/"],
  oneLiner:"The first humanoid company on the HKEX Main Board, now pivoting hard into factory deployment.",
  thesis:"UBTech is the earliest-listed humanoid pure-play and a bellwether for the industrialisation of humanoids. Full-size humanoid revenue exploded 22x in 2025 as it landed EV-factory pilots (BYD, Foxconn-style plants), but the company remains loss-making — the read-through is whether humanoids can move from pilots to paid production lines.",
  business:"Founded 2012 in Shenzhen, UBTech makes the Walker humanoid series alongside education, logistics and consumer robots. Its strategy has shifted decisively toward industrial humanoid deployment in automotive and electronics plants.",
  financials:"FY2025 revenue RMB 2.01bn (+53.3% YoY); net loss RMB 790m (narrowed 31.9%); gross margin 37.7%. Full-size humanoid revenue RMB 821m (+2,203.7% YoY, 41% of total) on 1,079 units delivered. Still loss-making.",
  founder:"Zhou Jian (周剑)", founderBg:"Founder, chairman & CEO; retained ~24.8% at IPO. Backed by Qiming Venture Partners.",
  peers:["Unitree Robotics","AgiBot","Figure AI","Apptronik"],
  risks:["Persistent net losses; profitability path unproven","Humanoid revenue lumpy and pilot-dependent","High share-price volatility since debut"],
  catalysts:["Factory humanoid contract conversions","New Walker generation launches","Government embodied-AI procurement"],
  sources:[
    ["SCMP — UBTech Hong Kong trading debut","https://www.scmp.com/business/article/3246584/ubtech-maker-stormtrooper-robots-gains-hong-kong-trading-debut-after-pricing-final-ipo-2023-lower"],
    ["Gasgoo — UBTech 2025 results","https://autonews.gasgoo.com/articles/icv/ubtech-2025-report-card-revenue-from-full-size-humanoid-robots-grows-over-22-fold-2039900685372407808"],
    ["companiesmarketcap.com — UBTech market cap","https://companiesmarketcap.com/ubtech-robotics/marketcap/"]
  ]
},
{
  id:"agibot", co:"AgiBot (Zhiyuan Robotics)", cn:"智元机器人", ticker:"688019 (via Swancor)",
  exchange:"STAR — Shanghai (reverse merger)", mkt:"CN", sub:"humanoid",
  status:"reported", statusTxt:"Backdoor route", listing:"2025–26 (Swancor stake)", listDate:"2026-01-15",
  deal:"~RMB 2.1bn (US$290m) stake", mcap:"n/d (private)", mcapAsOf:"",
  oneLiner:"The Peng Zhihui / ex-Huawei humanoid unicorn taking a public-market shortcut through a STAR-listed shell.",
  thesis:"AgiBot is one of the best-funded Chinese humanoid startups (Tencent, JD, Sequoia China, Hillhouse, BYD, SAIC) and moved fastest toward public markets via a ~63.6% stake in STAR-listed Swancor (688019) — widely read as a backdoor listing, which the company disputes. The play is a bet on a top-tier embodied-AI team reaching the tape well ahead of a conventional IPO.",
  business:"Founded Feb 2023 in Shanghai, AgiBot builds full-stack humanoid and robotic systems (Yuanzheng and Lingxi lines, incl. the wheeled/legged Lingxi X2-N) plus its own embodied foundation models, targeting services, industrial automation, logistics and education.",
  financials:"AgiBot revenue not disclosed (early, pre-mass-commercialisation). Shell company Swancor posted FY2024 revenue RMB 1.49bn (+6.7%) and net profit RMB 88.7m.",
  founder:"Deng Taihua (邓泰华) & Peng Zhihui (稚晖君)", founderBg:"Deng, founder/CEO, is a former Huawei executive; co-founder Peng 'Zhihui Jun' is an ex-Huawei 'genius youth' engineer and robotics celebrity.",
  peers:["Unitree Robotics","UBTech Robotics","Galbot","EngineAI"],
  risks:["Reverse-merger structure carries regulatory and dilution complexity","No disclosed revenue; valuation opaque","Pre-commercial humanoid business model unproven"],
  catalysts:["Completion of Swancor restructuring","Lingxi humanoid commercial orders","Embodied foundation-model releases"],
  sources:[
    ["TMTPost — AgiBot Swancor deal","https://en.tmtpost.com/post/7620691"],
    ["SCMP — AgiBot potential back-door listing","https://www.scmp.com/tech/big-tech/article/3317741/robot-maker-agibot-seeks-stake-shanghai-listed-firm-potential-back-door-listing-move"],
    ["The Standard — AgiBot denies backdoor listing","https://www.thestandard.com.hk/tech-and-startup/article/306338/Robo-startup-Agibot-denies-backdoor-listing-amid-Swancor-acquisition-deal"]
  ]
},
{
  id:"engineai", co:"EngineAI", cn:"众擎机器人", ticker:"HKEX (confidential filing)",
  exchange:"HKEX", mkt:"CN", sub:"humanoid",
  status:"filed", statusTxt:"Filed (confidential)", listing:"Late 2026 / 2027", listDate:"2026-11-01",
  deal:"n/d", mcap:"~US$1.5bn (Series B)", mcapAsOf:"Apr 2026",
  oneLiner:"Shenzhen humanoid maker mass-producing legged robots — one every ~15 minutes — and first to file for a HK listing.",
  thesis:"EngineAI is the furthest-along Chinese humanoid pure-play toward a Hong Kong IPO, having confidentially filed in June 2026 after a US$200m Series B. With Luxshare-ICT (an Apple assembler) as a strategic backer and a manufacturing-speed narrative, it is positioned as a scale-manufacturing play on humanoids.",
  business:"Founded 2023 in Shenzhen, EngineAI makes humanoid (SE/PM/T800 lines) and quadruped robots with embedded AI, opening a plant it says can build a humanoid roughly every 15 minutes. Target uses span traffic management, security patrols, retail service and industrial tasks, with Middle East and North America expansion.",
  financials:"Revenue not disclosed. Total funding ~US$339m (~US$139m in late 2025 plus a US$200m Series B in April 2026).",
  founder:"Ren Guowen (co-founder)", founderBg:"Co-founder cited publicly on strategy; fuller founder bios not yet disclosed. Series B led by Henan CICC Huirong Fund and Luxshare-ICT.",
  peers:["Unitree Robotics","AgiBot","LimX Dynamics","Galbot"],
  risks:["Pre-revenue; manufacturing capacity ahead of demonstrated demand","Confidential filing means limited public financials","Crowded Chinese humanoid field competing on price"],
  catalysts:["Public HK prospectus / listing hearing","Overseas (Middle East, US) order wins","Series B deployment into capacity"],
  sources:[
    ["Bloomberg — EngineAI files for HK IPO","https://www.bloomberg.com/news/articles/2026-06-12/humanoid-robot-manufacturer-engineai-is-said-to-file-for-hong-kong-ipo"],
    ["The Robot Report — EngineAI funding","https://www.therobotreport.com/engineai-raises-nearly-140m-developing-legged-humanoid-robots/"]
  ]
},
{
  id:"galbot", co:"Galbot", cn:"银河通用", ticker:"HKEX (planned)",
  exchange:"HKEX", mkt:"CN", sub:"embodied",
  status:"reported", statusTxt:"Preparing IPO", listing:"2026 (targeted)", listDate:"2026-12-01",
  deal:"n/d", mcap:"~US$3bn", mcapAsOf:"Mar 2026",
  oneLiner:"Beijing's highest-valued unlisted humanoid firm, trained on synthetic-plus-real data and stacked with state capital.",
  thesis:"Galbot is the best-capitalised private embodied-AI humanoid company in China, backed by the National AI 'Big Fund', China Mobile, CITIC, Bank of China, Sinopec and SAIC, and it has picked banks for a 2026 Hong Kong listing. It is a bet on sim-to-real foundation models plus a marquee investor syndicate reaching the market.",
  business:"Founded 2023 in Beijing, Galbot develops general-purpose humanoid robots trained on a blend of synthetic simulation and real-world data, with deployments across manufacturing, retail, smart cities and healthcare. Partners include Toyota, Hyundai, Bosch, CATL and BAIC, with thousands of cumulative orders reported.",
  financials:"Revenue not disclosed. Raised RMB 2.5bn (~US$362m) in March 2026 at a reported ~US$3bn valuation — described as the highest-valued unlisted Chinese humanoid firm.",
  founder:"Wang He (王鹤)", founderBg:"Founder; Peking University researcher / assistant professor and Stanford graduate.",
  peers:["AgiBot","Unitree Robotics","Physical Intelligence","Figure AI"],
  risks:["Heavy reliance on state-linked capital and procurement","No disclosed revenue at a US$3bn mark","Sim-to-real generalisation still an open research problem"],
  catalysts:["HK bank mandates → prospectus","Big-Fund follow-on rounds","Foundation-model deployment milestones"],
  sources:[
    ["Caixin — Galbot raises US$362m, eyes HK IPO","https://www.caixinglobal.com/2026-03-03/galbot-raises-362-million-in-fresh-funding-eyes-hong-kong-ipo-102418742.html"],
    ["Bloomberg — Galbot picks banks for 2026 HK IPO","https://www.bloomberg.com/news/articles/2025-12-12/humanoid-robot-maker-galbot-said-to-pick-banks-for-2026-hk-ipo"]
  ]
},
{
  id:"fourier", co:"Fourier Intelligence", cn:"傅利叶智能", ticker:"A-share (preparing)",
  exchange:"STAR / A-share (targeted)", mkt:"CN", sub:"humanoid",
  status:"reported", statusTxt:"Preparing IPO", listing:"Not disclosed", listDate:"2027-01-01",
  deal:"n/d", mcap:"n/d (private)", mcapAsOf:"",
  oneLiner:"From rehab exoskeletons to GR-series humanoids — a medical-robotics pioneer eyeing an A-share float.",
  thesis:"Fourier is an unusual humanoid entrant with a real, revenue-generating rehabilitation-robotics base in hundreds of hospitals, now layered with a humanoid program (GR-1, GR-2). Backed by IDG Capital and Saudi Aramco, it has completed shareholding reform ahead of a reported A-share listing — a bet on medical + humanoid convergence. (Note: not to be confused with HKEX-listed 'Fourier Semiconductor', 03625.)",
  business:"Founded 2015 in Shanghai, Fourier built rehabilitation robotics and exoskeletons deployed across 10+ countries, then expanded into humanoids: the GR-1 (1.65m biped) and GR-2 (1.75m, 63kg, 53 degrees of freedom).",
  financials:"Revenue not disclosed in verifiable sources. Backed by IDG Capital and Saudi Aramco; completed shareholding reform ahead of a reported listing.",
  founder:"Alex Gu (顾捷)", founderBg:"Founder; Shanghai Jiao Tong University graduate and former National Instruments sales executive. Company named after mathematician Joseph Fourier.",
  peers:["UBTech Robotics","Unitree Robotics","Intuitive Surgical","Apptronik"],
  risks:["Listing venue and timing unconfirmed","Humanoid line still pre-commercial versus mature rehab base","Frequent name confusion with Fourier Semiconductor"],
  catalysts:["Formal A-share filing / prospectus","GR-2 commercial deployments","Rehab + humanoid cross-selling"],
  sources:[
    ["Wikipedia — Fourier (company)","https://en.wikipedia.org/wiki/Fourier_(company)"],
    ["The Robot Report — Fourier Intelligence","https://www.therobotreport.com/tag/fourier-intelligence/"]
  ]
},
{
  id:"limx", co:"LimX Dynamics", cn:"逐际动力", ticker:"Private",
  exchange:"Private", mkt:"CN", sub:"humanoid",
  status:"private", statusTxt:"Private (Series B)", listing:"No IPO signalled", listDate:"2030-01-01",
  deal:"US$200m Series B", mcap:"n/d (private)", mcapAsOf:"Feb 2026",
  oneLiner:"AI-first Shenzhen humanoid startup with a WeRide-veteran COO and a fresh US$200m war chest.",
  thesis:"LimX is a research-heavy (80%+ R&D staff) humanoid company that raised a US$200m Series B in early 2026 with Nio Capital and SAIC's Shangqi Capital increasing stakes. No IPO is signalled yet, but it is a name to track as a next-wave listing candidate in the Chinese humanoid cohort.",
  business:"Incubated in 2022 in Shenzhen, LimX builds full-size general-purpose humanoids and bipedal platforms plus embodied-AI 'brains'. Products include the LimX Oli full-size humanoid (pre-orders from ~RMB 158,000) and the Tron 1 / Tron 2 bipedal platforms.",
  financials:"Revenue not disclosed. Latest raise: US$200m Series B (Feb 2026) from Stone Venture, Oriental Fortune Capital, CoStone Capital, with Nio Capital and Shangqi Capital adding.",
  founder:"Zhang Li (张力), COO", founderBg:"Confirmed co-founder & COO Zhang Li is the former COO of Nasdaq-listed autonomous-driving firm WeRide; the CEO's identity is reported but not firmly verified.",
  peers:["Unitree Robotics","EngineAI","AgiBot","1X Technologies"],
  risks:["No IPO path yet; earliest-stage of the listed-adjacent cohort","Founder/leadership disclosures incomplete","Pre-revenue, R&D-heavy burn"],
  catalysts:["LimX Oli deliveries","Follow-on financing / pre-IPO round","Automaker embodied-AI partnerships"],
  sources:[
    ["Caixin — LimX raises US$200m","https://www.caixinglobal.com/2026-02-03/chinese-robot-startup-limx-dynamics-raises-200-million-102411020.html"],
    ["CnEVPost — LimX Series B","https://cnevpost.com/2026/02/02/chinese-humanoid-robot-maker-limx-secures-200-million-in-series-b-funding/"]
  ]
},
{
  id:"leju", co:"Leju Robotics", cn:"乐聚机器人", ticker:"STAR Market (filed)",
  exchange:"STAR — Shanghai", mkt:"CN", sub:"humanoid",
  status:"filed", statusTxt:"Filed", listing:"2026–27", listDate:"2026-10-30",
  deal:"n/d (pre-IPO ~RMB 1.5bn)", mcap:"n/d", mcapAsOf:"",
  oneLiner:"Kuavo-series humanoid maker in the Huawei ecosystem, filed on the STAR Market.",
  thesis:"Leju is part of the 2026 rush of Chinese humanoid makers to the STAR Market, having filed around October 2025 with Orient Securities as sponsor and a large ~RMB 1.5bn pre-IPO round behind it. Its tie-in to the Huawei ecosystem gives it a differentiated distribution angle.",
  business:"Leju is an early developer of humanoid robot bodies, best known for its Kuavo series, and supplies into the Huawei ecosystem. It is among the first humanoid names to formally seek a STAR Market listing.",
  financials:"FY2025 revenue RMB 258m. Completed a pre-IPO round of ~RMB 1.5bn; sponsor Orient Securities.",
  founder:"Leju founding team", founderBg:"Shenzhen/Harbin-linked robotics team; specific founder disclosures pending in the listing document.",
  peers:["Unitree Robotics","DeepRobotics","UBTech Robotics","EngineAI"],
  risks:["Small revenue base for a listing candidate","Dependence on Huawei-ecosystem demand","STAR humanoid cohort crowding"],
  catalysts:["STAR listing hearing / approval","Kuavo volume orders","Huawei ecosystem integrations"],
  sources:[
    ["CMRA — Chinese humanoid IPO race","https://cnmra.com/three-chinese-companies-are-rushing-to-ipo-is-the-year-for-humanoid-robots-about-to-go-public/"]
  ]
},
{
  id:"deeprobotics", co:"DeepRobotics", cn:"云深处科技", ticker:"STAR Market (filed)",
  exchange:"STAR — Shanghai", mkt:"CN", sub:"humanoid",
  status:"filed", statusTxt:"Filed", listing:"2026", listDate:"2026-05-18",
  deal:"n/d", mcap:"n/d", mcapAsOf:"",
  oneLiner:"Hangzhou quadruped-and-humanoid maker, profitable and STAR-filed, backed by the AI Big Fund and JD.",
  thesis:"DeepRobotics stands out in the humanoid cohort for already being profitable, and its STAR application was accepted in May 2026 with National AI Industry Investment Fund and JD.com backing. It is a quality-of-earnings contrast to the pre-revenue humanoid names.",
  business:"Founded in Hangzhou, DeepRobotics (Yunshenchu) makes quadruped robots for inspection and hazardous-environment work and is expanding into humanoids. It entered STAR Market IPO tutoring in late 2025.",
  financials:"FY2025 revenue RMB 337m with net profit RMB 15.1m — turned profitable. Pre-IPO round backed by the National AI Industry Investment Fund and JD.com.",
  founder:"DeepRobotics founding team", founderBg:"Hangzhou robotics team out of the Zhejiang University orbit; detailed founder disclosures pending in filing.",
  peers:["Unitree Robotics","Leju Robotics","UBTech Robotics"],
  risks:["Modest absolute profit; scale still small","Transition from quadruped to humanoid unproven commercially","STAR approval timing risk"],
  catalysts:["STAR listing approval","Humanoid product launches","Industrial inspection contract growth"],
  sources:[
    ["CMRA — Chinese humanoid IPO race","https://cnmra.com/three-chinese-companies-are-rushing-to-ipo-is-the-year-for-humanoid-robots-about-to-go-public/"],
    ["Gasgoo — embodied-AI IPO boom","https://autonews.gasgoo.com/articles/news/embodied-ai-ipo-boom-building-real-businesses-or-riding-the-hype-2065702333747675136"]
  ]
},
{
  id:"zhipu", co:"Zhipu AI (Z.ai)", cn:"智谱华章", ticker:"2513.HK",
  exchange:"HKEX (+ STAR pending)", mkt:"CN", sub:"embodied",
  status:"listed", statusTxt:"Listed", listing:"Listed 8 Jan 2026", listDate:"2026-01-08",
  deal:"~HK$4.3bn (US$552m)", mcap:"~HK$57.5bn (US$7.4bn)", mcapAsOf:"8 Jan 2026",
  ipoPx:"HK$116.20", ipoNum:116.20, curPx:"HK$130.60", curNum:130.60, pxAsOf:"8 Jan 2026 close",
  pxSrc:["Yicai Global — Zhipu HK debut","https://www.yicaiglobal.com/news/zhipu-ai-soars-in-hong-kong-stock-market-debut-as-chinese-startup-becomes-worlds-first-llm-firm-to-go-public"],
  oneLiner:"The world's first pure-play LLM company to go public — and a foundation-model brain for embodied AI.",
  thesis:"Zhipu is the first pure-play large-language-model developer to list anywhere, giving public-market exposure to China's foundation-model race (a direct rival to DeepSeek, Moonshot and MiniMax). Its relevance to robotics is the agent/embodied-AI layer that increasingly sits atop physical robots. A STAR A-share leg is planned on top of the HK listing.",
  business:"Spun out of Tsinghua's KEG lab in 2019, Zhipu builds the GLM family of models sold via a Model-as-a-Service platform, with growing agent and embodied-AI ambitions.",
  financials:"H1 2025 revenue RMB 190.9m (+325% YoY) with a H1 net loss of RMB 2.4bn; FY2024 loss ~RMB 3.0bn — deeply loss-making and R&D-heavy.",
  founder:"Zhang Peng (张鹏) & Tang Jie (唐杰)", founderBg:"CEO Zhang Peng leads the company; chief scientist Tang Jie is a Tsinghua professor. Spun out of Tsinghua University's KEG lab.",
  peers:["MiniMax","Physical Intelligence","Galbot","Horizon Robotics"],
  risks:["Very large losses relative to nascent revenue","Intense domestic model-price competition","Compute-access and export-control exposure"],
  catalysts:["STAR A-share listing under new pre-profit AI rules","Enterprise / government model wins","Embodied-AI agent deployments"],
  sources:[
    ["Yicai Global — Zhipu HK debut","https://www.yicaiglobal.com/news/zhipu-ai-soars-in-hong-kong-stock-market-debut-as-chinese-startup-becomes-worlds-first-llm-firm-to-go-public"],
    ["CGTN — first Chinese AI firm to go public","https://news.cgtn.com/news/2026-01-09/4-key-takeaways-Zhipu-becomes-first-Chinese-AI-firm-to-go-public-1JN0K7CEJaw/p.html"]
  ]
},
{
  id:"horizon", co:"Horizon Robotics", cn:"地平线", ticker:"9660.HK",
  exchange:"HKEX", mkt:"CN", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Listed 24 Oct 2024", listDate:"2024-10-24",
  deal:"~US$696m", mcap:"~HK$93bn (US$12bn)", mcapAsOf:"27 May 2026",
  ipoPx:"HK$3.99", ipoNum:3.99, curPx:"HK$5.97", curNum:5.97, pxAsOf:"27 May 2026",
  pxSrc:["stockanalysis — 9660.HK","https://stockanalysis.com/quote/hkg/9660/"],
  oneLiner:"China's answer to Mobileye/Nvidia for autonomous driving — the biggest HK IPO of 2024, now up ~50%.",
  thesis:"Horizon is the leading domestic supplier of autonomous-driving compute (its 'Journey' SoCs) and full-stack software to Chinese and global automakers, riding the shift to assisted/autonomous driving. One of the few recent Chinese robotics-adjacent listings trading well above its IPO price, it is a scaled, design-win-driven silicon story rather than a pre-revenue bet.",
  business:"Founded 2015, Horizon designs energy-efficient AI SoCs and the accompanying software stack for ADAS and higher-level autonomy, supplying dozens of OEMs. Revenue mix is shifting toward higher-value Journey 6 and Horizon SuperDrive full-stack solutions.",
  financials:"TTM revenue ~HK$4.18bn (+57.7% YoY); large reported net loss (~HK$11.65bn) is heavily distorted by fair-value / share-based accounting, with a far smaller operating loss.",
  founder:"Dr. Yu Kai (余凯)", founderBg:"Founder & CEO; former head of Baidu's Institute of Deep Learning. Became a billionaire on the IPO.",
  peers:["Black Sesame","Momenta","Hesai Group","WeRide"],
  risks:["GAAP losses optically severe due to accounting for preferred shares","Design-win concentration among Chinese OEMs in a price war","Competition from Nvidia, Qualcomm and in-house OEM silicon"],
  catalysts:["Journey 6 / SuperDrive ramp","New OEM design wins","Path to operating profitability"],
  sources:[
    ["Bloomberg — Horizon raises US$696m in HK IPO","https://www.bloomberg.com/news/articles/2024-10-22/horizon-robotics-raises-696-million-in-hong-kong-ipo"],
    ["stockanalysis — 9660.HK","https://stockanalysis.com/quote/hkg/9660/"]
  ]
},
{
  id:"blacksesame", co:"Black Sesame Technologies", cn:"黑芝麻智能", ticker:"2533.HK",
  exchange:"HKEX", mkt:"CN", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Listed 8 Aug 2024", listDate:"2024-08-08",
  deal:"~US$130m", mcap:"~HK$8.5bn (US$1.1bn)", mcapAsOf:"18 Jun 2026",
  ipoPx:"HK$28.00", ipoNum:28.00, curPx:"HK$11.94", curNum:11.94, pxAsOf:"18 Jun 2026",
  pxSrc:["stockanalysis — 2533.HK","https://stockanalysis.com/quote/hkg/2533/statistics/"],
  oneLiner:"Xiaomi- and Tencent-backed AD chipmaker — the first Chapter 18C 'specialist tech' IPO, down ~57% since.",
  thesis:"Black Sesame is a fabless autonomous-driving SoC designer and the first company to use HKEX's Chapter 18C pre-revenue specialist-tech route. Its post-IPO slide (down ~57%) makes it a cautionary tale on valuing pre-scale AD silicon, but it remains a leveraged play on Chinese autonomy adoption.",
  business:"Founded 2016 in Wuhan, Black Sesame designs high-compute automotive SoCs (Huashan and Wudang series) for autonomous driving, with mass production beginning in late 2022. Backed by Xiaomi, Tencent and Northern Light.",
  financials:"Latest annual revenue ~HK$915m with a net loss of ~HK$1.59bn; net cash ~HK$839m. 2023 revenue had been RMB 312m (+89%).",
  founder:"Shan Jizhang (单记章) & Liu Weihong (刘卫红)", founderBg:"Chairman & CEO Shan is a veteran chip / image-sensor engineer (ex-OmniVision); Liu is president.",
  peers:["Horizon Robotics","Momenta","WeRide","Pony.ai"],
  risks:["Steep post-IPO drawdown; heavy losses","Intense competition from Horizon and global chip vendors","Revenue-recognition lumpiness tied to OEM ramps"],
  catalysts:["New Wudang chip design wins","Loss narrowing / gross-margin gains","Higher-level autonomy adoption in China"],
  sources:[
    ["Forbes — Black Sesame sinks in HK debut","https://www.forbes.com/sites/zinnialee/2024/08/08/xiaomi-backed-autonomous-driving-chipmaker-black-sesame-sinks-in-hong-kong-debut/"],
    ["stockanalysis — 2533.HK statistics","https://stockanalysis.com/quote/hkg/2533/statistics/"]
  ]
},
{
  id:"hesai", co:"Hesai Group", cn:"禾赛科技", ticker:"HSAI / 2525.HK",
  exchange:"Nasdaq + HKEX", mkt:"CN", sub:"lidar",
  status:"listed", statusTxt:"Listed", listing:"Nasdaq Feb 2023 · HK Sep 2025", listDate:"2023-02-10",
  deal:"HK leg ~US$584m", mcap:"~US$2.5bn", mcapAsOf:"7 Jul 2026",
  ipoPx:"US$19.00 (ADS)", ipoNum:19.00, curPx:"US$16.15", curNum:16.15, pxAsOf:"7 Jul 2026 (pre-split)",
  pxSrc:["stockanalysis — HSAI","https://stockanalysis.com/stocks/hsai/"],
  oneLiner:"The world's largest automotive lidar maker by volume — and the only clearly profitable pure-play in the sector.",
  thesis:"Hesai is the volume leader in automotive lidar and the first globally-listed lidar company to reach full-year profitability, giving it a quality edge over Western peers still burning cash. Its 2025 HK dual-primary listing hedges US delisting risk. A 1-for-8 forward ADS split (~10 Jul 2026) signals confidence; reconcile any post-split quotes.",
  business:"Founded 2014 by Stanford-trained engineers, Hesai makes mechanical and hybrid solid-state lidar for ADAS, robotaxis and robotics, supplying numerous OEMs and dominating by units shipped. Mercedes-Benz is a partner.",
  financials:"TTM revenue ~US$461m (+41.9%) with positive net income ~US$68m (P/E ~39) — the clear profitability standout among listed lidar names. 2024 was its first GAAP-profitable full year.",
  founder:"Li Yifan (David Li)", founderBg:"Co-founder & CEO (University of Illinois PhD), with co-founders Sun Kai and Xiang Shaoqing.",
  peers:["RoboSense","Ouster","Aeva Technologies","Innoviz"],
  risks:["Automotive pricing pressure on lidar ASPs","US-China regulatory / listing overhang","Robotics demand still small vs automotive"],
  catalysts:["Forward ADS split completion","Robotics/robotaxi lidar volume","New OEM ADAS wins"],
  sources:[
    ["Bloomberg — Hesai rises in HK debut","https://www.bloomberg.com/news/articles/2025-09-16/lidar-giant-hesai-rises-in-hk-debut-after-535-million-listing"],
    ["stockanalysis — HSAI","https://stockanalysis.com/stocks/hsai/"]
  ]
},
{
  id:"robosense", co:"RoboSense", cn:"速腾聚创", ticker:"2498.HK",
  exchange:"HKEX", mkt:"CN", sub:"lidar",
  status:"listed", statusTxt:"Listed", listing:"Listed Jan 2024", listDate:"2024-01-05",
  deal:"~US$110m", mcap:"~HK$11.3bn (US$1.4bn)", mcapAsOf:"2 Jul 2026",
  ipoPx:"HK$43.00", ipoNum:43.00, curPx:"HK$23.88", curNum:23.88, pxAsOf:"2 Jul 2026",
  pxSrc:["Simply Wall St — 2498.HK","https://simplywall.st/stocks/hk/tech/hkg-2498/robosense-technology-shares"],
  oneLiner:"Lidar maker pivoting hard into robotics — robot product sales up ~25x in 2025, first quarterly profit reached.",
  thesis:"RoboSense is the lidar name most explicitly repositioning toward robotics (beyond automotive ADAS), with robot-segment sales up roughly 25x in 2025 and a maiden quarterly profit achieved. Down ~45% from IPO, it is a turnaround-plus-robotics-optionality story.",
  business:"Founded 2014, RoboSense supplies lidar and perception solutions for ADAS and, increasingly, robotics and humanoid applications.",
  financials:"FY2025 revenue RMB 1.94bn (+18% YoY); net loss narrowed ~70% to RMB 145.9m (from RMB 481.8m). Analysts expect a maiden full-year profit (~RMB 83m) in 2026.",
  founder:"Qiu Chunchao (邱纯鑫)", founderBg:"Co-founder & CEO with a robotics PhD background, alongside Liu Letian and Zhu Xiaolan.",
  peers:["Hesai Group","Ouster","Aeva Technologies"],
  risks:["Still loss-making at the full-year level","Automotive lidar price competition","Robotics demand ramp must sustain"],
  catalysts:["First full-year profit (2026E)","Robotics/humanoid lidar design wins","Margin expansion"],
  sources:[
    ["TipRanks — RoboSense turns first quarterly profit","https://www.tipranks.com/news/company-announcements/robosense-turns-first-quarterly-profit-as-lidar-volumes-and-margins-surge-in-2025"],
    ["Simply Wall St — 2498.HK","https://simplywall.st/stocks/hk/tech/hkg-2498/robosense-technology-shares"]
  ]
},
{
  id:"weride", co:"WeRide", cn:"文远知行", ticker:"WRD / 0800.HK",
  exchange:"Nasdaq + HKEX", mkt:"CN", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Nasdaq Oct 2024 · HK Nov 2025", listDate:"2024-10-25",
  deal:"HK leg ~US$291m", mcap:"~US$1.9bn", mcapAsOf:"30 Jun 2026",
  ipoPx:"US$15.50", ipoNum:15.50, curPx:"US$5.82", curNum:5.82, pxAsOf:"30 Jun 2026",
  pxSrc:["stockanalysis — WRD","https://stockanalysis.com/stocks/wrd/"],
  oneLiner:"The world's first dual-listed robotaxi firm — robotaxi, robobus, robovan and robosweeper across four continents.",
  thesis:"WeRide is a broad L4 autonomous-driving operator (robotaxi through robosweeper) with international reach in the Middle East, Singapore and Europe, backed by Nissan and Bosch. Down sharply from its US IPO price, it is a high-beta bet on robotaxi commercialisation and the Chinese-AV-in-Hong-Kong theme.",
  business:"WeRide develops L4 autonomous-driving technology deployed across robotaxis, robobuses, robovans and robosweepers, operating and piloting in China, Abu Dhabi, Singapore and Europe.",
  financials:"FY2025 revenue ~US$684.6m (+89.6% YoY); net loss ~US$1.65bn, though heavily inflated by non-cash share-based / fair-value items (true operating loss far smaller).",
  founder:"Dr. Tony Han (韩旭)", founderBg:"Founder & CEO; former Baidu chief scientist for autonomous driving. Took a three-year lock-up at the HK IPO.",
  peers:["Pony.ai","Waymo","Momenta","Aurora Innovation"],
  risks:["Large headline losses; long road to profitability","Regulatory dependence across many jurisdictions","Robotaxi unit economics unproven at scale"],
  catalysts:["Middle East / Europe fleet expansion","Driverless permit milestones","Revenue mix shift to paid rides"],
  sources:[
    ["WeRide IR — first robotaxi firm dual-listed","https://ir.weride.ai/news-releases/news-release-details/weride-lists-hong-kong-stock-exchange-becoming-worlds-first"],
    ["stockanalysis — WRD","https://stockanalysis.com/stocks/wrd/"]
  ]
},
{
  id:"ponyai", co:"Pony.ai", cn:"小马智行", ticker:"PONY / 2026.HK",
  exchange:"Nasdaq + HKEX", mkt:"CN", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Nasdaq Nov 2024 · HK Nov 2025", listDate:"2024-11-27",
  deal:"HK leg ~US$830m", mcap:"n/d (verify live)", mcapAsOf:"",
  ipoPx:"US$13.00", ipoNum:13.00, curPx:"n/d", curNum:null, pxAsOf:"",
  oneLiner:"Toyota-backed robotaxi and robotruck operator running paid fleets across China's tier-1 cities.",
  thesis:"Pony.ai is one of China's two leading robotaxi operators (with WeRide), running paid fleets in Beijing, Shanghai, Guangzhou and Shenzhen plus Middle East expansion, with Toyota as a strategic investor. Its 2025 HK dual-listing was billed as the year's largest AD-sector IPO — a core public-market vehicle for the robotaxi thesis.",
  business:"Founded 2016, Pony.ai operates L4 robotaxi and autonomous-trucking businesses, with paid robotaxi services in China's largest cities and international expansion underway.",
  financials:"Robotaxi revenue surged ~800% YoY in Q1 2025; Q2 2025 revenue ~US$35.4m. Full-year 2025 figures not cleanly disclosed; the company remains loss-making.",
  founder:"James Peng (彭军) & Lou Tiancheng (楼天城)", founderBg:"CEO James Peng and CTO Lou Tiancheng are both ex-Baidu autonomous-driving engineers.",
  peers:["WeRide","Waymo","Aurora Innovation","Momenta"],
  risks:["Thin disclosed revenue vs valuation","Regulatory pace of driverless permits","Capital intensity of fleet scaling"],
  catalysts:["Fleet expansion & fare revenue","Robotruck commercialisation","International (Middle East) launches"],
  sources:[
    ["Pony.ai IR — HK IPO launch","https://ir.pony.ai/news-releases/news-release-details/pony-ai-inc-launches-hong-kong-initial-public-offering"],
    ["PitchBook — Pony.ai seeks US$862m in HK listing","https://pitchbook.com/news/articles/chinas-pony-ai-seeks-862m-in-hong-kong-listing"]
  ]
},
{
  id:"momenta", co:"Momenta", cn:"魔门塔", ticker:"06880.HK",
  exchange:"HKEX", mkt:"CN", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Listed 8 Jul 2026", listDate:"2026-07-08",
  deal:"~US$751m", mcap:"~HK$70bn (US$9bn)", mcapAsOf:"8 Jul 2026",
  ipoPx:"HK$295.60", ipoNum:295.60, curPx:"~HK$305", curNum:305.00, pxAsOf:"8 Jul 2026 debut",
  pxSrc:["CNBC — Momenta rises in HK debut","https://www.cnbc.com/2026/07/08/chinese-autonomous-driving-firm-momenta-rises-3percent-in-hong-kong-debut-.html"],
  oneLiner:"A fresh-off-the-tape 'physical AI' AD-software play — US$751m HK IPO, ~44x oversubscribed, debuted 8 Jul 2026.",
  thesis:"Momenta just listed in Hong Kong (8 Jul 2026) after pivoting from a long-rumoured US IPO, raising US$751m at a ~US$9bn valuation with a blue-chip cornerstone book (GIC, Fidelity, BlackRock, Mercedes-Benz, BYD). It sells assisted/autonomous-driving software to OEMs on a high-margin licensing model and frames itself as a broader 'physical AI' company — the most topical Chinese AD listing of the moment.",
  business:"Founded 2016, Momenta supplies data-driven assisted and autonomous-driving software to automakers via a 'one flywheel, two-legged' approach, with licensing as the key growth engine. Strategic backers include Mercedes, Toyota, GM and Bosch.",
  financials:"FY2025 revenue RMB 2.41bn (~US$354m), up sharply YoY on licensing, with reportedly high (~71%) gross margins on licensing; still pre-profit. IPO was ~44x oversubscribed.",
  founder:"Cao Xudong (曹旭东)", founderBg:"Founder & CEO; former SenseTime R&D executive.",
  peers:["Horizon Robotics","WeRide","Pony.ai","Applied Intuition"],
  risks:["Newly listed — limited trading history","OEM licensing concentration","Path from licensing to L4 monetisation unproven"],
  catalysts:["First post-IPO earnings","New OEM licensing deals","'Physical AI' expansion beyond driving"],
  sources:[
    ["CNBC — Momenta rises in HK debut","https://www.cnbc.com/2026/07/08/chinese-autonomous-driving-firm-momenta-rises-3percent-in-hong-kong-debut-.html"],
    ["CnEVPost — Momenta HK IPO seeking US$750m","https://cnevpost.com/2026/06/29/momenta-hk-ipo-seeking-750-million/"]
  ]
},
{
  id:"dobot", co:"Dobot (Yuejiang)", cn:"越疆科技", ticker:"2432.HK",
  exchange:"HKEX", mkt:"CN", sub:"industrial",
  status:"listed", statusTxt:"Listed", listing:"Listed 23 Dec 2024", listDate:"2024-12-23",
  deal:"~US$87.6m", mcap:"~HK$12.1bn (US$1.55bn)", mcapAsOf:"10 Jul 2026",
  ipoPx:"HK$18.80", ipoNum:18.80, curPx:"HK$26.80", curNum:26.80, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — 2432.HK","https://stockanalysis.com/quote/hkg/2432/"],
  oneLiner:"HKEX's 'first cobot stock' — collaborative arms across 80+ countries, now chasing humanoids.",
  thesis:"Dobot is the first listed collaborative-robot (cobot) pure-play on HKEX, selling lightweight industrial and education arms across 80+ countries and now pushing into humanoid/embodied AI. Trading above IPO but well off its 52-week high, it is a cobot-market-share play with humanoid optionality.",
  business:"Founded 2015 in Shenzhen, Dobot designs collaborative and lightweight industrial robot arms plus education and consumer robotics, expanding into humanoid and embodied-AI systems.",
  financials:"TTM revenue ~HK$548m (+31.7% YoY); unprofitable (EPS ≈ −0.22). Shares are down from a 52-week high of HK$64.50.",
  founder:"Liu Peichao (刘培超)", founderBg:"Founder; started Dobot in 2015.",
  peers:["Estun Automation","Standard Bots","UBTech Robotics"],
  risks:["Loss-making despite revenue growth","Cobot pricing competition","Humanoid ambitions early and unproven"],
  catalysts:["Cobot volume gains overseas","Humanoid product entry","Return to profitability"],
  sources:[
    ["EyeShenzhen — Dobot IPO","http://www.eyeshenzhen.com/content/2024-12/25/content_31408751.htm"],
    ["stockanalysis — 2432.HK","https://stockanalysis.com/quote/hkg/2432/"]
  ]
},
{
  id:"geekplus", co:"Geek+ (Geekplus)", cn:"极智嘉", ticker:"2590.HK",
  exchange:"HKEX", mkt:"CN", sub:"warehouse",
  status:"listed", statusTxt:"Listed", listing:"Listed 9 Jul 2025", listDate:"2025-07-09",
  deal:"~US$347m", mcap:"~HK$23.9bn (US$3.05bn)", mcapAsOf:"Jul 2026",
  ipoPx:"HK$16.80", ipoNum:16.80, curPx:"HK$17.45", curNum:17.45, pxAsOf:"Jul 2026",
  pxSrc:["stockanalysis — 2590.HK","https://stockanalysis.com/quote/hkg/2590/"],
  oneLiner:"The world's largest warehouse-AMR vendor and first publicly traded AMR pure-play — turned profitable in H1 2025.",
  thesis:"Geek+ is the global leader in warehouse autonomous mobile robots (goods-to-person picking and sorting) and the first publicly traded AMR company, listing in the largest robotics IPO on HKEX. It reached profitability in H1 2025 — a rare fundamental inflection in a historically cash-burning category, with heavy overseas revenue exposure.",
  business:"Founded 2015, Geek+ supplies warehouse AMR systems (goods-to-person picking, sorting, fulfilment) and is the largest AMR vendor by revenue worldwide.",
  financials:"TTM revenue ~RMB 3.53bn (+31.6%); historically loss-making (2023 net loss ~RMB 476m) but H1 2025 turned to profit; TTM net income barely positive (~RMB 28m).",
  founder:"Zheng Yong (郑勇)", founderBg:"Founder; started Geek+ in 2015.",
  peers:["Hai Robotics","Symbotic","Dexterity"],
  risks:["Thin profitability; execution must hold","Customer concentration in logistics/e-commerce","FX and overseas-market exposure"],
  catalysts:["Sustained profitability","Overseas fulfilment wins","New AMR product lines"],
  sources:[
    ["PR Newswire — Geekplus lists on HKEX","https://www.prnewswire.com/news-releases/geekplus-lists-on-hkex-main-board-pioneering-the-global-smart-logistics-transformation-with-robotics-302500963.html"],
    ["stockanalysis — 2590.HK","https://stockanalysis.com/quote/hkg/2590/"]
  ]
},
{
  id:"hairobotics", co:"Hai Robotics", cn:"海柔创新", ticker:"HKEX (filed)",
  exchange:"HKEX", mkt:"CN", sub:"warehouse",
  status:"filed", statusTxt:"Filed", listing:"2026 (expected)", listDate:"2026-06-01",
  deal:"n/d", mcap:"n/d (private)", mcapAsOf:"",
  oneLiner:"The world's largest maker of case-handling warehouse robots (ACR), filed for a Hong Kong IPO.",
  thesis:"Hai Robotics pioneered the autonomous case-handling robot (ACR) category and holds >30% global share by revenue and shipments, filing for a HK IPO in February 2026. It is the next major warehouse-robotics listing after Geek+, with strong top-line growth but continued losses.",
  business:"Founded 2016, Hai Robotics makes case-handling robots and ASRS that boost storage density across apparel, e-commerce, F&B, pharma and electronics.",
  financials:"9M 2025 revenue RMB 1.26bn (+36% YoY); net loss RMB 589m (loss margin narrowed ~40% YoY); liabilities ~RMB 3.88bn.",
  founder:"Chen Yuqi (陈宇奇)", founderBg:"Founder; electronic-engineering graduate (HK PolyU). Started Hai Robotics in 2016.",
  peers:["Geek+","Symbotic","Dexterity"],
  risks:["Still loss-making with sizeable liabilities","Warehouse-automation capex cyclicality","Pricing pressure vs Geek+ and others"],
  catalysts:["HK listing hearing / pricing","Overseas ACR deployments","Loss narrowing toward breakeven"],
  sources:[
    ["Sahm Capital — Hai Robotics files for HK IPO","https://www.sahmcapital.com/news/content/hai-robotics-files-for-hong-kong-ipo-key-insights-2026-02-23"],
    ["HKEXnews — Hai Robotics prospectus","https://www1.hkexnews.hk/app/sehk/2026/108202/documents/sehk26021300474.pdf"]
  ]
},
{
  id:"estun", co:"Estun Automation", cn:"埃斯顿自动化", ticker:"002747.SZ / HK H-share",
  exchange:"Shenzhen + HKEX", mkt:"CN", sub:"industrial",
  status:"listed", statusTxt:"Listed", listing:"HK H-share 9 Mar 2026", listDate:"2026-03-09",
  deal:"HK leg at HK$15.36", mcap:"~CNY 39bn (US$5.4bn)", mcapAsOf:"10 Jul 2026",
  oneLiner:"China's #1 domestic industrial-robot maker, freshly HK dual-listed and pushing into humanoids.",
  thesis:"Estun is the largest domestic industrial-robot brand in China plus a motion-control components maker, and it added a Hong Kong H-share line in March 2026. A 2025 return to profit and its humanoid push (via Estun Codroid) drove the A-shares up ~89% YTD 2026 — a scaled automation incumbent with an embodied-AI call option, albeit on a very rich multiple.",
  business:"Founded 1993 in Nanjing, Estun makes industrial robots and systems plus servo drives and motion controllers, and is expanding into humanoids through Estun Codroid.",
  financials:"FY2025 industrial robots/systems ~CNY 4.0bn (+31.9%); components CNY 888.5m (−9.0%); total ~CNY 4.86bn. Returned to profit in 2025; operating cash flow swung to +CNY 505m. A-share P/E ~296.",
  founder:"Wu Bo (吴波)", founderBg:"Founder; established Estun in 1993.",
  peers:["Dobot","Standard Bots","UBTech Robotics"],
  risks:["Very high valuation multiple (P/E ~296)","Components segment declining","Humanoid overpayment risk on acquisitions"],
  catalysts:["Estun Codroid humanoid progress","Industrial-robot share gains","Margin recovery"],
  sources:[
    ["Sahm Capital — Estun 2025 annual","https://www.sahmcapital.com/news/content/estun-automation-publishes-2025-annual-report-2026-04-24"],
    ["stockanalysis — 002747.SZ","https://stockanalysis.com/quote/she/002747/market-cap/"]
  ]
},
{
  id:"pudu", co:"Pudu Robotics", cn:"普渡科技", ticker:"HK / mainland (planned)",
  exchange:"HKEX (leaning)", mkt:"CN", sub:"service",
  status:"reported", statusTxt:"Preparing IPO", listing:"2026–27 (targeted)", listDate:"2026-12-15",
  deal:"n/d (raised ~US$150m Apr 2026)", mcap:">US$1.5bn", mcapAsOf:"Apr 2026",
  oneLiner:"Global leader in commercial service robots — 120,000+ units shipped across 80+ countries — prepping an IPO.",
  thesis:"Pudu is a global front-runner in commercial service and delivery robots (restaurants, cleaning, industrial delivery) with 120,000+ units shipped, and its founder has confirmed HK IPO preparations after a ~US$150m April 2026 round at >US$1.5bn. It is a scaled, internationally distributed service-robot listing candidate.",
  business:"Founded 2016 in Shenzhen, Pudu makes commercial service robots for dining, cleaning and industrial delivery plus a general embodied-AI line, shipping 120,000+ units across 80+ countries.",
  financials:"Revenue not disclosed. Last private round ~US$150m (April 2026) at >US$1.5bn valuation. Investors include Meituan, BAIC and Shenzhen Investment Holdings.",
  founder:"Zhang Tao ('Felix' Zhang, 张涛)", founderBg:"Founder; started Pudu in 2016.",
  peers:["Keenon Robotics","Serve Robotics","Richtech Robotics"],
  risks:["No disclosed financials ahead of listing","Service-robot margins and churn","Geopolitical exposure of overseas sales"],
  catalysts:["Formal HK filing","Embodied-AI product traction","International channel growth"],
  sources:[
    ["The Robot Report — Pudu raises ~US$150m","https://www.therobotreport.com/pudu-robotics-raises-nearly-150m-targets-industrial-applications/"],
    ["Nikkei — Pudu eyes Hong Kong listing","https://asia.nikkei.com/business/technology/pudu-robotics-eyes-hong-kong-listing-amid-geopolitical-risks"]
  ]
},
{
  id:"keenon", co:"Keenon Robotics", cn:"擎朗智能", ticker:"HKEX (reported)",
  exchange:"HKEX", mkt:"CN", sub:"service",
  status:"reported", statusTxt:"Rumored", listing:"Reported (unconfirmed)", listDate:"2027-03-01",
  deal:"n/d", mcap:"n/d (SoftBank-backed)", mcapAsOf:"",
  oneLiner:"SoftBank-backed hospitality-robot maker reportedly gearing up for a Hong Kong IPO.",
  thesis:"Keenon is one of the largest commercial service-robot makers (restaurant and hotel delivery), SoftBank Vision Fund-backed, and reported by the WSJ to be preparing a Hong Kong IPO — though no prospectus is confirmed. It is the least-verified name in the service-robot cohort and best treated as an early watch item.",
  business:"Founded 2010 in Shanghai, Keenon makes hospitality delivery and cleaning robots and is now showcasing humanoid service robots. It has a 15-year operating history.",
  financials:"Revenue not disclosed (private). SoftBank Vision Fund-backed.",
  founder:"Li Tong (李通)", founderBg:"Founder; started Keenon in 2010.",
  peers:["Pudu Robotics","Richtech Robotics","Bear Robotics"],
  risks:["Listing only WSJ-reported, no filing","No public financials","Service-robot competition and pricing"],
  catalysts:["Confirmed IPO filing","Humanoid service-robot launches","New hospitality contracts"],
  sources:[
    ["36Kr — Keenon profile","https://eu.36kr.com/en/p/3461564740752773"],
    ["CB Insights — Keenon Robotics","https://www.cbinsights.com/company/keenon-robotics"]
  ]
},
{
  id:"ecovacs", co:"Ecovacs Robotics", cn:"科沃斯", ticker:"603486.SS",
  exchange:"Shanghai", mkt:"CN", sub:"consumer",
  status:"listed", statusTxt:"Listed", listing:"Listed May 2018", listDate:"2018-05-28",
  deal:"n/d", mcap:"~CNY 28.6bn (US$3.9bn)", mcapAsOf:"26 Jun 2026",
  oneLiner:"A global robot-vacuum leader (Ecovacs + Tineco) and a rare profitable consumer-robotics name.",
  thesis:"Ecovacs is a leading global robot-vacuum brand with a solidly profitable model (net profit +118% in FY2025), representing the mature, cash-generative end of consumer robotics. It is a proxy for household-robotics adoption rather than a speculative embodied-AI bet.",
  business:"Founded 1998, Ecovacs makes robot vacuums and floor-cleaning robots (Ecovacs brand) plus smart home appliances via Tineco.",
  financials:"FY2025 revenue CNY 19.04bn (+15% YoY); net profit CNY 1.76bn (+118% YoY). Q1 2026 revenue CNY 4.9bn (+27%) but net profit CNY 400m (−14.7%).",
  founder:"Qian Dongqi (钱东奇)", founderBg:"Founder; established Ecovacs in 1998.",
  peers:["Roborock"],
  risks:["Consumer-demand cyclicality","Margin pressure from promotions","Intense vacuum-category competition"],
  catalysts:["New product cycles","Overseas share gains","Margin stabilisation"],
  sources:[
    ["stockanalysis — 603486.SS","https://stockanalysis.com/quote/sha/603486/market-cap/"]
  ]
},
{
  id:"roborock", co:"Roborock", cn:"石头科技", ticker:"688169.SS",
  exchange:"STAR — Shanghai", mkt:"CN", sub:"consumer",
  status:"listed", statusTxt:"Listed", listing:"Listed Feb 2020", listDate:"2020-02-21",
  deal:"n/d", mcap:"~CNY 27.2bn (US$3.7bn)", mcapAsOf:"4 Jun 2026",
  oneLiner:"Premium robot-vacuum maker gaining fast global share, incubated by Xiaomi.",
  thesis:"Roborock is a premium robot-vacuum brand taking rapid share in the US and Europe, with 56% revenue growth in FY2025 as it expands into washer-dryers and lawn robots. Margins dipped on self-subsidy but rebounded in Q1 2026 — a growth-plus-margin-recovery consumer-robotics story.",
  business:"Founded 2014 and Xiaomi-incubated, Roborock makes premium robot vacuums and cleaning appliances and is extending into washer-dryers and lawn robots.",
  financials:"FY2025 revenue CNY 18.7bn (+56.5% YoY); net profit CNY 1.36bn (−31% on promotions). Q1 2026 rebounded: revenue CNY 4.23bn (+23.3%), net profit CNY 323m (+20.8%).",
  founder:"Chang Jing (昌敬)", founderBg:"Founder; established Roborock in 2014 with Xiaomi backing.",
  peers:["Ecovacs"],
  risks:["Margin volatility from price competition","Reliance on overseas expansion","Category saturation risk"],
  catalysts:["US/Europe share gains","New product categories","Margin normalisation"],
  sources:[
    ["Roborock newsroom — FY2025 / Q1 2026","https://newsroom.roborock.com/gl/news/roborock-reports-56-51-revenue-growth-in-2025-q1-2026-revenue-up-23-31-"],
    ["stockanalysis — 688169.SS","https://stockanalysis.com/quote/sha/688169/"]
  ]
},
{
  id:"laifual", co:"Laifual Drive", cn:"来福谐波", ticker:"03952.HK",
  exchange:"HKEX", mkt:"CN", sub:"components",
  status:"listed", statusTxt:"Listed", listing:"Listed ~30 Jun 2026", listDate:"2026-06-30",
  deal:"~US$147m", mcap:"n/d", mcapAsOf:"",
  oneLiner:"A harmonic-reducer maker — the 'picks and shovels' of the humanoid boom — freshly HK-listed.",
  thesis:"Laifual is China's #2 harmonic-reducer supplier (~21% share), a critical precision component in robot and humanoid joints, and listed in Hong Kong around 30 June 2026 raising ~US$147m. It is a components / 'picks-and-shovels' way to play the humanoid build-out without single-robot risk.",
  business:"Laifual designs and manufactures harmonic reducers used in the joints of industrial robots, cobots and humanoids, ranking second in China's harmonic-reducer market.",
  financials:"IPO raised ~US$147m; detailed post-listing financials to be confirmed. Positioned on rising humanoid/robot component demand.",
  founder:"Laifual management team", founderBg:"Zhejiang-based precision-components team; specific founder detail in the prospectus.",
  peers:["Estun Automation","Unitree Robotics"],
  risks:["Component demand tied to robot volumes that are still ramping","Competition from Harmonic Drive (Japan) and Leaderdrive","Cyclical capex exposure"],
  catalysts:["Humanoid volume ramp lifting reducer demand","Capacity expansion","Design wins with humanoid OEMs"],
  sources:[
    ["Bamboo Works — Laifual seeks US$147m in HK IPO","https://thebambooworks.com/laifual-seeks-147-million-in-hong-kong-ipo/"],
    ["Gasgoo — Laifual to list 30 Jun 2026","https://autonews.gasgoo.com/articles/market-industry/laifual-drive-launches-ipo-plans-to-list-on-june-30-2069799357594185729"]
  ]
},

/* ==================== UNITED STATES ==================== */

{
  id:"figure", co:"Figure AI", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"humanoid",
  status:"private", statusTxt:"Private ($39bn)", listing:"No IPO filed", listDate:"2029-01-01",
  deal:">US$1bn Series C", mcap:"~US$39bn", mcapAsOf:"Series C (2025-26)",
  oneLiner:"The most richly valued humanoid startup in the world at ~US$39bn — the marquee US IPO-watch name.",
  thesis:"Figure is the highest-valued humanoid company globally after a >US$1bn Series C at a US$39bn post-money mark, positioning it as the flagship US embodied-AI IPO candidate. It is a pure bet on general-purpose humanoids reaching commercial scale in manufacturing and, eventually, the home — at a valuation that prices in enormous future success.",
  business:"Figure develops general-purpose humanoid robots (Figure 02/03) with an in-house AI stack (Helix), targeting factory and logistics work first. It has run pilots with automotive and logistics customers and is building its own AI + manufacturing capability.",
  financials:"Revenue de minimis / undisclosed. Raised >US$1bn in Series C at ~US$39bn post-money — one of the largest private valuations in robotics.",
  founder:"Brett Adcock", founderBg:"Founder & CEO; previously founded Archer Aviation and Vettery.",
  peers:["Apptronik","1X Technologies","Agility Robotics","Unitree Robotics"],
  risks:["Valuation vastly exceeds current revenue","General-purpose humanoid capability still maturing","Enormous capital needs to reach scale"],
  catalysts:["Commercial factory contracts","Next-gen Figure hardware","Any move toward an IPO filing"],
  sources:[
    ["Figure — Series C at US$39bn","https://www.figure.ai/news/series-c"],
    ["The Robot Report — Figure raises US$1bn Series C","https://www.therobotreport.com/figure-ai-raises-1b-in-series-c-funding-toward-humanoid-robot-development/"],
    ["Wikipedia — Figure AI","https://en.wikipedia.org/wiki/Figure_AI"]
  ]
},
{
  id:"apptronik", co:"Apptronik", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"humanoid",
  status:"private", statusTxt:"Private ($5.5bn)", listing:"No IPO filed", listDate:"2029-06-01",
  deal:"US$520m (Series A ext.)", mcap:"~US$5.5bn", mcapAsOf:"Feb 2026",
  oneLiner:"Maker of the Apollo humanoid, deploying at Mercedes-Benz, near US$1bn raised.",
  thesis:"Apptronik is a leading US humanoid company whose Apollo robot is in commercial-deployment pilots (notably with Mercedes-Benz), having raised US$520m in Feb 2026 at a ~US$5.5bn valuation and nearing US$1bn total funding. It is a more industrially-grounded humanoid bet than the highest-flying valuations.",
  business:"Spun out of the University of Texas Human Centered Robotics Lab, Apptronik builds the Apollo general-purpose humanoid for manufacturing and logistics, with deployments and partnerships including Mercedes-Benz and Google DeepMind collaboration on AI.",
  financials:"Revenue undisclosed. US$520m Series A extension (Feb 2026) at ~US$5.5bn valuation; ~US$935m+ raised in total.",
  founder:"Jeff Cardenas", founderBg:"Co-founder & CEO, alongside CTO Nick Paine; company grew out of UT Austin robotics research.",
  peers:["Figure AI","1X Technologies","Agility Robotics","UBTech Robotics"],
  risks:["Pre-scale revenue vs multibillion valuation","Humanoid reliability in real production lines","Capital-intensive scale-up"],
  catalysts:["Apollo production deployments","New OEM/logistics customers","Further financing or IPO signal"],
  sources:[
    ["CNBC — Apptronik raises US$520m at US$5bn valuation","https://www.cnbc.com/2026/02/11/apptronik-raises-520-million-at-5-billion-valuation-for-apollo-robot.html"],
    ["Apptronik — Series A close","https://apptronik.com/news-collection/apptronik-closes-over-935-million-series-a"]
  ]
},
{
  id:"onex", co:"1X Technologies", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"humanoid",
  status:"private", statusTxt:"Private (~$10bn)", listing:"No IPO filed", listDate:"2029-03-01",
  deal:"~US$1bn (raising)", mcap:"~US$10bn (targeted)", mcapAsOf:"2025-26",
  oneLiner:"OpenAI-backed maker of the NEO home humanoid, reportedly raising ~US$1bn at a ~US$10bn valuation.",
  thesis:"1X (Norway/US) is one of the most watched consumer-humanoid bets, backed by OpenAI and pushing its NEO robot into real homes while also striking deals to send humanoids into factories and warehouses. A reported ~US$1bn raise at ~US$10bn makes it a top-tier US-linked IPO-watch name — a bet on the home as the humanoid's killer market.",
  business:"1X develops the NEO home humanoid (soft, safe, tendon-driven design) and is testing household deployments while expanding into industrial use. Backed by OpenAI and EQT Ventures.",
  financials:"Revenue undisclosed. Reported to be raising ~US$1bn at a ~US$10bn valuation to bring NEO into homes.",
  founder:"Bernt Børnich", founderBg:"Founder & CEO; Norwegian roboticist. Company (formerly Halodi Robotics) is OpenAI-backed.",
  peers:["Figure AI","Apptronik","Agility Robotics"],
  risks:["Home humanoid is the hardest, least-proven market","Safety and reliability in unstructured homes","Valuation ahead of commercialisation"],
  catalysts:["NEO home launch / deliveries","Factory & warehouse deployments","US$1bn round close"],
  sources:[
    ["TechCrunch — 1X home humanoids to factories","https://techcrunch.com/2025/12/11/1x-struck-a-deal-to-send-its-home-humanoids-to-factories-and-warehouses/"],
    ["Dealroom — 1X targets US$10bn valuation","https://app.dealroom.co/news/note/1x-technologies-targets-10b-valuation-as-it-tests-household-robots-in-real-homes"]
  ]
},
{
  id:"agility", co:"Agility Robotics", ticker:"CCXI (SPAC, pending)",
  exchange:"Nasdaq (via SPAC)", mkt:"US", sub:"humanoid",
  status:"reported", statusTxt:"SPAC merger", listing:"2026 (Churchill XI SPAC)", listDate:"2026-09-30",
  deal:"~US$2.5bn deal value", mcap:"~US$2.5bn", mcapAsOf:"Jun 2026 announcement",
  oneLiner:"Maker of the Digit warehouse humanoid — going public via a ~US$2.5bn SPAC merger with Churchill Capital XI.",
  thesis:"Agility is set to become one of the first pure-play humanoid companies to trade publicly in the US, via a ~US$2.5bn SPAC merger with Churchill Capital Corp XI announced mid-2026. Its Digit robot is among the most deployment-ready warehouse humanoids (GXO and others), making this the most concrete near-term US humanoid listing — though via a SPAC, with the attendant execution risk.",
  business:"Agility Robotics makes Digit, a bipedal warehouse humanoid designed to move totes and handle logistics tasks, with commercial pilots and deployments at logistics operators including GXO.",
  financials:"Revenue early / undisclosed at scale. Going public through a merger with Churchill Capital Corp XI at up to a ~US$2.5bn valuation.",
  founder:"Damion Shelton & Jonathan Hurst", founderBg:"Co-founded out of Oregon State University robotics research; Hurst is CTO. Peggy Johnson (ex-Magic Leap, Microsoft) is CEO.",
  peers:["Figure AI","Apptronik","1X Technologies","UBTech Robotics"],
  risks:["SPAC route carries redemption / dilution risk","Humanoid unit economics unproven","CEO tempering near-term home-robot expectations"],
  catalysts:["SPAC vote & listing completion","Digit deployment expansion","New logistics customers"],
  sources:[
    ["TechCrunch — Agility to go public via SPAC in US$2.5bn deal","https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/"],
    ["Agility Robotics — merger with Churchill Capital Corp XI","https://www.agilityrobotics.com/content/agility-robotics-to-go-public-through-merger-with-churchill-capital-corp-xi"]
  ]
},
{
  id:"physical-intelligence", co:"Physical Intelligence", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"embodied",
  status:"private", statusTxt:"Private (~$11bn)", listing:"No IPO filed", listDate:"2029-06-01",
  deal:"US$600m (+ raising more)", mcap:"~US$11bn", mcapAsOf:"2026",
  oneLiner:"Building the 'foundation model' brain that any robot can run — a US$11bn embodied-AI bet.",
  thesis:"Physical Intelligence is the leading pure-play robot-foundation-model company, aiming to be the software layer that generalises across robot bodies rather than building hardware. Valued ~US$11bn after a US$600m raise and reportedly seeking another ~US$1bn, it is a high-conviction bet on a horizontal 'robot brain' — analogous to an OpenAI for physical machines.",
  business:"Physical Intelligence (π) develops general-purpose AI models (e.g., π0) that control robots to perform physical tasks, licensing/partnering rather than selling robots. Founded by leading robot-learning researchers.",
  financials:"Revenue undisclosed / pre-commercial. Raised US$600m at ~US$11bn; reported talks to raise ~US$1bn more.",
  founder:"Karol Hausman & Sergey Levine", founderBg:"Co-founded by prominent robot-learning researchers (incl. UC Berkeley's Sergey Levine) with backing from Thrive, Lux, OpenAI's Sam Altman and Jeff Bezos.",
  peers:["Skild AI","Figure AI","Galbot","Zhipu AI"],
  risks:["Pre-revenue at an US$11bn mark","Generalist robot models remain a research frontier","Hardware partners needed to monetise"],
  catalysts:["New foundation-model releases","OEM/robot-maker partnerships","Next mega-round"],
  sources:[
    ["The Robot Report — Physical Intelligence raises US$600m","https://www.therobotreport.com/physical-intelligence-raises-600m-advance-robot-foundation-models/"],
    ["TechCrunch — Physical Intelligence in talks to raise US$1bn","https://techcrunch.com/2026/03/27/physical-intelligence-is-reportedly-in-talks-to-raise-1-billion-again/"]
  ]
},
{
  id:"symbotic", co:"Symbotic", ticker:"SYM",
  exchange:"Nasdaq", mkt:"US", sub:"warehouse",
  status:"listed", statusTxt:"Listed", listing:"Listed Jun 2022 (SPAC)", listDate:"2022-06-07",
  deal:"~US$5.5bn deal value", mcap:"~US$26.3bn", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$43.64", curNum:43.64, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — SYM","https://stockanalysis.com/stocks/sym/"],
  oneLiner:"The scaled winner of warehouse automation — US$2.25bn revenue, Walmart anchor, back to quarterly profit.",
  thesis:"Symbotic is the largest listed robotics-automation company by revenue, running AI-driven robotic warehouse systems with Walmart as anchor customer and a SoftBank GreenBox JV. Up over 4x from its SPAC reference, with US$2.25bn revenue and a return to quarterly profitability, it is the blue-chip of the group — the proof that warehouse robotics can be a real, scaled business.",
  business:"Symbotic builds AI-driven robotic systems that automate warehouses and distribution centres, deployed heavily across Walmart, with a SoftBank GreenBox joint venture extending the model to warehouse-as-a-service.",
  financials:"FY2025 revenue US$2.25bn (+25.6%). Q2 FY2026 (ended Mar 2026) revenue US$676m (+23%) with net income US$9m — a return to quarterly profit. TTM ~US$2.52bn.",
  founder:"Rick Cohen", founderBg:"Founder, chairman & CEO; also owner of C&S Wholesale Grocers, which seeded the technology.",
  peers:["Geek+","Hai Robotics","Dexterity"],
  risks:["Heavy revenue concentration in Walmart","Complex percentage-of-completion accounting","Deployment timing lumpiness"],
  catalysts:["GreenBox third-party wins","Customer diversification beyond Walmart","Sustained profitability"],
  sources:[
    ["stockanalysis — SYM","https://stockanalysis.com/stocks/sym/"],
    ["StockTitan — Symbotic Q2 FY2026","https://www.stocktitan.net/news/SYM/"]
  ]
},
{
  id:"serve", co:"Serve Robotics", ticker:"SERV",
  exchange:"Nasdaq", mkt:"US", sub:"service",
  status:"listed", statusTxt:"Listed", listing:"Listed Apr 2024", listDate:"2024-04-18",
  deal:"~US$40m", mcap:"~US$458m", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$4.00", ipoNum:4.00, curPx:"US$5.92", curNum:5.92, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — SERV","https://stockanalysis.com/stocks/serv/"],
  oneLiner:"Uber Eats' sidewalk delivery-robot spinout, Nvidia-backed, scaling toward 2,000 robots.",
  thesis:"Serve is the listed pure-play on autonomous sidewalk delivery, spun out of Uber's Postmates and backed by Nvidia and Uber, with a deal to field up to 2,000 robots on Uber Eats. Revenue is tiny and losses large, so it trades as a high-beta option on last-mile delivery-robot economics.",
  business:"Serve operates AI-powered sidewalk delivery robots commercially on Uber Eats (Los Angeles and expanding), having spun out of Uber's Postmates in 2021.",
  financials:"FY2025 revenue US$2.7m; net loss ~US$101.4m. Q1 2026 revenue ~US$3m (+578% YoY); TTM ~US$5.2m. Heavy cash burn to scale the fleet.",
  founder:"Dr. Ali Kashani", founderBg:"Co-founder & CEO; former head of Postmates' X robotics division.",
  peers:["Richtech Robotics","Pudu Robotics","Cartken"],
  risks:["Minuscule revenue vs market cap","Large ongoing losses / dilution risk","Dependence on Uber Eats relationship"],
  catalysts:["Fleet scale-up to 2,000 robots","New-market launches","Revenue-per-robot improvement"],
  sources:[
    ["stockanalysis — SERV","https://stockanalysis.com/stocks/serv/"],
    ["The Robot Report — Serve US$40m IPO","https://www.therobotreport.com/"]
  ]
},
{
  id:"richtech", co:"Richtech Robotics", ticker:"RR",
  exchange:"Nasdaq", mkt:"US", sub:"service",
  status:"listed", statusTxt:"Listed", listing:"Listed Nov 2023", listDate:"2023-11-17",
  deal:"~US$10.5m", mcap:"~US$395m", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$5.00", ipoNum:5.00, curPx:"US$1.77", curNum:1.77, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — RR","https://stockanalysis.com/stocks/rr/"],
  oneLiner:"Hospitality service robots (including the ADAM robotic barista) sold via a robots-as-a-service model.",
  thesis:"Richtech sells and leases AI service robots into hospitality, restaurants and healthcare, including its ADAM bartender/barista, via a RaaS model. With only ~US$5m revenue against a retail-driven market cap and shares down ~65% from IPO, it is a speculative small-cap service-robot name.",
  business:"Richtech makes AI service robots (delivery bots, the ADAM robotic bartender/barista) for hospitality and healthcare, monetised through sales and robots-as-a-service leasing.",
  financials:"FY2025 revenue US$5.05m (+19%); net loss ~US$20.6m. Consensus 'Hold' with a ~US$4.00 target.",
  founder:"Wayne Huang", founderBg:"Co-founder & CEO with 20+ years in computer vision; Matthew Casella is President.",
  peers:["Serve Robotics","Pudu Robotics","Bear Robotics"],
  risks:["Tiny revenue vs valuation","Persistent losses","Retail-sentiment-driven volatility"],
  catalysts:["ADAM deployment growth","RaaS recurring revenue","New hospitality contracts"],
  sources:[
    ["stockanalysis — RR","https://stockanalysis.com/stocks/rr/"],
    ["Richtech IR — IPO pricing","https://ir.richtechrobotics.com/"]
  ]
},
{
  id:"intuitive", co:"Intuitive Surgical", ticker:"ISRG",
  exchange:"Nasdaq", mkt:"US", sub:"surgical",
  status:"listed", statusTxt:"Listed", listing:"Listed Jun 2000", listDate:"2000-06-13",
  deal:"~US$46m at IPO", mcap:"~US$144bn", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$9.00 (pre-split)", ipoNum:9.00, curPx:"US$406.78", curNum:406.78, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — ISRG","https://stockanalysis.com/stocks/isrg/"],
  oneLiner:"The surgical-robotics incumbent — da Vinci and Ion — and the sector's ~US$144bn profit engine.",
  thesis:"Intuitive Surgical is the dominant surgical-robotics franchise, with a razor-and-blades model (da Vinci systems plus recurring instruments and service) that generates ~US$10bn revenue and ~US$2.9bn net income. It is the benchmark of what a mature, profitable medical-robotics business looks like — the counterpoint to the sector's cash-burning entrants.",
  business:"Intuitive makes the da Vinci robotic surgical systems (now da Vinci 5) and the Ion lung-biopsy platform, with the majority of revenue recurring from instruments, accessories and service.",
  financials:"FY2025 revenue US$10.06bn (+20.5%); net income US$2.86bn (+23%).",
  founder:"Founded 1995; CEO Dave Rosa", founderBg:"Founded by Fred Moll, Rob Younge and John Freund. Dave Rosa became CEO on 1 Jul 2025; Gary Guthart is Executive Chair.",
  peers:["PROCEPT BioRobotics","Distalmotion","CMR Surgical"],
  risks:["Law of large numbers on growth","Competitive entry (Medtronic, J&J, CMR)","Elevated valuation multiple"],
  catalysts:["da Vinci 5 upgrade cycle","Ion / lung-biopsy expansion","Procedure-volume growth"],
  sources:[
    ["stockanalysis — ISRG","https://stockanalysis.com/stocks/isrg/"],
    ["Intuitive IR — CEO transition","https://investor.intuitivesurgical.com/"]
  ]
},
{
  id:"procept", co:"PROCEPT BioRobotics", ticker:"PRCT",
  exchange:"Nasdaq", mkt:"US", sub:"surgical",
  status:"listed", statusTxt:"Listed", listing:"Listed Sep 2021", listDate:"2021-09-15",
  deal:"~US$165m", mcap:"~US$1.12bn", mcapAsOf:"9 Jul 2026",
  ipoPx:"US$25.00", ipoNum:25.00, curPx:"US$19.75", curNum:19.75, pxAsOf:"9 Jul 2026",
  pxSrc:["stockanalysis — PRCT","https://stockanalysis.com/stocks/prct/"],
  oneLiner:"Aquablation robotic surgery for enlarged prostate — a fast-growing urology-robotics pure-play.",
  thesis:"PROCEPT is a focused surgical-robotics growth name whose AquaBeam system delivers heat-free Aquablation therapy for BPH, growing revenue ~40%+ with a razor/blade single-use handpiece model. Still loss-making and below IPO price, it is a bet on Aquablation displacing conventional BPH procedures and expanding into prostate cancer.",
  business:"PROCEPT makes the AquaBeam Robotic System for waterjet ablation of the prostate (BPH), expanding toward prostate-cancer indications, monetised via systems plus single-use handpieces.",
  financials:"FY2025 revenue US$308.05m (~40–48% YoY quarterly growth); net loss −US$95.57m.",
  founder:"Founded 2007; CEO Larry Wood", founderBg:"Founded by Nikolai Aljuri. Larry L. Wood (ex-Edwards TAVR) became CEO in July 2025.",
  peers:["Intuitive Surgical","Distalmotion","CMR Surgical"],
  risks:["Still loss-making","Adoption competes with entrenched BPH treatments","Single-indication concentration (expanding)"],
  catalysts:["Prostate-cancer indication expansion","Installed-base and handpiece growth","Path to profitability"],
  sources:[
    ["stockanalysis — PRCT","https://stockanalysis.com/stocks/prct/"]
  ]
},
{
  id:"aurora", co:"Aurora Innovation", ticker:"AUR",
  exchange:"Nasdaq", mkt:"US", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Listed Nov 2021 (SPAC)", listDate:"2021-11-04",
  deal:"~US$1.8bn (2021)", mcap:"~US$12.3bn", mcapAsOf:"8 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$6.25", curNum:6.25, pxAsOf:"8 Jul 2026",
  pxSrc:["stockanalysis — AUR","https://stockanalysis.com/stocks/aur/"],
  oneLiner:"The most valuable listed autonomous-trucking pure-play — driver-out freight live on Dallas–Houston.",
  thesis:"Aurora is the leading listed autonomous-trucking company, having launched driver-out commercial freight on the Dallas–Houston lane and now scaling across Texas. At ~US$12bn it is by far the most valuable pure-play listed AV name, but with only ~US$4m TTM revenue and large losses, it trades on the promise of driverless-freight economics rather than today's numbers.",
  business:"Aurora develops the 'Aurora Driver', an L4 autonomous system for Class 8 trucks, running driver-out freight on Texas lanes and expanding its network.",
  financials:"TTM revenue only ~US$4m (early commercial); net loss ~US$831m TTM (Jul 2026). Guided toward ~200 driverless trucks and an ~US$80m revenue run-rate target.",
  founder:"Chris Urmson", founderBg:"Co-founder & CEO; former head of Google's self-driving car project (now Waymo).",
  peers:["Kodiak AI","Waabi","Waymo","Pony.ai"],
  risks:["Minimal revenue vs US$12bn cap","Scaling driver-out safely and on schedule","Ongoing heavy cash needs"],
  catalysts:["Truck fleet scale-up","New lane launches","Revenue run-rate inflection"],
  sources:[
    ["stockanalysis — AUR","https://stockanalysis.com/stocks/aur/"],
    ["Investing.com — Aurora Q1 2026 slides","https://www.investing.com/news/company-news/aurora-q1-2026-slides-200-trucks-targeted-80m-revenue-runrate-93CH-4665999"]
  ]
},
{
  id:"kodiak", co:"Kodiak AI", ticker:"KDK",
  exchange:"Nasdaq", mkt:"US", sub:"auto",
  status:"listed", statusTxt:"Listed", listing:"Listed Sep 2025 (SPAC)", listDate:"2025-09-24",
  deal:"~US$212m net", mcap:"~US$934m", mcapAsOf:"8 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$5.08", curNum:5.08, pxAsOf:"8 Jul 2026",
  pxSrc:["stockanalysis — KDK","https://stockanalysis.com/stocks/kdk/"],
  oneLiner:"Autonomous-trucking upstart with a driverless Permian Basin niche — public via SPAC, trading below merger value.",
  thesis:"Kodiak (now Kodiak AI) went public via SPAC in September 2025 and differentiates with driverless off-road/Permian Basin operations for customer Atlas Energy, alongside highway freight. Trading at roughly half its merger value with revenue that fell as it shifted models, it is a smaller, higher-risk AV-trucking bet than Aurora.",
  business:"Kodiak develops the 'Kodiak Driver' autonomous system for both highway freight (Dallas–Houston) and driverless off-road oilfield operations, selling a driver-as-a-service / integration model.",
  financials:"2025 revenue US$3.80m (down ~75% from US$14.93m as it shifted toward commercial deployment); GAAP net loss ~US$585.5m (inflated by SPAC/stock-comp/warrant items).",
  founder:"Don Burnette", founderBg:"Co-founder & CEO; ex-Google self-driving and co-founder of Otto (acquired by Uber).",
  peers:["Aurora Innovation","Waabi","Bot Auto"],
  risks:["Revenue decline and large GAAP losses","Below merger valuation post-SPAC","Concentrated early customers"],
  catalysts:["Permian driverless scale-up","Highway lane expansion","New freight customers"],
  sources:[
    ["stockanalysis — KDK","https://stockanalysis.com/stocks/kdk/"],
    ["Kodiak IR — business combination completed","https://investors.kodiak.ai/news-releases/news-release-details/kodiak-completes-business-combination-ares-acquisition"]
  ]
},
{
  id:"waymo", co:"Waymo", ticker:"Private (Alphabet)",
  exchange:"Private", mkt:"US", sub:"auto",
  status:"private", statusTxt:"Private ($126bn)", listing:"No standalone IPO", listDate:"2030-01-01",
  deal:"US$16bn round (Feb 2026)", mcap:"~US$126bn", mcapAsOf:"Feb 2026",
  oneLiner:"The US robotaxi leader — 400k+ paid rides a week — valued at US$126bn but with no IPO signalled.",
  thesis:"Waymo is the runaway leader in US robotaxi, running fully driverless paid service across six metros at 400,000+ rides a week, and it raised a US$16bn round in Feb 2026 at a US$126bn valuation. Alphabet retains majority control and no IPO is signalled, so it is best treated as the benchmark private comparable that frames every listed robotaxi name.",
  business:"Waymo operates fully driverless robotaxi service in San Francisco, Phoenix, LA, Austin and Atlanta and beyond, building next-generation platforms and expanding to freeways and airports.",
  financials:"Not separately disclosed by Alphabet. ~15m rides in 2025 (3x YoY), 20m+ lifetime; 400,000+ paid rides/week. Not yet profitable per third-party estimates.",
  founder:"Tekedra Mawakana & Dmitri Dolgov", founderBg:"Co-CEOs Tekedra Mawakana and Dmitri Dolgov; originated as Google's self-driving project.",
  peers:["Pony.ai","WeRide","Zoox","Aurora Innovation"],
  risks:["No IPO path; access only via Alphabet","Robotaxi profitability still unproven","Regulatory expansion pace"],
  catalysts:["City and freeway expansion","Any future spin-out signal","Ride-volume scaling"],
  sources:[
    ["Waymo — US$16bn investment round","https://waymo.com/blog/2026/02/waymo-raises-usd16-billion-investment-round/"],
    ["Sacra — Waymo","https://sacra.com/c/waymo/"]
  ]
},
{
  id:"nuro", co:"Nuro", ticker:"Private",
  exchange:"Private", mkt:"US", sub:"auto",
  status:"private", statusTxt:"Private ($6bn)", listing:"No IPO filed", listDate:"2029-08-01",
  deal:"US$203m Series E", mcap:"~US$6bn", mcapAsOf:"Aug 2025",
  oneLiner:"Ex-Waymo founders pivoting from delivery pods to licensing the 'Nuro Driver' L4 stack, Nvidia-backed.",
  thesis:"Nuro has repositioned from operating small delivery pods to licensing its L4 autonomy stack to OEMs and mobility players, closing a US$203m Series E (Nvidia among backers) at ~US$6bn — down from its ~US$8.6bn 2021 peak. It is a bet on autonomy-as-a-supplier rather than fleet operation.",
  business:"Founded by ex-Waymo engineers, Nuro now licenses the 'Nuro Driver' L4 platform to automakers and commercial partners, after originally building autonomous delivery vehicles.",
  financials:"Revenue undisclosed (partnership/licensing, early stage). US$203m Series E (Aug 2025) at ~US$6bn post-money.",
  founder:"Jiajun Zhu & Dave Ferguson", founderBg:"Co-founders (CEO and President); both ex-Waymo/Google self-driving engineers.",
  peers:["Waymo","Applied Intuition","Aurora Innovation"],
  risks:["Down round vs 2021 peak","Licensing model must win OEM adoption","Pre-revenue transition"],
  catalysts:["OEM licensing deals","Robotaxi/commercial partnerships","New financing"],
  sources:[
    ["Nuro — US$203m Series E","https://www.nuro.ai/blog/nuro-closes-203-million-series-e-financing-to-advance-its-ai-first-self-driving-technology-and-commercial-partnerships"],
    ["Electrek — Nuro US$6bn valuation","https://electrek.co/2025/08/21/nuro-inc-snags-203m-funding-6-billion-valuation-nvidia/"]
  ]
},
{
  id:"applied-intuition", co:"Applied Intuition", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"auto",
  status:"private", statusTxt:"Private ($15bn)", listing:"IPO eyed (no filing)", listDate:"2028-06-01",
  deal:"US$600m Series F", mcap:"~US$15bn", mcapAsOf:"Jun 2025",
  oneLiner:"The AV-software 'picks and shovels' leader — simulation and tooling for autonomy and defense — eyeing an IPO.",
  thesis:"Applied Intuition sells the simulation, data and software tooling that automakers, trucking and defense use to build and validate autonomy — a horizontal, reportedly commercially-mature business valued at ~US$15bn. Management has signalled an eventual IPO (no filing yet), making it one of the more credible AV-adjacent listing candidates.",
  business:"Applied Intuition provides simulation, data and software tooling for developing and validating autonomous and ADAS systems, expanding into vehicle OS and defense autonomy.",
  financials:"Revenue not officially disclosed; reported among the more commercially mature AV-software firms. US$600m Series F (June 2025) at ~US$15bn, up from ~US$6bn in 2023.",
  founder:"Qasar Younis & Peter Ludwig", founderBg:"Co-founder & CEO Qasar Younis (ex-COO of Y Combinator); co-founder & CTO Peter Ludwig.",
  peers:["Nuro","Waymo","Anduril Industries","Momenta"],
  risks:["Financials undisclosed","Autonomy-software demand tied to AV cycle","Valuation stepped up quickly"],
  catalysts:["IPO filing / timing","Defense-autonomy expansion","New OEM contracts"],
  sources:[
    ["Applied Intuition — Series F","https://www.appliedintuition.com/press-releases/series-f"],
    ["Axios — Applied Intuition US$15bn","https://www.axios.com/2025/06/17/applied-intuition-self-driving-15-billion"]
  ]
},
{
  id:"waabi", co:"Waabi", ticker:"Private",
  exchange:"Private", mkt:"US", sub:"auto",
  status:"private", statusTxt:"Private ($3bn)", listing:"No IPO filed", listDate:"2029-01-01",
  deal:"~US$750m Series C", mcap:"~US$3bn", mcapAsOf:"Jan 2026",
  oneLiner:"Simulation-first autonomous trucking, now expanding into robotaxis with Uber.",
  thesis:"Waabi is an AI-first (simulation-led) autonomous-driving company that raised a ~US$750m Series C in Jan 2026 led by Uber, Khosla and G2, and is expanding from driverless trucks into robotaxis via an Uber partnership targeting up to 25,000 vehicles. It is a bet on a capital-efficient, simulation-heavy path to L4.",
  business:"Waabi develops autonomous-driving technology using its 'Waabi World' simulation, launching driverless trucks and expanding into robotaxis through an Uber partnership.",
  financials:"Revenue undisclosed / early. ~US$750m Series C (Jan 2026) at ~US$3bn.",
  founder:"Raquel Urtasun", founderBg:"Founder & CEO; former Chief Scientist at Uber ATG and University of Toronto professor.",
  peers:["Aurora Innovation","Kodiak AI","Waymo","Nuro"],
  risks:["Pre-commercial revenue","Simulation-first approach must prove out on-road","Crowded AV-trucking field"],
  catalysts:["Driverless truck launch","Uber robotaxi rollout","Commercial freight revenue"],
  sources:[
    ["TechCrunch — Waabi raises US$1bn, expands into robotaxis","https://techcrunch.com/2026/01/28/waabi-raises-1b-and-expands-into-robotaxis-with-uber/"]
  ]
},
{
  id:"anduril", co:"Anduril Industries", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"defense",
  status:"private", statusTxt:"Private ($61bn)", listing:"IPO rumored 2026–27", listDate:"2027-06-01",
  deal:"US$5bn Series H", mcap:"~US$61bn", mcapAsOf:"13 May 2026",
  oneLiner:"The defense-tech giant — autonomous drones, subs and the Lattice OS — and the most-watched IPO in the sector.",
  thesis:"Anduril is the defining defense-tech company, building AI-powered autonomous hardware unified by its Lattice command software, with revenue roughly doubling to ~US$2.2bn in 2025. After a US$5bn round at ~US$61bn, an IPO is widely expected in 2026–27 (no S-1 yet), gated on its Ohio 'Arsenal-1' factory ramp — the marquee defense-robotics listing to watch.",
  business:"Founded 2017, Anduril builds autonomous defense systems (Ghost/Altius drones, Roadrunner interceptor, Dive-LD subs, Sentry towers, counter-UAS, solid rocket motors) unified by the Lattice command-and-control OS.",
  financials:"Revenue ~US$2.2bn in 2025 (roughly doubled YoY). Profit/loss undisclosed. US$5bn Series H (May 2026) at ~US$61bn post-money.",
  founder:"Palmer Luckey", founderBg:"Co-founder & chairman (Oculus founder); CEO Brian Schimpf (ex-Palantir), with co-founders Trae Stephens, Matt Grimm and others.",
  peers:["Shield AI","Saronic Technologies","Skydio","AeroVironment"],
  risks:["No S-1 filed; IPO timing uncertain","Execution risk on Arsenal-1 factory ramp","Reliance on defense-budget cycles"],
  catalysts:["Arsenal-1 factory online","Major program awards","IPO filing"],
  sources:[
    ["TechCrunch — Anduril raises US$5bn, US$61bn valuation","https://techcrunch.com/2026/05/13/anduril-raises-5b-doubles-valuation-to-61b/"],
    ["Forge — Anduril IPO news","https://forgeglobal.com/insights/anduril-upcoming-ipo-news/"]
  ]
},
{
  id:"shield-ai", co:"Shield AI", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"defense",
  status:"private", statusTxt:"Private ($12.7bn)", listing:"No IPO filed", listDate:"2028-06-01",
  deal:"US$1.5bn Series G", mcap:"~US$12.7bn", mcapAsOf:"26 Mar 2026",
  oneLiner:"Defense-AI autonomy (Hivemind) and the V-BAT drone — valuation doubled to US$12.7bn.",
  thesis:"Shield AI builds AI autonomy for military aircraft and drones via its Hivemind 'AI pilot', with the V-BAT surveillance drone deployed in conflict zones and an X-BAT combat drone in development. Its valuation more than doubled to ~US$12.7bn in March 2026 on >80% projected revenue growth — a leading pure-play defense-autonomy IPO-watch name.",
  business:"Founded 2015, Shield AI develops Hivemind autonomy software for aircraft/drones and makes the V-BAT VTOL surveillance drone, with the X-BAT combat drone targeted to test-fly by end-2026.",
  financials:"Projecting >US$540m revenue in 2026 (>80% YoY growth; company projection). Profit/loss undisclosed. US$1.5bn Series G (Mar 2026) at ~US$12.7bn, plus ~US$500m non-dilutive from Blackstone.",
  founder:"Brandon & Ryan Tseng", founderBg:"Co-founded by brothers Brandon Tseng (President, ex-Navy SEAL) and Ryan Tseng; CEO Gary Steele (ex-Proofpoint CEO).",
  peers:["Anduril Industries","Saronic Technologies","Skydio","Palladyne AI"],
  risks:["Revenue figures are company projections","No IPO timeline announced","Program and geopolitical dependence"],
  catalysts:["X-BAT first flight","New defense contracts","IPO signal"],
  sources:[
    ["Fortune — Shield AI US$12.7bn valuation","https://fortune.com/2026/03/26/shield-ai-revenue-series-g-funding-12-billion-valuation/"],
    ["Sacra — Shield AI","https://sacra.com/c/shield-ai/"]
  ]
},
{
  id:"saronic", co:"Saronic Technologies", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"defense",
  status:"private", statusTxt:"Private ($9.25bn)", listing:"No IPO filed", listDate:"2028-06-01",
  deal:"US$1.75bn Series D", mcap:"~US$9.25bn", mcapAsOf:"31 Mar 2026",
  oneLiner:"Mass-producing autonomous naval vessels to counter China's fleet — valued at US$9.25bn.",
  thesis:"Saronic builds and mass-produces autonomous surface vessels for the US Navy and allies, a fast-rising answer to naval fleet gaps versus China, and raised US$1.75bn at ~US$9.25bn in March 2026 (led by Kleiner Perkins). With a ~US$392m Navy contract and new shipyards, it is a high-growth maritime-robotics IPO-watch name.",
  business:"Founded 2022 in Austin, Saronic designs and manufactures autonomous surface vessels (Spyglass, Cutlass, Corsair, and the 180-ft Marauder) for naval missions, with shipyards in Texas and Louisiana.",
  financials:"Revenue undisclosed; early-stage with heavy shipyard capex. US$1.75bn Series D (Mar 2026) at ~US$9.25bn post-money; won a ~US$392m Navy contract.",
  founder:"Dino Mavrookas", founderBg:"CEO; former Navy SEAL (DEVGRU), with co-founders Rob Lehman, Kyle Kixmiller and Vibhav Altekar.",
  peers:["Anduril Industries","Shield AI","Skydio"],
  risks:["Revenue undisclosed at a US$9.25bn mark","Shipbuilding capex intensity","Dependence on Navy procurement"],
  catalysts:["New Navy/allied contracts","Shipyard capacity ramp","IPO signal"],
  sources:[
    ["CNBC — Saronic raises US$1.75bn","https://www.cnbc.com/2026/03/31/autonomous-boat-startup-saronic-raises-1point75-billion.html"],
    ["PR Newswire — Saronic Series D at US$9.25bn","https://www.prnewswire.com/news-releases/saronic-closes-1-75b-series-d-at-9-25b-valuation"]
  ]
},
{
  id:"skydio", co:"Skydio", ticker:"Private — IPO watch",
  exchange:"Private", mkt:"US", sub:"defense",
  status:"private", statusTxt:"Private ($4.4bn)", listing:"No IPO filed", listDate:"2028-06-01",
  deal:"~US$110m Series F", mcap:"~US$4.4bn", mcapAsOf:"Apr 2026",
  oneLiner:"The largest US drone maker and leading domestic alternative to DJI — defense, public safety, enterprise.",
  thesis:"Skydio is the biggest US-based drone maker, selling AI-autonomous drones and docking systems to military, public-safety and enterprise customers, and positioned as the leading domestic alternative to China's DJI amid tightening restrictions. A ~US$4.4bn valuation and increasingly self-funding profile make it a credible drone-robotics IPO-watch name.",
  business:"Founded 2014, Skydio makes AI-autonomous X10/X2 drones plus the Dock docking system for US/allied military, public safety and enterprise inspection.",
  financials:"Revenue undisclosed ('hundreds of millions', hypergrowth, increasingly self-funding). ~US$110m Series F (~Apr 2026) at ~US$4.4bn; ~US$1bn+ raised lifetime.",
  founder:"Adam Bry", founderBg:"Co-founder & CEO since 2014; ex-Google Project Wing, MIT. Co-founders Abraham Bachrach and Matt Donahoe.",
  peers:["Anduril Industries","Shield AI","AeroVironment"],
  risks:["Financials undisclosed","Competes on price vs DJI where allowed","Defense/public-safety procurement cycles"],
  catalysts:["Anti-DJI policy tailwinds","New government contracts","IPO signal"],
  sources:[
    ["Skydio — Series F","https://skydio.com/blog/skydio-series-f"],
    ["Forge — Skydio IPO","https://forgeglobal.com/skydio_ipo/"]
  ]
},
{
  id:"aerovironment", co:"AeroVironment", ticker:"AVAV",
  exchange:"Nasdaq", mkt:"US", sub:"defense",
  status:"listed", statusTxt:"Listed", listing:"Listed Jan 2007", listDate:"2007-01-23",
  deal:"~US$126m at IPO", mcap:"~US$7.3bn", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$17.00", ipoNum:17.00, curPx:"US$144.58", curNum:144.58, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — AVAV","https://stockanalysis.com/stocks/avav/"],
  oneLiner:"Listed defense-drone maker (Switchblade, Puma) turned multi-domain platform after the BlueHalo deal.",
  thesis:"AeroVironment is the established listed play on defense drones and loitering munitions (Switchblade, Puma), widely used by the US and Ukraine, and it doubled revenue toward ~US$2bn after acquiring BlueHalo to add directed energy, counter-UAS, space and cyber. It is the scaled, public multi-domain defense-robotics name — with acquisition-related losses and post-earnings volatility.",
  business:"Founded 1971, AeroVironment makes Switchblade loitering munitions and Puma/Raven small drones, and post-BlueHalo spans directed energy, counter-UAS, space, EW and cyber.",
  financials:"FY2026 (ended Apr 2026) revenue ~US$2.0bn (+~140% YoY, BlueHalo-boosted; organic Q4 ~31%). Net loss ~US$265m TTM on acquisition costs despite adj. EBITDA doubling. FY27 guide US$2.13–2.23bn.",
  founder:"Founded by Paul MacCready; CEO Wahid Nawabi", founderBg:"Founded 1971 by the late Dr. Paul MacCready. Wahid Nawabi is Chairman, President & CEO since 2016.",
  peers:["Anduril Industries","Shield AI","Palladyne AI","Skydio"],
  risks:["Acquisition-driven losses and integration risk","Post-earnings share volatility","Program timing / budget dependence"],
  catalysts:["BlueHalo synergy realisation","Loitering-munition demand","Multi-domain contract wins"],
  sources:[
    ["stockanalysis — AVAV","https://stockanalysis.com/stocks/avav/"],
    ["Motley Fool — AVAV blowout quarter","https://www.fool.com/investing/2026/07/01/aerovironment-stock-soared-on-a-blowout-quarter/"]
  ]
},
{
  id:"palladyne", co:"Palladyne AI", ticker:"PDYN",
  exchange:"Nasdaq", mkt:"US", sub:"defense",
  status:"listed", statusTxt:"Listed", listing:"Listed 2021 (SPAC, as Sarcos)", listDate:"2021-09-24",
  deal:"~US$470m (2021 SPAC)", mcap:"~US$249m", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$5.27", curNum:5.27, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — PDYN","https://stockanalysis.com/stocks/pdyn/"],
  oneLiner:"AI-autonomy software (ex-Sarcos) letting robots and drones operate with minimal training data.",
  thesis:"Palladyne (formerly Sarcos Robotics) pivoted from humanoid/exoskeleton hardware to pure AI-autonomy software (Palladyne IQ / Pilot) for defense and industrial robots and drones. A deeply unprofitable micro-cap with a small but growing revenue base and ~US$24m backlog, it is a speculative software-autonomy option.",
  business:"Palladyne makes AI-autonomy software enabling robots and drones to operate autonomously with minimal training data, with recent traction in loitering munitions, counter-UAS and satellite integration.",
  financials:"TTM revenue ~US$7.07m (+16.8% YoY); Q2 2026 prelim ~US$5.8m; backlog ~US$24m. Net loss ~US$25.3m TTM.",
  founder:"CEO Ben Wolff", founderBg:"President & CEO since Feb 2024 (co-founded Clearwire, led Pendrell); technology traces to Stephen Jacobsen / University of Utah.",
  peers:["Shield AI","Anduril Industries","AeroVironment"],
  risks:["Tiny revenue; deeply unprofitable micro-cap","Execution on software pivot","Contract-timing dependence"],
  catalysts:["Backlog-to-revenue conversion","New defense-autonomy deals","Partnership expansion"],
  sources:[
    ["stockanalysis — PDYN","https://stockanalysis.com/stocks/pdyn/"]
  ]
},
{
  id:"ouster", co:"Ouster", ticker:"OUST",
  exchange:"Nasdaq", mkt:"US", sub:"lidar",
  status:"listed", statusTxt:"Listed", listing:"Listed 2021 (SPAC)", listDate:"2021-03-11",
  deal:"~US$1.9bn (2021 de-SPAC)", mcap:"~US$2.9bn", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$43.28", curNum:43.28, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — OUST","https://stockanalysis.com/stocks/oust/"],
  oneLiner:"The strongest Western lidar pure-play — digital lidar for automotive, robotics and infrastructure.",
  thesis:"Ouster is the leading Western lidar company after absorbing Velodyne, selling digital CMOS/SPAD lidar (flagship Rev8) across automotive, robotics, industrial and smart-infrastructure markets. With revenue up ~52% and shares well above the SPAC reference, it is the Western lidar name showing the clearest scale-up (though still loss-making).",
  business:"Ouster makes digital lidar sensors for automotive, robotics, industrial and smart-infrastructure applications, and merged with Velodyne in 2023.",
  financials:"FY2025 revenue US$169.38m (+52.5%); net loss −US$60.38m (improving ~38%). TTM US$185.33m (+57.3%).",
  founder:"Angus Pacala", founderBg:"Co-founder & CEO; ex-Quanergy, Stanford.",
  peers:["Hesai Group","RoboSense","Aeva Technologies","Innoviz"],
  risks:["Still loss-making","Automotive lidar pricing pressure","Competition from lower-cost Chinese lidar"],
  catalysts:["Robotics/infrastructure demand","Path to profitability","New design wins"],
  sources:[
    ["Ouster IR — Q4/FY2025 results","https://investors.ouster.com/"],
    ["stockanalysis — OUST","https://stockanalysis.com/stocks/oust/"]
  ]
},
{
  id:"aeva", co:"Aeva Technologies", ticker:"AEVA",
  exchange:"Nasdaq", mkt:"US", sub:"lidar",
  status:"listed", statusTxt:"Listed", listing:"Listed 2021 (SPAC)", listDate:"2021-03-12",
  deal:"~US$2.1bn (2021 de-SPAC)", mcap:"~US$1.44bn", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$21.07", curNum:21.07, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — AEVA","https://stockanalysis.com/stocks/aeva/"],
  oneLiner:"FMCW '4D' lidar that measures velocity per point — re-rating hard on triple-digit revenue growth.",
  thesis:"Aeva makes FMCW 4D lidar that uniquely measures per-point velocity, targeting automotive (commercial vehicles), industrial and rail. With TTM revenue up ~103% and the stock re-rating above its SPAC reference, it is the highest-growth listed lidar name — albeit small and loss-making.",
  business:"Aeva develops FMCW 4D lidar (Atlas/Omni sensors and CityOS software) that measures velocity per point, for automotive, industrial and rail customers (including Bendix/commercial vehicle).",
  financials:"TTM revenue ~US$20.97m (+103% YoY); Q1 2026 US$6.3m; net loss −US$145.54m TTM. Raised ~US$115m follow-on in early June 2026.",
  founder:"Soroush Salehian & Mina Rezk", founderBg:"Co-founder & CEO Soroush Salehian and CTO Mina Rezk, both ex-Apple.",
  peers:["Hesai Group","Ouster","Innoviz","RoboSense"],
  risks:["Very small revenue base","Large losses; capital needs","Design-win-to-revenue timing"],
  catalysts:["Commercial-vehicle & rail programs","Revenue scaling","New industrial wins"],
  sources:[
    ["Aeva — Q1 2026 results","https://www.aeva.com/press/aeva-reports-first-quarter-2026-results/"],
    ["stockanalysis — AEVA","https://stockanalysis.com/stocks/aeva/"]
  ]
},
{
  id:"innoviz", co:"Innoviz Technologies", ticker:"INVZ",
  exchange:"Nasdaq", mkt:"US", sub:"lidar",
  status:"listed", statusTxt:"Listed", listing:"Listed 2021 (SPAC)", listDate:"2021-04-05",
  deal:"~US$1.4bn (2021 de-SPAC)", mcap:"~US$140m", mcapAsOf:"10 Jul 2026",
  ipoPx:"US$10.00", ipoNum:10.00, curPx:"US$0.63", curNum:0.63, pxAsOf:"10 Jul 2026",
  pxSrc:["stockanalysis — INVZ","https://stockanalysis.com/stocks/invz/"],
  oneLiner:"Israeli automotive MEMS-lidar maker with a Mobileye robotaxi tie-up — but trading sub-US$1.",
  thesis:"Innoviz makes automotive MEMS lidar and perception (a historical BMW win) and is expanding into defense/counter-UAS with a Mobileye robotaxi partnership representing a 150k+ unit opportunity from 2027. Revenue more than doubled in 2025, but the stock trades below US$1 with delisting risk — a high-risk turnaround/optionality name.",
  business:"Innoviz makes automotive MEMS lidar (InnovizOne/Two) plus perception software, expanding into defense/counter-UAS, with a Mobileye robotaxi partnership.",
  financials:"FY2025 revenue US$55.09m (+127% YoY); net loss −US$81.35m. Shares below US$1 (delisting-risk range).",
  founder:"Omer Keilaf", founderBg:"Co-founder & CEO; ex-Israeli military technology.",
  peers:["Hesai Group","Ouster","Aeva Technologies"],
  risks:["Sub-US$1 share price / delisting risk","Large losses","Program timing (Mobileye ramp from 2027)"],
  catalysts:["Mobileye robotaxi volume (2027+)","Defense/counter-UAS wins","Revenue scaling"],
  sources:[
    ["stockanalysis — INVZ","https://stockanalysis.com/stocks/invz/"]
  ]
}

];

/* ===== Numeric layer for financial-analysis visualisations =====
   capUsd = market cap / private valuation in US$ billions (null = n/d)
   revUsd = latest annual (or run-rate) revenue in US$ millions (null = n/d)
   niUsd  = latest net income in US$ millions (negative = loss; null = n/d or
            GAAP figure heavily distorted by non-cash items, so omitted)
   Figures are indicative, converted at ~7.1 RMB / ~7.8 HKD per USD, carrying the
   as-of dates noted on each company. Not investment advice. */
var FIN = {
  unitree:{capUsd:5.9, revUsd:236, niUsd:39},
  ubtech:{capUsd:5.8, revUsd:281, niUsd:-110},
  agibot:{capUsd:null, revUsd:null, niUsd:null},
  engineai:{capUsd:1.5, revUsd:null, niUsd:null},
  galbot:{capUsd:3.0, revUsd:null, niUsd:null},
  fourier:{capUsd:null, revUsd:null, niUsd:null},
  limx:{capUsd:null, revUsd:null, niUsd:null},
  leju:{capUsd:null, revUsd:36, niUsd:null},
  deeprobotics:{capUsd:null, revUsd:47, niUsd:2},
  zhipu:{capUsd:7.4, revUsd:55, niUsd:-420},
  horizon:{capUsd:12.0, revUsd:535, niUsd:null},
  blacksesame:{capUsd:1.1, revUsd:117, niUsd:-204},
  hesai:{capUsd:2.5, revUsd:461, niUsd:68},
  robosense:{capUsd:1.4, revUsd:270, niUsd:-20},
  weride:{capUsd:1.9, revUsd:685, niUsd:null},
  ponyai:{capUsd:null, revUsd:null, niUsd:null},
  momenta:{capUsd:9.0, revUsd:354, niUsd:null},
  dobot:{capUsd:1.55, revUsd:70, niUsd:-15},
  geekplus:{capUsd:3.05, revUsd:490, niUsd:4},
  hairobotics:{capUsd:null, revUsd:233, niUsd:-82},
  estun:{capUsd:5.4, revUsd:680, niUsd:null},
  pudu:{capUsd:1.5, revUsd:null, niUsd:null},
  keenon:{capUsd:null, revUsd:null, niUsd:null},
  ecovacs:{capUsd:3.9, revUsd:2660, niUsd:246},
  roborock:{capUsd:3.7, revUsd:2610, niUsd:190},
  laifual:{capUsd:null, revUsd:null, niUsd:null},
  figure:{capUsd:39.0, revUsd:null, niUsd:null},
  apptronik:{capUsd:5.5, revUsd:null, niUsd:null},
  onex:{capUsd:10.0, revUsd:null, niUsd:null},
  agility:{capUsd:2.5, revUsd:null, niUsd:null},
  "physical-intelligence":{capUsd:11.0, revUsd:null, niUsd:null},
  symbotic:{capUsd:26.3, revUsd:2250, niUsd:null},
  serve:{capUsd:0.458, revUsd:5.2, niUsd:-101},
  richtech:{capUsd:0.395, revUsd:5.05, niUsd:-21},
  intuitive:{capUsd:144.0, revUsd:10060, niUsd:2860},
  procept:{capUsd:1.12, revUsd:308, niUsd:-96},
  aurora:{capUsd:12.3, revUsd:4, niUsd:-831},
  kodiak:{capUsd:0.934, revUsd:3.8, niUsd:null},
  waymo:{capUsd:126.0, revUsd:null, niUsd:null},
  nuro:{capUsd:6.0, revUsd:null, niUsd:null},
  "applied-intuition":{capUsd:15.0, revUsd:null, niUsd:null},
  waabi:{capUsd:3.0, revUsd:null, niUsd:null},
  anduril:{capUsd:61.0, revUsd:2200, niUsd:null},
  "shield-ai":{capUsd:12.7, revUsd:540, niUsd:null},
  saronic:{capUsd:9.25, revUsd:null, niUsd:null},
  skydio:{capUsd:4.4, revUsd:null, niUsd:null},
  aerovironment:{capUsd:7.3, revUsd:2000, niUsd:-265},
  palladyne:{capUsd:0.249, revUsd:7.07, niUsd:-25},
  ouster:{capUsd:2.9, revUsd:169, niUsd:-60},
  aeva:{capUsd:1.44, revUsd:21, niUsd:-146},
  innoviz:{capUsd:0.14, revUsd:55, niUsd:-81}
};

/* Derived helpers used across pages */
var THEME_ORDER = ["humanoid","embodied","auto","warehouse","service","surgical","lidar","defense","industrial","components","consumer"];
function companyById(id){for(var i=0;i<COMPANIES.length;i++){if(COMPANIES[i].id===id)return COMPANIES[i];}return null;}
function finOf(id){return FIN[id]||{capUsd:null,revUsd:null,niUsd:null};}
