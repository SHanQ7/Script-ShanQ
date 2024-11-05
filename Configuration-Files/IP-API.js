if ($response.statusCode != 200) {
  $done(null);
}

const flags = new Map([
["AC", "🇦🇨"], ["AD", "🇦🇩"], ["AE", "🇦🇪"], ["AF", "🇦🇫"], ["AG", "🇦🇬"], ["AI", "🇦🇮"], ["AL", "🇦🇱"], ["AM", "🇦🇲"], ["AO", "🇦🇴"], ["AQ", "🇦🇶"], ["AR", "🇦🇷"], ["AS", "🇦🇸"],
["AT", "🇦🇹"], ["AU", "🇦🇺"], ["AW", "🇦🇼"], ["AX", "🇦🇽"], ["AZ", "🇦🇿"], ["BA", "🇧🇦"], ["BB", "🇧🇧"], ["BD", "🇧🇩"], ["BE", "🇧🇪"], ["BF", "🇧🇫"], ["BG", "🇧🇬"], ["BH", "🇧🇭"],  
["BI", "🇧🇮"], ["BJ", "🇧🇯"], ["BM", "🇧🇲"], ["BN", "🇧🇳"], ["BO", "🇧🇴"], ["BR", "🇧🇷"], ["BS", "🇧🇸"], ["BT", "🇧🇹"], ["BV", "🇧🇻"], ["BW", "🇧🇼"], ["BY", "🇧🇾"], ["BZ", "🇧🇿"], 
["CA", "🇨🇦"], ["CD", "🇨🇩"], ["CF", "🇨🇫"], ["CG", "🇨🇬"], ["CH", "🇨🇭"], ["CI", "🇨🇮"], ["CK", "🇨🇰"], ["CL", "🇨🇱"], ["CM", "🇨🇲"], ["CN", "🇨🇳"], ["CO", "🇨🇴"], ["CP", "🇨🇵"], 
["CR", "🇨🇷"], ["CU", "🇨🇺"], ["CV", "🇨🇻"], ["CW", "🇨🇼"], ["CX", "🇨🇽"], ["CY", "🇨🇾"], ["CZ", "🇨🇿"], ["DE", "🇩🇪"], ["DG", "🇩🇬"], ["DJ", "🇩🇯"], ["DK", "🇩🇰"], ["DM", "🇩🇲"],
["DO", "🇩🇴"], ["DZ", "🇩🇿"], ["EA", "🇪🇦"], ["EC", "🇪🇨"], ["EE", "🇪🇪"], ["EG", "🇪🇬"], ["EH", "🇪🇭"], ["ER", "🇪🇷"], ["ES", "🇪🇸"], ["ET", "🇪🇹"], ["EU", "🇪🇺"], ["FI", "🇫🇮"],
["FJ", "🇫🇯"], ["FK", "🇫🇰"], ["FM", "🇫🇲"], ["FO", "🇫🇴"], ["FR", "🇫🇷"], ["GA", "🇬🇦"], ["GB", "🇬🇧"], ["GD", "🇬🇩"], ["GE", "🇬🇪"], ["GF", "🇬🇫"], ["GH", "🇬🇭"], ["GI", "🇬🇮"],
["GL", "🇬🇱"], ["GM", "🇬🇲"], ["GN", "🇬🇳"], ["GP", "🇬🇵"], ["GR", "🇬🇷"], ["GT", "🇬🇹"], ["GU", "🇬🇺"], ["GW", "🇬🇼"], ["GY", "🇬🇾"], ["HK", "🇭🇰"], ["HN", "🇭🇳"], ["HR", "🇭🇷"],
["HT", "🇭🇹"], ["HU", "🇭🇺"], ["ID", "🇮🇩"], ["IE", "🇮🇪"], ["IL", "🇮🇱"], ["IM", "🇮🇲"], ["IN", "🇮🇳"], ["IR", "🇮🇷"], ["IS", "🇮🇸"], ["IT", "🇮🇹"], ["JM", "🇯🇲"], ["JO", "🇯🇴"],
["JP", "🇯🇵"], ["KE", "🇰🇪"], ["KG", "🇰🇬"], ["KH", "🇰🇭"], ["KI", "🇰🇮"], ["KM", "🇰🇲"], ["KN", "🇰🇳"], ["KP", "🇰🇵"], ["KR", "🇰🇷"], ["KW", "🇰🇼"], ["KY", "🇰🇾"], ["KZ", "🇰🇿"],
["LA", "🇱🇦"], ["LB", "🇱🇧"], ["LC", "🇱🇨"], ["LI", "🇱🇮"], ["LK", "🇱🇰"], ["LR", "🇱🇷"], ["LS", "🇱🇸"], ["LT", "🇱🇹"], ["LU", "🇱🇺"], ["LV", "🇱🇻"], ["LY", "🇱🇾"], ["MA", "🇲🇦"],
["MC", "🇲🇨"], ["MD", "🇲🇩"], ["MG", "🇲🇬"], ["MH", "🇲🇭"], ["MK", "🇲🇰"], ["ML", "🇲🇱"], ["MM", "🇲🇲"], ["MN", "🇲🇳"], ["MO", "🇲🇴"], ["MP", "🇲🇵"], ["MQ", "🇲🇶"], ["MR", "🇲🇷"],
["MS", "🇲🇸"], ["MT", "🇲🇹"], ["MU", "🇲🇺"], ["MV", "🇲🇻"], ["MW", "🇲🇼"], ["MX", "🇲🇽"], ["MY", "🇲🇾"], ["MZ", "🇲🇿"], ["NA", "🇳🇦"], ["NC", "🇳🇨"], ["NE", "🇳🇪"], ["NF", "🇳🇫"],
["NG", "🇳🇬"], ["NI", "🇳🇮"], ["NL", "🇳🇱"], ["NO", "🇳🇴"], ["NP", "🇳🇵"], ["NR", "🇳🇷"], ["NZ", "🇳🇿"], ["OM", "🇴🇲"], ["PA", "🇵🇦"], ["PE", "🇵🇪"], ["PF", "🇵🇫"], ["PG", "🇵🇬"],
["PH", "🇵🇭"], ["PK", "🇵🇰"], ["PL", "🇵🇱"], ["PM", "🇵🇲"], ["PR", "🇵🇷"], ["PS", "🇵🇸"], ["PT", "🇵🇹"], ["PW", "🇵🇼"], ["PY", "🇵🇾"], ["QA", "🇶🇦"], ["RE", "🇷🇪"], ["RO", "🇷🇴"],
["RS", "🇷🇸"], ["RU", "🇷🇺"], ["RW", "🇷🇼"], ["SA", "🇸🇦"], ["SB", "🇸🇧"], ["SC", "🇸🇨"], ["SD", "🇸🇩"], ["SE", "🇸🇪"], ["SG", "🇸🇬"], ["SI", "🇸🇮"], ["SK", "🇸🇰"], ["SL", "🇸🇱"],
["SM", "🇸🇲"], ["SN", "🇸🇳"], ["SR", "🇸🇷"], ["ST", "🇸🇹"], ["SV", "🇸🇻"], ["SY", "🇸🇾"], ["SZ", "🇸🇿"], ["TC", "🇹🇨"], ["TD", "🇹🇩"], ["TG", "🇹🇬"], ["TH", "🇹🇭"], ["TJ", "🇹🇯"],
["TL", "🇹🇱"], ["TM", "🇹🇲"], ["TN", "🇹🇳"], ["TO", "🇹🇴"], ["TR", "🇹🇷"], ["TT", "🇹🇹"], ["TV", "🇹🇻"], ["TW", "🇨🇳"], ["TZ", "🇹🇿"], ["UA", "🇺🇦"], ["UG", "🇺🇬"], ["UK", "🇬🇧"],
["UM", "🇺🇲"], ["US", "🇺🇸"], ["UY", "🇺🇾"], ["UZ", "🇺🇿"], ["VA", "🇻🇦"], ["VC", "🇻🇨"], ["VE", "🇻🇪"], ["VG", "🇻🇬"], ["VI", "🇻🇮"], ["VN", "🇻🇳"], ["VU", "🇻🇺"], ["WS", "🇼🇸"],
["YE", "🇾🇪"], ["YT", "🇾🇹"], ["ZA", "🇿🇦"], ["ZM", "🇿🇲"], ["ZW", "🇿🇼"]
]);
const emojis = [  "🆘","🈲","⚠️","🔞","📵","🚦","🏖","🖥","📺","🐧","🐬","🦉","🍄","⛳️","🚴","🤑","👽","🤖","🎃","👺","👁","🐶","🐼","🐌","👥",];

var country0 = "MUC";
var region0 = "韦恩大厦";
var city0 = "高谭市";
var isp0 = "MCU.com";



// 脚本开始
let body = $response.body;
let obj = JSON.parse(body);

const country = country_ValidCheck(obj['country']);
const region = Area_check(obj['regionName']);
const city = City_ValidCheck(obj['city']);

let displayCity = (city !== country && city !== region) ? city : '';

let title = flags.get(obj['countryCode']) + ' ' + country + ' ' + region;
let subtitle = (displayCity ? displayCity + ' ' : '') + obj['query'] + ' ' + ISP_ValidCheck(obj['isp']);

let ip = obj['query'];
let description = '国家：' + obj['countryCode'] + ' ' + country + '\n'
  + '地区：' + obj['region'] + ' ' + region + '\n'
  + 'IP：' + obj['query'] + '\n'
  + '服务商：' + obj['isp'] + '\n'
  + '经纬度：' + obj['lat'] + ' / ' + obj['lon'] + '\n'
  + '时区：' + obj['timezone'];

$done({title, subtitle, ip, description});

function country_ValidCheck(para) {
  return para || country0;
}

function Area_check(para) {
  const areaMap = {
    "ampang": "安邦",
    "ang thong": "红统府", 
    "attica": "阿提卡",
    "belgrade": "贝尔格莱德",
    "bogota d.c.": "波哥大首都",
    "bucurești": "布加勒斯特",
    "capital region": "首都大区",
    "catalonia": "加泰罗尼亚",
    "central singapore": "中区",
    "chișinău municipality": "基希讷乌",
    "dubai": "迪拜",
    "gangwon-do": "江原道",
    "hesse": "黑森州",
    "hawalli": "哈瓦利省",
    "Île-de-france": "法兰西岛大区",
    "imārat umm al qaywayn": "乌姆盖万",
    "kocasinan": "科卡西楠市",
    "kowloon": "九龙城区",
    "kuala lumpur": "吉隆坡",
    "kyiv city":"基辅市",
    "lombardy": "伦巴第大区",
    "marrakesh-safi": "马拉喀什大区",
    "mazovia": "摩拉维亚",
    "moscow": "莫斯科",
    "north chungcheong": "忠清北道",
    "north west":"西北部地区",
    "oslo county": "奥斯陆市",
    "provincia de san josé": "圣何塞省",
    "quebec":"魁北克市",
    "rīga":"里加",
    "sofia-capital": "索菲亚市",
    "southern peninsula": "南部半岛",
    "stockholm county": "斯德哥尔摩",
    "taichung city": "台中市",
    "taoyuan": "桃园市", 
    "tashkent": "塔什干",
    "tassin-la-demi-lune": "塔桑拉德米吕讷",
    "tokyo": "东京都",
    "奧弗涅-羅訥-阿爾卑斯大區": "阿尔卑斯大区",
    "哈爾尤縣": "哈留县",
    "加州": "加利福尼亚州",
    "堪薩斯州": "堪萨斯州",
    "普罗旺斯-阿尔卑斯-蔚蓝海岸大区": "蔚蓝海岸大区",
    "千葉縣": "千叶县",
    "圣地亚哥首都大区": "圣地亚哥大区",
    "臺灣省 or 台灣省": "中部地区",
    "維爾紐斯縣": "维尔纽斯县",
    "伊爾福夫縣": "伊尔福夫县",
    "中华民国": "台湾",
};
  para = para ? para.toLowerCase().trim() : para;
  return areaMap[para] || para || region0;
};



function City_ValidCheck(para) {
  const cityMap = {
    "abadou": "豪兹省",
    "ampang": "安邦",
    "badaganhatti": "巴特那",
    "cedar knolls": "雪松诺尔斯",
    "dublin": "都柏林",
    "frankfurtmmain": "法兰克福",
    "gallarate": "加拉拉泰市",
    "jessheim": "耶瑟海姆",
    "kocasinan": "科卡西楠市",
    "kyiv": "基辅",
    "lampa": "拉帕",
    "lidodiostia": "丽都迪奥斯蒂亚",
    "melton": "墨尔顿",
    "meyzieu": "梅济约",
    "muhadhdhib": "马什哈德",
    "odai": "奥拉迪亚",
    "okubo-naka": "大久保中",
    "paju": "坡州市",
    "pomichna": "波米奇纳",
    "reston": "里斯顿",
    "roshha‘ayin": "罗什艾因",
    "santacruz": "圣克鲁斯",
    "sha`ibalmalqah": "沙伊布·阿尔·马尔卡",
    "singera": "摩尔多瓦",
    "sofia-capital": "索菲亚市",
    "steninge": "斯特宁厄",
    "szigetszentmiklos": "锡盖特圣米克洛什市",
    "tashkent": "塔什干",
    "tassin-la-demi-lune": "塔桑拉德米吕讷",
    "tokyo": "东京都",
    "yeongdong-gun": "永同郡",
    "奧奈叢林": "奥奈丛林",
    "波特蘭": "波特兰",
    "查馬丁區": "查马丁区",
    "達拉斯": "达拉斯",
    "聖荷西": "圣荷西",
    "西雅圖": "西雅图",
    "彰化": "彰化县",
    "中壢": "中坜区",
};
  para = para.replace(/\s+/g, ''); // 去除所有空格
  para = para ? para.toLowerCase().trim().normalize('NFKD').replace(/[\u0300-\u036f]/g, '') : para;
  return cityMap[para] || para || city0;
};

function ISP_ValidCheck(para) {
  return para || ips0;
}
