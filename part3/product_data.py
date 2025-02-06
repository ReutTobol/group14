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
            "name": "iPad Air",
            "description": "Apple M1, 8GB RAM, Wi-Fi 6",
            "basePrice": "2,999",
            "image": "ipadAir.jpg",
            "fullDescription": """
                iPad Air מציע את הביצועים של M1 במארז דק וקל. מסך Liquid Retina מרהיב ותמיכה ב-Apple Pencil דור 2. מושלם ליצירה, עבודה ובידור.
            """,
            "specs": [
                "שבב Apple M1",
                "8GB RAM",
                "מסך Liquid Retina",
                "תמיכה ב-Apple Pencil דור 2",
                "Wi-Fi 6"
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
                iPhone 15 Pro מביא את כל היתרונות של סדרת Pro בגודל קומפקטי יותר. שבב A17 Pro, מצלמה משולשת ועיצוב טיטניום.
            """,
            "specs": [
                "שבב A17 Pro",
                "מצלמה משולשת 48MP",
                "מסך Super Retina XDR",
                "טיטניום חלל",
                "USB-C"
            ]
        }
    ],
    "watch": [
        {
            "id": 1,
            "name": "Apple Watch Ultra 2",
            "description": "49mm, טיטניום",
            "basePrice": "3,999",
            "image": "watchUltra2.jpg",
            "fullDescription": """
                Apple Watch Ultra 2 מציע את החוויה המתקדמת ביותר לספורטאים ומטיילים. מסך בהיר במיוחד, GPS מדויק וסוללה חזקה.
            """,
            "specs": [
                "מסך 49mm Always-On",
                "מבנה טיטניום",
                "GPS דו-תדרי",
                "עמידות למים 100m",
                "סוללה עד 36 שעות"
            ]
        },
        {
            "id": 2,
            "name": "Apple Watch Series 9",
            "description": "45mm, אלומיניום",
            "basePrice": "2,199",
            "image": "watchSeries9.jpg",
            "fullDescription": """
                Apple Watch Series 9 מציג שבב S9 חדש, מסך בהיר יותר ותכונות בריאות מתקדמות. מושלם למעקב אחר פעילות גופנית ובריאות.
            """,
            "specs": [
                "שבב S9",
                "מסך Always-On",
                "מעקב דופק מתקדם",
                "מדידת חמצן בדם",
                "עמידות למים 50m"
            ]
        }
    ],
    "accessories": [
        {
            "id": 1,
            "name": "AirPods Pro",
            "description": "דור 2 עם USB-C",
            "basePrice": "999",
            "image": "airpodsPro.jpg",
            "fullDescription": """
                AirPods Pro דור 2 עם ביטול רעשים אקטיבי משופר ושמע מרחבי. חווית שמע פרימיום עם נוחות מרבית.
            """,
            "specs": [
                "ביטול רעשים אקטיבי",
                "שמע מרחבי",
                "חיבור USB-C",
                "עמידות למים IPX4",
                "סוללה עד 6 שעות"
            ]
        },
        {
            "id": 2,
            "name": "AirPods",
            "description": "דור 3",
            "basePrice": "799",
            "image": "airpods.jpg",
            "fullDescription": """
                AirPods דור 3 עם עיצוב מעודכן ושמע מרחבי. חיישני לחץ לשליטה קלה ונוחה. עמידות למים ולזיעה לשימוש ספורטיבי.
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
                AirPods Max מציעות חווית שמע פרימיום ברמה הגבוהה ביותר. ביטול רעשים אקטיבי מתקדם ושמע מרחבי דינמי.
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
                Magic Keyboard עם משטח מגע מובנה לחוויית הקלדה מושלמת. עיצוב דק ונוח עם מקשים מוארים.
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
                Apple Pencil דור 2 מציע דיוק מושלם ותגובה מיידית. טעינה אלחוטית מגנטית נוחה.
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
                MagSafe Charger מספק טעינה אלחוטית מהירה ונוחה. חיבור מגנטי מדויק לטעינה אופטימלית.
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
                Magic Mouse עם משטח רב-מגע לשליטה אינטואיטיבית. עיצוב ארגונומי ותנועה חלקה על כל משטח.
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
                AirTag מאפשר מעקב מדויק אחר חפצים חשובים. משתלב עם אפליקציית 'איתור' לאיתור קל ומהיר.
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