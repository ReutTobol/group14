const defaultColors = {
    mac: [
        { name: 'Space Gray', value: '#666666', sku:'sg' },
        { name: 'Silver', value: '#E3E3E3', sku:'sv' }
    ],
    iphone: [
        { name: 'Desert Titanium', value: '#FFD700', sku:'dt' },
        { name: 'Blue Titanium', value: '#6B7989', sku:'bt' },
        { name: 'White Titanium', value: '#F5F5F0', sku: 'wt' },
        { name: 'Black Titanium', value: '#4A4846', sku: 'bt' }
    ],
    ipad: [
        { name: 'Space Gray', value: '#666666', sku:'sg' },
        { name: 'Silver', value: '#E3E3E3', sku:'sv' },
        { name: 'Rose Gold', value: '#FAE0D8', sku:'rg' }
    ]
};

const defaultStorage = {
    mac: [
        { size: '256GB', priceAdd: 0 },
        { size: '512GB', priceAdd: 800 },
        { size: '1TB', priceAdd: 1600 },
        { size: '2TB', priceAdd: 3200 }
    ],
    iphone: [
        { size: '128GB', priceAdd: 0 },
        { size: '256GB', priceAdd: 500 },
        { size: '512GB', priceAdd: 1000 },
        { size: '1TB', priceAdd: 1500 }
    ],
    ipad: [
        { size: '64GB', priceAdd: 0 },
        { size: '256GB', priceAdd: 800 },
        { size: '512GB', priceAdd: 1600 },
        { size: '1TB', priceAdd: 2400 }
    ]
};

export const productData = {
    mac: [
        {
            id: 1,
            name: "MacBook Pro 14″",
            description: "M3 Pro, 18GB RAM, 512GB SSD",
            basePrice: "7,999",
            image: "/group14/img/macbook.webp",
            fullDescription: `
                MacBook Pro 14" עם שבב M3 Pro מציע ביצועים מרשימים במיוחד לאנשי מקצוע ומשתמשים מתקדמים. המחשב מצויד במסך Liquid Retina XDR מתקדם המספק איכות תצוגה מדהימה עם צבעים מדויקים ורמת בהירות גבוהה. הוא מושלם למעצבים, עורכי וידאו ומפתחים הזקוקים לביצועים גבוהים ודיוק צבעים. המחשב כולל סוללה חזקה המספקת עד 22 שעות עבודה, מערכת שמע מתקדמת וחיבורים מגוונים לכל צורך מקצועי.
            `,
            specs: [
                "שבב Apple M3 Pro",
                "18GB RAM",
                "512GB SSD",
                "מסך 14.2 אינץ' Liquid Retina XDR",
                "כולל 3 יציאות Thunderbolt 4"
            ]

        },
        {
            id: 2,
            name: "MacBook Pro 16″",
            description: "M3 MAX, 128GB RAM, 8TB SSD",
            basePrice: "9,999",
            image: "/group14/img/macbook.webp",
            fullDescription: `
                MacBook Pro 16" הוא המחשב הנייד החזק ביותר של אפל, המיועד לאנשי מקצוע הזקוקים לעוצמה מקסימלית. עם שבב M3 Max, מסך גדול ומרהיב ויכולת לתמוך בזיכרון RAM ענק, הוא מסוגל להתמודד עם המשימות התובעניות ביותר. המחשב מצטיין בעריכת וידאו ברזולוציה גבוהה, פיתוח תוכנה מורכב ועבודה עם מודלים תלת-ממדיים.            `,
            specs: [
                "שבב Apple M3 Max",
                "עד 128GB RAM",
                "עד 8TB SSD",
                "מסך 16.2 אינץ' Liquid Retina XDR",
                "כולל 3 יציאות Thunderbolt 4"
            ]
        },
        {
            id: 3,
            name: "MacBook Air (M2)",
            description: "Apple M2, 8GB RAM, 256GB SSD",
            basePrice: "5,199",
            image: "/group14/img/MacBookAir.jpeg",
            fullDescription: `
                MacBook Air החדש מציג עיצוב מחודש ודק במיוחד עם שבב M2 רב-עוצמה. זהו המחשב האידיאלי לשימוש יומיומי, עבודה ולימודים. למרות משקלו הקל והפרופיל הדק, הוא מספק ביצועים מעולים וסוללה שמחזיקה לאורך כל היום. המסך החדש והמצלמה המשופרת הופכים אותו למושלם גם לשיחות וידאו ועבודה מרחוק. 
                `,
            specs: [
                "שבב Apple M2",
                "8GB RAM (ניתן לשדרוג)",
                "256GB SSD",
                "מסך 13.6 אינץ'Liquid Retina",
                "2 יציאות Thunderbolt 4"
            ]
        },

        {
            id : 4,
            name: "iMac 24″",
            description: "Apple M3, 8GB RAM, 256GB SSD",
            basePrice: "6,499",
            image: "/group14/img/imac.jpg",
            fullDescription: `
                 iMac 24" מביא עיצוב צבעוני ורענן למחשב השולחני עם שבב M3 חזק. המסך המרהיב ברזולוציה 4.5K מספק חוויית צפייה יוצאת דופן, והמצלמה והמיקרופונים המשופרים הופכים אותו למושלם לשיחות וידאו. זהו מחשב אידיאלי למשרד הביתי, משפחות ואנשי מקצוע שמחפשים פתרון הכל-כלול אלגנטי.
            `,
            specs: [
                "שבב Apple M3",
                "8GB RAM",
                "256GB SSD",
                "מסך 24 אינץ' 4.5K Retina",
                "מצלמת FaceTime HD 1080p"
            ]
        },
        {
            id: 5,
            name: "MacBook Air 15",
            description: "M2, 8GB RAM, 256GB SSD",
            basePrice: "6,199",
            image: "/group14/img/MacbookAir15.webp",
            fullDescription: `
                MacBook Air 15" מציע מסך גדול יותר בגוף דק במיוחד.
                שבב M2 רב עוצמה עם ביצועים מעולים וסוללה ארוכה.
                מושלם לעבודה ניידת עם מסך מרווח יותר.
            `,
            specs: [
                "שבב Apple M2",
                "8GB RAM מאוחד",
                "256GB SSD",
                "מסך Liquid Retina 15.3 אינץ'",
                "MagSafe 3 לטעינה"
            ]
        },
        {
            id: 6,
            name: "MacBook Air 13",
            description: "M1, 8GB RAM, 256GB SSD",
            basePrice: "4,499",
            image: "/group14/img/MacBookAir13.jpg",
            fullDescription: `
                MacBook Air M1 מציע ביצועים מעולים במחיר משתלם.
                סוללה שמחזיקה עד 18 שעות של שימוש.
                מושלם ללימודים, עבודה ושימוש יומיומי.
            `,
            specs: [
                "שבב Apple M1",
                "8GB RAM מאוחד",
                "256GB SSD",
                "מסך Retina 13.3 אינץ'",
                "עד 18 שעות סוללה"
            ]
        },
            {
                id: 7,
                name: "Mac mini",
                description: "M2 Pro, 16GB RAM, 512GB SSD",
                basePrice: "5,199",
                image: "/group14/img/MacMINI.webp",
                fullDescription: `
                    Mac mini עם שבב M2 Pro מספק עוצמה אדירה בגוף קטן.
                    אפשרויות חיבור מתקדמות כולל Thunderbolt 4.
                    פתרון נהדר למשרד הביתי או כתחנת עבודה מקצועית.
                `,
                specs: [
                    "שבב M2 Pro",
                    "16GB RAM",
                    "512GB SSD",
                    "4 יציאות Thunderbolt 4",
                    "HDMI 2.0"
                ]
            },
            {
                id: 8,
                name: "Mac mini",
                description: "M2, 8GB RAM, 256GB SSD",
                basePrice: "2,999",
                image: "/group14/img/MacMINI2.jpeg",
                fullDescription: `
                    Mac mini עם שבב M2 מציע ביצועים מצוינים במחיר משתלם.
                    קטן בגודל אך גדול ביכולות.
                    מושלם כשדרוג למחשב שולחני או כשרת ביתי.
                `,
                specs: [
                    "שבב Apple M2",
                    "8GB RAM",
                    "256GB SSD",
                    "2 יציאות Thunderbolt 4",
                    "HDMI 2.0"
                ]
            },
            {
                id: 9,
                name: "Mac Studio",
                description: "M2 Ultra, 64GB RAM, 1TB SSD",
                basePrice: "19,999",
                image: "/group14/img/MacStudio.jpg",
                fullDescription: `
                    Mac Studio עם M2 Ultra מציע את העוצמה המקסימלית.
                    מיועד למקצוענים ולמשימות התובעניות ביותר.
                    יכולות עיבוד ועריכה ברמה מקצועית.
                `,
                specs: [
                    "שבב M2 Ultra",
                    "64GB RAM",
                    "1TB SSD",
                    "6 יציאות Thunderbolt 4",
                    "מעבד גרפי 76 ליבות"
                ]
            },
            {
                id: 10,
                name: "Mac Studio",
                description: "M2 Max, 32GB RAM, 512GB SSD",
                basePrice: "8,999",
                image: "/group14/img/MacStudio.jpg",
                fullDescription: `
                    Mac Studio עם M2 Max מספק ביצועים מקצועיים.
                    מערכת קירור מתקדמת לביצועים מתמשכים.
                    אידיאלי לעורכי וידאו ומפתחים.
                `,
                specs: [
                    "שבב M2 Max",
                    "32GB RAM",
                    "512GB SSD",
                    "6 יציאות Thunderbolt 4",
                    "מעבד גרפי 38 ליבות"
                ]
            }
        ],
    ipad: [
        {
            id: 1,
            name: "iPad Pro 12.9″",
            description: "Apple M2, 8GB RAM, Wi-Fi 6E",
            basePrice: "4,999",
            image: "/group14/img/ipadPro.jpg",
            fullDescription: `
                iPad Pro 12.9″ עם שבב M2 מספק ביצועים חזקים במיוחד. 
                מסך Liquid Retina XDR עם ProMotion לחוויית משתמש מושלמת.
                אידיאלי לאמנים, מעצבים ואנשי מקצוע.
            `,
            specs: [
                "שבב Apple M2",
                "256GB אחסון",
                "Wi-Fi 6E",
                "מסך Liquid Retina XDR",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        },
        {
            id: 2,
            name: "iPad Pro 11″",
            description: "Apple M2, 8GB RAM, Wi-Fi",
            basePrice: "3,999",
            image: "/group14/img/ipadPro.jpg",
            fullDescription: `
                   iPad Pro 11″ עם שבב M2 מציע ביצועים חזקים בגודל קומפקטי יותר. 
                   מסך Liquid Retina עם ProMotion לתצוגה חלקה ומהירה.
                      מושלם למקצוענים שמחפשים ניידות מקסימלית.
            `,
            specs: [
                "שבב Apple M2",
                "256GB אחסון",
                "Wi-Fi 6E",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        },
        {
            id: 3,
            name: "iPad Air",
            description: "Apple M1, 8GB RAM, Wi-Fi",
            basePrice: "2,699",
            image: "/group14/img/IpadAIR.jpeg",
            fullDescription: `
                     iPad Air עם שבב M1 מספק ביצועים מעולים במארז דק ואלגנטי.
        מסך Liquid Retina 10.9 אינץ' עם צבעים מדויקים.              
                        אידיאלי לעבודה, לימודים ויצירה דיגיטלית.
            `,
            specs: [
                "שבב Apple M1",
                " אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        },
        {
            id: 4,
            name: "iPad",
            description: "Apple A14 Bionic, Wi-Fi",
            basePrice: "2,099",
            image: "/group14/img/ipad.png",
            fullDescription: `
                            iPad דור 10 מציע חוויית משתמש מעולה במחיר משתלם.
                             מסך Liquid Retina 10.9 אינץ' עם עיצוב מודרני.
                               מושלם למשפחות, סטודנטים ושימוש יומיומי.
            `,
            specs: [
                "שבב A14 Bionic",
                " אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 1"
            ]
        },
        {
            id: 5,
            name: "iPad mini",
            description: "Apple A15 Bionic, Wi-Fi",
            basePrice: "2,299",
            image: "/group14/img/IpadMINI.jpeg",
            fullDescription: `
                                 iPad mini מציע עוצמה מקסימלית בגודל מינימלי.
        מסך Liquid Retina 8.3 אינץ' בעיצוב קומפקטי.                         
                                 אידיאלי לניידות מקסימלית וקריאה נוחה.
            `,
            specs: [
                "שבב A15 Bionic",
                " אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        },
    ],
    iphone: [
        {
           id: 1,
             name: "iPhone 15 Pro Max",
             description: "256GB",
            basePrice: "5,999",
            image: "/group14/img/iphone15ProMax.webp",
             fullDescription: `
                  iPhone 15 Pro Max עם שבב A17 Pro מספק ביצועים פורצי דרך.
                  מסגרת טיטניום חזקה ומסך 6.7 אינץ' Super Retina XDR עם ProMotion.
                 מערך מצלמות מתקדם עם זום אופטי x5 וצילום מקצועי.
            `,
            specs: [
              "שבב A17 Pro",
              "256GB אחסון",
             "מסך 6.7 אינץ' Super Retina XDR",
              "מצלמה ראשית 48MP",
               "חיבור USB-C"
          ]
        },
        {
            id: 2,
            name: "iPhone 15 Pro",
            description: "128GB",
            basePrice: "4,999",
            image: "/group14/img/iphone15pro.png",
            fullDescription: `
                   iPhone 15 Pro מציע את כל החידושים בגודל קומפקטי יותר.
                   מסגרת טיטניום ומסך 6.1 אינץ' Super Retina XDR עם ProMotion.
                   מערך מצלמות מתקדם עם זום אופטי x3 ותכונות צילום מקצועיות.
               `,
            specs: [
                           "שבב A17 Pro",
               "128GB אחסון",
               "מסך 6.1 אינץ' Super Retina XDR",
               "מצלמה ראשית 48MP",
               "חיבור USB-C"
           ]
        },
        {
           id: 3,
           name: "iPhone 15 Plus",
           description: "128GB",
           basePrice: "4,199",
           image: "/group14/img/iphone15PLUS.jpeg",
           fullDescription: `
               iPhone 15 Plus מציג מסך גדול של 6.7 אינץ' עם שבב A16 Bionic.
               מצלמה משודרגת של 48MP לצילומים מרהיבים.
               סוללה חזקה במיוחד לשימוש ממושך וחיבור USB-C חדש.
           `,
           specs: [
               "שבב A16 Bionic",
               "128GB אחסון",
               "מסך 6.7 אינץ' Super Retina XDR",
               "מצלמה ראשית 48MP",
               "Dynamic Island"
           ]
        },
        {
           id: 4,
           name: "iPhone 15",
           description: "128GB",
           basePrice: "3,799",
           image: "/group14/img/iphone15.jpg",
           fullDescription: `
               iPhone 15 משלב עיצוב מודרני עם ביצועים מעולים.
               מסך 6.1 אינץ' חד ובהיר עם Dynamic Island.
               מצלמה משודרגת של 48MP לצילומים מרשימים וחיבור USB-C.
           `,
           specs: [
               "שבב A16 Bionic",
               "128GB אחסון",
               "מסך 6.1 אינץ' Super Retina XDR",
               "מצלמה ראשית 48MP",
               "Dynamic Island"
           ]
        },
        {
           id: 5,
           name: "iPhone 14 Plus",
           description: "128GB",
           basePrice: "3,599",
           image: "/group14/img/iphone14plus.png",
           fullDescription: `
               iPhone 14 Plus מציע מסך גדול של 6.7 אינץ' וסוללה חזקה במיוחד.
               ביצועים מעולים עם שבב A15 Bionic.
               מושלם למי שמחפש מסך גדול במחיר משתלם עם חיי סוללה ארוכים.
           `,
           specs: [
               "שבב A15 Bionic",
               "128GB אחסון",
               "מסך 6.7 אינץ' Super Retina XDR",
               "מצלמה כפולה 12MP",
               "סוללה ליום שלם+"
           ]
        },
        {
           id: 6,
           name: "iPhone 14",
           description: "128GB",
           basePrice: "3,199",
           image: "/group14/img/iphone14.jpg",
           fullDescription: `
               iPhone 14 מציע ביצועים מעולים במחיר משתלם.
               מסך 6.1 אינץ' Super Retina XDR איכותי.
               מערך מצלמות כפול לצילום תמונות וסרטונים מרשימים.
           `,
           specs: [
               "שבב A15 Bionic",
               "128GB אחסון",
               "מסך 6.1 אינץ' Super Retina XDR",
               "מצלמה כפולה 12MP",
               "תמיכה ב-5G"
           ]
        },
        {
           id: 7,
           name: "iPhone 13",
           description: "128GB",
           basePrice: "2,999",
           image: "/group14/img/iphone13.webp",
           fullDescription: `
               iPhone 13 מציע ערך מצוין עם שבב A15 Bionic החזק.
               מסך 6.1 אינץ' Super Retina XDR איכותי.
               מערך מצלמות כפול משופר לצילומי יום ולילה מרשימים.
           `,
           specs: [
               "שבב A15 Bionic",
               "128GB אחסון",
               "מסך 6.1 אינץ' Super Retina XDR",
               "מצלמה כפולה 12MP",
               "תמיכה ב-5G"
           ]
        },
        {
           id: 8,
           name: "iPhone 13 mini",
           description: "128GB",
           basePrice: "2,699",
           image: "/group14/img/iphone13MINI.jpg",
           fullDescription: `
               iPhone 13 mini מציע את כל היתרונות של iPhone 13 בגוף קטן וקומפקטי.
               מסך 5.4 אינץ' Super Retina XDR.
               אידיאלי למי שמחפש סמארטפון קטן וחזק.
           `,
           specs: [
               "שבב A15 Bionic",
               "128GB אחסון",
               "מסך 5.4 אינץ' Super Retina XDR",
               "מצלמה כפולה 12MP",
               "תמיכה ב-5G"
           ]
        }
    ],
    watch: [
        {
            id: 1,
            name: "Apple Watch Ultra 2",
            description: "49mm, GPS + Cellular",
            basePrice: "3,999",
            image: "/group14/img/applewatchultra2.jpg",
            fullDescription: `
               Apple Watch Ultra 2 מציע את חווית השעון החזקה ביותר של אפל.
               מסך בהירות עד 3000 nits, גוף טיטניום עמיד במיוחד.
               מושלם לספורטאים ולמשתמשים מקצועיים עם דיוק GPS מתקדם.
           `,
            specs: [
                "גוף טיטניום 49mm",
                "מסך Retina תמידי עד 3000 nits",
                "שבב S9 מתקדם",
                "GPS + Cellular מובנה",
                "סוללה עד 36 שעות"
            ]
        },
        {
           id: 2,
           name: "Apple Watch Series 9",
           description: "45mm, GPS",
           basePrice: "1,999",
           image: "/group14/img/applewatchs9.png",
           fullDescription: `
               Apple Watch Series 9 עם שבב S9 החדש מציע ביצועים משופרים.
               מסך Retina תמידי בהיר, מעקב בריאות מתקדם.
               תומך במחוות כפולות ובקרת דיוק חדשה.
           `,
           specs: [
               "מסך Retina תמידי",
               "שבב S9",
               "מעקב דופק וECG",
               "מדידת חמצן בדם",
               "עמידות במים WR50"
           ]
        },
        {
           id: 3,
           name: "Apple Watch Series 9",
           description: "41mm, GPS",
           basePrice: "1,799",
           image: "/group14/img/applewatchs9.png",
           fullDescription: `
               Apple Watch Series 9 בגרסת 41mm מושלם לפרק יד קטן יותר.
               כולל את כל התכונות המתקדמות של הסדרה עם שבב S9.
               מעקב בריאות וכושר מקיף בעיצוב קומפקטי.
           `,
           specs: [
               "מסך Retina תמידי",
               "שבב S9",
               "מעקב דופק וECG",
               "מדידת חמצן בדם",
               "עמידות במים WR50"
           ]
        },
        {
           id: 4,
           name: "Apple Watch SE",
           description: "44mm, GPS",
           basePrice: "1,249",
           image: "/group14/img/AppleWatchSE.jpg",
           fullDescription: `
               Apple Watch SE מציע את התכונות החיוניות במחיר משתלם.
               מעקב כושר ובריאות, התראות חכמות ועיצוב מודרני.
               אידיאלי למי שנכנס לעולם השעונים החכמים.
           `,
           specs: [
               "מסך Retina",
               "שבב S8",
               "מעקב דופק",
               "זיהוי נפילות",
               "עמידות במים WR50"
           ]
        },
        {
           id: 5,
           name: "Apple Watch SE",
           description: "40mm, GPS",
           basePrice: "1,099",
           image: "/group14/img/AppleWatchSE2.jpg",
           fullDescription: `
               Apple Watch SE בגרסת 40mm מציע חווית שעון חכם במחיר נגיש.
               כולל את כל התכונות החיוניות בגודל קומפקטי.
               מושלם למעקב אחר פעילות יומיומית ובריאות.
           `,
           specs: [
               "מסך Retina",
               "שבב S8",
               "מעקב דופק",
               "זיהוי נפילות",
               "עמידות במים WR50"
           ]
        },
        {
           id: 6,
           name: "Apple Watch Series 9",
           description: "45mm, GPS + Cellular",
           basePrice: "3,299",
           image: "/group14/img/applewatchseries9.png",
           fullDescription: `
               Apple Watch Series 9 בגרסת פלדת אל-חלד היוקרתית.
               מסך ספיר קריסטל עמיד במיוחד, גימור יוקרתי.
               כולל קישוריות סלולרית מובנית לחופש מלא מהטלפון.
           `,
           specs: [
               "גוף פלדת אל-חלד",
               "מסך ספיר קריסטל",
               "שבב S9",
               "GPS + Cellular",
               "מעקב בריאות מתקדם"
           ]
        }
    ],
    accessories: [
        {
           id: 1,
           name: "AirPods Pro",
           description: "דור 2, USB-C",
           basePrice: "999",
           image: "/group14/img/airpodsPro.webp",
           fullDescription: `
               AirPods Pro דור 2 עם ביטול רעשים אקטיבי משופר.
               שמע מרחבי מותאם אישית וטכנולוגיית Adaptive Audio.
               כולל חיבור USB-C לטעינה מהירה ונוחה.
           `,
           specs: [
               "ביטול רעשים אקטיבי",
               "שמע מרחבי מותאם",
               "חיבור USB-C",
               "סוללה עד 6 שעות",
               "עמידות למים IPX4"
           ]
        },
        {
           id: 2,
           name: "AirPods",
           description: "דור 3",
           basePrice: "799",
           image: "/group14/img/airpods.jpg",
           fullDescription: `
               AirPods דור 3 עם עיצוב מעודכן ושמע מרחבי.
               חיישני לחץ לשליטה קלה ונוחה.
               עמידות למים ולזיעה לשימוש ספורטיבי.
           `,
           specs: [
               "שמע מרחבי",
               "חיישני לחץ",
               "סוללה עד 6 שעות",
               "טעינה אלחוטית",
               "עמידות למים IPX4"
           ]
        },
        {
           id: 3,
           name: "AirPods Max",
           description: "אוזניות Over-Ear",
           basePrice: "2,199",
           image: "/group14/img/airpodsMax.jpg",
           fullDescription: `
               AirPods Max מציעות חווית שמע פרימיום ברמה הגבוהה ביותר.
               ביטול רעשים אקטיבי מתקדם ושמע מרחבי דינמי.
               עיצוב יוקרתי עם חומרים איכותיים ונוחות מרבית.
           `,
           specs: [
               "ביטול רעשים אקטיבי",
               "שמע מרחבי",
               "סוללה עד 20 שעות",
               "שבב H1",
               "חיבור Lightning"
           ]
        },
        {
           id: 4,
           name: "Magic Keyboard",
           description: "עם משטח מגע",
           basePrice: "599",
           image: "/group14/img/magickeyboard.png",
           fullDescription: `
               Magic Keyboard עם משטח מגע מובנה לחוויית הקלדה מושלמת.
               עיצוב דק ונוח עם מקשים מוארים.
               סוללה נטענת המחזיקה עד חודש של שימוש.
           `,
           specs: [
               "מקשים מוארים",
               "משטח מגע מובנה",
               "חיבור USB-C",
               "סוללה נטענת",
               "תאימות מלאה ל-Mac"
           ]
        },
        {
           id: 5,
           name: "Apple Pencil",
           description: "דור 2",
           basePrice: "599",
           image: "/group14/img/applepencil.webp",
           fullDescription: `
               Apple Pencil דור 2 מציע דיוק מושלם ותגובה מיידית.
               טעינה אלחוטית מגנטית נוחה.
               מושלם לציור, רישום הערות ועריכה מדויקת.
           `,
           specs: [
               "רגישות ללחיצה",
               "טעינה אלחוטית",
               "חיבור מגנטי",
               "הצמדה כפולה",
               "אפס השהיה"
           ]
        },
        {
           id: 6,
           name: "MagSafe Charger",
           description: "מטען אלחוטי",
           basePrice: "199",
           image: "/group14/img/magSafe.png",
           fullDescription: `
               MagSafe Charger מספק טעינה אלחוטית מהירה ונוחה.
               חיבור מגנטי מדויק לטעינה אופטימלית.
               תואם לכל מכשירי iPhone 12 ומעלה.
           `,
           specs: [
               "טעינה אלחוטית עד 15W",
               "חיבור מגנטי",
               "חיבור USB-C",
               "תאימות רחבה",
               "עיצוב דק וקומפקטי"
           ]
        },
        {
           id: 7,
           name: "Magic Mouse",
           description: "משטח מגע רב-מגע",
           basePrice: "349",
           image: "/group14/img/MagicMouse.jpg",
           fullDescription: `
               Magic Mouse עם משטח רב-מגע לשליטה אינטואיטיבית.
               עיצוב ארגונומי ותנועה חלקה על כל משטח.
               סוללה נטענת המחזיקה עד חודש של שימוש.
           `,
           specs: [
               "משטח רב-מגע",
               "חיבור Bluetooth",
               "סוללה נטענת",
               "חיבור Lightning",
               "תאימות מלאה ל-Mac"
           ]
        },
        {
           id: 8,
           name: "AirTag",
           description: "מעקב מיקום מדויק",
           basePrice: "139",
           image: "/group14/img/airtag.jpeg",
           fullDescription: `
               AirTag מאפשר מעקב מדויק אחר חפצים חשובים.
               משתלב עם אפליקציית 'איתור' לאיתור קל ומהיר.
               סוללה שמחזיקה כשנה ועמידות למים.
           `,
           specs: [
               "מעקב מדויק",
               "רשת 'איתור'",
               "סוללה לשנה",
               "עמידות למים IP67",
               "חיבור U1"
           ]
        }
    ]
};


// Function to format price in Israeli Shekels
function formatPrice(price) {
    return `₪${price.toLocaleString()}`;
}

// Function to get base price plus storage price
function calculateTotalPrice(basePrice, storageOption) {
    const storagePrice = storageOption ? storageOption.priceAdd : 0;
    return basePrice + storagePrice;
}

// Function to create a product card
function createProductCard(product, category) {
    const hasColorOptions = defaultColors[category];
    const hasStorageOptions = defaultStorage[category];

    const optionsHtml = (hasColorOptions || hasStorageOptions) ? `
        <div class="product-options">
            ${hasColorOptions ? `
                <div class="color-preview">
                    ${defaultColors[category].slice(0, 3).map(color => `
                        <span class="color-dot" style="background-color: ${color.value}" title="${color.name}"></span>
                    `).join('')}
                    ${defaultColors[category].length > 3 ? `
                        <span class="color-more">+${defaultColors[category].length - 3}</span>
                    ` : ''}
                </div>
            ` : ''}
            ${hasStorageOptions ? `
                <div class="storage-preview">
                    <span>${defaultStorage[category][0].size}</span>
                    ${defaultStorage[category].length > 1 ? `
                        <span class="storage-separator">-</span>
                        <span>${defaultStorage[category][defaultStorage[category].length - 1].size}</span>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    ` : '';

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${optionsHtml}
                <p class="product-price">${formatPrice(product.basePrice)}</p>
            </div>
        </div>
    `;
}

// Function to display products for a category
export function displayProducts(category) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) {
        console.error('Product grid element not found');
        return;
    }

    const products = productData[category];
    if (!products) {
        productGrid.innerHTML = '<div class="error-message">קטגוריה לא נמצאה</div>';
        return;
    }

    productGrid.innerHTML = products.map(product => createProductCard(product, category)).join('');

    // Add click event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.productId;
            navigateToProductPage(category, productId);
        });
    });

    updateNavigationHighlight(category);
}

// Function to get product details
export async function getProductDetails(category, productId) {
    if (!productData[category]) {
        throw new Error(`Category '${category}' not found`);
    }

    const product = productData[category].find(p => p.id === parseInt(productId));
    if (!product) {
        throw new Error(`Product with ID ${productId} not found in category ${category}`);
    }

    return {
        ...product,
        availableColors: defaultColors[category] || [],
        availableStorage: defaultStorage[category] || [],
        category
    };
}

// Function to navigate to product details page
function navigateToProductPage(category, productId) {
    window.location.href = `/group14/pages/product.html?category=${category}&id=${productId}`;
}

// Function to update navigation highlighting
function updateNavigationHighlight(currentCategory) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(`category=${currentCategory}`)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Helper function to get URL parameters
export function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || 'mac',
        productId: params.get('id')
    };
}

// Function to handle errors
export function handleError(message, container) {
    console.error(message);
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <h2>שגיאה</h2>
                <p>${message}</p>
                <a href="/group14/pages/products.html" class="btn-secondary">חזור לדף הראשי</a>
            </div>
        `;
    }
}

// Update product page with details and options
export function updateProductPage(product) {
    const category = new URLSearchParams(window.location.search).get('category');
    const basePrice = parseInt(product.basePrice.replace(',', ''));

    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.fullDescription || product.description;
    document.getElementById('product-price').textContent = formatPrice(basePrice);

    // Add color options if available
    const colorOptions = document.getElementById('color-options');
    const colorGroup = colorOptions?.closest('.option-group');
    if (colorGroup && defaultColors[category]) {
        colorOptions.innerHTML = defaultColors[category].map((color, index) => `
            <div class="color-option ${index === 0 ? 'selected' : ''}" data-color="${color.name}">
                <span class="color-swatch" style="background-color: ${color.value}"></span>
                <span>${color.name}</span>
            </div>
        `).join('');

        // Add click handlers for color options
        colorOptions.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', () => {
                colorOptions.querySelectorAll('.color-option').forEach(opt =>
                    opt.classList.remove('selected')
                );
                option.classList.add('selected');

                // Update selected color in current product
                if (window.currentProduct) {
                    window.currentProduct.selectedColor = option.dataset;
                }
            });
        });
    } else if (colorGroup) {
        colorGroup.style.display = 'none';
    }

    // Add storage options if available
    const storageOptions = document.getElementById('storage-options');
    const storageGroup = storageOptions?.closest('.option-group');
    if (storageGroup && defaultStorage[category]) {
        storageOptions.innerHTML = defaultStorage[category].map((storage, index) => `
            <div class="storage-option ${index === 0 ? 'selected' : ''}" 
                 data-storage="${storage.size}" 
                 data-price-add="${storage.priceAdd}">
                <span class="storage-size">${storage.size}</span>
                <span class="storage-price">
                    ${storage.priceAdd > 0 ? `+${formatPrice(storage.priceAdd)}` : 'כלול'}
                </span>
            </div>
        `).join('');

        // Add click handlers for storage options
        storageOptions.querySelectorAll('.storage-option').forEach(option => {
            option.addEventListener('click', () => {
                storageOptions.querySelectorAll('.storage-option').forEach(opt =>
                    opt.classList.remove('selected')
                );
                option.classList.add('selected');

                // Update price based on selected storage
                const priceAdd = parseInt(option.dataset.priceAdd) || 0;
                const totalPrice = basePrice + priceAdd;
                window.currentProduct.totalPrice = totalPrice;
                document.getElementById('product-price').textContent = formatPrice(totalPrice);

                // Update selected storage in current product
                if (window.currentProduct) {
                    window.currentProduct.selectedStorage = option.dataset.storage;
                    window.currentProduct.currentPrice = formatPrice(totalPrice);
                }
            });
        });
    } else if (storageGroup) {
        storageGroup.style.display = 'none';
    }

    // Update specifications list
    const specsList = document.getElementById('product-specs');
    if (specsList && product.specs) {
        specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join('');
    }

    // Store current product data globally
    window.currentProduct = {
        ...product,
        selectedColor: defaultColors[category]?.[0] || null,
        selectedStorage: defaultStorage[category]?.[0]?.size || null,
        currentbasePrice: formatPrice(basePrice),
        totalPrice: basePrice,

    };
}

// Export configuration objects for use in other modules
export const productOptions = {
    colors: defaultColors,
    storage: defaultStorage
};