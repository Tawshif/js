//  this is an IIFE  immediate invoked function expression

(function() {
    "use strict";
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function($scope) {
            $scope.name = {
                fn: "anik",
                ln: "khan"
            };

            $scope.classifieds = [

                {
                    "productId": "6506",
                    "price": "299",
                    "salePrice": 0,
                    "title": " LAPTOP NIGHT LIGHT",
                    "desc": "Original  USB LED Torch Head Flexible Long Lasting Portable\n\u2013 works with any USB port\n\n\u2013 Color: white,light blue,Orange (No option for color choice because of stock availability )\n\n\u2013 For both personal \/ professional use\n\n*\u09a2\u09be\u0995\u09be\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09a1\u09c7\u09b2\u09bf\u09ad\u09be\u09b0\u09bf \u09eb\u09e6 \u099f\u09be\u0995\u09be, \u09a2\u09be\u0995\u09be\u09b0 \u09ac\u09be\u0987\u09b0\u09c7 \u098f\u09b8 \u098f \u09aa\u09b0\u09bf\u09ac\u09b9\u09a8\u09c7 \u09a8\u09bf\u09b2\u09c7 \u09e7\u09e6\u09e6 \u099f\u09be\u0995\u09be \u09ac\u09bf\u0995\u09be\u09b6 \u0995\u09b0\u09c7 \u09ac\u09be\u0995\u09bf\u099f\u09be \u0995\u09a8\u09cd\u09a1\u09bf\u09b6\u09a8\u09c7, \u09b8\u09c1\u09a8\u09cd\u09a6\u09b0\u09ac\u09a8\u09c7 \u09a8\u09bf\u09b2\u09c7 \u09ab\u09c1\u09b2 \u09aa\u09c7\u09ae\u09c7\u09a8\u09cd\u099f \u098f\u09a1\u09ad\u09be\u09a8\u09cd\u09b8\u0964",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/b92ac1676876fe77b193d882deecf6da.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6506",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6505",
                    "price": "? 1,800",
                    "salePrice": 0,
                    "title": " BEATS BY DR. DRE SOLO WIRELESS BLUETOOTH HEADSET",
                    "desc": "Product Description\nEnjoy wireless music and answer phone calls in crystal clear stereo sound.\nCorded option for mp3 players etc.\nExtra audio enhancement with power bass.\nRemote control your music via touch sensors.\nConvenient carrying style.\nSupport Micro SD\/TF card.\nSupport FM radio.\nSupport: Profile A2DP, headset profile.\nRange of frequency: 2.4 GHz.\nOperating rang: Up to 10 Meters.\nFM frequency response: 87.5-108 MHz.",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/dba93264c8a9135b59493720679a1ff3.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6505",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6504",
                    "price": "2300",
                    "salePrice": 0,
                    "title": "Original E Table with Cooler",
                    "desc": "Small, portable, adjustable laptop table and iPad stand with built-in cooling system (2 USB cooling fan), a mouse platform and place for pen and cup.\nCompact, ultra-light yet strong and sturdy (max loading 15 kg).\nHeight and angle are adjustable for maximum comfort.\nVery versatile: can be used in an office, car, sofa, bed, and table or on the floor.\n1 USB socket & 1 USB active jack\/socket\nEasy for operation, set up in secondsMeasurement: 56cm (L) x 31.6cm\nFoldable: 28cm (L) x 31.6cm (W)\n",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/e4981e62e04215d9868de0ec353517df.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6504",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6480",
                    "price": "999",
                    "salePrice": 0,
                    "title": "SLIM N\u2019 LIFT AIRE BRA (3 Pis)",
                    "desc": "Specially designed andstyled women !\nAire Bra won\u2019t stretch out and is the most versatile and comfortable bra you\u2019ll ever own.\nSay goodbye to embarrassing back fat, the wonder weave extra oomph band gives you support without the suffering and never rolls up!\nWide straps fit perfectly and never slip off.\nFull coverage cups custom fit to any size, keeping everything in place.\nAire Bra saves the hassle of spending hundreds of dollars on bras with uncomfortable under wires and straps that don\u2019t fit and can make you look lumpy. With the Aire Bra you know that you\u2019re going to look and feel your best!",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/8a7244c48bafaa4190e02b0ab077c824.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6480",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6479",
                    "price": "649",
                    "salePrice": 0,
                    "title": "Slimming Hot Shaper Women Full Body",
                    "desc": "Product Description\n\n    Tighten your breasts.\n    Shaping the thighs to be more sexy.\n    Kill and neutralize germs and toxicity (toxin), and provide moisture and also makes your body look slimmer.\n    Make abdominal muscles become tight.\n    Lift the buttocks (buttocks) and become taut.\n    Immediately take off inches in all the important places !",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/52508418784ec7f312704c6388079c51.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6479",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6478",
                    "price": "649",
                    "salePrice": 0,
                    "title": " hot-shaper-3 WOMEN\u2019S HOT SHAPERS SLIMMING SHIRT",
                    "desc": "What\u2019s Hot Shapers ?\nHot Shapers are fitness for everyday wear.\nDesigned with Neotex smart fabrics technology that increases core temperature helping your body sweat, sweat, sweat & sweat more while wearing them during daily activities.\n\nHow they work?\nThe Neotex smart fabrics technology in Hot Shapers increases core temperature during your daily activities, at home, exercise, sports, walk, run, baby walk or any physical activity.\nHot Shapers clothing can be worn while active regardless of what you are doing.\n\nMaterial : 15% polyester, 70% neoprene, and 15% nylon.\n\nTarget area : Chest, shoulders, upper back, and midriff\n\nBenefits :\n\u2013 Feel is exquisite\n\u2013 Softand Flexible With shockproof\n\u2013 Heat preservation\n\u2013 Tighten breasts muscles\n\u2013 Improve breasts shape\n\u2013 Improve your overall well-being.\n\u2013 Maximize fitness routines.\n\u2013 Increase your core body temperature.\n\u2013 Elongation good elasticity\n\u2013 Electrical insulation storage stability is poor\n\u2013 Use temperature from -35 C to 130 C",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/aab2c15ffd446b8918ae82bf12a12831.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6478",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6477",
                    "price": "1999",
                    "salePrice": 0,
                    "title": "Original Juice Wizard Juice Maker",
                    "desc": "Juice Wizard is a quick and convenient way of making pure and fresh juice. Just fill the chute with any fruit or vegetable, press, turn \u2013 and you instantly have a fresh and healthy power drink. The juicer is powerful enough to extract juice from green leafy vegetables as well, giving you a highly nutritious drink that provides you with lots of energy. Juice Wizard gives you more than just powerful beverages. It also allows you to create guilt-free frozen desserts and snacks: create healthy frozen sorbets, or freeze your kid\u2019s favorite fruit juice into wholesome ice pops. The possibilities are endless.",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/e34f7e6e90edf62a6734d72895436caf.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6477",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6476",
                    "price": "599",
                    "salePrice": 0,
                    "title": "Self Stirring Coffee Mug",
                    "desc": "Product Description\n\n\u098f\u099f\u09bf \u0995\u09cb\u09a8\u09cb \u09ad\u09be\u09ac\u0987\u09ac\u09cd\u09b0\u09c7\u09b6\u09a8 \u09ae\u09c7\u09b8\u09c7\u099c\u09be\u09b0 \u09a8\u09df\u0964 \u0987\u09b2\u09c7\u0995\u099f\u09cd\u09b0\u09bf\u0995 \u09aa\u09be\u09b2\u09b8\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u098f\u0987 \u09a1\u09bf\u09ad\u09be\u0987\u09b8\u099f\u09bf \u0995\u09be\u099c \u0995\u09b0\u09c7 \u09af\u09be \u0985\u09a8\u09c7\u0995\u099f\u09be \u0986\u0995\u09c1\u09aa\u09be\u0982\u099a\u09be\u09b0\u09c7\u09b0 \u09ae\u09a4\u0964 \u098f\u099b\u09be\u09dc\u09be\u0993 \u0987\u09a8\u09ab\u09cd\u09b0\u09be\u09b0\u09c7\u09a1 \u09ae\u09cd\u09af\u09be\u0997\u09a8\u09c7\u099f\u09bf\u0995 \u098f\u09ac\u0982 \u09b9\u09bf\u099f \u09a5\u09c7\u09b0\u09be\u09aa\u09c0 \u098f\u09a8\u09c7 \u09a6\u09c7\u09ac\u09c7 \u09b8\u09cd\u09ac\u09b8\u09cd\u09a4\u09bf\u0964\n\n    Item depends on availability\n    All prices given on the site are excluding VAT\n    Cash on delivery only in Dhaka city\n    Design, Color, Dimension may slightly vary form the picture\n\nSpecifications\n\n    Neck therapy instrument\n    Infrared magnetic and heat therapy\n    Two pieces electric pulse patch built-in\n\nFunction:\n\n    Used for neck massage, bring you comfortable feeling and enjoyment.\n    Two pieces electric pulse patch built-in.\n    Infrared magnetic and heat therapy\n    Acupuncture type massage to many parts of body\n\nFutures:\n\n    Designed by human body engineering\n    Release the nerve pressure pain\n    Improve your sleeping\n\n\u09b8\u09a4\u09b0\u09cd\u0995\u09a4\u09be: \u09af\u09c7 \u0995\u09cb\u09a8 \u09aa\u09a3\u09cd\u09af \u0995\u09bf\u09a8\u09be\u09b0 \u0986\u0997\u09c7 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u2018Product Description\u2019 \u09aa\u09dc\u09c7 \u09a8\u09bf\u09ac\u09c7\u09a8\u0964 \u099b\u09ac\u09bf \u09a6\u09c7\u0996\u09c7\u0987 \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u09a6\u09bf\u09df\u09c7 \u09a6\u09bf\u09ac\u09c7\u09a8 \u09a8\u09be\u0964 \u09af\u09c7 \u0995\u09cb\u09a8 \u09aa\u09a3\u09cd\u09af \u0995\u09bf\u09a8\u09be\u09b0 \u0986\u0997\u09c7 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u09a4\u09be\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7 \u09ad\u09be\u09b2 \u09ad\u09be\u09ac\u09c7 \u099c\u09c7\u09a8\u09c7 \u09a8\u09c7\u09df\u09be \u0989\u099a\u09bf\u09a4\u0964 \u09aa\u09a3\u09cd\u09af\u09c7\u09b0 \u0995\u09cb\u09df\u09be\u09b2\u09bf\u099f\u09bf\u09b0 \u09b8\u09be\u09a5\u09c7 \u09a6\u09be\u09ae\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995 \u0986\u099b\u09c7\u0964 \u098f\u0995\u0987 \u09b0\u0995\u09ae \u09a6\u09c7\u0996\u09a4\u09c7 \u0995\u09ae \u09a6\u09be\u09ae\u09c7 \u09a8\u0995\u09b2 \u09aa\u09a3\u09cd\u09af \u0995\u09cd\u09b0\u09df \u09a5\u09c7\u0995\u09c7 \u09ac\u09bf\u09b0\u09a4 \u09a5\u09be\u0995\u09c1\u09a8\u0964",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/3664d0ef42a8b7dc81155c33affde5b0.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6476",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6475",
                    "price": "1299",
                    "salePrice": 0,
                    "title": "Neck Therapy",
                    "desc": "Product Description\n\n\u098f\u099f\u09bf \u0995\u09cb\u09a8\u09cb \u09ad\u09be\u09ac\u0987\u09ac\u09cd\u09b0\u09c7\u09b6\u09a8 \u09ae\u09c7\u09b8\u09c7\u099c\u09be\u09b0 \u09a8\u09df\u0964 \u0987\u09b2\u09c7\u0995\u099f\u09cd\u09b0\u09bf\u0995 \u09aa\u09be\u09b2\u09b8\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u098f\u0987 \u09a1\u09bf\u09ad\u09be\u0987\u09b8\u099f\u09bf \u0995\u09be\u099c \u0995\u09b0\u09c7 \u09af\u09be \u0985\u09a8\u09c7\u0995\u099f\u09be \u0986\u0995\u09c1\u09aa\u09be\u0982\u099a\u09be\u09b0\u09c7\u09b0 \u09ae\u09a4\u0964 \u098f\u099b\u09be\u09dc\u09be\u0993 \u0987\u09a8\u09ab\u09cd\u09b0\u09be\u09b0\u09c7\u09a1 \u09ae\u09cd\u09af\u09be\u0997\u09a8\u09c7\u099f\u09bf\u0995 \u098f\u09ac\u0982 \u09b9\u09bf\u099f \u09a5\u09c7\u09b0\u09be\u09aa\u09c0 \u098f\u09a8\u09c7 \u09a6\u09c7\u09ac\u09c7 \u09b8\u09cd\u09ac\u09b8\u09cd\u09a4\u09bf\u0964\n\n    Item depends on availability\n    All prices given on the site are excluding VAT\n    Cash on delivery only in Dhaka city\n    Design, Color, Dimension may slightly vary form the picture\n\nSpecifications\n\n    Neck therapy instrument\n    Infrared magnetic and heat therapy\n    Two pieces electric pulse patch built-in\n\nFunction:\n\n    Used for neck massage, bring you comfortable feeling and enjoyment.\n    Two pieces electric pulse patch built-in.\n    Infrared magnetic and heat therapy\n    Acupuncture type massage to many parts of body\n\nFutures:\n\n    Designed by human body engineering\n    Release the nerve pressure pain\n    Improve your sleeping\n\n\u09b8\u09a4\u09b0\u09cd\u0995\u09a4\u09be: \u09af\u09c7 \u0995\u09cb\u09a8 \u09aa\u09a3\u09cd\u09af \u0995\u09bf\u09a8\u09be\u09b0 \u0986\u0997\u09c7 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u2018Product Description\u2019 \u09aa\u09dc\u09c7 \u09a8\u09bf\u09ac\u09c7\u09a8\u0964 \u099b\u09ac\u09bf \u09a6\u09c7\u0996\u09c7\u0987 \u0985\u09b0\u09cd\u09a1\u09be\u09b0 \u09a6\u09bf\u09df\u09c7 \u09a6\u09bf\u09ac\u09c7\u09a8 \u09a8\u09be\u0964 \u09af\u09c7 \u0995\u09cb\u09a8 \u09aa\u09a3\u09cd\u09af \u0995\u09bf\u09a8\u09be\u09b0 \u0986\u0997\u09c7 \u0985\u09ac\u09b6\u09cd\u09af\u0987 \u09a4\u09be\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7 \u09ad\u09be\u09b2 \u09ad\u09be\u09ac\u09c7 \u099c\u09c7\u09a8\u09c7 \u09a8\u09c7\u09df\u09be \u0989\u099a\u09bf\u09a4\u0964 \u09aa\u09a3\u09cd\u09af\u09c7\u09b0 \u0995\u09cb\u09df\u09be\u09b2\u09bf\u099f\u09bf\u09b0 \u09b8\u09be\u09a5\u09c7 \u09a6\u09be\u09ae\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995 \u0986\u099b\u09c7\u0964 \u098f\u0995\u0987 \u09b0\u0995\u09ae \u09a6\u09c7\u0996\u09a4\u09c7 \u0995\u09ae \u09a6\u09be\u09ae\u09c7 \u09a8\u0995\u09b2 \u09aa\u09a3\u09cd\u09af \u0995\u09cd\u09b0\u09df \u09a5\u09c7\u0995\u09c7 \u09ac\u09bf\u09b0\u09a4 \u09a5\u09be\u0995\u09c1\u09a8\u0964",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/6776dc2cb06f4453d0d5485db1894386.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6475",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6474",
                    "price": "899",
                    "salePrice": 0,
                    "title": "Nicer Dicer Plus",
                    "desc": "\nProduct Description\n\nThe Nicer Dicer Plus multi-chopper set has everything you need for cutting, dicing, grating, and slicing!\nChop onions, zucchini, peppers, celery, tomatoes, hard boiled eggs, cheese, and fruits\u2013then watch as the ingredients transfer instantly from the cutting surface into the bowl below.\nThere\u2019s no hassle, and no mess! Nicer Dicer with the Plus is no longer a problem \u2013 you have everything\n",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/c0d8dea9255da758aed68f99cbc13bd8.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6474",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6473",
                    "price": "799",
                    "salePrice": 0,
                    "title": "Universal Mobile Mount",
                    "desc": "Product Description\nfeatures:\n\n    offers a wonderful hands-free experience when watching videos or calling\n    watch movies and videos, listen music on the bed without holding your phone\n    take notes while videocalling or read recipes while cooking without having to hold your phone\n    easily clips to your car, bed, desktop, sofa, even if short in desk space\n    freely adjust flexible arm for different angle and distance for easy viewing\n    360-degree adjustable phone mount\n    sturdy yet lightweight design\n    rubber-lined grips keeps your smartphone safe and secure\n    solid steel construction ensures your device is stable and secure\n    perfect around the home, office, in the gym or on the road\n    mounts all smart phones and devices up to 96mm width\n\nspecs:\n\n    compatibility: most smartphones and devices up to 96mm width, including:\n        iPhone 3, iPhone 4\/4S, iPhone 5\/5S\/5C\n        Samsung Galaxy S2, S3, S4, S5, Note, Note 2, Note 3\n    material: aluminum alloy + plastic\n    arm length: 68cm (27\u2033)\n    weight: about 390g\n    adjustable degree (mount): 360 degrees rotatable\n    width of the device: fit devices up to 96mm (about 3\u2033) width (under 6\u2033 touch screen)\n    maximum thickness of table or mounting surface (clip stand): 70mm (2.75\u2033)\n\ncolors:\n\n    Random\n\nyou\u2019ll get:\n\n    Universal Clip-on Mounts for Smartphones, MP3, MP4, GPS etc.\n\nhow to use:\n\n    Simply clip metal grip onto a stable location and mount your smartphone.\n\nnotes:\n\n    This is a mixed-color order. Colors are subject to availability and will be shipped randomly unless otherwise indicated.\n",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/3cac847db2d50cfbc731b01fb7c82ede.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6473",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6472",
                    "price": "1350",
                    "salePrice": 0,
                    "title": "Shark Men\u2019s Watch",
                    "desc": "\n    Brand: Shark\n    Digital & Analog Time\n    Sex: Male.\n    Dial window material type: Mineral.\n    A Grade Replica\n",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/8ef0a3ede9208bce119850d748db8c22.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6472",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6471",
                    "price": "1800",
                    "salePrice": 0,
                    "title": "Original Xiaomi Mi 5000mAh Mobile PowerBank",
                    "desc": "mi-10000_mah-03 (1) mi 500mah mi 5000 mah mi 5000 mi mi 2 mi 3\nWarranty : 1 Year Replacement [ No Physical Damage Allow ]\n\nBattery type :Lithium-ion Polymer rechargeable cell\n\nInput Voltage:DC 5.0V\n\nOutput Voltage:C 5.1V\n\nInput current:2000mA(TYP)\n\nOutput current:2100mA(TYP)\n\nRated capacity:3.75V\/5000mAh(TYP)\n\nCharging time :3.5 hrs with 5V\/2A plug and standard cable\n\nSize:125 * 69 * 9.9mm\n\nLoad detection:Auto-detects device plug-in\/plug-out\n\nSafety: Supports protection from over-voltage (input and output), over-current (input and output), short circuit,\n\nover-charge, over-discharge, and battery Positive Temperature Coefficient (PTC).\n\nOut of power protection:wake once plugged to the charger\n\nWeight:156g",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/bcf02e2226cf3ffcdaaa0c162839775e.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6471",
                    "status": "Available",
                    "sale": false
                }, {
                    "productId": "6470",
                    "price": "599",
                    "salePrice": 0,
                    "title": "Fastrack Men\u2019s Wrist Watch",
                    "desc": "\n    Fastrack men\u2019s wrist watch\n    Color: Black\n    Strap Material: Fabric\n    For casual use\n    For men\n",
                    "shopName": "Bangkok2Bd",
                    "shopId": "724",
                    "image": "http:\/\/probaze.com\/files\/uploads\/9dcbe4cd67785d18c8c6ad1077864bb6.jpg",
                    "delivaryMethod": "Cash on Delivery",
                    "link": "http:\/\/probaze.com\/shop\/Bangkok2Bd\/product\/6470",
                    "status": "Available",
                    "sale": false
                }


            ]


        });


})();
