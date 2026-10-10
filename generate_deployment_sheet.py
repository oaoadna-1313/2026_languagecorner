# -*- coding: utf-8 -*-
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import csv

data = [
    # 序號, 單元分類, 單元名稱, 對應課文/範疇, 檔案相對路徑, GitHub_Pages線上網址, 核心功能特色
    [
        1, "總入口網頁", "學思軒・語文補給站 數位互動教材總入口", "全站總導覽・全資源索引",
        "index.html", "https://oaoadna-1313.github.io/2026_languagecorner/index.html",
        "整合11大旗艦殿堂與23款練習神器、關鍵字即時搜尋、跨載具自適應"
    ],
    [
        2, "旗艦學習殿堂", "「賓語提前」倒裝句法旗艦殿堂", "翰林國文 B3L04《愛蓮說》",
        "inversion.html", "https://oaoadna-1313.github.io/2026_languagecorner/inversion.html",
        "刺蝟口訣、五步還原法、16組典範圖鑑(全真人語音)、魔法工坊、會考挑戰賽"
    ],
    [
        3, "旗艦學習殿堂", "移覺（通感）修辭互動學習殿堂", "翰林國文 B3L01《田園之秋選》",
        "yijay.html", "https://oaoadna-1313.github.io/2026_languagecorner/yijay.html",
        "五感羅盤互動、30句典範圖鑑(真人語音)、造句魔法工坊、會考實戰闖關"
    ],
    [
        4, "旗艦學習殿堂", "時序之美：傳統節日與二十四節氣殿堂", "國學常識・跨科天文曆法",
        "holiday.html", "https://oaoadna-1313.github.io/2026_languagecorner/holiday.html",
        "曆法大解密、10大傳統節日深度探索、20題詩詞密碼獵手、會考神射手測驗"
    ],
    [
        5, "旗艦學習殿堂", "詞類與詞性・AI 互動學習殿堂", "翰林國文 語文常識（一）",
        "pos.html", "https://oaoadna-1313.github.io/2026_languagecorner/pos.html",
        "字詞句層級、實詞虛詞全圖鑑、複詞音韻探索、100題流行歌詞庫(真人語音)"
    ],
    [
        6, "旗艦學習殿堂", "花花語文世界：植物象徵・名花物語旗艦殿堂", "翰林國文 B3L04《愛蓮說》",
        "flower.html", "https://oaoadna-1313.github.io/2026_languagecorner/flower.html",
        "9大植物象徵圖鑑(真人語音)、5大名花代言人、幽夢影知己圖譜、人比花嬌是非辨析、會考挑戰賽、造句工坊"
    ],
    [
        7, "旗艦學習殿堂", "中外俗諺大觀園・旗艦學習殿堂", "翰林國文 B3L05《生命中的碎珠》",
        "proverb.html", "https://oaoadna-1313.github.io/2026_languagecorner/proverb.html",
        "36組中外俗諺全圖鑑(真人語音)、抽喻體解題三部曲、文化星盤、尋伴工坊、會考神射手測驗"
    ],
    [
        8, "旗艦學習殿堂", "萬籟俱寂・聲歷其境——狀聲詞旗艦學習殿堂", "翰林國文 B3L06《鳥》",
        "onomatopoeia.html", "https://oaoadna-1313.github.io/2026_languagecorner/onomatopoeia.html",
        "45+組典範聲景圖鑑(全真人語音)、橘老師開唱解題避坑指南、古典聲景魔法工坊、會考神仙挑戰賽"
    ],
    [
        9, "旗艦學習殿堂", "五彩斑斕——顏色字判斷旗艦學習殿堂", "翰林國文 B3L06《鳥》",
        "color.html", "https://oaoadna-1313.github.io/2026_languagecorner/color.html",
        "103組顏色字全圖鑑(全真人語音)、實指非指雙色對比、五大色系文化羅盤、會考神仙挑戰賽、專屬練習神器內嵌"
    ],
    [
        10, "旗艦學習殿堂", "詩中的鳥類・古典禽鳥意象旗艦殿堂", "翰林國文 B3L06《鳥》",
        "bird.html", "https://oaoadna-1313.github.io/2026_languagecorner/bird.html",
        "52種古典詩詞禽鳥圖鑑(全真人語音)、八大文化象徵星盤、15字極簡速記口訣卡、神仙挑戰賽"
    ],
    [
        11, "旗艦學習殿堂", "疊字詞・聲情神采與疊韻之美旗艦殿堂", "翰林國文 B3L02《古詩選》",
        "reduplication.html", "https://oaoadna-1313.github.io/2026_languagecorner/reduplication.html",
        "54組經典疊字詞全圖鑑(全真人語音)、多義疊字深度對決、五大情意星盤、橘老師開唱解題避坑指南、詩境魔法工坊、會考神仙挑戰賽、專屬練習神器內嵌"
    ],
    [
        12, "旗艦學習殿堂", "古典詩境・詩詞表現手法與常見意象殿堂", "翰林國文 B3L02《古詩選》",
        "poetry.html", "https://oaoadna-1313.github.io/2026_languagecorner/poetry.html",
        "六大表現手法解構、四大維度51款古典意象(全真人語音)、詩境造景工坊、會考挑戰賽、雙款練習神器"
    ],
    [
        13, "專屬練習神器", "詩詞表現手法練習神器", "翰林國文 B3L02《古詩選》",
        "poetry/poetry-technique-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/poetry/poetry-technique-practice.html",
        "41句古典詩詞名句、六大表現手法3D雙面翻卡特訓、即時測驗解析、個人錯題本"
    ],
    [
        14, "專屬練習神器", "詩詞常見意象練習神器(51款意象版)", "翰林國文 B3L02《古詩選》",
        "poetry/poetry-imagery-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/poetry/poetry-imagery-practice.html",
        "51款經典詩詞意象與象徵意涵、雙向翻卡記憶、快速快問快答、錯題精準強化"
    ],
    [
        15, "專屬練習神器", "疊字詞練習神器", "翰林國文 B3L02《古詩選》",
        "reduplication/reduplication-words-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/reduplication/reduplication-words-practice.html",
        "101組課內外經典疊字詞、3D雙面翻卡特訓、即時測驗解析、全卷大卷瀏覽、LocalStorage錯題本"
    ],
    [
        16, "專屬練習神器", "疊字成語練習神器", "翰林國文 B3L02《古詩選》",
        "reduplication/reduplication-idioms-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/reduplication/reduplication-idioms-practice.html",
        "95組AABB會考高頻疊字成語、雙面翻卡、釋義測驗、情境例句、錯題本特訓"
    ],
    [
        17, "專屬練習神器", "詩中的鳥類練習神器", "翰林國文 B3L06《鳥》",
        "bird/bird-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/bird/bird-practice.html",
        "52種古典詩詞禽鳥意象、3D雙面翻卡特訓、快問快答、全卷瀏覽、個人錯題本"
    ],
    [
        18, "專屬練習神器", "節慶（詩詞句）練習神器", "國學常識・節令文化",
        "holiday/festival-poems.html", "https://oaoadna-1313.github.io/2026_languagecorner/holiday/festival-poems.html",
        "傳統節日經典詩詞配對、會考高頻詩句辨析、拖曳互動"
    ],
    [
        19, "專屬練習神器", "二十四節氣練習神器", "自然時序・節氣文化",
        "holiday/24-solar-terms.html", "https://oaoadna-1313.github.io/2026_languagecorner/holiday/24-solar-terms.html",
        "二十四節氣四季排序、季節物候特徵辨析"
    ],
    [
        20, "專屬練習神器", "季節（關鍵字詞）練習神器", "季節詞彙辨析",
        "holiday/season-keywords.html", "https://oaoadna-1313.github.io/2026_languagecorner/holiday/season-keywords.html",
        "花卉氣候動植物關鍵線索抓取、快速解題特訓"
    ],
    [
        21, "專屬練習神器", "季節（相關詞句）練習神器", "名句鑑賞・時序判讀",
        "holiday/season-verses.html", "https://oaoadna-1313.github.io/2026_languagecorner/holiday/season-verses.html",
        "歷代名篇佳句鑑賞、四時景物描寫語感養成"
    ],
    [
        22, "專屬練習神器", "移覺（通感）修辭練習神器", "核心修辭特訓",
        "yijay/synesthesia-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/yijay/synesthesia-practice.html",
        "30組感官轉換試題、感官互移判定、手感記憶特訓"
    ],
    [
        23, "專屬練習神器", "「賓語提前」倒裝句練習神器", "翰林國文 B3L04《愛蓮說》",
        "inversion/inversion-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/inversion/inversion-practice.html",
        "3D雙面翻卡特訓、高誘答力闖關測驗、公式秘笈隨身查"
    ],
    [
        24, "專屬練習神器", "花花語文世界專屬練習神器", "翰林國文 B3L04《愛蓮說》",
        "flower/flower-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/flower/flower-practice.html",
        "26組3D雙面翻卡特訓、名花知己連連看配對、人比花嬌是非快打、錯題收藏本"
    ],
    [
        25, "專屬練習神器", "詩詞常見意象練習神器(36大意象版)", "國學常識・詩詞意象",
        "flower/poetry-imagery.html", "https://oaoadna-1313.github.io/2026_languagecorner/flower/poetry-imagery.html",
        "36大常見意象、翻卡記憶、意象測驗、詩詞測驗、智慧錯題本"
    ],
    [
        26, "專屬練習神器", "中外俗諺對照練習神器", "翰林國文 B3L05《生命中的碎珠》",
        "proverb/proverb-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/proverb/proverb-practice.html",
        "36組3D雙面翻卡特訓、隨機10題闖關測驗、中外俗諺對照全覽表"
    ],
    [
        27, "專屬練習神器", "古文格言練習神器", "國學常識・經典名言",
        "proverb/proverb-aphorism.html", "https://oaoadna-1313.github.io/2026_languagecorner/proverb/proverb-aphorism.html",
        "歷代經典古文格言、3D雙面翻卡、白話翻譯、核心道理闡釋、錯題特訓"
    ],
    [
        28, "專屬練習神器", "狀聲詞練習神器", "翰林國文 B3L06《鳥》",
        "onomatopoeia/onomatopoeia-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/onomatopoeia/onomatopoeia-practice.html",
        "62組3D雙面翻卡特訓、四選一釋義測驗、語句填空挑戰、LocalStorage錯題本"
    ],
    [
        29, "專屬練習神器", "顏色字判斷練習神器", "翰林國文 B3L06《鳥》",
        "color/color-practice.html", "https://oaoadna-1313.github.io/2026_languagecorner/color/color-practice.html",
        "98組3D雙面翻卡特訓、快問快答測驗、大卷練習、LocalStorage錯題本"
    ],
    [
        30, "跨庫整合神器", "同義反義偏義複詞練習神器", "複詞構造・規則判斷",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-compound-words.html",
        "偏義複詞重點突破、同義反義構詞判斷"
    ],
    [
        31, "跨庫整合神器", "量詞運用練習神器", "計量單位・語法搭配",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-classifiers.html",
        "名量詞動量詞精準搭配、生活與古漢語量詞"
    ],
    [
        32, "跨庫整合神器", "連接詞運用練習神器", "複句關係・邏輯關聯",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-conjunctions.html",
        "因果轉折遞進條件關聯詞選用、邏輯銜接強化"
    ],
    [
        33, "跨庫整合神器", "詞性判斷練習神器", "實詞虛詞・精準定位",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-part-of-speech.html",
        "十大詞性精準定位、實詞虛詞文法判定"
    ],
    [
        34, "跨庫整合神器", "詞性活用判斷練習神器", "轉品活用・文言解析",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-pos-inflection.html",
        "名詞作動詞形容詞作動詞、文言位置決定詞性"
    ],
    [
        35, "跨庫整合神器", "詞性結構判斷練習神器", "四字成語・結構拆解",
        "(practicetools)", "https://oaoadna-1313.github.io/2026_practicetools/yuwen-practice/yuwen-pos-structure.html",
        "名動名動副形副形等成語結構快速分析"
    ]
]

headers = ["序號", "單元分類", "單元名稱", "對應課文/範疇", "檔案相對路徑", "GitHub_Pages線上網址", "核心功能特色"]

# 1. 輸出 CSV (帶 UTF-8 BOM，方便 Excel 直接點擊開啟不亂碼)
csv_filename = "語文補給站_教材部署清單總覽.csv"
with open(csv_filename, "w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(headers)
    for row in data:
        writer.writerow(row)
print("CSV generated successfully.")

# 2. 輸出格式精緻的 XLSX
xlsx_filename = "語文補給站_教材部署清單總覽.xlsx"
wb = openpyxl.Workbook()
ws = wb.active
ws.title = "教材部署清單"

# 啟用網格線
ws.views.sheetView[0].showGridLines = True

# 樣式定義
font_family = "微軟正黑體"
header_font = Font(name=font_family, size=11, bold=True, color="FFFFFF")
header_fill = PatternFill(start_color="1E3A8A", end_color="1E3A8A", fill_type="solid") # 深海軍藍

data_font = Font(name=font_family, size=10, color="1E293B")
data_font_bold = Font(name=font_family, size=10, bold=True, color="0F172A")
link_font = Font(name=font_family, size=10, color="2563EB", underline="single")

# 分類底色
fill_portal = PatternFill(start_color="FEF3C7", end_color="FEF3C7", fill_type="solid")    # 暖琥珀
fill_flagship = PatternFill(start_color="EFF6FF", end_color="EFF6FF", fill_type="solid")  # 淺天藍
fill_practice = PatternFill(start_color="ECFDF5", end_color="ECFDF5", fill_type="solid")  # 淺薄荷綠
fill_cross = PatternFill(start_color="F5F3FF", end_color="F5F3FF", fill_type="solid")     # 淺紫

thin_border_side = Side(style="thin", color="CBD5E1")
cell_border = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)

# 寫入標題列
ws.row_dimensions[1].height = 28
for col_idx, header in enumerate(headers, 1):
    cell = ws.cell(row=1, column=col_idx, value=header)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    cell.border = cell_border

# 寫入資料列
for r_idx, row_values in enumerate(data, 2):
    ws.row_dimensions[r_idx].height = 22
    category = row_values[1]
    
    # 分類配色
    cat_fill = None
    if category == "總入口網頁":
        cat_fill = fill_portal
    elif category == "旗艦學習殿堂":
        cat_fill = fill_flagship
    elif category == "專屬練習神器":
        cat_fill = fill_practice
    elif category == "跨庫整合神器":
        cat_fill = fill_cross

    for c_idx, val in enumerate(row_values, 1):
        cell = ws.cell(row=r_idx, column=c_idx, value=val)
        cell.border = cell_border
        
        # 預設字型
        cell.font = data_font
        
        # 對齊設定
        if c_idx == 1: # 序號
            cell.alignment = Alignment(horizontal="center", vertical="center")
            if cat_fill:
                cell.fill = cat_fill
        elif c_idx == 2: # 單元分類
            cell.alignment = Alignment(horizontal="center", vertical="center")
            if cat_fill:
                cell.fill = cat_fill
        elif c_idx == 3: # 單元名稱
            cell.font = data_font_bold
            cell.alignment = Alignment(horizontal="left", vertical="center")
        elif c_idx == 4: # 對應課文
            cell.alignment = Alignment(horizontal="left", vertical="center")
        elif c_idx == 5: # 檔案路徑
            cell.alignment = Alignment(horizontal="left", vertical="center")
        elif c_idx == 6: # 線上網址
            cell.font = link_font
            cell.hyperlink = val
            cell.alignment = Alignment(horizontal="left", vertical="center")
        elif c_idx == 7: # 核心功能
            cell.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)

# 設定自動篩選
ws.auto_filter.ref = f"A1:G{len(data)+1}"

# 凍結第一列
ws.freeze_panes = "A2"

# 自動調整欄寬
col_widths = {
    1: 8,   # 序號
    2: 16,  # 單元分類
    3: 38,  # 單元名稱
    4: 26,  # 對應課文/範疇
    5: 38,  # 檔案相對路徑
    6: 65,  # 線上網址
    7: 55   # 核心功能特色
}

for col_idx, width in col_widths.items():
    col_letter = get_column_letter(col_idx)
    ws.column_dimensions[col_letter].width = width

wb.save(xlsx_filename)
print("XLSX generated successfully.")
