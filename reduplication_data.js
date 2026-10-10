// Lucide Icons 初始化
lucide.createIcons();

// ==========================================
// 54 組疊字詞完整典範資料庫 (根據講義完整提取)
// ==========================================
const vocabData = [
  {
    id: 1,
    word: '斑斑',
    bopomofo: 'ㄅㄢ ㄅㄢ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '點點的痕跡', example: '血跡斑斑，令人觸目驚心。' },
      { meaning: '文彩明顯的樣子', example: '他風度優雅，文質斑斑。' }
    ],
    explanation: '「斑斑」形容點狀分佈的色彩或斑駁痕跡；「文質斑斑」亦作「文質彬彬」，形容文采與質樸兼備。'
  },
  {
    id: 2,
    word: '茫茫',
    bopomofo: 'ㄇㄤˊ ㄇㄤˊ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '廣大無邊的樣子', example: '在人海茫茫之中，能與知己相逢是莫大的緣分。' },
      { meaning: '目視不明的樣子', example: '年過花甲，髮蒼蒼，視茫茫，齒牙動搖。' },
      { meaning: '不明的樣子', example: '初出茅廬的青年，對未知的前途茫茫。' }
    ],
    explanation: '常用於空間之浩渺（人海茫茫、暮色茫茫）或視覺模糊（視茫茫），亦可引申為前景不明朗。'
  },
  {
    id: 3,
    word: '泛泛',
    bopomofo: 'ㄈㄢˋ ㄈㄢˋ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '尋常的、浮淺的', example: '我與他只是泛泛之交，並無深談過心事。' },
      { meaning: '漂浮的樣子', example: '信宿漁人還泛泛，清江月夜任輕舟。' }
    ],
    explanation: '「泛泛之交」形容交情淺薄平常；作漂浮義時描摹舟楫輕浮水面之閒適。'
  },
  {
    id: 4,
    word: '蕩蕩',
    bopomofo: 'ㄉㄤˋ ㄉㄤˋ',
    category: '情感心緒',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '坦蕩蕩：行事光明磊落', example: '君子心中坦蕩蕩，襟懷坦白不欺暗室。' },
      { meaning: '空蕩蕩：一無所有的樣子', example: '家人外出旅行後，諾大的房子顯得空蕩蕩的。' }
    ],
    explanation: '《論語》：「君子坦蕩蕩，小人長戚戚。」形容心胸開朗寬廣、心無私念；口語中常疊作「空蕩蕩」。'
  },
  {
    id: 5,
    word: '迢迢',
    bopomofo: 'ㄊㄧㄠˊ ㄊㄧㄠˊ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '遙遠的樣子', example: '迢迢牽牛星，皎皎河漢女。（《古詩十九首》）' },
      { meaning: '悠長的樣子', example: '迢迢不斷如春水，離愁漸遠漸無窮。' }
    ],
    explanation: '《古詩十九首》開篇名句，音韻悠揚，描繪牽牛星與織女星隔著銀河遙遙相對之路途修遠。'
  },
  {
    id: 6,
    word: '了了',
    bopomofo: 'ㄌㄧㄠˇ ㄌㄧㄠˇ',
    category: '神態舉止',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '聰明慧黠的樣子', example: '小時了了，大未必佳。（《世說新語》）' },
      { meaning: '明白、清楚的樣子', example: '這件事的原委複雜，他其實不甚了了。' }
    ],
    explanation: '孔融十歲謁李膺時的千古名句，指幼時聰慧過人；在日常語句中常作「不甚了了」表不清楚。'
  },
  {
    id: 7,
    word: '亭亭',
    bopomofo: 'ㄊㄧㄥˊ ㄊㄧㄥˊ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '高聳直立的樣子', example: '少女亭亭玉立，氣質清新高雅。' }
    ],
    explanation: '常用於形容女子身材苗條修長，亦可形容蓮花或松柏修長挺拔之姿（如周敦頤《愛蓮說》「香遠益清，亭亭淨植」）。'
  },
  {
    id: 8,
    word: '格格',
    bopomofo: 'ㄍㄜˊ ㄍㄜˊ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '形容笑聲', example: '看見逗趣的小丑，孩子們格格大笑。' },
      { meaning: '形容鳥鳴之聲', example: '晨光初露，林間格格價飛。' }
    ],
    explanation: '疊字狀聲詞，可摹清脆歡悅之笑聲，亦可摹山林野鳥振羽啼鳴之聲。'
  },
  {
    id: 9,
    word: '汲汲',
    bopomofo: 'ㄐㄧˊ ㄐㄧˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '努力求取、不休息的樣子', example: '汲汲營營於名利，往往忽略了身邊平實的幸福。' }
    ],
    explanation: '《五柳先生傳》：「不戚戚於貧賤，不汲汲於富貴。」形容為追求某目標而急迫奔波鑽營之態。'
  },
  {
    id: 10,
    word: '息息',
    bopomofo: 'ㄒㄧˊ ㄒㄧˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '呼吸相續，極為密切', example: '環境生態保護與每位國民的健康息息相關。' }
    ],
    explanation: '「息息相關」指呼吸一呼一吸相互關聯，比喻關係極其緊密融洽。'
  },
  {
    id: 11,
    word: '沾沾',
    bopomofo: 'ㄓㄢ ㄓㄢ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '暗自喜歡、得意的樣子', example: '取得一點小成就便沾沾自喜，容易招致失敗。' }
    ],
    explanation: '【橘老師避坑重點】「沾沾」為形容自滿心態之疊字詞，絕非狀聲詞！'
  },
  {
    id: 12,
    word: '忡忡',
    bopomofo: 'ㄔㄨㄥ ㄔㄨㄥ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '心憂恐懼的樣子', example: '面對即將來襲的強烈颱風，全村居民憂心忡忡。' }
    ],
    explanation: '《詩經・召南・草蟲》：「未見君子，憂心忡忡。」形容心緒沉重焦慮，非擬音詞。'
  },
  {
    id: 13,
    word: '冉冉',
    bopomofo: 'ㄖㄢˇ ㄖㄢˇ',
    category: '景物自然',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '緩慢行進、漸漸升起之貌', example: '朝陽自東方海平線冉冉上升，金光普照大地。' }
    ],
    explanation: '形容動作緩慢流暢或時光推移（如老之冉冉將至）。'
  },
  {
    id: 14,
    word: '溶溶',
    bopomofo: 'ㄖㄨㄥˊ ㄖㄨㄥˊ',
    category: '景物自然',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '潮溼、水盛流動貌', example: '月色溶溶夜，春風細細吹。' }
    ],
    explanation: '形容水流盛大安詳或月光如水漫溢之靜美意境。'
  },
  {
    id: 15,
    word: '皎皎',
    bopomofo: 'ㄐㄧㄠˇ ㄐㄧㄠˇ',
    category: '景物自然',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '潔白無瑕的樣子', example: '皎皎白駒，在彼空谷。（《詩經》）' },
      { meaning: '明亮澄澈的樣子', example: '迢迢牽牛星，皎皎河漢女。（《古詩十九首》）' }
    ],
    explanation: '形容月色、星光耀眼明徹，或品格如同白雪般純白無瑕。'
  },
  {
    id: 16,
    word: '行行',
    bopomofo: 'ㄏㄤˊ ㄏㄤˊ / ㄒㄧㄥˊ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '剛強的樣子（ㄏㄤˋ）', example: '行行鄙夫志，往往顯露出魯莽之氣。' },
      { meaning: '各個行業（ㄏㄤˊ）', example: '俗話說行行出狀元，只要努力皆可成才。' },
      { meaning: '施行辦理（ㄒㄧㄥˊ）', example: '平日當行行好事，廣結善緣。' },
      { meaning: '慢步行走（ㄒㄧㄥˊ）', example: '行行重行行，與君生別離。（《古詩十九首》）' }
    ],
    explanation: '字同而音義多元：念 ㄏㄤˋ 為剛強；念 ㄏㄤˊ 為行業；念 ㄒㄧㄥˊ 則為行走或實行。'
  },
  {
    id: 17,
    word: '惺惺',
    bopomofo: 'ㄒㄧㄥ ㄒㄧㄥ',
    category: '神態舉止',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '虛情假意、扭捏做態', example: '他那假惺惺的道歉，根本毫無誠意。' },
      { meaning: '聰明、伶俐惺惺相惜', example: '兩位圍棋大師棋逢敵手，惺惺相惜。' }
    ],
    explanation: '「假惺惺」指虛偽矯揉；而「惺惺相惜」則指富有才華之聰明人彼此互相欽佩。'
  },
  {
    id: 18,
    word: '蒼蒼',
    bopomofo: 'ㄘㄤ ㄘㄤ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '深青色（草木林森）', example: '兩岸青山蒼蒼，鬱鬱蔥蔥。' },
      { meaning: '茂盛生長之貌', example: '蒹葭蒼蒼，白露為霜。（《詩經》）' },
      { meaning: '斑白灰白之貌', example: '老人家白髮蒼蒼，眼神卻依舊炯炯有神。' }
    ],
    explanation: '兼具青色、茂盛與蒼白三種意象，全視上下文主體（山水、蘆葦、頭髮）而定。'
  },
  {
    id: 19,
    word: '洋洋',
    bopomofo: 'ㄧㄤˊ ㄧㄤˊ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '水勢盛大的樣子', example: '河水洋洋，北流活活。' },
      { meaning: '得意的樣子', example: '考了滿分，他洋洋得意地向同學炫耀。' },
      { meaning: '充滿神采之貌', example: '獲獎選手神氣昂揚，意氣洋洋走上領獎台。' },
      { meaning: '眾多壯盛貌', example: '這部百科全書洋洋大觀，收錄廣博。' }
    ],
    explanation: '《論語》：「洋洋乎盈耳哉！」可形容水盛、得意志滿、或是著作卷帙浩繁。'
  },
  {
    id: 20,
    word: '芸芸',
    bopomofo: 'ㄩㄣˊ ㄩㄣˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '眾多的樣子（亦作云云）', example: '在芸芸眾生之中，每個人都在為理想奔忙。' }
    ],
    explanation: '《老子》：「萬物云云，各復歸其根。」形容世間眾人、世態多元廣布。'
  },
  {
    id: 21,
    word: '怏怏',
    bopomofo: 'ㄧㄤˋ ㄧㄤˋ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '不快樂、心中怨恨不平貌', example: '願望落空後，他整天怏怏不樂。' }
    ],
    explanation: '形容因心中失意或有所不甘而表現出的鬱鬱沈悶神情。'
  },
  {
    id: 22,
    word: '戚戚',
    bopomofo: 'ㄑㄧ ㄑㄧ',
    category: '情感心緒',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '憂愁恐懼患得患失', example: '君子坦蕩蕩，小人長戚戚。（《論語》）' },
      { meaning: '內心深有感動觸發', example: '讀了他的回憶錄，於我心有戚戚焉。（《孟子》）' }
    ],
    explanation: '亦寫作「慼慼」。「小人長戚戚」為憂心忡忡；「於我心有戚戚焉」為同理共鳴。'
  },
  {
    id: 23,
    word: '悽悽',
    bopomofo: 'ㄑㄧ ㄑㄧ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '悲傷哀痛慘痛的樣子', example: '這場意外奪去親人生命，令人感到悽悽慘慘。' }
    ],
    explanation: '形容悲痛欲絕或寒涼蕭瑟之氛圍，李清照詞「淒淒慘慘戚戚」即為著名用例。'
  },
  {
    id: 24,
    word: '楚楚',
    bopomofo: 'ㄔㄨˇ ㄔㄨˇ',
    category: '神態舉止',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '鮮明整齊的樣子', example: '宴會上賓客衣冠楚楚，儀態大方。' },
      { meaning: '形容姿態嬌豔惹人憐愛', example: '她楚楚可憐的模樣，令在場眾人不忍苛責。' }
    ],
    explanation: '「衣冠楚楚」形容衣著鮮明整齊；「楚楚動人」則形容女子柔美嬌弱、惹人顧惜。'
  },
  {
    id: 25,
    word: '悠悠',
    bopomofo: 'ㄧㄡ ㄧㄡ',
    category: '情感心緒',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '渺遠無盡的樣子', example: '前不見古人，後不見來者。念天地之悠悠。（陳子昂）' },
      { meaning: '憂思深長之貌', example: '青青子衿，悠悠我心。（《詩經》）' },
      { meaning: '荒謬不合事理', example: '此乃悠悠之談，不可輕易聽信。' },
      { meaning: '眾多之人', example: '悠悠眾口，難以一一堵塞辨白。' }
    ],
    explanation: '會考超高頻核心疊字詞！兼含時空久遠、思緒綿延、荒謬不經與市井眾口等四種用法。'
  },
  {
    id: 26,
    word: '勃勃',
    bopomofo: 'ㄅㄛˊ ㄅㄛˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '旺盛盛大、生機充滿貌', example: '少年意氣風發，野心勃勃／生機勃勃。' }
    ],
    explanation: '形容生氣、雄心或興致蓬勃旺盛、奔放不息。'
  },
  {
    id: 27,
    word: '滔滔',
    bopomofo: 'ㄊㄠ ㄊㄠ',
    category: '景物自然',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '水流滾滾不絕貌', example: '大江東去，波浪滔滔奔流入海。' },
      { meaning: '形容說話連續不停口才敏捷', example: '辯論名手滔滔不絕，氣勢如虹。' },
      { meaning: '形容天下混亂紛擾', example: '滔滔者天下皆是也，而誰以易之？（《論語》）' }
    ],
    explanation: '《論語》名句「滔滔者天下皆是」，形容時局混亂動盪如大水漫溢；「滔滔不絕」則形容口若懸河。'
  },
  {
    id: 28,
    word: '翩翩',
    bopomofo: 'ㄆㄧㄢ ㄆㄧㄢ',
    category: '神態舉止',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '行動輕快敏捷的樣子', example: '彩蝶在花叢間翩翩起舞。' },
      { meaning: '舉止灑脫、風度優雅', example: '他談吐不俗，真是一位風度翩翩的美少年。' }
    ],
    explanation: '形容飛舞輕盈，或形容君子文士儀態風流瀟灑。'
  },
  {
    id: 29,
    word: '靡靡',
    bopomofo: 'ㄇㄧˇ ㄇㄧˇ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '頹廢淫蕩、萎靡不振', example: '商紂王喜好靡靡之音，終致國家社稷敗亡。' }
    ],
    explanation: '「靡靡之音」指使人沉溺低俗、意志消沉之音樂，引申為頹廢風氣。'
  },
  {
    id: 30,
    word: '纍纍',
    bopomofo: 'ㄌㄟˊ ㄌㄟˊ',
    category: '景物自然',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '繁多、重積成串的樣子', example: '秋天到了，果園中碩大的果實纍纍掛滿枝頭。' }
    ],
    explanation: '注音 ㄌㄟˊ ㄌㄟˊ。形容果實結實眾多，不可寫作「雷雷」或念錯音。'
  },
  {
    id: 31,
    word: '嫋嫋',
    bopomofo: 'ㄋㄧㄠˇ ㄋㄧㄠˇ',
    category: '景物自然',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '音調悠揚綿長不絕', example: '餘音嫋嫋，不絕如縷。（蘇軾《赤壁賦》）' },
      { meaning: '縈迴繚繞輕柔飄動貌', example: '暮色漸深，山村中飄起輕煙嫋嫋。' }
    ],
    explanation: '亦作「裊裊」。兼具聽覺悠長（餘音嫋嫋）與視覺柔美繚繞（炊煙嫋嫋）之美。'
  },
  {
    id: 32,
    word: '寥寥',
    bopomofo: 'ㄌㄧㄠˊ ㄌㄧㄠˊ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '數量稀少不多的樣子', example: '大雨滂沱，前來聽講的聽眾寥寥無幾。' },
      { meaning: '空虛、孤寂冷清貌', example: '寂寂寥寥人境外，空山唯有白雲知。' }
    ],
    explanation: '形容人數或物件極少（寥寥無幾），亦可摹空寂遼遠之境。'
  },
  {
    id: 33,
    word: '睽睽',
    bopomofo: 'ㄎㄨㄟˊ ㄎㄨㄟˊ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '張著眼睛注視凝望之貌', example: '在眾目睽睽之下，他坦然承認了自己的過失。' }
    ],
    explanation: '「眾目睽睽」形容許多人的目光聚集盯視，眾目注視下無所遁形。'
  },
  {
    id: 34,
    word: '涓涓',
    bopomofo: 'ㄐㄩㄢ ㄐㄩㄢ',
    category: '景物自然',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '細水慢流的樣子', example: '山澗中流淌著涓涓細流，清澈見底。' }
    ],
    explanation: '【避坑】形容流水纖細平緩，為形容態樣之詞，絕非擬聲狀聲詞！'
  },
  {
    id: 35,
    word: '岌岌',
    bopomofo: 'ㄐㄧˊ ㄐㄧˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '極度危險、搖搖欲墜貌', example: '年久失修的老宅在強震後岌岌可危。' }
    ],
    explanation: '「岌岌可危」形容情勢十分危急險峻，隨時有崩塌潰散之虞。'
  },
  {
    id: 36,
    word: '纖纖',
    bopomofo: 'ㄒㄧㄢ ㄒㄧㄢ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '細長柔美的樣子', example: '纖纖擢素手，札札弄機杼。（《古詩十九首》）' }
    ],
    explanation: '形容雙手或指頭纖細柔白美觀，為古典詩詞形容佳人之名句。'
  },
  {
    id: 37,
    word: '栩栩',
    bopomofo: 'ㄒㄩˇ ㄒㄩˇ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '生動逼真、活靈活現', example: '畫家筆下的駿馬栩栩如生，宛若奔馳眼前。' }
    ],
    explanation: '《莊子・齊物論》：「昔者莊周夢為胡蝶，栩栩然胡蝶也。」形容藝術描繪鮮活生動。'
  },
  {
    id: 38,
    word: '循循',
    bopomofo: 'ㄒㄩㄣˊ ㄒㄩㄣˊ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '逐步引導、規矩有序貌', example: '夫子循循然善誘人，博我以文，約我以禮。' }
    ],
    explanation: '《論語》名句，讚揚孔子善於按部就班、有條不紊地啟發指導學生。'
  },
  {
    id: 39,
    word: '悻悻',
    bopomofo: 'ㄒㄧㄥˋ ㄒㄧㄥˋ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '憤恨難平、怒氣未消貌', example: '比賽失利後，他悻悻然轉身離場。' }
    ],
    explanation: '形容心中憤怒、怨恨不服輸之神態反應。'
  },
  {
    id: 40,
    word: '欣欣',
    bopomofo: 'ㄒㄧㄣ ㄒㄧㄣ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '草木興盛繁榮貌', example: '春回大地，草木欣欣向榮。' },
      { meaning: '喜悅高興的樣子', example: '聽到好消息，大家欣欣然喜上眉梢。' }
    ],
    explanation: '陶淵明《歸去來兮辭》：「木欣欣以向榮，泉涓涓而始流。」形容草木繁盛或內心歡樂。'
  },
  {
    id: 41,
    word: '惴惴',
    bopomofo: 'ㄓㄨㄟˋ ㄓㄨㄟˋ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '憂懼戒慎、提心吊膽貌', example: '等待放榜的時刻，考生們無不惴惴不安。' }
    ],
    explanation: '形容內心恐懼緊張、擔憂發生意外之忐忑不安神態。'
  },
  {
    id: 42,
    word: '諄諄',
    bopomofo: 'ㄓㄨㄣ ㄓㄨㄣ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '叮嚀告誡、教誨不倦貌', example: '老師的諄諄教誨，我至今銘記在心。' }
    ],
    explanation: '形容長輩或師長懇切耐心地反覆教導叮囑，態度懇切慈祥。'
  },
  {
    id: 43,
    word: '憧憧',
    bopomofo: 'ㄔㄨㄥ ㄔㄨㄥ',
    category: '景物自然',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '晃動搖曳、閃爍不定貌', example: '夜半風吹林竹，只見鬼影憧憧、人心惶惶。' }
    ],
    explanation: '形容影子或人群往來晃動、飄忽不定，亦可形容心緒紛雜（心旌憧憧）。'
  },
  {
    id: 44,
    word: '莘莘',
    bopomofo: 'ㄕㄣ ㄕㄣ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '眾多繁盛的樣子', example: '校園裡充滿了朝氣蓬勃的莘莘學子。' }
    ],
    explanation: '注意注音念 ㄕㄣ ㄕㄣ，不可念作 ㄒㄧㄣ ㄒㄧㄣ。「莘莘學子」專指眾多學生。'
  },
  {
    id: 45,
    word: '姍姍',
    bopomofo: 'ㄕㄢ ㄕㄢ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '走路緩慢從容的姿態', example: '會議即將結束，他才姍姍來遲。' }
    ],
    explanation: '《漢書》：「立而望之，偏何姍姍其來遲。」形容從容緩步而來，引申為遲到。'
  },
  {
    id: 46,
    word: '鑿鑿',
    bopomofo: 'ㄗㄠˊ ㄗㄠˊ',
    category: '事理氣勢',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '確實可信、確鑿不移', example: '目擊者言之鑿鑿，證明被告當時確在現場。' }
    ],
    explanation: '「言之鑿鑿」指說話證據確鑿、真實可信，絕非捕風捉影。'
  },
  {
    id: 47,
    word: '熠熠',
    bopomofo: 'ㄧˋ ㄧˋ',
    category: '景物自然',
    isPolysemy: false,
    isStar: true,
    defs: [
      { meaning: '閃亮光耀、明亮耀眼貌', example: '夏夜晴空中，滿天星光熠熠生輝。' }
    ],
    explanation: '形容星光、鑽石或眼眸閃亮發光，注音為 ㄧˋ ㄧˋ。'
  },
  {
    id: 48,
    word: '娓娓',
    bopomofo: 'ㄨㄟˇ ㄨㄟˇ',
    category: '神態舉止',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '談論不倦、生動好聽貌', example: '老爺爺坐在搖椅上，娓娓道來當年的冒險故事。' }
    ],
    explanation: '「娓娓道來」形容說話連續動聽，令人聽得津津有味、不覺厭倦。'
  },
  {
    id: 49,
    word: '鬱鬱',
    bopomofo: 'ㄩˋ ㄩˋ',
    category: '景物自然',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '悶悶不樂、胸懷憂結貌', example: '經歷挫折之後，他鬱鬱寡歡，閉門不出。' },
      { meaning: '茂盛生長、蒼翠之貌', example: '鬱鬱園中柳，青青河畔草。（《古詩十九首》）' }
    ],
    explanation: '兼表自然草木之蓬勃繁茂，與人心情緒之抑鬱寡歡，詩歌中常藉以比興。'
  },
  {
    id: 50,
    word: '曖曖',
    bopomofo: 'ㄞˋ ㄞˋ',
    category: '景物自然',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '昏暗不明、朦朧隱約貌', example: '曖曖遠人村，依依墟里煙。（陶淵明《歸園田居》）' },
      { meaning: '光輝暗藏、不露鋒芒', example: '在涅貴不緇，曖曖內含光。（崔瑗《座右銘》）' }
    ],
    explanation: '《座右銘》經典考題！「曖曖內含光」形容有道德之人內在蘊含光芒而不張揚。'
  },
  {
    id: 51,
    word: '躍躍',
    bopomofo: 'ㄩㄝˋ ㄩㄝˋ',
    category: '情感心緒',
    isPolysemy: true,
    isStar: true,
    defs: [
      { meaning: '心動不定、極想嘗試貌', example: '看見舞台上的演出，他也躍躍欲試。' },
      { meaning: '喜悅高興貌', example: '聞之躍躍以喜，手舞足蹈。' }
    ],
    explanation: '「躍躍欲試」形容心情激動急切，渴望立刻動手一試。'
  },
  {
    id: 52,
    word: '凜凜',
    bopomofo: 'ㄌㄧㄣˇ ㄌㄧㄣˇ',
    category: '事理氣勢',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '態度嚴肅令人敬畏之貌', example: '大將軍跨坐駿馬，神態威風凜凜。' },
      { meaning: '寒冷刺骨之貌', example: '北風呼嘯，冰霜凜凜逼人。' }
    ],
    explanation: '可形容寒氣逼人之嚴冬氣候，亦可形容威嚴不可侵犯之神采儀表。'
  },
  {
    id: 53,
    word: '惶惶',
    bopomofo: 'ㄏㄨㄤˊ ㄏㄨㄤˊ',
    category: '情感心緒',
    isPolysemy: false,
    isStar: false,
    defs: [
      { meaning: '心中惶恐不安、恐懼害怕貌', example: '假消息肆虐引發人心惶惶不可終日。' }
    ],
    explanation: '形容恐慌焦慮之神態，常與「人心惶惶」連用。'
  },
  {
    id: 54,
    word: '耿耿',
    bopomofo: 'ㄍㄥˇ ㄍㄥˇ',
    category: '情感心緒',
    isPolysemy: true,
    isStar: false,
    defs: [
      { meaning: '形容誠信守節、正直正直', example: '諸葛亮輔佐蜀漢，忠心耿耿，鞠躬盡瘁。' },
      { meaning: '心中掛懷、煩躁不安貌', example: '昔日那句無心的話，至今仍讓他耿耿於懷。' }
    ],
    explanation: '「忠心耿耿」形容操守正直堅貞；「耿耿於懷」則形容心有掛念難以釋懷。'
  }
];

// ==========================================
// 圖鑑互動渲染邏輯
// ==========================================
let currentCategory = 'all';
let currentBadge = 'all';
let currentKeyword = '';
let isAllExplOpen = false;

function renderCards() {
  const container = document.getElementById('cardsGrid');
  if (!container) return;
  container.innerHTML = '';

  const filtered = vocabData.filter(item => {
    // 分類過濾
    if (currentCategory !== 'all' && item.category !== currentCategory) return false;
    // 標籤過濾
    if (currentBadge === 'polysemy' && !item.isPolysemy) return false;
    if (currentBadge === 'star' && !item.isStar) return false;
    // 關鍵字搜尋
    if (currentKeyword.trim() !== '') {
      const kw = currentKeyword.trim().toLowerCase();
      const matchWord = item.word.toLowerCase().includes(kw);
      const matchBopomofo = item.bopomofo.toLowerCase().includes(kw);
      const matchExpl = item.explanation.toLowerCase().includes(kw);
      const matchDefs = item.defs.some(d => d.meaning.toLowerCase().includes(kw) || d.example.toLowerCase().includes(kw));
      if (!matchWord && !matchBopomofo && !matchExpl && !matchDefs) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 14px; border: 1px dashed #cbd5e1;">
        <div style="font-size: 3rem; margin-bottom: 0.8rem;">🔍</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #475569; margin-bottom: 0.4rem;">找不到符合條件的疊字詞</h3>
        <p style="font-size: 0.95rem; color: #94a3b8;">請嘗試清除關鍵字或點擊重設條件按鈕</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'vocab-card';
    card.id = `card-${item.id}`;

    let defsHtml = item.defs.map((def, idx) => {
      const highlightedEx = def.example.replace(new RegExp(item.word, 'g'), `<span class="hl-word">${item.word}</span>`);
      return `
        <div class="def-item-box">
          <div class="def-meaning-row">
            <span><span style="color: var(--primary); margin-right: 4px;">${idx + 1}.</span> ${def.meaning}</span>
          </div>
          <div class="def-example-row">
            <span style="font-weight: 700; color: #64748b; font-size: 0.82rem;">【例】</span>${highlightedEx}
          </div>
        </div>
      `;
    }).join('');

    let badgesHtml = '';
    if (item.isPolysemy) {
      badgesHtml += `<span class="badge-polysemy">★ 多義疊字</span>`;
    }
    if (item.isStar) {
      badgesHtml += `<span class="badge-star">★ 會考重點</span>`;
    }

    card.innerHTML = `
      <div class="card-top-row">
        <div class="card-word-group">
          <span class="card-word serif">${item.word}</span>
          <span class="card-bopomofo">${item.bopomofo}</span>
        </div>
        <span class="card-category-tag">${item.category}</span>
      </div>

      ${badgesHtml ? `<div class="card-badge-row">${badgesHtml}</div>` : ''}

      <div class="card-definitions-list">
        ${defsHtml}
      </div>

      <div class="card-toggle-expl-box">
        <button class="btn-toggle-expl" onclick="toggleCardExpl(${item.id})">
          <i data-lucide="info" style="width:14px;"></i> <span id="expl-btn-text-${item.id}">查看考點解析</span>
        </button>
        <div class="card-expl-content" id="expl-content-${item.id}">
          <b>【會考考點解析】</b>${item.explanation}
        </div>
      </div>

      <div class="card-actions-bar">
        <button class="btn-tts" onclick="speakCard(${item.id})">
          <i data-lucide="volume-2" style="width:15px;"></i> 語音朗讀
        </button>
        <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 600;">#${item.id}</span>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

function toggleCardExpl(id) {
  const content = document.getElementById(`expl-content-${id}`);
  const btnText = document.getElementById(`expl-btn-text-${id}`);
  if (!content) return;
  if (content.style.display === 'block') {
    content.style.display = 'none';
    btnText.textContent = '查看考點解析';
  } else {
    content.style.display = 'block';
    btnText.textContent = '隱藏考點解析';
  }
}

function toggleAllExplanations() {
  isAllExplOpen = !isAllExplOpen;
  const btn = document.getElementById('btn-toggle-all-expl');
  vocabData.forEach(item => {
    const content = document.getElementById(`expl-content-${item.id}`);
    const btnText = document.getElementById(`expl-btn-text-${item.id}`);
    if (content) {
      content.style.display = isAllExplOpen ? 'block' : 'none';
      if (btnText) btnText.textContent = isAllExplOpen ? '隱藏考點解析' : '查看考點解析';
    }
  });
  btn.innerHTML = isAllExplOpen
    ? `<i data-lucide="eye-off" style="width:15px;"></i> 一鍵隱藏全部考點解析`
    : `<i data-lucide="eye" style="width:15px;"></i> 一鍵揭曉全部考點解析`;
  lucide.createIcons();
}

function filterByCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.compass-card').forEach(el => el.classList.remove('active'));
  const cardMap = {
    'all': 0, '景物自然': 1, '情感心緒': 2, '神態舉止': 3, '事理氣勢': 4
  };
  const cards = document.querySelectorAll('.compass-grid .compass-card');
  if (cards[cardMap[cat]]) cards[cardMap[cat]].classList.add('active');
  renderCards();
}

function filterByBadge(badge) {
  currentBadge = (currentBadge === badge) ? 'all' : badge;
  renderCards();
}

function handleSearch() {
  currentKeyword = document.getElementById('searchInput').value;
  renderCards();
}

function resetFilters() {
  currentCategory = 'all';
  currentBadge = 'all';
  currentKeyword = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.compass-card').forEach(el => el.classList.remove('active'));
  document.querySelector('.compass-card').classList.add('active');
  renderCards();
}

// ==========================================
// 全真真人語音 TTS (Web Speech API)
// ==========================================
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert('您的瀏覽器不支援語音朗讀功能！');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

function speakCard(id) {
  const item = vocabData.find(x => x.id === id);
  if (!item) return;
  let textToRead = `${item.word}。${item.bopomofo}。`;
  item.defs.forEach((d, idx) => {
    textToRead += `第${idx + 1}義：${d.meaning}。例句：${d.example}。`;
  });
  speakText(textToRead);
}

// ==========================================
// 詩境魔法創作工坊 (Interactive Workshop)
// ==========================================
const workshopScenes = {
  gushi: {
    title: '《古詩十九首》情思',
    words: ['迢迢', '皎皎', '纖纖', '札札', '盈盈', '脈脈', '鬱鬱', '青青'],
    templates: {
      '迢迢': {
        verse: '迢迢牽牛星，皎皎河漢女。',
        analysis: '【相思迢遞】描繪牛郎織女隔河遠望，空間之修遠映襯內心相思之深切悠長。'
      },
      '皎皎': {
        verse: '皎皎河漢女，微霜浸玉階。',
        analysis: '【冰清玉潔】以皎潔銀河與織女明眸互相輝映，象徵純潔忠貞無瑕之相守。'
      },
      '纖纖': {
        verse: '纖纖擢素手，札札弄機杼。',
        analysis: '【柔荑弄梭】生動刻畫思婦白皙柔長之手指翻飛弄機，動作優雅卻蘊含無奈。'
      },
      '札札': {
        verse: '札札弄機杼，更深人未眠。',
        analysis: '【機杼聲碎】重疊的織布機聲，既是寫實之聲景，更敲擊著深夜孤獨愁懷。'
      },
      '盈盈': {
        verse: '盈盈一水間，脈脈不得語。',
        analysis: '【秋水脈脈】形容一泓清澈如注的銀河之水，咫尺天涯，含蓄深婉。'
      },
      '脈脈': {
        verse: '脈脈不得語，凝眸向碧天。',
        analysis: '【含情不語】描摹深情凝視、心照不宣而難以言表的哀怨神態。'
      },
      '鬱鬱': {
        verse: '鬱鬱園中柳，青青河畔草。',
        analysis: '【草木繁榮】以春日繁盛茂密之柳色，反襯出遊子未歸、青春易逝的感傷。'
      },
      '青青': {
        verse: '青青河畔草，綿綿思遠道。',
        analysis: '【春色連綿】河畔青草鋪展無垠，象徵思念之情如同青草般生生不息、綿延天涯。'
      }
    }
  },
  landscape: {
    title: '壯闊山川與行旅',
    words: ['滔滔', '蒼蒼', '茫茫', '洋洋', '悠悠', '冉冉'],
    templates: {
      '滔滔': {
        verse: '大江滔滔奔東海，滾滾煙塵照古今。',
        analysis: '【水勢滾滾】極力摹擬江流奔騰之氣勢，象徵時光流逝與歷史滄桑無可挽回。'
      },
      '蒼蒼': {
        verse: '蒹葭蒼蒼露如霜，孤帆遠影水雲長。',
        analysis: '【山水蒼茫】以蒼翠茂密之草木與浩瀚水天，營造出行客追尋理想的悠遠情境。'
      },
      '茫茫': {
        verse: '野曠天低樹，江清月近人；暮色茫茫何處家。',
        analysis: '【天地蒼渺】廣大無邊之夜色中，突顯行旅異鄉孤獨無助的心緒。'
      },
      '洋洋': {
        verse: '河水洋洋東逝水，壯士慷慨展風雲。',
        analysis: '【浩蕩長流】描摹大水浩渺壯闊，賦予詩人吞吐天地、意氣奮發的胸襟。'
      },
      '悠悠': {
        verse: '念天地之悠悠，獨愴然而涕下。',
        analysis: '【千古浩嘆】陳子昂登幽州臺名句，以時空之無限對比個體生命之短暫渺小。'
      },
      '冉冉': {
        verse: '落日冉冉墜荒巒，殘霞斜照大江邊。',
        analysis: '【時光推移】緩緩降落之落日，傳遞出歲月不居、時不我待的從容與沉靜。'
      }
    }
  },
  scholar: {
    title: '文人雅士與性靈',
    words: ['楚楚', '翩翩', '栩栩', '諄諄', '耿耿', '曖曖'],
    templates: {
      '楚楚': {
        verse: '衣冠楚楚臨風立，一片清光透素琴。',
        analysis: '【儀表整肅】描寫文人君子衣著端莊鮮明、高雅自持之名士風采。'
      },
      '翩翩': {
        verse: '翩翩公子度若雲，落筆生花萬卷春。',
        analysis: '【瀟灑儒雅】描寫才俊舉止灑脫靈動，如雲舒捲，才華橫溢。'
      },
      '栩栩': {
        verse: '莊周栩栩化飛蝶，寄意紅塵天地寬。',
        analysis: '【逍遙化境】莊周夢蝶之神韻，象徵超脫世俗紛擾、物我兩忘之最高心靈境界。'
      },
      '諄諄': {
        verse: '夫子諄諄傳大道，杏壇風化化千秋。',
        analysis: '【長者垂範】描摹師長耐心教誨、循循善誘，如同春風化雨般潤澤學子心田。'
      },
      '耿耿': {
        verse: '忠心耿耿照日月，寸丹長寄報明君。',
        analysis: '【高風亮節】表現志士仁人堅貞不屈、光明磊落、至死不渝之愛國節操。'
      },
      '曖曖': {
        verse: '曖曖內含光自守，不爭喧鬧自成芳。',
        analysis: '【韜光養晦】崔瑗《座右銘》精神，君子內在德性輝耀卻深藏若虛，不露鋒芒。'
      }
    }
  }
};

let selectedSceneKey = 'gushi';
let selectedWord = '迢迢';

function selectWorkshopScene(sceneKey) {
  selectedSceneKey = sceneKey;
  document.querySelectorAll('.step-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(`scene-btn-${sceneKey}`);
  if (btn) btn.classList.add('active');

  const scene = workshopScenes[sceneKey];
  selectedWord = scene.words[0];
  renderWorkshopWordPicker();
  updateWorkshopOutput();
}

function renderWorkshopWordPicker() {
  const picker = document.getElementById('workshopWordPicker');
  if (!picker) return;
  picker.innerHTML = '';
  const scene = workshopScenes[selectedSceneKey];

  scene.words.forEach(word => {
    const chip = document.createElement('div');
    chip.className = `pick-chip ${word === selectedWord ? 'active' : ''}`;
    chip.textContent = word;
    chip.onclick = () => {
      selectedWord = word;
      renderWorkshopWordPicker();
      updateWorkshopOutput();
    };
    picker.appendChild(chip);
  });
}

function updateWorkshopOutput() {
  const scene = workshopScenes[selectedSceneKey];
  const data = scene.templates[selectedWord];
  const verseEl = document.getElementById('workshopVerse');
  const analysisEl = document.getElementById('workshopAnalysis');

  const highlighted = data.verse.replace(
    new RegExp(selectedWord, 'g'),
    `<span style="color: var(--primary); text-decoration: underline;">${selectedWord}</span>`
  );

  verseEl.innerHTML = highlighted;
  analysisEl.innerHTML = data.analysis;
}

function speakWorkshopVerse() {
  const scene = workshopScenes[selectedSceneKey];
  const data = scene.templates[selectedWord];
  speakText(`${data.verse}。${data.analysis}`);
}

// ==========================================
// 會考神仙挑戰賽 (10 題高頻診斷題庫)
// ==========================================
const quizQuestions = [
  {
    id: 1,
    source: '《古詩十九首》經典名句考題',
    stem: '在《古詩十九首》「迢迢牽牛星，皎皎河漢女。纖纖擢素手，札札弄機杼」中，關於疊字詞的說明何者「錯誤」？',
    options: [
      'A. 「迢迢」形容牽牛星路途遙遠的樣子',
      'B. 「皎皎」形容河漢女明亮潔白的容顏與星光',
      'C. 「纖纖」描繪女子手指纖細柔長之態',
      'D. 「札札」形容織布機聲，屬於形容走路腳步輕快的詞語'
    ],
    answer: 3,
    explanation: '正確答案為 (D)。「札札」為象聲詞，摹擬織布機梭子穿梭運轉之聲，並非形容走路腳步輕快；形容走路輕盈者為「翩翩」或「姍姍」。'
  },
  {
    id: 2,
    source: '橘老師開唱・疊字詞避坑診斷題',
    stem: '下列文句中的疊字詞，何者「屬於」擬摹聲音的狀聲詞？',
    options: [
      'A. 取得一點成就便「沾沾」自喜，終難成大器',
      'B. 滿山林木鬱閉，只聽得山鳥「格格」價飛',
      'C. 面對突如其來的考驗，全體職員憂心「忡忡」',
      'D. 山澗「涓涓」細流，滋潤了乾涸的原野'
    ],
    answer: 1,
    explanation: '正確答案為 (B)。(B)「格格」為狀聲詞，形容鳥鳴之聲；(A)「沾沾」形容暗自得意自滿；(C)「忡忡」形容心憂恐懼；(D)「涓涓」形容細水慢流貌，皆非狀聲詞。'
  },
  {
    id: 3,
    source: '歷屆會考高頻多義辨析題',
    stem: '下列各選項「 」中的「悠悠」，何者詞義與其他三者「不同」？',
    options: [
      'A. 念天地之「悠悠」，獨愴然而涕下',
      'B. 「悠悠」我心，豈無他人',
      'C. 白雲千載空「悠悠」，黃鶴一去不復返',
      'D. 荒煙蔓草，「悠悠」歲月不知流向何方'
    ],
    answer: 1,
    explanation: '正確答案為 (B)。(B)「悠悠我心」之「悠悠」形容憂思長久深切；而 (A)、(C)、(D) 皆指時間或空間渺遠無盡、悠遠長久之貌。'
  },
  {
    id: 4,
    source: '《論語》經典文句疊字題',
    stem: '孔子曾言：「君子坦蕩蕩，小人長戚戚。」句中「坦蕩蕩」與「戚戚」的對比，意在說明什麼？',
    options: [
      'A. 君子居處寬敞高大，小人居處逼仄寒酸',
      'B. 君子心胸光明磊落，小人常懷憂慮、患得患失',
      'C. 君子言行緩慢從容，小人行事急躁衝動',
      'D. 君子地位尊貴顯赫，小人命運悲慘淒苦'
    ],
    answer: 1,
    explanation: '正確答案為 (B)。「坦蕩蕩」指平坦寬廣，比喻心胸光明正大、坦然無私；「戚戚」指心懷憂懼、私念多而患得患失。'
  },
  {
    id: 5,
    source: '多義字「耿耿」語境判讀題',
    stem: '下列各文句中的「耿耿」，何者與「耿耿於懷」的「耿耿」意思相同？',
    options: [
      'A. 諸葛武侯忠心「耿耿」，鞠躬盡瘁死而後已',
      'B. 那件未解的懸案始終讓他夜不能寐，心懷「耿耿」',
      'C. 關羽義薄雲天，其「耿耿」忠烈之氣照耀青史',
      'D. 岳飛精忠報國，「耿耿」丹心日月可鑒'
    ],
    answer: 1,
    explanation: '正確答案為 (B)。題幹「耿耿於懷」與 (B) 之「耿耿」皆指心有掛懷、煩躁不安之態；(A)、(C)、(D) 皆指誠信守節、忠貞剛正之義。'
  },
  {
    id: 6,
    source: '名篇《座右銘》經典成語題',
    stem: '崔瑗《座右銘》名句「在涅貴不緇，曖曖內含光」，其中「曖曖」一詞的意涵為何？',
    options: [
      'A. 昏暗無光，形容人糊塗愚昧',
      'B. 閃爍發亮，形容才華鋒芒畢露',
      'C. 表面含蓄內藏光芒，形容君子自持而不耀眼於外',
      'D. 閃爍不定，形容人行事鬼祟心懷不軌'
    ],
    answer: 2,
    explanation: '正確答案為 (C)。「曖曖」本義為昏暗不明，在此引申為光輝內藏、隱而不揚之貌，形容才德深藏若虛、謙沖自牧。'
  },
  {
    id: 7,
    source: '形音義與疊字讀音檢測題',
    stem: '下列文句中的疊字詞，其注音何者完全正確？',
    options: [
      'A. 果園中碩果「纍纍」：ㄌㄟˇ ㄌㄟˇ',
      'B. 校園裡充滿「莘莘」學子：ㄒㄧㄣ ㄒㄧㄣ',
      'C. 行行「鄙」夫志：ㄏㄤˋ ㄅㄧˇ',
      'D. 星光「熠熠」生輝：ㄒㄧˊ ㄒㄧˊ'
    ],
    answer: 2,
    explanation: '正確答案為 (C)。(A)「纍纍」注音為 ㄌㄟˊ ㄌㄟˊ；(B)「莘莘」注音為 ㄕㄣ ㄕㄣ；(C)「行行」剛強貌注音 ㄏㄤˋ 正確；(D)「熠熠」注音為 ㄧˋ ㄧˋ。'
  },
  {
    id: 8,
    source: '字義辨析・「洋洋」情境題',
    stem: '下列文句中的「洋洋」，何者用來形容「水勢盛大」？',
    options: [
      'A. 他在演講台上表現出色，引得全場意氣「洋洋」',
      'B. 這部歷史大劇格局宏大，氣象「洋洋」大觀',
      'C. 他考取第一志願後，整天「洋洋」得意',
      'D. 大江東流，「洋洋」浩蕩，奔騰入海'
    ],
    answer: 3,
    explanation: '正確答案為 (D)。(D)「洋洋」浩蕩形容水勢廣大壯闊；(A)與(C)形容心滿意足、得意之態；(B)「洋洋大觀」形容豐富繁多之態。'
  },
  {
    id: 9,
    source: '姿態神韻疊字辨析題',
    stem: '「那位少年舉止瀟灑，風度＿＿；在舞會中步態輕盈，起舞＿＿。」空格處最適合填入哪一組疊字詞？',
    options: [
      'A. 亭亭／姍姍',
      'B. 翩翩／翩翩',
      'C. 楚楚／款款',
      'D. 栩栩／星星'
    ],
    answer: 1,
    explanation: '正確答案為 (B)。「翩翩」既可形容舉止瀟灑、文雅有致（風度翩翩），亦可形容動作輕快飛揚（翩翩起舞），為經典雙關詞。'
  },
  {
    id: 10,
    source: '會考綜合題・語意正確性檢定',
    stem: '下列各文句「 」中疊字詞的運用，何者最為「恰當」？',
    options: [
      'A. 面對老人的求救，他「悻悻」然熱心伸出援手',
      'B. 他做事向來光明正大，心中的念頭「空蕩蕩」的毫無罣礙',
      'C. 老師幾番「諄諄」教誨，終於喚醒了迷途的學子',
      'D. 剛升上七年級的弟弟，成天為升學感到「沾沾」自喜'
    ],
    answer: 2,
    explanation: '正確答案為 (C)。(A)「悻悻然」為憤恨不平貌，與熱心援助矛盾；(B)光明正大應作「坦蕩蕩」；(C)「諄諄」教誨運用精準恰當；(D)為升學憂慮不可用表示自滿的「沾沾自喜」。'
  }
];

let currentQIndex = 0;
let quizScore = 0;

function renderQuestion() {
  const q = quizQuestions[currentQIndex];
  document.getElementById('quiz-progress-text').textContent = `第 ${currentQIndex + 1} / ${quizQuestions.length} 題`;
  document.getElementById('quiz-score-badge').textContent = `當前得分：${quizScore} 分`;

  const pct = (currentQIndex / quizQuestions.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = `${pct}%`;

  document.getElementById('q-source-tag').textContent = q.source;
  document.getElementById('q-stem').textContent = q.stem;

  const optsContainer = document.getElementById('q-options-grid');
  optsContainer.innerHTML = '';

  q.options.forEach((optText, idx) => {
    const btn = document.createElement('button');
    btn.className = 'q-opt-btn';
    btn.textContent = optText;
    btn.onclick = () => handleSelectOption(idx);
    optsContainer.appendChild(btn);
  });

  document.getElementById('q-explanation-box').style.display = 'none';
  document.getElementById('btn-next-question').style.display = 'none';
}

function handleSelectOption(selectedIdx) {
  const q = quizQuestions[currentQIndex];
  const optBtns = document.querySelectorAll('.q-opt-btn');

  optBtns.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  const isCorrect = (selectedIdx === q.answer);
  if (isCorrect) {
    quizScore += 10;
    document.getElementById('quiz-score-badge').textContent = `當前得分：${quizScore} 分`;
  }

  const expBox = document.getElementById('q-explanation-box');
  expBox.innerHTML = `
    <div style="font-weight: 800; margin-bottom: 6px; color: ${isCorrect ? '#15803d' : '#b91c1c'};">
      ${isCorrect ? '🎉 答對了！' : '❌ 答錯囉！'}
    </div>
    <div>${q.explanation}</div>
  `;
  expBox.style.display = 'block';

  const nextBtn = document.getElementById('btn-next-question');
  if (currentQIndex < quizQuestions.length - 1) {
    nextBtn.innerHTML = `下一題 <i data-lucide="arrow-right" style="width:16px;"></i>`;
  } else {
    nextBtn.innerHTML = `查看結算成績 <i data-lucide="award" style="width:16px;"></i>`;
  }
  nextBtn.style.display = 'inline-flex';
  lucide.createIcons();
}

function handleNextQuestion() {
  if (currentQIndex < quizQuestions.length - 1) {
    currentQIndex++;
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById('quiz-card-box').style.display = 'none';
  document.querySelector('.quiz-stats-header').style.display = 'none';
  document.querySelector('.quiz-bar-outer').style.display = 'none';

  const resultView = document.getElementById('quiz-result-view');
  resultView.style.display = 'block';

  document.getElementById('result-final-score').textContent = `${quizScore} 分`;

  const badgeIcon = document.getElementById('result-badge-icon');
  const comment = document.getElementById('result-comment');

  if (quizScore === 100) {
    badgeIcon.textContent = '👑';
    comment.textContent = '神乎其技！滿分通過！你已經徹底掌握國中段考與會考所有疊字詞重點考點！';
  } else if (quizScore >= 80) {
    badgeIcon.textContent = '🌟';
    comment.textContent = '表現優異！對疊字詞有極深刻的理解，再複習一下多義疊字對決就無懈可擊了！';
  } else if (quizScore >= 60) {
    badgeIcon.textContent = '💪';
    comment.textContent = '順利及格！多留意「疊字詞≠狀聲詞」與「悠悠、耿耿」等多義考點喔！';
  } else {
    badgeIcon.textContent = '📖';
    comment.textContent = '加油！建議回到上方「典範圖鑑」多聽幾次語音並詳讀橘老師解題避坑指南！';
  }
}

function restartQuiz() {
  currentQIndex = 0;
  quizScore = 0;

  document.getElementById('quiz-card-box').style.display = 'block';
  document.querySelector('.quiz-stats-header').style.display = 'flex';
  document.querySelector('.quiz-bar-outer').style.display = 'block';
  document.getElementById('quiz-result-view').style.display = 'none';

  renderQuestion();
}

// ==========================================
// 練習神器切換邏輯
// ==========================================
function switchPracticeTab(type) {
  const tabWords = document.getElementById('tab-words');
  const tabIdioms = document.getElementById('tab-idioms');
  const iframe = document.getElementById('practiceIframe');
  const openBtn = document.getElementById('btnOpenNewTab');

  if (type === 'words') {
    tabWords.classList.add('active');
    tabIdioms.classList.remove('active');
    iframe.src = 'reduplication/reduplication-words-practice.html';
    openBtn.href = 'reduplication/reduplication-words-practice.html';
    openBtn.innerHTML = '<i data-lucide="external-link" style="width:16px;"></i> 另開新視窗全螢幕練習 [疊字詞]';
  } else {
    tabIdioms.classList.add('active');
    tabWords.classList.remove('active');
    iframe.src = 'reduplication/reduplication-idioms-practice.html';
    openBtn.href = 'reduplication/reduplication-idioms-practice.html';
    openBtn.innerHTML = '<i data-lucide="external-link" style="width:16px;"></i> 另開新視窗全螢幕練習 [疊字成語]';
  }
  lucide.createIcons();
}

// 頁面初次加載
window.addEventListener('DOMContentLoaded', () => {
  renderCards();
  selectWorkshopScene('gushi');
  renderQuestion();
});
