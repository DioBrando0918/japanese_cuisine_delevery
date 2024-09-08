import cooking_img from './cooking_img.jpg'
import restaurant_img from './resturant_img.jpg'
import ingredient_img from './ingredient_img.jpg'
import ink_img from './ink_img.png'
import app_store_img from './app_store.png'
import play_store_img from './play_store.png'
import facebook_icon from './facebook_icon.png'
import instergram_icon from './instergram_icon.png'
import line_icon from './line_icon.png'
import add_icon_green from './add_icon_green.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import cross_icon from './cross_icon.png'
import menu_1 from './menu_1.jpeg'
import menu_2 from './menu_2.jpeg'
import menu_3 from './menu_3.jpeg'
import menu_4 from './menu_4.jpeg'
import menu_5 from './menu_5.jpeg'
import menu_6 from './menu_6.jpeg'
import food_1 from './food_1.jpeg'
import food_2 from './food_2.jpeg'
import food_3 from './food_3.jpeg'
import food_4 from './food_4.jpeg'
import food_5 from './food_5.jpg'
import food_6 from './food_6.jpeg'
import food_7 from './food_7.jpeg'
import food_8 from './food_8.jpeg'
import food_9 from './food_9.jpeg'
import food_10 from './food_10.jpeg'
import food_11 from './food_11.jpeg'
import food_12 from './food_12.jpeg'
import food_13 from './food_13.jpeg'
import food_14 from './food_14.jpeg'
import food_15 from './food_15.jpeg'
import food_16 from './food_16.jpeg'
import food_17 from './food_17.jpg'
import food_18 from './food_18.jpeg'
import food_19 from './food_19.jpeg'
import food_20 from './food_20.jpeg'
import food_21 from './food_21.jpeg'
import food_22 from './food_22.jpeg'
import food_23 from './food_23.jpeg'
import food_24 from './food_24.jpeg'
import food_25 from './food_25.jpeg'
import food_26 from './food_26.jpeg'
import food_27 from './food_27.jpeg'
import food_28 from './food_28.jpeg'
import food_29 from './food_29.jpeg'
import food_30 from './food_30.jpeg'
import food_31 from './food_31.jpeg'
import success_img from './success.png'
import fail_img from './fail.png'

const assets = {
    cooking_img,
    restaurant_img,
    ingredient_img,
    ink_img,
    app_store_img,
    play_store_img,
    facebook_icon,
    instergram_icon,
    line_icon,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    cross_icon,
    success_img,
    fail_img
}

const menu_list =[
    {
        menu_name:'拉麵',
        menu_image:menu_1
    },
    {
        menu_name:'蓋飯',
        menu_image:menu_2
    },
    {
        menu_name:'咖哩飯',
        menu_image:menu_3
    },
    {
        menu_name:'壽司',
        menu_image:menu_4
    },
    {
        menu_name:'炸物',
        menu_image:menu_5
    },
    {
        menu_name:'飲品',
        menu_image:menu_6
    },
]

const food_list = [
    {
        _id:'1',
        name:"極致豚骨拉麵",
        image:food_1,
        price:130,
        description:"豚骨拉麵使用慢熬的豬骨高湯，湯頭濃郁乳白，搭配彈牙麵條，每一口都充滿深厚的豬骨香氣。",
        category:'拉麵'
    },
    {
        _id:'2',
        name:"味噌拉麵",
        image:food_2,
        price:120,
        description:"味噌拉麵以豬骨熬煮的濃郁高湯為基底，配上香醇味噌和彈牙麵條，每一口都散發出豐富的日式風味。",
        category:'拉麵'
    },
    {
        _id:'3',
        name:"泡菜拉麵",
        image:food_3,
        price:120,
        description: "泡菜拉麵結合了酸辣的韓式泡菜與濃郁的高湯，麵條彈牙，每一口都帶來獨特的韓日風味碰撞。",
        category:'拉麵'
    },
    {
        _id:'4',
        name:"醬油拉麵",
        image:food_4,
        price:110,
        description:"醬油拉麵以經典日式醬油高湯為基底，湯頭鮮美濃郁，搭配彈牙麵條和新鮮配料，每一口都感受地道的日式風味。",
        category:'拉麵'
    },
    {
        _id:'5',
        name:"時蔬拉麵",
        image:food_5,
        price:120,
        description:"時蔬拉麵以新鮮當季蔬菜為主角，搭配清爽高湯和彈牙麵條，健康美味，每一口都充滿自然鮮香。",
        category:'拉麵'
    },
    {
        _id:'6',
        name:"海鮮拉麵",
        image:food_6,
        price:170,
        description:"海鮮拉麵結合鮮美海鮮和濃郁高湯，搭配彈牙麵條，每一口都散發出海洋的鮮香，帶來極致的味覺享受。",
        category:'拉麵'
    },
    {
        _id:'7',
        name:"牛肉拉麵",
        image:food_7,
        price:170,
        description:"牛肉拉麵以嫩滑牛肉和濃郁高湯為基底，搭配彈牙麵條，每一口都充滿牛肉的鮮香，帶來極致的滿足感。",
        category:'拉麵'
    },
    {
        _id:'8',
        name:"菇菇拉麵",
        image:food_8,
        price:110,
        description:"菇菇拉麵以各種新鮮菇類為主料，搭配濃郁的高湯和彈牙麵條，每一口都充滿菇類的天然鮮香與風味。",
        category:'拉麵'
    },
    {
        _id:'9',
        name:"牡蠣拉麵",
        image:food_9,
        price:170,
        description:"牡蠣拉麵選用新鮮牡蠣和濃郁高湯，搭配彈牙麵條，每一口都散發海洋的鮮美，帶來獨特的風味體驗。",
        category:'拉麵'
    },
    {
        _id:'10',
        name:"豬肉蓋飯",
        image:food_10,
        price:150,
        description:"豬肉蓋飯以嫩滑的豬肉片配上香濃醬汁，鋪在熱騰騰的米飯上，每一口都散發出豐富的味道和滿足感。",
        category:'蓋飯'
    },
    {
        _id:'11',
        name:"生魚片蓋飯",
        image:food_11,
        price:180,
        description:"生魚片蓋飯以新鮮生魚片鋪在香嫩米飯上，搭配特製醬汁，每一口都充滿海洋的鮮美與豐富口感。",
        category:'蓋飯'
    },
    {
        _id:'12',
        name:"綜合蓋飯",
        image:food_12,
        price:160,
        description:"綜合蓋飯將嫩肉和多種美味配料、鮮蔬和醬汁，鋪在熱騰騰米飯上，每一口都帶來豐富的口感和滿足感。",
        category:'蓋飯'
    },
    {
        _id:'13',
        name:"酥肉蓋飯",
        image:food_13,
        price:150,
        description:"酥肉蓋飯以外酥內嫩的炸肉塊，搭配香濃醬汁，鋪在熱騰騰米飯上，每一口都充滿酥脆與鮮美的雙重享受。",
        category:'蓋飯'
    },
    {
        _id:'14',
        name:"蔬菜蓋飯",
        image:food_14,
        price:120,
        description:"蔬菜蓋飯以新鮮多樣的時令蔬菜為主料，搭配香濃醬汁，鋪在米飯上，清爽健康，每一口都充滿自然鮮味。",
        category:'蓋飯'
    },
    {
        _id:'15',
        name:"豬排咖哩飯",
        image:food_15,
        price:140,
        description:"豬排咖哩飯結合酥脆的豬排與濃郁咖哩醬汁，淋在熱騰騰的米飯上，每一口都帶來豐富的香氣和口感。",
        category:'咖哩飯'
    },
    {
        _id:'16',
        name:"雞肉咖哩飯",
        image:food_16,
        price:140,
        description:"雞肉咖哩飯搭配嫩滑雞肉和濃郁咖哩醬汁，淋在香軟米飯上，每一口都充滿溫暖的風味和濃厚的香氣。",
        category:'咖哩飯'
    },
    {
        _id:'17',
        name:"牛肉咖哩飯",
        image:food_17,
        price:150,
        description:"牛肉咖哩飯以嫩滑牛肉和濃郁咖哩醬汁結合，淋在香軟米飯上，每一口都充滿豐富的肉香和辛香風味。",
        category:'咖哩飯'
    },
    {
        _id:'18',
        name:"牛肉壽司",
        image:food_18,
        price:80,
        description:"牛肉壽司以嫩滑的牛肉片放在醋飯上，每一口都散發出牛肉鮮香和獨特風味，是壽司愛好者的享受。",
        category:'壽司'
    },
    {
        _id:'19',
        name:"鮭魚卵壽司",
        image:food_19,
        price:70,
        description:"鮭魚卵壽司以鮭魚卵輕輕鋪在醋飯上，帶來鮮美的海洋風味，每一口都充滿滑嫩和微鹹的獨特口感。",
        category:'壽司'
    },
    {
        _id:'20',
        name:"鮮蝦壽司",
        image:food_20,
        price:70,
        description:"鮮蝦壽司以新鮮蝦仁放在醋飯上，鮮嫩滑口，每一口都充滿海鮮的鮮香和細緻口感。",
        category:'壽司'
    },
    {
        _id:'21',
        name:"鮭魚壽司",
        image:food_21,
        price:70,
        description:"鮭魚壽司以新鮮鮭魚片鋪在醋飯上，每一口都充滿鮭魚的嫩滑和鮮美，是壽司愛好者的極致享受。",
        category:'壽司'
    },
    {
        _id:'22',
        name:"鮪魚壽司",
        image:food_22,
        price:70,
        description:"鮪魚壽司以新鮮鮪魚片鋪在醋飯上，每一口都帶來鮪魚的豐富鮮美和滑嫩口感，是壽司的經典之選。",
        category:'壽司'
    },
    {
        _id:'23',
        name:"綜合拼盤壽司",
        image:food_23,
        price:240,
        description:"綜合拼盤壽司包含多種新鮮壽司，如鮭魚、鮪魚、蝦仁等，每一口都帶來豐富的風味和多樣的口感。",
        category:'壽司'
    },
    {
        _id:'24',
        name:"炸豬排",
        image:food_24,
        price:70,
        description:"炸豬排以外酥內嫩的豬肉片為主角，搭配香脆的麵包屑，每一口都帶來酥脆與鮮嫩的完美結合。",
        category:'炸物'
    },
    {
        _id:'25',
        name:"炸薯條",
        image:food_25,
        price:60,
        description:"炸薯條外酥脆內柔軟，完美的鹽味和金黃色的表面，每一口都帶來令人滿足的脆嫩口感。",
        category:'炸物'
    },
    {
        _id:'26',
        name:"炸魚排",
        image:food_26,
        price:70,
        description:"炸魚排外脆內嫩，魚肉鮮嫩多汁，搭配特製醬汁，每一口都充滿了海鮮的鮮美和酥脆的口感。",
        category:'炸物'
    },
    {
        _id:'27',
        name:"炸天婦羅",
        image:food_27,
        price:80,
        description:"炸天婦羅將新鮮海鮮和蔬菜裹上輕盈麵糊，炸至金黃酥脆，每一口都充滿了輕盈的脆感和鮮美的口味。",
        category:'炸物'
    },
    {
        _id:'28',
        name:"炸起司球",
        image:food_28,
        price:50,
        description:"炸起司球外酥內軟，融化的起司在口中流淌，每一口都帶來濃郁的起司風味和令人滿足的脆口感。",
        category:'炸物'
    },
    {
        _id:'29',
        name:"宇治紅茶",
        image:food_29,
        price:35,
        description:"宇治紅茶來自京都宇治地區，擁有獨特的香氣和醇厚的口感，每一口都散發出淡雅的茶香和濃郁的風味。",
        category:'飲品'
    },
    {
        _id:'30',
        name:"日式煎茶",
        image:food_30,
        price:35,
        description:"日式煎茶具有清新的香氣和微妙的甘甜，湯色明亮，每一口都帶來清爽的口感，完美展現了日本綠茶的精髓。",
        category:'飲品'
    },
    {
        _id:'31',
        name:"宇治抹茶",
        image:food_31,
        price:45,
        description:"宇治抹茶來自京都宇治地區，具有濃郁的香氣和深厚的風味，細膩的口感和鮮豔的綠色展現了高品質的茶葉。",
        category:'飲品'
    }
]


export {
    assets,
    menu_list,
    food_list
}