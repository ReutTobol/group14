# Color options for different categories
defaultColors = {
    "mac": [
        {"name": "Space Gray", "value": "#666666", "sku": "sg"},
        {"name": "Silver", "value": "#E3E3E3", "sku": "sv"}
    ],
    "iphone": [
        {"name": "Desert Titanium", "value": "#FFD700", "sku": "dt"},
        {"name": "Blue Titanium", "value": "#6B7989", "sku": "bt"},
        {"name": "White Titanium", "value": "#F5F5F0", "sku": "wt"},
        {"name": "Black Titanium", "value": "#4A4846", "sku": "bt"}
    ],
    "ipad": [
        {"name": "Space Gray", "value": "#666666", "sku": "sg"},
        {"name": "Silver", "value": "#E3E3E3", "sku": "sv"},
        {"name": "Rose Gold", "value": "#FAE0D8", "sku": "rg"}
    ]
}

# Storage options for different categories
defaultStorage = {
    "mac": [
        {"size": "256GB", "priceAdd": 0},
        {"size": "512GB", "priceAdd": 800},
        {"size": "1TB", "priceAdd": 1600},
        {"size": "2TB", "priceAdd": 3200}
    ],
    "iphone": [
        {"size": "128GB", "priceAdd": 0},
        {"size": "256GB", "priceAdd": 500},
        {"size": "512GB", "priceAdd": 1000},
        {"size": "1TB", "priceAdd": 1500}
    ],
    "ipad": [
        {"size": "64GB", "priceAdd": 0},
        {"size": "256GB", "priceAdd": 800},
        {"size": "512GB", "priceAdd": 1600},
        {"size": "1TB", "priceAdd": 2400}
    ]
}

productData = {
    "mac": [
        {
            "id": 1,
            "name": "MacBook Pro 14″",
            "description": "M3 Pro, 18GB RAM, 512GB SSD",
            "basePrice": "7,999",
            "image": "macbook.webp",
            "fullDescription": """
                MacBook Pro 14" עם שבב M3 Pro מציע ביצועים מרשימים במיוחד לאנשי מקצוע ומשתמשים מתקדמים. המחשב מצויד במסך Liquid Retina XDR מתקדם המספק איכות תצוגה מדהימה עם צבעים מדויקים ורמת בהירות גבוהה. הוא מושלם למעצבים, עורכי וידאו ומפתחים הזקוקים לביצועים גבוהים ודיוק צבעים.
            """,
            "specs": [
                "שבב Apple M3 Pro",
                "18GB RAM",
                "512GB SSD",
                "מסך 14.2 אינץ' Liquid Retina XDR",
                "כולל 3 יציאות Thunderbolt 4"
            ]
        },
        {
            "id": 2,
            "name": "MacBook Pro 16″",
            "description": "M3 MAX, 128GB RAM, 8TB SSD",
            "basePrice": "9,999",
            "image": "macbook.webp",
            "fullDescription": """
                MacBook Pro 16" הוא המחשב הנייד החזק ביותר של אפל, המיועד לאנשי מקצוע הזקוקים לעוצמה מקסימלית. עם שבב M3 Max, מסך גדול ומרהיב ויכולת לתמוך בזיכרון RAM ענק, הוא מסוגל להתמודד עם המשימות התובעניות ביותר.
            """,
            "specs": [
                "שבב Apple M3 Max",
                "עד 128GB RAM",
                "עד 8TB SSD",
                "מסך 16.2 אינץ' Liquid Retina XDR",
                "כולל 3 יציאות Thunderbolt 4"
            ]
        },
        {
            "id": 3,
            "name": "MacBook Air (M2)",
            "description": "Apple M2, 8GB RAM, 256GB SSD",
            "basePrice": "5,199",
            "image": "MacBookAir.jpeg",
            "fullDescription": """
                MacBook Air החדש מציג עיצוב מחודש ודק במיוחד עם שבב M2 רב-עוצמה. זהו המחשב האידיאלי לשימוש יומיומי, עבודה ולימודים. למרות משקלו הקל והפרופיל הדק, הוא מספק ביצועים מעולים וסוללה שמחזיקה לאורך כל היום.
            """,
            "specs": [
                "שבב Apple M2",
                "8GB RAM (ניתן לשדרוג)",
                "256GB SSD",
                "מסך 13.6 אינץ' Liquid Retina",
                "2 יציאות Thunderbolt 4"
            ]
        },
        {
            "id": 4,
            "name": "iMac 24″",
            "description": "Apple M3, 8GB RAM, 256GB SSD",
            "basePrice": "6,499",
            "image": "imac.jpg",
            "fullDescription": """
                iMac 24" מביא עיצוב צבעוני ורענן למחשב השולחני עם שבב M3 חזק. המסך המרהיב ברזולוציה 4.5K מספק חוויית צפייה יוצאת דופן, והמצלמה והמיקרופונים המשופרים הופכים אותו למושלם לשיחות וידאו.
            """,
            "specs": [
                "שבב Apple M3",
                "8GB RAM",
                "256GB SSD",
                "מסך 24 אינץ' 4.5K Retina",
                "מצלמת FaceTime HD 1080p"
            ]
        },
        {
            "id": 5,
            "name": "MacBook Air 15",
            "description": "M2, 8GB RAM, 256GB SSD",
            "basePrice": "6,199",
            "image": "MacbookAir15.webp",
            "fullDescription": """
                MacBook Air 15" מציע מסך גדול יותר בגוף דק במיוחד. שבב M2 רב עוצמה עם ביצועים מעולים וסוללה ארוכה. מושלם לעבודה ניידת עם מסך מרווח יותר.
            """,
            "specs": [
                "שבב Apple M2",
                "8GB RAM מאוחד",
                "256GB SSD",
                "מסך Liquid Retina 15.3 אינץ'",
                "MagSafe 3 לטעינה"
            ]
        },
        {
            "id": 6,
            "name": "MacBook Air 13",
            "description": "M1, 8GB RAM, 256GB SSD",
            "basePrice": "4,499",
            "image": "MacBookAir13.jpg",
            "fullDescription": """
                MacBook Air M1 מציע ביצועים מעולים במחיר משתלם.
                סוללה שמחזיקה עד 18 שעות של שימוש.
                מושלם ללימודים, עבודה ושימוש יומיומי.
            """,
            "specs": [
                "שבב Apple M1",
                "8GB RAM מאוחד",
                "256GB SSD",
                "מסך Retina 13.3 אינץ'",
                "עד 18 שעות סוללה"
            ]
        },
        {
            "id": 7,
            "name": "Mac mini",
            "description": "M2 Pro, 16GB RAM, 512GB SSD",
            "basePrice": "5,199",
            "image": "MacMINI.webp",
            "fullDescription": """
                Mac mini עם שבב M2 Pro מספק עוצמה אדירה בגוף קטן.
                אפשרויות חיבור מתקדמות כולל Thunderbolt 4.
                פתרון נהדר למשרד הביתי או כתחנת עבודה מקצועית.
            """,
            "specs": [
                "שבב M2 Pro",
                "16GB RAM",
                "512GB SSD",
                "4 יציאות Thunderbolt 4",
                "HDMI 2.0"
            ]
        },
        {
            "id": 8,
            "name": "Mac mini",
            "description": "M2, 8GB RAM, 256GB SSD",
            "basePrice": "2,999",
            "image": "MacMINI2.jpeg",
            "fullDescription": """
                Mac mini עם שבב M2 מציע ביצועים מצוינים במחיר משתלם.
                קטן בגודל אך גדול ביכולות.
                מושלם כשדרוג למחשב שולחני או כשרת ביתי.
            """,
            "specs": [
                "שבב Apple M2",
                "8GB RAM",
                "256GB SSD",
                "2 יציאות Thunderbolt 4",
                "HDMI 2.0"
            ]
        }
    ],
    "ipad": [
        {
            "id": 1,
            "name": "iPad Pro 12.9″",
            "description": "Apple M2, 8GB RAM, Wi-Fi 6E",
            "basePrice": "4,999",
            "image": "ipadPro.jpg",
            "fullDescription": """
                iPad Pro 12.9″ עם שבב M2 מספק ביצועים חזקים במיוחד. מסך Liquid Retina XDR עם ProMotion לחוויית משתמש מושלמת. אידיאלי לאמנים, מעצבים ואנשי מקצוע.
            """,
            "specs": [
                "שבב Apple M2",
                "8GB RAM",
                "מסך Liquid Retina XDR",
                "תמיכה ב-Apple Pencil דור 2",
                "Wi-Fi 6E"
            ]
        },
        {
            "id": 2,
            "name": "iPad Pro 11″",
            "description": "Apple M2, 8GB RAM, Wi-Fi",
            "basePrice": "3,999",
            "image": "ipadPro.jpg",
            "fullDescription": """
                iPad Pro 11″ עם שבב M2 מציע ביצועים חזקים בגודל קומפקטי יותר. 
                מסך Liquid Retina עם ProMotion לתצוגה חלקה ומהירה.
                מושלם למקצוענים שמחפשים ניידות מקסימלית.
            """,
            "specs": [
                "שבב Apple M2",
                "8GB RAM",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2",
                "Wi-Fi 6E"
            ]
        },
        {
            "id": 3,
            "name": "iPad Air",
            "description": "Apple M1, 8GB RAM, Wi-Fi",
            "basePrice": "2,699",
            "image": "ipadAIR.jpeg",
            "fullDescription": """
                iPad Air עם שבב M1 מספק ביצועים מעולים במארז דק ואלגנטי.
                מסך Liquid Retina 10.9 אינץ' עם צבעים מדויקים.              
                אידיאלי לעבודה, לימודים ויצירה דיגיטלית.
            """,
            "specs": [
                "שבב Apple M1",
                "אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        },
        {
            "id": 4,
            "name": "iPad",
            "description": "Apple A14 Bionic, Wi-Fi",
            "basePrice": "2,099",
            "image": "ipad.png",
            "fullDescription": """
                iPad דור 10 מציע חוויית משתמש מעולה במחיר משתלם.
                מסך Liquid Retina 10.9 אינץ' עם עיצוב מודרני.
                מושלם למשפחות, סטודנטים ושימוש יומיומי.
            """,
            "specs": [
                "שבב A14 Bionic",
                "אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 1"
            ]
        },
        {
            "id": 5,
            "name": "iPad mini",
            "description": "Apple A15 Bionic, Wi-Fi",
            "basePrice": "2,299",
            "image": "ipadMINI.jpeg",
            "fullDescription": """
                iPad mini מציע עוצמה מקסימלית בגודל מינימלי.
                מסך Liquid Retina 8.3 אינץ' בעיצוב קומפקטי.                         
                אידיאלי לניידות מקסימלית וקריאה נוחה.
            """,
            "specs": [
                "שבב A15 Bionic",
                "אחסון 64GB (אפשרות ל-256GB)",
                "Wi-Fi 6",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2"
            ]
        }
    ],
    "iphone": [
        {
            "id": 1,
            "name": "iPhone 15 Pro Max",
            "description": "A17 Pro, 8GB RAM, 256GB",
            "basePrice": "6,499",
            "image": "iphone15ProMax.webp",
            "fullDescription": """
                iPhone 15 Pro Max מציג את שבב A17 Pro החדשני, מצלמה משולשת מתקדמת ומסך Super Retina XDR. עיצוב טיטניום חדש ועמיד במיוחד.
            """,
            "specs": [
                "שבב A17 Pro",
                "מצלמה משולשת 48MP",
                "מסך Super Retina XDR",
                "טיטניום חלל",
                "USB-C"
            ]
        },
        {
            "id": 2,
            "name": "iPhone 15 Pro",
            "description": "A17 Pro, 8GB RAM, 128GB",
            "basePrice": "5,499",
            "image": "iphone15pro.png",
            "fullDescription": """
                iPhone 15 Pro מביא את כל היתרונות של סדרת Pro בגוף קטן וקומפקטי יותר. שבב A17 Pro, מצלמה משולשת ועיצוב טיטניום.
            """,
            "specs": [
                "שבב A17 Pro",
                "מצלמה משולשת 48MP",
                "מסך Super Retina XDR",
                "טיטניום חלל",
                "USB-C"
            ]
        },
        {
            "id": 3,
            "name": "iPhone 15 Plus",
            "description": "A16 Bionic, 128GB",
            "basePrice": "4,399",
            "image": "iphone15PLUS.jpeg",
            "fullDescription": """
                iPhone 15 Plus מציע מסך גדול של 6.7 אינץ' עם Dynamic Island.
                מצלמה משודרגת של 48MP וסוללה חזקה במיוחד.
                מושלם למי שמחפש מסך גדול וביצועים מעולים.
            """,
            "specs": [
                "שבב A16 Bionic",
                "128GB אחסון",
                "מסך 6.7 אינץ' Super Retina XDR",
                "מצלמה ראשית 48MP",
                "Dynamic Island"
            ]
        },
        {
            "id": 4,
            "name": "iPhone 15",
            "description": "128GB",
            "basePrice": "3,799",
            "image": "iphone15.jpg",
            "fullDescription": """
                iPhone 15 משלב עיצוב מודרני עם ביצועים מעולים.
                מסך 6.1 אינץ' חד ובהיר עם Dynamic Island.
                מצלמה משודרגת של 48MP לצילום תמונות מרשימות וחיבור USB-C.
            """,
            "specs": [
                "שבב A16 Bionic",
                "128GB אחסון",
                "מסך 6.1 אינץ' Super Retina XDR",
                "מצלמה ראשית 48MP",
                "Dynamic Island"
            ]
        },
        {
            "id": 5,
            "name": "iPhone 14 Plus",
            "description": "128GB",
            "basePrice": "3,599",
            "image": "iphone14plus.png",
            "fullDescription": """
                iPhone 14 Plus מציע מסך גדול של 6.7 אינץ' וסוללה חזקה במיוחד.
                ביצועים מעולים עם שבב A15 Bionic.
                מושלם למי שמחפש מסך גדול במחיר משתלם עם חיי סוללה ארוכים.
            """,
            "specs": [
                "שבב A15 Bionic",
                "128GB אחסון",
                "מסך 6.7 אינץ' Super Retina XDR",
                "מצלמה כפולה 12MP",
                "סוללה ליום שלם+"
            ]
        },
        {
            "id": 6,
            "name": "iPhone 14",
            "description": "128GB",
            "basePrice": "3,199",
            "image": "iphone14.jpg",
            "fullDescription": """
                iPhone 14 מציע ביצועים מעולים במחיר משתלם.
                מסך 6.1 אינץ' Super Retina XDR איכותי.
                מערך מצלמות כפול לצילום תמונות וסרטונים מרשימים.
            """,
            "specs": [
                "שבב A15 Bionic",
                "128GB אחסון",
                "מסך 6.1 אינץ' Super Retina XDR",
                "מצלמה כפולה 12MP",
                "תמיכה ב-5G"
            ]
        },
        {
            "id": 7,
            "name": "iPhone 13",
            "description": "128GB",
            "basePrice": "2,999",
            "image": "iphone13.webp",
            "fullDescription": """
                iPhone 13 מציע ערך מצוין עם שבב A15 Bionic החזק.
                מסך 6.1 אינץ' Super Retina XDR איכותי.
                מערך מצלמות כפול משופר לצילום יום ולילה מרשימים.
            """,
            "specs": [
                "שבב A15 Bionic",
                "128GB אחסון",
                "מסך 6.1 אינץ' Super Retina XDR",
                "מצלמה כפולה 12MP",
                "תמיכה ב-5G"
            ]
        },
        {
            "id": 8,
            "name": "iPhone 13 mini",
            "description": "128GB",
            "basePrice": "2,699",
            "image": "iphone13MINI.jpg",
            "fullDescription": """
                iPhone 13 mini מציע את כל היתרונות של iPhone 13 בגוף קטן וקומפקטי.
                מסך 5.4 אינץ' Super Retina XDR.
                אידיאלי למי שמחפש סמארטפון קטן וחזק.
            """,
            "specs": [
                "שבב A15 Bionic",
                "128GB אחסון",
                "מסך 5.4 אינץ' Super Retina XDR",
                "מצלמה כפולה 12MP",
                "תמיכה ב-5G"
            ]
        }
    ],
        "watch": [
        {
            "id": 1,
            "name": "Apple Watch Ultra 2",
            "description": "49mm, GPS + Cellular",
            "basePrice": "3,999",
            "image": "applewatchultra2.jpg",
            "fullDescription": """
                Apple Watch Ultra 2 מציע את חווית השעון החכם המתקדמת ביותר.
                מסך בהיר במיוחד, גוף טיטניום עמיד וסוללה חזקה.
                מושלם לספורטאים ולמשתמשים מקצועיים.
            """,
            "specs": [
                "מסך Retina תמידי עד 3000 nits",
                "שבב S9 מתקדם",
                "GPS + Cellular מובנה",
                "סוללה עד 36 שעות"
            ]
        },
        {
            "id": 2,
            "name": "Apple Watch Series 9",
            "description": "45mm, GPS",
            "basePrice": "1,999",
            "image": "applewatchs9.png",
            "fullDescription": """
                Apple Watch Series 9 עם שבב S9 החדש מציע ביצועים משופרים.
                מסך Retina תמידי בהיר, מעקב בריאות מתקדם.
                תומך במחוות כפולות ובקרת דיוק חדשה.
            """,
            "specs": [
                "מסך Retina תמידי",
                "שבב S9",
                "מעקב דופק וECG",
                "מדידת חמצן בדם",
                "עמידות במים WR50"
            ]
        },
        {
            "id": 3,
            "name": "Apple Watch Series 9",
            "description": "41mm, GPS",
            "basePrice": "1,799",
            "image": "applewatchs9.png",
            "fullDescription": """
                Apple Watch Series 9 בגרסת 41mm מושלם לפרק יד קטן יותר.
                כולל את כל התכונות המתקדמות של הסדרה עם שבב S9.
                מעקב בריאות וכושר מקיף בעיצוב קומפקטי.
            """,
            "specs": [
                "מסך Retina תמידי",
                "שבב S9",
                "מעקב דופק וECG",
                "מדידת חמצן בדם",
                "עמידות במים WR50"
            ]
        },
        {
            "id": 4,
            "name": "Apple Watch SE",
            "description": "44mm, GPS",
            "basePrice": "1,249",
            "image": "AppleWatchSE.jpg",
            "fullDescription": """
                Apple Watch SE מציע את התכונות החיוניות במחיר משתלם.
                מעקב כושר ובריאות, התראות חכמות ועיצוב מודרני.
                אידיאלי למי שנכנס לעולם השעונים החכמים.
            """,
            "specs": [
                "מסך Retina",
                "שבב S8",
                "מעקב דופק",
                "זיהוי נפילות",
                "עמידות במים WR50"
            ]
        },
        {
            "id": 5,
            "name": "Apple Watch SE",
            "description": "40mm, GPS",
            "basePrice": "1,099",
            "image": "AppleWatchSE2.jpg",
            "fullDescription": """
                Apple Watch SE בגרסת 40mm מציע חווית שעון חכם במחיר נגיש.
                כולל את כל התכונות החיוניות בגודל קומפקטי.
                מושלם למעקב אחר פעילות יומיומית ובריאות.
            """,
            "specs": [
                "מסך Retina",
                "שבב S8",
                "מעקב דופק",
                "זיהוי נפילות",
                "עמידות במים WR50"
            ]
        },
        {
            "id": 6,
            "name": "Apple Watch Series 9",
            "description": "45mm, GPS + Cellular",
            "basePrice": "3,299",
            "image": "applewatchseries9.png",
            "fullDescription": """
                Apple Watch Series 9 בגרסת פלדת אל-חלד היוקרתית.
                מסך ספיר קריסטל עמיד במיוחד, גימור יוקרתי.
                כולל קישוריות סלולרית מובנית לחופש מלא מהטלפון.
            """,
            "specs": [
                "גוף פלדת אל-חלד",
                "מסך ספיר קריסטל",
                "שבב S9",
                "GPS + Cellular",
                "מעקב בריאות מתקדם"
            ]
        }
    ],
    "accessories": [
        {
            "id": 1,
            "name": "AirPods Pro",
            "description": "דור 2 עם USB-C",
            "basePrice": "999",
            "image": "airpodsPro.webp",
            "fullDescription": """
                AirPods Pro דור 2 עם ביטול רעשים אקטיבי משופר.
                שמע מרחבי מותאם אישית וטכנולוגיית Adaptive Audio.
                כולל חיבור USB-C לטעינה מהירה ונוחה.
            """,
            "specs": [
                "ביטול רעשים אקטיבי",
                "שמע מרחבי מותאם",
                "חיבור USB-C",
                "סוללה עד 6 שעות",
                "עמידות למים IPX4"
            ]
        },
        {
            "id": 2,
            "name": "AirPods",
            "description": "דור 3",
            "basePrice": "799",
            "image": "airpods.jpg",
            "fullDescription": """
                AirPods דור 3 עם עיצוב מעודכן ושמע מרחבי.
                חיישני לחץ לשליטה קלה ונוחה.
                עמידות למים ולזיעה לשימוש ספורטיבי.
            """,
            "specs": [
                "שמע מרחבי",
                "חיישני לחץ",
                "סוללה עד 6 שעות",
                "טעינה אלחוטית",
                "עמידות למים IPX4"
            ]
        },
        {
            "id": 3,
            "name": "AirPods Max",
            "description": "אוזניות Over-Ear",
            "basePrice": "2,199",
            "image": "airpodsMax.jpg",
            "fullDescription": """
                AirPods Max מציעות חווית שמע פרימיום ברמה הגבוהה ביותר.
                ביטול רעשים אקטיבי מתקדם ושמע מרחבי דינמי.
                עיצוב יוקרתי עם חומרים איכותיים ונוחות מרבית.
            """,
            "specs": [
                "ביטול רעשים אקטיבי",
                "שמע מרחבי",
                "סוללה עד 20 שעות",
                "שבב H1",
                "חיבור Lightning"
            ]
        },
        {
            "id": 4,
            "name": "Magic Keyboard",
            "description": "עם משטח מגע",
            "basePrice": "599",
            "image": "magickeyboard.png",
            "fullDescription": """
                Magic Keyboard עם משטח מגע מובנה לחוויית הקלדה מושלמת.
                עיצוב דק ונוח עם מקשים מוארים.
                סוללה נטענת המחזיקה עד חודש של שימוש.
            """,
            "specs": [
                "מקשים מוארים",
                "משטח מגע מובנה",
                "חיבור USB-C",
                "סוללה נטענת",
                "תאימות מלאה ל-Mac"
            ]
        },
        {
            "id": 5,
            "name": "Apple Pencil",
            "description": "דור 2",
            "basePrice": "599",
            "image": "applepencil.webp",
            "fullDescription": """
                Apple Pencil דור 2 מציע דיוק מושלם ותגובה מיידית.
                טעינה אלחוטית מגנטית נוחה.
                מושלם לציור, רישום הערות ועריכה מדויקת.
            """,
            "specs": [
                "רגישות ללחיצה",
                "טעינה אלחוטית",
                "חיבור מגנטי",
                "הצמדה כפולה",
                "אפס השהיה"
            ]
        },
        {
            "id": 6,
            "name": "MagSafe Charger",
            "description": "מטען אלחוטי",
            "basePrice": "199",
            "image": "magSafe.png",
            "fullDescription": """
                MagSafe Charger מספק טעינה אלחוטית מהירה ונוחה.
                חיבור מגנטי מדויק לטעינה אופטימלית.
                תואם לכל מכשירי iPhone 12 ומעלה.
            """,
            "specs": [
                "טעינה אלחוטית עד 15W",
                "חיבור מגנטי",
                "חיבור USB-C",
                "תאימות רחבה",
                "עיצוב דק וקומפקטי"
            ]
        },
        {
            "id": 7,
            "name": "Magic Mouse",
            "description": "משטח מגע רב-מגע",
            "basePrice": "349",
            "image": "MagicMouse.jpg",
            "fullDescription": """
                Magic Mouse עם משטח רב-מגע לשליטה אינטואיטיבית.
                עיצוב ארגונומי ותנועה חלקה על כל משטח.
                סוללה נטענת המחזיקה עד חודש של שימוש.
            """,
            "specs": [
                "משטח רב-מגע",
                "חיבור Bluetooth",
                "סוללה נטענת",
                "חיבור Lightning",
                "תאימות מלאה ל-Mac"
            ]
        },
        {
            "id": 8,
            "name": "AirTag",
            "description": "מעקב מיקום מדויק",
            "basePrice": "139",
            "image": "airtag.jpeg",
            "fullDescription": """
                AirTag מאפשר מעקב מדויק אחר חפצים חשובים.
                משתלב עם אפליקציית 'איתור' לאיתור קל ומהיר.
                סוללה שמחזיקה כשנה ועמידות למים.
            """,
            "specs": [
                "מעקב מדויק",
                "רשת 'איתור'",
                "סוללה לשנה",
                "עמידות למים IP67",
                "חיבור U1"
            ]
        }
    ]
} 