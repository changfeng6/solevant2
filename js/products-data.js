const productsData = {
  // 運動鞋
  sneakers_1: {
    id: "sneakers_1",
    name: "Air Comfort Run 頂級氣墊跑鞋",
    price: 3880,
    category: "sneakers",
    categoryName: "運動鞋",
    image: "images/products/sneakers_1.jpg",
    badge: "新品",
    rating: 4.8,
    reviews: 142,
    description: "專為中長距離慢跑與日常訓練設計。Air Comfort Run 搭載全新升級的雙密度氣墊中底，能有效吸收足部著地時的衝擊力。鞋面採用一片式科技飛織網布，透氣度提升 30%，隨時保持雙足乾爽舒適。",
    specs: {
      "鞋面材質": "高科技飛織網布 (Mesh)",
      "鞋底材質": "高彈力發泡 EVA + 局部耐磨橡膠 + 氣墊避震系統",
      "重量": "單腳約 275g (Size 42)",
      "特色": "足弓支強支撐、鞋底防滑刻紋設計、夜間安全反光條"
    }
  },
  sneakers_2: {
    id: "sneakers_2",
    name: "Trail Master 戶外越野避震鞋",
    price: 4500,
    category: "sneakers",
    categoryName: "運動鞋",
    image: "images/products/sneakers_2.jpg",
    badge: "熱銷",
    rating: 4.9,
    reviews: 89,
    description: "專為崎嶇地形打造的 Trail Master，防滑耐磨大底擁有深度達 5mm 的橡膠抓地齒，在濕滑泥濘路段也能如履平地。鞋頭防撞片與兩側 TPU 強化包覆，全面保護您的雙腳免受石塊碰撞。",
    specs: {
      "鞋面材質": "防潑水抗撕裂尼龍 + TPU 熱熔保護片",
      "鞋底材質": "Vibram® 黃金大底同級耐磨防滑橡膠",
      "重量": "單腳約 340g (Size 42)",
      "特色": "快速綁帶系統、防撞強化鞋頭、一體式防沙舌"
    }
  },
  sneakers_3: {
    id: "sneakers_3",
    name: "Retro Court 復古經典板鞋",
    price: 2980,
    category: "sneakers",
    categoryName: "運動鞋",
    image: "images/products/sneakers_3.jpg",
    badge: "經典",
    rating: 4.6,
    reviews: 215,
    description: "源自 1980 年代網球場經典輪廓，Retro Court 以現代舒適科技重新詮釋。精選柔軟皮革打造鞋面，微泛黃的復古中底呈現優雅歲月質感，是您日常街頭穿搭的百搭首選。",
    specs: {
      "鞋面材質": "頂級牛皮 (Full-grain Leather)",
      "鞋底材質": "耐磨耐黃變橡膠平底杯狀外底",
      "重量": "單腳約 310g (Size 42)",
      "特色": "記憶泡棉鞋墊、精緻打孔透氣、後跟深藍撞色刺繡"
    }
  },

  // 皮鞋
  leather_1: {
    id: "leather_1",
    name: "Classic Oxford 紳士德比皮鞋",
    price: 5800,
    category: "leather",
    categoryName: "皮鞋",
    image: "images/products/leather_1.jpg",
    badge: "尊榮",
    rating: 4.9,
    reviews: 95,
    description: "商務與正式場合的頂級首選。Classic Oxford 採用最嚴苛標準篩選的黑色小牛皮，經過職人手工拋光，呈現內斂溫潤的黑曜光澤。固特異沿條工藝製作，兼具極佳耐用度與可換底設計。",
    specs: {
      "鞋面材質": "頂級精選黑小牛皮 (Calfskin)",
      "內裡材質": "全粒面透氣真皮內裡",
      "鞋底材質": "職人手繪真皮皮底 (Leather Sole)",
      "特色": "五孔封閉式襟面設計、義大利手工製作、經典英倫鞋楦"
    }
  },
  leather_2: {
    id: "leather_2",
    name: "Premium Derby 英倫復古皮鞋",
    price: 4980,
    category: "leather",
    categoryName: "皮鞋",
    image: "images/products/leather_2.jpg",
    badge: "經典",
    rating: 4.7,
    reviews: 112,
    description: "相較於牛津鞋的正式，這款開放式襟面的德比鞋更具備穿著的便利性。焦糖棕色的鞋身搭配邊緣微燒焦感處理，完美融合正式與休閒風格。舒適的寬鞋楦設計，更適合東方人腳型。",
    specs: {
      "鞋面材質": "義大利焦糖棕植鞣牛皮",
      "內裡材質": "親膚吸汗真皮內裡",
      "鞋底材質": "輕量減震複合橡膠底",
      "特色": "開放式襟面易調節、鞋側精細手工雙縫線、人體工學足弓支撐"
    }
  },
  leather_3: {
    id: "leather_3",
    name: "Luxury Brogue 頂級手工雕花鞋",
    price: 6200,
    category: "leather",
    categoryName: "皮鞋",
    image: "images/products/leather_3.jpg",
    badge: "職人手作",
    rating: 4.9,
    reviews: 73,
    description: "極致華麗的細節展現。Brogue 雕花鞋在鞋頭、鞋身接縫處點綴精美的手工雕孔與鋸齒花邊，呈現滿滿的歐式古典風情。選用深琥珀色皮革，隨著穿著時間會展現出獨一無二的專屬色澤。",
    specs: {
      "鞋面材質": "手工職人擦色琥珀牛皮",
      "內裡材質": "全牛皮親膚內裡",
      "鞋底材質": "經典雙層實木皮底 + 前掌防滑橡膠",
      "特色": "經典翼紋 (Wingtip) 雕花、雙色漸層渲染、附防塵袋與鞋拔"
    }
  },

  // 高跟鞋
  heels_1: {
    id: "heels_1",
    name: "Elegant Stiletto 魅惑紅底細高跟鞋",
    price: 5200,
    category: "heels",
    categoryName: "高跟鞋",
    image: "images/products/heels_1.jpg",
    badge: "名媛首選",
    rating: 4.8,
    reviews: 156,
    description: "令人過目難忘的性感利器。Stiletto 採用熱烈如火的緋紅色鏡面漆皮，搭配標誌性的性感紅底。9公分的纖細鞋跟完美拉長腿部線條，鞋內高密度乳膠墊緩解前掌壓力，讓您行走優雅自如。",
    specs: {
      "鞋面材質": "高級進口鏡面漆皮 (Patent Leather)",
      "鞋跟高度": "9.0 cm 纖細高跟",
      "鞋底材質": "高辨識度經典艷紅耐磨大底",
      "特色": "內包彈性抗震鋼片、前掌高彈乳膠減壓墊、性感尖頭鞋底設計"
    }
  },
  heels_2: {
    id: "heels_2",
    name: "Velvet Pumps 奢華絨面黑高跟鞋",
    price: 4200,
    category: "heels",
    categoryName: "高跟鞋",
    image: "images/products/heels_2.jpg",
    badge: "百搭",
    rating: 4.7,
    reviews: 98,
    description: "低調、奢華、優雅的完美交織。精選頂級羊絨皮製成，啞光的細緻絨毛手感溫柔，能吸收光線呈現極致的曜石黑。搭配 7.5cm 中高跟，無論是商務談判還是晚宴聚會，皆能展現您的幹練與溫柔。",
    specs: {
      "鞋面材質": "高級柔軟羊絨皮 (Suede)",
      "鞋跟高度": "7.5 cm 穩定中高跟",
      "內裡材質": "親膚防滑羊皮內裡",
      "特色": "後跟防磨腳泡棉設計、防滑抓地橡膠底、金色精緻包邊中底"
    }
  },
  heels_3: {
    id: "heels_3",
    name: "Evening Strap Heels 璀璨綁帶晚宴鞋",
    price: 5600,
    category: "heels",
    categoryName: "高跟鞋",
    image: "images/products/heels_3.jpg",
    badge: "限量",
    rating: 4.9,
    reviews: 64,
    description: "專為重要晚宴與派對打造。奢華的香檳金金屬質感皮革，折射出璀璨的光芒。細緻的腳踝纏繞綁帶設計，不僅提供穩定的包覆感，更在視覺上勾勒出腳踝的精緻線條。點綴精美五金鎖扣，盡顯尊貴。",
    specs: {
      "鞋面材質": "金屬微光香檳金小牛皮",
      "鞋跟高度": "8.5 cm 細高跟",
      "扣具材質": "防褪色抗氧化黃金質感五金",
      "特色": "交叉式防脫腳踝帶、水鑽防滑鞋墊、閃耀金屬光澤處理"
    }
  },

  // 休閒鞋
  casual_1: {
    id: "casual_1",
    name: "Urban Slip-on 極簡針織懶人鞋",
    price: 2500,
    category: "casual",
    categoryName: "休閒鞋",
    image: "images/products/casual_1.jpg",
    badge: "暢銷",
    rating: 4.8,
    reviews: 320,
    description: "極簡生活美學的實踐者。Urban Slip-on 採用 3D 輕量一體成型針織鞋面，如同穿著襪子般舒適貼合。鞋後跟設有高強度編織拉環，一秒穿脫。超輕量白色 EVA 大底，帶來羽毛般輕盈步伐。",
    specs: {
      "鞋面材質": "3D 高彈一體編織網布 (Elastic Knit)",
      "鞋底材質": "超輕量高耐磨發泡 EVA 大底",
      "重量": "單腳僅約 180g (Size 42)",
      "特色": "易穿脫拉環設計、可拆洗防菌鞋墊、防潑水鞋面處理"
    }
  },
  casual_2: {
    id: "casual_2",
    name: "Canvas Classic 復古帆布鞋",
    price: 1980,
    category: "casual",
    categoryName: "休閒鞋",
    image: "images/products/casual_2.jpg",
    badge: "超值",
    rating: 4.5,
    reviews: 450,
    description: "經典不敗的復古帆布鞋。選用 12oz 密實耐磨純棉帆布，防撕裂性能優異。前腳掌防撞白色橡膠套與鞋側經典紅色線條，彰顯美式校園復古風範。內部加厚高彈力帆布鞋墊，擺脫傳統帆布鞋生硬腳感。",
    specs: {
      "鞋面材質": "12oz 密實純棉雙股帆布",
      "鞋底材質": "高彈耐折硫化橡膠底 (Vulcanized Rubber)",
      "鞋眼材質": "防鏽黃銅金屬氣眼",
      "特色": "側邊排氣孔、防撞橡膠頭、防滑波浪底紋"
    }
  },
  casual_3: {
    id: "casual_3",
    name: "Modern Loafer 雅痞麂皮樂福鞋",
    price: 3680,
    category: "casual",
    categoryName: "休閒鞋",
    image: "images/products/casual_3.jpg",
    badge: "新品",
    rating: 4.7,
    reviews: 86,
    description: "義式雅痞風格的代名詞。精選沙黃色麂皮製作，手感蓬鬆。無鞋帶的懶人鞋型，搭配鞋面手工馬鞍飾帶與金屬裝飾，增添精緻細節。適合搭配九分西裝褲或休閒短褲，展現率性的紳士質感。",
    specs: {
      "鞋面材質": "精選柔軟山羊麂皮 (Suede)",
      "內裡材質": "透氣吸汗豬皮內裡",
      "鞋底材質": "防滑耐磨生膠顆粒底",
      "特色": "手工馬鞍裝飾片、莫卡辛縫線鞋頭、無壓力平底設計"
    }
  },

  // 其它類
  others_1: {
    id: "others_1",
    name: "Winter Boot 戶外防水防雪靴",
    price: 4980,
    category: "others",
    categoryName: "其它類",
    image: "images/products/others_1.jpg",
    badge: "保暖",
    rating: 4.9,
    reviews: 58,
    description: "面對嚴冬與冰雪挑戰的終極武器。鞋面採用防水處理皮革與橡膠防泥圍條，能完全隔絕水汽入侵。內裡填充 200g 保暖科技纖維，搭配鞋口防寒長毛絨，在零下 15 度環境下依然能保持雙腳溫暖舒適。",
    specs: {
      "鞋面材質": "防潑水瘋馬牛皮 + 防水防泥橡膠包邊",
      "保暖材質": "200g Thinsulate™ 保暖棉 + 仿羊羔毛內裡",
      "鞋底材質": "低溫抗凍防滑抓地深紋橡膠底",
      "特色": "D型金屬快速拉鎖扣、全防水結構、防滑齒紋"
    }
  },
  others_2: {
    id: "others_2",
    name: "Cozy Slipper 舒適居家羊毛拖鞋",
    price: 1580,
    category: "others",
    categoryName: "其它類",
    image: "images/products/others_2.jpg",
    badge: "居家首選",
    rating: 4.8,
    reviews: 188,
    description: "讓回家成為最值得期待的事。Cozy Slipper 採用天然混紡羊毛氈鞋面，觸感蓬鬆保暖。腳底接觸面選用極致柔軟的羊羔毛，踏上去宛如踩在雲朵般放鬆。輕量靜音 EVA 底部，在木地板行走也不會發出噪音。",
    specs: {
      "鞋面材質": "高密度保暖羊毛氈 (Wool Felt)",
      "中底材質": "高密度減震記憶泡棉 + 柔軟羊羔毛",
      "外底材質": "輕量靜音止滑 EVA 外底",
      "特色": "無後跟懶人拖鞋設計、靜音防滑、可機洗處理"
    }
  },

  // 配件
  accessories_1: {
    id: "accessories_1",
    name: "Premium Leather Belt 頂級頭層牛皮皮帶",
    price: 1880,
    category: "accessories",
    categoryName: "配件",
    image: "images/products/accessories_1.jpg",
    badge: "精品",
    rating: 4.9,
    reviews: 145,
    description: "完美的紳士穿搭拼圖。皮帶精選頂級頭層牛皮，帶身雙面皆為純牛皮貼合，厚實耐用不剝落。搭配拉絲精鋼針扣，線條剛毅簡約，無論商務正裝還是休閒牛仔褲，皆能完美適配。",
    specs: {
      "帶身材質": "頂級雙面頭層鞍皮牛皮 (3.5cm 寬)",
      "扣具材質": "防刮拉絲鋅合金精鋼針扣",
      "長度選擇": "100cm - 120cm (可自行裁剪調節)",
      "特色": "雙面手工油邊防裂、附精美禮盒與打孔器"
    }
  },
  accessories_2: {
    id: "accessories_2",
    name: "Shoe Care Kit 職人鞋履保養套組",
    price: 1200,
    category: "accessories",
    categoryName: "配件",
    image: "images/products/accessories_2.jpg",
    badge: "實用",
    rating: 4.8,
    reviews: 92,
    description: "讓愛鞋歷久彌新的祕密武器。本保養套組包含一柄 100% 頂級馬毛除塵刷、一罐無色天然巴西棕櫚蠟保養油，以及一條柔軟的超細纖維擦拭布。不論是清潔除塵還是滋養亮光，一組輕鬆搞定。",
    specs: {
      "馬毛刷": "嚴選 100% 馬尾毛 + 實木握柄",
      "鞋蠟成分": "無色天然巴西棕櫚油 + 蜂蠟",
      "擦拭布": "超細纖維無感柔軟布 (30x30 cm)",
      "特色": "適用於所有光面皮革、附精緻收納帆布袋"
    }
  }
};
