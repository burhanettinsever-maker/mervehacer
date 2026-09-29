// =============================================================================
// REBİİ KARATEKİN ORTAOKULU - ÖZEL EĞİTİM DİN KÜLTÜRÜ & PEYGAMBERİMİZİN HAYATI
// 7. SINIF BEP DİNİ VE MANEVİ DEĞERLER ETKİNLİK & BOYAMA MATERYAL HAVUZU
// Öğretmen: Merve Hacer SEVER
// =============================================================================

window.ACTIVITIES_DATA = [
  // ---------------------------------------------------------------------------
  // 1. DİNİ SEMBOLLER VE MEKANLAR BOYAMA
  // ---------------------------------------------------------------------------
  {
    id: "act-cami",
    category: "boyama",
    categoryName: "Dini Semboller",
    badge: "Boyama",
    icon: "🕌",
    grade: "7. Sınıf BEP",
    title: "Şirin Mahalle Camisi Boyama",
    desc: "Cami, minare, kubbe ve hilal kavramlarını tanıma; el-göz koordinasyonu ve motor beceri geliştirme.",
    instructions: "Yönerge: Caminin kubbesini, minarelerini ve pencerelerini dilediğin canlı renklere boyayabilirsin.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .thin-line { fill: none; stroke: #1e293b; stroke-width: 3; stroke-linecap: round; }
          </style>
        </defs>
        <!-- Bulutlar ve Gökyüzü -->
        <path class="line-art" d="M 120 100 Q 140 70 170 80 Q 200 60 230 80 Q 250 100 230 120 Q 200 130 160 125 Q 120 125 120 100 Z" />
        <path class="line-art" d="M 570 90 Q 590 60 620 70 Q 650 50 680 70 Q 700 90 680 110 Q 650 120 610 115 Q 570 115 570 90 Z" />
        
        <!-- Zemin & Avlu -->
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />
        <path class="line-art" d="M 320 520 L 340 440 L 460 440 L 480 520 Z" />
        
        <!-- Cami Ana Gövde -->
        <rect x="250" y="270" width="300" height="230" rx="8" class="line-art" />
        
        <!-- Büyük Merkez Kubbe -->
        <path class="line-art" d="M 270 270 C 270 130, 530 130, 530 270 Z" />
        <!-- Hilal ve Alem -->
        <path class="line-art" d="M 400 135 L 400 90" />
        <path class="line-art" d="M 390 85 C 380 70, 420 50, 410 95 C 400 80, 400 85, 390 85 Z" />
        
        <!-- Yan Yarım Kubbeler -->
        <path class="line-art" d="M 210 320 C 210 250, 270 250, 270 320 Z" />
        <path class="line-art" d="M 530 320 C 530 250, 590 250, 590 320 Z" />
        <rect x="200" y="320" width="60" height="180" class="line-art" />
        <rect x="540" y="320" width="60" height="180" class="line-art" />
        
        <!-- Sol Minare -->
        <rect x="150" y="160" width="45" height="340" class="line-art" />
        <path class="line-art" d="M 140 280 L 205 280 L 200 295 L 145 295 Z" />
        <path class="line-art" d="M 140 180 L 205 180 L 200 195 L 145 195 Z" />
        <path class="line-art" d="M 150 160 L 172 80 L 195 160 Z" />
        <path class="line-art" d="M 172 80 L 172 55" />
        <!-- Sol Hilal -->
        <path class="line-art" d="M 167 52 C 160 40, 185 30, 178 58 Z" />

        <!-- Sağ Minare -->
        <rect x="605" y="160" width="45" height="340" class="line-art" />
        <path class="line-art" d="M 595 280 L 660 280 L 655 295 L 600 295 Z" />
        <path class="line-art" d="M 595 180 L 660 180 L 655 195 L 600 195 Z" />
        <path class="line-art" d="M 605 160 L 627 80 L 650 160 Z" />
        <path class="line-art" d="M 627 80 L 627 55" />
        <!-- Sağ Hilal -->
        <path class="line-art" d="M 622 52 C 615 40, 640 30, 633 58 Z" />

        <!-- Ana Cami Kapısı -->
        <path class="line-art" d="M 360 500 L 360 410 C 360 375, 440 375, 440 410 L 440 500 Z" />
        <line x1="400" y1="380" x2="400" y2="500" class="thin-line" />
        <circle cx="385" cy="450" r="4" class="line-art" />
        <circle cx="415" cy="450" r="4" class="line-art" />

        <!-- Pencereler -->
        <path class="line-art" d="M 290 380 L 290 330 C 290 310, 330 310, 330 330 L 330 380 Z" />
        <path class="line-art" d="M 470 380 L 470 330 C 470 310, 510 310, 510 330 L 510 380 Z" />
        <circle cx="400" cy="230" r="28" class="line-art" />
        
        <!-- Ağaçlar -->
        <path class="line-art" d="M 80 520 L 95 440 C 70 420, 65 370, 95 350 C 95 330, 125 330, 130 350 C 150 370, 150 420, 125 440 L 140 520 Z" />
        <path class="line-art" d="M 680 520 L 695 440 C 670 420, 665 370, 695 350 C 695 330, 725 330, 730 350 C 750 370, 750 420, 725 440 L 740 520 Z" />
      </svg>
    `
  },
  {
    id: "act-kabe",
    category: "boyama",
    categoryName: "Dini Semboller",
    badge: "Boyama",
    icon: "🕋",
    grade: "7. Sınıf BEP",
    title: "Kâbe-i Muazzama ve Hilal",
    desc: "Müslümanların kıblesi Kabe'yi tanıma, manevi mekan bilinci ve sade boyama çalışması.",
    instructions: "Yönerge: Kâbe'nin örtüsünü siyaha, üzerindeki altın yaldızlı kuşağı sarıya boyayabilirsin.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
          </style>
        </defs>
        <!-- Gökyüzündeki Yıldızlar & Hilal -->
        <path class="line-art" d="M 640 120 C 590 100, 600 200, 670 210 C 620 200, 620 140, 640 120 Z" />
        <!-- Yıldız -->
        <polygon points="680,140 686,155 702,156 689,166 694,181 680,172 667,181 671,166 659,156 675,155" class="line-art" />
        <polygon points="150,130 154,142 167,143 156,151 160,163 150,156 139,163 143,151 133,143 146,142" class="line-art" />
        <polygon points="240,90 243,98 252,99 245,104 248,112 240,107 233,112 235,104 228,99 237,98" class="line-art" />

        <!-- Kabe Zemin Kaidesi (Şadırvan) -->
        <polygon points="180,510 520,530 650,470 310,450" class="line-art" />
        
        <!-- Kabe Ana Küp Gövdesi -->
        <!-- Ön Yüz -->
        <polygon points="200,500 500,520 500,240 200,220" class="line-art" />
        <!-- Yan Yüz -->
        <polygon points="500,520 630,460 630,190 500,240" class="line-art" />
        <!-- Üst Çatı -->
        <polygon points="200,220 500,240 630,190 330,170" class="line-art" />

        <!-- Kabe Altın Kuşağı (Hizam Kuşağı) -->
        <!-- Ön Kuşak -->
        <polygon points="200,280 500,300 500,335 200,315" class="line-art" />
        <!-- Yan Kuşak -->
        <polygon points="500,300 630,250 630,285 500,335" class="line-art" />
        
        <!-- Kuşak İçi Motif Çizgileri -->
        <line x1="220" y1="298" x2="480" y2="318" stroke="#1e293b" stroke-width="3" stroke-dasharray="10,8" />
        <line x1="520" y1="318" x2="610" y2="268" stroke="#1e293b" stroke-width="3" stroke-dasharray="10,8" />

        <!-- Kabe Kapısı -->
        <polygon points="390,490 470,495 470,360 390,355" class="line-art" />
        <line x1="430" y1="358" x2="430" y2="492" stroke="#1e293b" stroke-width="3" />
        <circle cx="410" cy="430" r="5" class="line-art" />
        <circle cx="450" cy="432" r="5" class="line-art" />
        
        <!-- Altın Oluk (Mîzâb-ı Rahmet) -->
        <polygon points="340,171 360,172 355,160 335,159" class="line-art" />

        <!-- Dua & Işık Hüzmeleri -->
        <line x1="160" y1="460" x2="100" y2="440" class="thick-line" />
        <line x1="170" y1="400" x2="90" y2="370" class="thick-line" />
        <line x1="670" y1="430" x2="730" y2="410" class="thick-line" />
        <line x1="660" y1="370" x2="740" y2="340" class="thick-line" />
      </svg>
    `
  },
  {
    id: "act-dua",
    category: "boyama",
    categoryName: "Dini Semboller",
    badge: "Boyama",
    icon: "🤲",
    grade: "7. Sınıf BEP",
    title: "Dua Eden Sevimli Çocuk",
    desc: "Dua etmenin önemi, Allah'a sığınma ve manevi huzur duygusunu pekiştirme.",
    instructions: "Yönerge: Sevimli çocuğun kıyafetlerini ve başındaki takkeyi en sevdiğin renklere boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <!-- Üst Yazı Başlığı -->
        <text x="400" y="80" text-anchor="middle" font-size="34" class="text-art" letter-spacing="4">ALLAH'IM BENİ VE AİLEMİ KORU</text>
        <path d="M 220 95 Q 400 115 580 95" fill="none" stroke="#1e293b" stroke-width="3" />

        <!-- Kalpler & Yıldızlar -->
        <path class="line-art" d="M 180 180 C 160 150, 120 170, 120 200 C 120 230, 180 270, 180 270 C 180 270, 240 230, 240 200 C 240 170, 200 150, 180 180 Z" />
        <path class="line-art" d="M 620 180 C 600 150, 560 170, 560 200 C 560 230, 620 270, 620 270 C 620 270, 680 230, 680 200 C 680 170, 640 150, 620 180 Z" />

        <!-- Çocuk Yüzü ve Başı -->
        <circle cx="400" cy="250" r="95" class="line-art" />
        
        <!-- Sevimli Takke / Başlık -->
        <path class="line-art" d="M 315 220 C 315 130, 485 130, 485 220 Z" />
        <line x1="315" y1="220" x2="485" y2="220" class="thick-line" />
        <circle cx="400" cy="130" r="10" class="line-art" />

        <!-- Saçlar -->
        <path class="line-art" d="M 315 220 Q 330 250 325 270" />
        <path class="line-art" d="M 485 220 Q 470 250 475 270" />

        <!-- Gözler (Mutlu Kapalı Dua Gözleri) -->
        <path d="M 350 250 Q 370 270 390 250" fill="none" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
        <path d="M 410 250 Q 430 270 450 250" fill="none" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
        
        <!-- Burun ve Gülümseyen Ağız -->
        <circle cx="400" cy="275" r="4" fill="#1e293b" />
        <path d="M 375 295 Q 400 325 425 295" fill="none" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
        <!-- Yanak Gamzeleri -->
        <circle cx="345" cy="285" r="8" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />
        <circle cx="455" cy="285" r="8" fill="#f8fafc" stroke="#1e293b" stroke-width="2" />

        <!-- Gövde ve Elbise -->
        <path class="line-art" d="M 330 335 L 260 520 L 540 520 L 470 335 Z" />
        <path class="line-art" d="M 375 340 Q 400 370 425 340" />

        <!-- Dua İçin Açılmış Eller (Ön Planda) -->
        <!-- Sol El -->
        <path class="line-art" d="M 335 430 C 310 400, 340 370, 365 390 C 375 365, 400 370, 395 395 C 405 380, 420 390, 410 415 L 390 460 C 365 470, 340 455, 335 430 Z" />
        <!-- Sağ El -->
        <path class="line-art" d="M 465 430 C 490 400, 460 370, 435 390 C 425 365, 400 370, 405 395 C 395 380, 380 390, 390 415 L 410 460 C 435 470, 460 455, 465 430 Z" />

        <!-- Ayaklar / Oturuş -->
        <path class="line-art" d="M 230 520 Q 250 560 300 560 L 500 560 Q 550 560 570 520 Z" />
      </svg>
    `
  },
  {
    id: "act-kandil",
    category: "boyama",
    categoryName: "Dini Semboller",
    badge: "Boyama",
    icon: "🏮",
    grade: "7. Sınıf BEP",
    title: "Mübarek Kandil & Ramazan Feneri",
    desc: "Geleneksel kandil ve Ramazan feneri motifi; simetri ve motif renklendirme becerisi.",
    instructions: "Yönerge: Fenerin cam kısımlarını sarıya, gövdesini ise dilediğin parlak renklere boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
          </style>
        </defs>
        <!-- Asma Zinciri ve Üst Halka -->
        <line x1="400" y1="20" x2="400" y2="90" class="thick-line" stroke-dasharray="12,8" />
        <circle cx="400" cy="110" r="20" class="line-art" />
        
        <!-- Fener Üst Kapağı -->
        <path class="line-art" d="M 330 180 L 370 130 L 430 130 L 470 180 Z" />
        <rect x="310" y="180" width="180" height="25" rx="5" class="line-art" />

        <!-- Fener Ana Cam Gövdesi -->
        <path class="line-art" d="M 315 205 L 260 370 L 540 370 L 485 205 Z" />

        <!-- İçteki Kandil / Mum Alevi -->
        <path class="line-art" d="M 380 340 L 420 340 L 415 310 L 385 310 Z" />
        <!-- Alev -->
        <path class="line-art" d="M 400 240 C 370 275, 385 305, 400 305 C 415 305, 430 275, 400 240 Z" />
        <circle cx="400" cy="275" r="6" class="line-art" />

        <!-- Işık Saçılma Çizgileri -->
        <line x1="220" y1="260" x2="160" y2="240" class="thick-line" />
        <line x1="210" y1="320" x2="140" y2="330" class="thick-line" />
        <line x1="580" y1="260" x2="640" y2="240" class="thick-line" />
        <line x1="590" y1="320" x2="660" y2="330" class="thick-line" />

        <!-- Cam Üzeri Süs Desenleri -->
        <line x1="340" y1="205" x2="300" y2="370" class="thick-line" />
        <line x1="460" y1="205" x2="500" y2="370" class="thick-line" />
        <polygon points="400,215 408,228 424,228 411,238 416,252 400,242 384,252 389,238 376,228 392,228" class="line-art" />

        <!-- Fener Alt Kaidesi -->
        <rect x="290" y="370" width="220" height="30" rx="5" class="line-art" />
        <path class="line-art" d="M 320 400 L 350 450 L 450 450 L 480 400 Z" />

        <!-- Alt Sallantılı Hilal Püskül -->
        <line x1="400" y1="450" x2="400" y2="500" class="thick-line" />
        <circle cx="400" cy="510" r="10" class="line-art" />
        <path class="line-art" d="M 390 520 C 375 510, 395 490, 415 500 C 395 510, 405 530, 390 520 Z" />

        <!-- Yan Minik Yıldızlar -->
        <polygon points="200,140 205,152 218,153 207,161 211,173 200,166 189,173 193,161 182,153 195,152" class="line-art" />
        <polygon points="600,140 605,152 618,153 607,161 611,173 600,166 589,173 593,161 582,153 595,152" class="line-art" />
      </svg>
    `
  },
  {
    id: "act-seccade",
    category: "boyama",
    categoryName: "Dini Semboller",
    badge: "Boyama",
    icon: "🧎",
    grade: "7. Sınıf BEP",
    title: "Kendi Seccademi Tasarlıyorum",
    desc: "Namaz mekanı, seccade kavramı, desen ve renk uyumu geliştirme.",
    instructions: "Yönerge: Seccadenin mihrap kemerini ve kenar bordürlerini sevdiğin desenlerle süsle.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
          </style>
        </defs>
        <!-- Üst Saçaklar / Püsküller -->
        <line x1="220" y1="40" x2="220" y2="70" class="thick-line" />
        <line x1="260" y1="40" x2="260" y2="70" class="thick-line" />
        <line x1="300" y1="40" x2="300" y2="70" class="thick-line" />
        <line x1="340" y1="40" x2="340" y2="70" class="thick-line" />
        <line x1="380" y1="40" x2="380" y2="70" class="thick-line" />
        <line x1="420" y1="40" x2="420" y2="70" class="thick-line" />
        <line x1="460" y1="40" x2="460" y2="70" class="thick-line" />
        <line x1="500" y1="40" x2="500" y2="70" class="thick-line" />
        <line x1="540" y1="40" x2="540" y2="70" class="thick-line" />
        <line x1="580" y1="40" x2="580" y2="70" class="thick-line" />

        <!-- Dış Çerçeve -->
        <rect x="200" y="70" width="400" height="460" rx="10" class="line-art" />
        <!-- İç Bordür -->
        <rect x="230" y="100" width="340" height="400" rx="6" class="line-art" />

        <!-- Mihrap Kemeri (Seccade Kubbesi) -->
        <path class="line-art" d="M 270 460 L 270 260 C 270 150, 530 150, 530 260 L 530 460 Z" />

        <!-- Mihrap İçi Asılı Kandil -->
        <line x1="400" y1="180" x2="400" y2="240" class="thick-line" />
        <path class="line-art" d="M 380 260 L 420 260 L 410 240 L 390 240 Z" />
        <circle cx="400" cy="250" r="4" class="line-art" />

        <!-- Köşe Çiçek Motifleri -->
        <circle cx="280" cy="130" r="16" class="line-art" />
        <circle cx="520" cy="130" r="16" class="line-art" />
        <circle cx="280" cy="430" r="16" class="line-art" />
        <circle cx="520" cy="430" r="16" class="line-art" />

        <!-- Merkez Yıldız Motifi -->
        <polygon points="400,320 415,350 445,350 420,370 430,400 400,380 370,400 380,370 355,350 385,350" class="line-art" />

        <!-- Alt Püsküller -->
        <line x1="220" y1="530" x2="220" y2="560" class="thick-line" />
        <line x1="260" y1="530" x2="260" y2="560" class="thick-line" />
        <line x1="300" y1="530" x2="300" y2="560" class="thick-line" />
        <line x1="340" y1="530" x2="340" y2="560" class="thick-line" />
        <line x1="380" y1="530" x2="380" y2="560" class="thick-line" />
        <line x1="420" y1="530" x2="420" y2="560" class="thick-line" />
        <line x1="460" y1="530" x2="460" y2="560" class="thick-line" />
        <line x1="500" y1="530" x2="500" y2="560" class="thick-line" />
        <line x1="540" y1="530" x2="540" y2="560" class="thick-line" />
        <line x1="580" y1="530" x2="580" y2="560" class="thick-line" />
      </svg>
    `
  },

  // ---------------------------------------------------------------------------
  // 2. MANEVİ VE AHLAKİ DEĞERLER (DEĞERLER EĞİTİMİ)
  // ---------------------------------------------------------------------------
  {
    id: "act-sadaka",
    category: "degerler",
    categoryName: "Manevi Değerler",
    badge: "Değerler",
    icon: "🤝",
    grade: "7. Sınıf BEP",
    title: "Paylaşmak Güzeldir - Sadaka ve İkram",
    desc: "Yardımlaşma, cömertlik, sadaka ve kardeşlik bilinci oluşturma.",
    instructions: "Yönerge: Arkadaşına ikramda bulunan sevimli çocukları ve meyve sepetini renklendir.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <!-- Başlık -->
        <text x="400" y="70" text-anchor="middle" font-size="32" class="text-art">PAYLAŞMAK GÜZELDİR - SADAKA</text>
        <line x1="150" y1="85" x2="650" y2="85" class="thick-line" />

        <!-- Zemin -->
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />

        <!-- 1. Çocuk (İkram Eden) -->
        <!-- Baş ve Saç -->
        <circle cx="280" cy="220" r="60" class="line-art" />
        <path class="line-art" d="M 220 200 C 240 140, 320 140, 340 200 Z" />
        <!-- Gülen Yüz -->
        <circle cx="260" cy="210" r="5" fill="#1e293b" />
        <circle cx="300" cy="210" r="5" fill="#1e293b" />
        <path d="M 265 240 Q 280 260 295 240" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <!-- Gövde -->
        <path class="line-art" d="M 230 280 L 210 440 L 350 440 L 330 280 Z" />
        <!-- Ayaklar -->
        <rect x="235" y="440" width="35" height="75" class="line-art" />
        <rect x="290" y="440" width="35" height="75" class="line-art" />

        <!-- 2. Çocuk (Teşekkür Eden) -->
        <circle cx="520" cy="220" r="60" class="line-art" />
        <path class="line-art" d="M 460 200 C 480 140, 560 140, 580 200 Z" />
        <circle cx="500" cy="210" r="5" fill="#1e293b" />
        <circle cx="540" cy="210" r="5" fill="#1e293b" />
        <path d="M 505 240 Q 520 260 535 240" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <path class="line-art" d="M 470 280 L 450 440 L 590 440 L 570 280 Z" />
        <rect x="475" y="440" width="35" height="75" class="line-art" />
        <rect x="530" y="440" width="35" height="75" class="line-art" />

        <!-- Ortadaki İkram Sepeti ve Elma -->
        <path class="line-art" d="M 360 360 L 375 420 L 425 420 L 440 360 Z" />
        <circle cx="400" cy="340" r="22" class="line-art" />
        <path class="line-art" d="M 400 318 C 400 305, 415 305, 410 315 Z" />

        <!-- Uzatılan Kollar -->
        <path class="line-art" d="M 320 320 L 380 340" />
        <path class="line-art" d="M 480 320 L 420 340" />

        <!-- Arka Planda Sevgi Kalbi -->
        <path class="line-art" d="M 400 160 C 380 130, 340 145, 340 175 C 340 200, 400 230, 400 230 C 400 230, 460 200, 460 175 C 460 145, 420 130, 400 160 Z" />
      </svg>
    `
  },
  {
    id: "act-hayvan",
    category: "degerler",
    categoryName: "Manevi Değerler",
    badge: "Merhamet",
    icon: "🐱",
    grade: "7. Sınıf BEP",
    title: "Merhamet ve Hayvan Sevgisi",
    desc: "Peygamberimizin hayvanlara merhamet sünneti; şefkat ve koruma bilinci.",
    instructions: "Yönerge: Kediciğe süt veren merhametli çocuğu ve sevimli kediyi dilediğin gibi boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="70" text-anchor="middle" font-size="30" class="text-art">MERHAMET EDENE ALLAH DA MERHAMET EDER</text>
        <line x1="100" y1="85" x2="700" y2="85" class="thick-line" />
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />

        <!-- Çocuk (Eğilmiş) -->
        <circle cx="280" cy="250" r="55" class="line-art" />
        <path class="line-art" d="M 225 240 C 240 180, 320 180, 335 240 Z" />
        <circle cx="265" cy="245" r="5" fill="#1e293b" />
        <circle cx="295" cy="245" r="5" fill="#1e293b" />
        <path d="M 270 270 Q 280 285 290 270" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        
        <!-- Çocuk Gövde (Diz Çökmüş) -->
        <path class="line-art" d="M 240 305 Q 310 320 320 440 L 220 440 Z" />
        <!-- Dizler ve Ayaklar -->
        <path class="line-art" d="M 220 440 Q 260 520 340 520 L 200 520 Z" />
        <!-- Elinde Süt Kasesi Tutan Kol -->
        <path class="line-art" d="M 290 340 L 370 410" />

        <!-- Süt Kasesi -->
        <ellipse cx="390" cy="425" rx="30" ry="12" class="line-art" />
        <path class="line-art" d="M 360 425 Q 390 460 420 425" />

        <!-- Sevimli Kedi -->
        <!-- Kedi Baş -->
        <circle cx="500" cy="380" r="45" class="line-art" />
        <!-- Kulaklar -->
        <polygon points="465,345 475,310 500,340" class="line-art" />
        <polygon points="535,345 525,310 500,340" class="line-art" />
        <!-- Kedi Yüzü -->
        <circle cx="485" cy="375" r="4" fill="#1e293b" />
        <circle cx="515" cy="375" r="4" fill="#1e293b" />
        <polygon points="496,390 504,390 500,396" fill="#1e293b" />
        <!-- Bıyıklar -->
        <line x1="450" y1="385" x2="475" y2="390" class="thick-line" />
        <line x1="450" y1="395" x2="475" y2="395" class="thick-line" />
        <line x1="525" y1="390" x2="550" y2="385" class="thick-line" />
        <line x1="525" y1="395" x2="550" y2="395" class="thick-line" />

        <!-- Kedi Gövdesi -->
        <ellipse cx="560" cy="450" rx="60" ry="45" class="line-art" />
        <!-- Kedi Pati -->
        <ellipse cx="490" cy="485" rx="16" ry="10" class="line-art" />
        <ellipse cx="530" cy="490" rx="16" ry="10" class="line-art" />
        <!-- Kedi Kuyruğu -->
        <path class="line-art" d="M 615 435 Q 670 410 650 360" />

        <!-- Güneş ve Kelebek -->
        <circle cx="680" cy="140" r="35" class="line-art" />
        <line x1="680" y1="90" x2="680" y2="70" class="thick-line" />
        <line x1="730" y1="140" x2="750" y2="140" class="thick-line" />
        <line x1="715" y1="105" x2="735" y2="85" class="thick-line" />
      </svg>
    `
  },
  {
    id: "act-temizlik",
    category: "degerler",
    categoryName: "Manevi Değerler",
    badge: "Ahlak",
    icon: "🌱",
    grade: "7. Sınıf BEP",
    title: "Temizlik İmandandır - Çevre Bilinci",
    desc: "İslam'da temizliğin yeri, doğayı ve okulu temiz tutma erdemi.",
    instructions: "Yönerge: Çöpü çöp kutusuna atan duyarlı öğrenciyi ve yeşil doğayı boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="70" text-anchor="middle" font-size="34" class="text-art">TEMİZLİK İMANDANDIR</text>
        <line x1="200" y1="85" x2="600" y2="85" class="thick-line" />
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />

        <!-- Geri Dönüşüm / Çöp Kutusu -->
        <rect x="470" y="320" width="140" height="190" rx="10" class="line-art" />
        <rect x="455" y="300" width="170" height="25" rx="5" class="line-art" />
        <!-- Geri Dönüşüm Oku Simgesi -->
        <circle cx="540" cy="400" r="35" class="line-art" />
        <path d="M 525 390 L 540 375 L 555 390" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <path d="M 540 375 L 540 425" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />

        <!-- Çocuk -->
        <circle cx="300" cy="200" r="60" class="line-art" />
        <path class="line-art" d="M 240 180 C 260 120, 340 120, 360 180 Z" />
        <circle cx="280" cy="190" r="5" fill="#1e293b" />
        <circle cx="320" cy="190" r="5" fill="#1e293b" />
        <path d="M 285 220 Q 300 240 315 220" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />

        <!-- Gövde -->
        <path class="line-art" d="M 250 260 L 230 420 L 370 420 L 350 260 Z" />
        <!-- Ayaklar -->
        <rect x="255" y="420" width="35" height="95" class="line-art" />
        <rect x="310" y="420" width="35" height="95" class="line-art" />

        <!-- Çöp Atan Kol -->
        <path class="line-art" d="M 340 300 L 460 310" />
        <!-- Elden Düşen Ambalaj / Çöp -->
        <rect x="465" y="270" width="30" height="40" rx="4" class="line-art" />

        <!-- Fidan ve Çiçekler -->
        <path class="line-art" d="M 120 520 L 120 440" />
        <circle cx="120" cy="420" r="20" class="line-art" />
        <circle cx="100" cy="440" r="15" class="line-art" />
        <circle cx="140" cy="440" r="15" class="line-art" />
      </svg>
    `
  },
  {
    id: "act-anne-baba",
    category: "degerler",
    categoryName: "Manevi Değerler",
    badge: "Vefa",
    icon: "💐",
    grade: "7. Sınıf BEP",
    title: "Anne ve Babaya Saygı & Sevgi",
    desc: "Ailenin kutsallığı, büyüklere saygı ve sevgi değerini kavratma.",
    instructions: "Yönerge: Ailesine çiçek hediye eden mutlu çocuğu ve sevgi çiçeklerini boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="70" text-anchor="middle" font-size="32" class="text-art">ANNE VE BABAMI ÇOK SEVİYORUM</text>
        <line x1="120" y1="85" x2="680" y2="85" class="thick-line" />
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />

        <!-- Büyük Sevgi Kalbi (Merkez Arka) -->
        <path class="line-art" d="M 400 130 C 350 90, 260 120, 260 190 C 260 250, 400 330, 400 330 C 400 330, 540 250, 540 190 C 540 120, 450 90, 400 130 Z" />

        <!-- Çocuk (Önde Mutlu) -->
        <circle cx="400" cy="280" r="55" class="line-art" />
        <path class="line-art" d="M 345 260 C 360 200, 440 200, 455 260 Z" />
        <circle cx="380" cy="275" r="5" fill="#1e293b" />
        <circle cx="420" cy="275" r="5" fill="#1e293b" />
        <path d="M 385 305 Q 400 325 415 305" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />

        <path class="line-art" d="M 350 335 L 330 490 L 470 490 L 450 335 Z" />
        <rect x="355" y="490" width="35" height="30" class="line-art" />
        <rect x="410" y="490" width="35" height="30" class="line-art" />

        <!-- Elinde Çiçek Buketi -->
        <ellipse cx="400" cy="380" rx="35" ry="40" class="line-art" />
        <circle cx="380" cy="365" r="10" class="line-art" />
        <circle cx="420" cy="365" r="10" class="line-art" />
        <circle cx="400" cy="395" r="10" class="line-art" />
        <path class="line-art" d="M 390 420 L 400 450 L 410 420 Z" />
      </svg>
    `
  },
  {
    id: "act-selam",
    category: "degerler",
    categoryName: "Manevi Değerler",
    badge: "Sünnet",
    icon: "👋",
    grade: "7. Sınıf BEP",
    title: "Selamlaşma ve Dostluk",
    desc: "Peygamberimizin 'Aranızda selamı yayınız' tavsiyesi; nezaket ve iletişim.",
    instructions: "Yönerge: Birbirine selam veren iki okul arkadaşını ve selam balonlarını boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="70" text-anchor="middle" font-size="32" class="text-art">ARANIZDA SELAMI YAYINIZ</text>
        <line x1="150" y1="85" x2="650" y2="85" class="thick-line" />
        <line x1="50" y1="520" x2="750" y2="520" class="thick-line" />

        <!-- 1. Konuşma Balonu (Selamünaleyküm) -->
        <rect x="120" y="110" width="220" height="70" rx="15" class="line-art" />
        <text x="230" y="152" text-anchor="middle" font-size="19" class="text-art">Selamünaleyküm!</text>
        <polygon points="250,180 270,180 230,210" class="line-art" />

        <!-- 2. Konuşma Balonu (Aleykümselam) -->
        <rect x="460" y="110" width="220" height="70" rx="15" class="line-art" />
        <text x="570" y="152" text-anchor="middle" font-size="19" class="text-art">Aleykümselam!</text>
        <polygon points="530,180 550,180 570,210" class="line-art" />

        <!-- 1. Arkadaş (Sol) -->
        <circle cx="250" cy="270" r="55" class="line-art" />
        <circle cx="235" cy="265" r="5" fill="#1e293b" />
        <circle cx="265" cy="265" r="5" fill="#1e293b" />
        <path d="M 235 290 Q 250 310 265 290" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <!-- Gövde & El Sallayan Kol -->
        <path class="line-art" d="M 210 325 L 190 460 L 310 460 L 290 325 Z" />
        <path class="line-art" d="M 290 340 L 350 280 L 370 290" /> <!-- El Sallama -->
        <rect x="210" y="460" width="30" height="60" class="line-art" />
        <rect x="260" y="460" width="30" height="60" class="line-art" />

        <!-- 2. Arkadaş (Sağ) -->
        <circle cx="550" cy="270" r="55" class="line-art" />
        <circle cx="535" cy="265" r="5" fill="#1e293b" />
        <circle cx="565" cy="265" r="5" fill="#1e293b" />
        <path d="M 535 290 Q 550 310 565 290" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
        <path class="line-art" d="M 510 325 L 490 460 L 610 460 L 590 325 Z" />
        <path class="line-art" d="M 510 340 L 450 280 L 430 290" /> <!-- El Sallama -->
        <rect x="510" y="460" width="30" height="60" class="line-art" />
        <rect x="560" y="460" width="30" height="60" class="line-art" />
      </svg>
    `
  },

  // ---------------------------------------------------------------------------
  // 3. HAT, YAZI VE HADİS-İ ŞERİF BOYAMA (TOMBUL HARFLER)
  // ---------------------------------------------------------------------------
  {
    id: "act-besmele",
    category: "yazi",
    categoryName: "Hadis & Hat",
    badge: "Hat Yazı",
    icon: "✍️",
    grade: "7. Sınıf BEP",
    title: "Büyük Besmele Tombul Harf Boyama",
    desc: "Her hayırlı işe Besmele ile başlama bilinci ve harf içi renklendirme.",
    instructions: "Yönerge: Her harfi farklı bir renge boyayarak rengarenk bir Besmele tablosu oluştur.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .bubble-char { font-family: 'Arial Black', Impact, sans-serif; font-weight: 900; fill: #ffffff; stroke: #1e293b; stroke-width: 5; }
          </style>
        </defs>
        <!-- Dekoratif Çerçeve -->
        <rect x="40" y="40" width="720" height="520" rx="20" class="line-art" />
        <rect x="55" y="55" width="690" height="490" rx="15" stroke="#1e293b" stroke-width="2" fill="none" stroke-dasharray="10,8" />

        <!-- Üst ve Alt Çiçek Motifleri -->
        <circle cx="400" cy="100" r="20" class="line-art" />
        <circle cx="365" cy="100" r="14" class="line-art" />
        <circle cx="435" cy="100" r="14" class="line-art" />

        <!-- Tombul Besmele Metni (BÜYÜK BOY) -->
        <text x="400" y="220" text-anchor="middle" font-size="52" class="bubble-char" letter-spacing="4">BİSMİLLAHİR</text>
        <text x="400" y="320" text-anchor="middle" font-size="58" class="bubble-char" letter-spacing="4">RAHMÂNİR</text>
        <text x="400" y="420" text-anchor="middle" font-size="64" class="bubble-char" letter-spacing="6">RAHÎM</text>

        <!-- Anlamı Alt Bilgi -->
        <rect x="150" y="465" width="500" height="50" rx="12" class="line-art" />
        <text x="400" y="498" text-anchor="middle" font-family="'Comic Sans MS', Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
          "Rahmân ve Rahîm olan Allah'ın adıyla"
        </text>
      </svg>
    `
  },
  {
    id: "act-gulumse",
    category: "yazi",
    categoryName: "Hadis & Hat",
    badge: "Hadis",
    icon: "😊",
    grade: "7. Sınıf BEP",
    title: "Hadis-i Şerif: Gülümsemek Sadakadır",
    desc: "Tebessümün, güler yüzlü olmanın dindeki kıymeti ve sünnet bilinci.",
    instructions: "Yönerge: Ortadaki gülen yüzü sarıya, 'GÜLÜMSEMEK SADAKADIR' harflerini gökkuşağı renklerine boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .thick-line { fill: none; stroke: #1e293b; stroke-width: 5; stroke-linecap: round; }
            .bubble-char { font-family: 'Arial Black', Impact, sans-serif; font-weight: 900; fill: #ffffff; stroke: #1e293b; stroke-width: 5; }
          </style>
        </defs>
        <!-- Güneş Gibi Işıyan Dış Halka -->
        <circle cx="400" cy="300" r="140" class="line-art" />
        <!-- Gülen Yüz Gözler & Gülümseme -->
        <circle cx="350" cy="270" r="15" fill="#1e293b" />
        <circle cx="450" cy="270" r="15" fill="#1e293b" />
        <path d="M 330 330 Q 400 400 470 330" fill="none" stroke="#1e293b" stroke-width="8" stroke-linecap="round" />
        <!-- Yanaklar -->
        <circle cx="320" cy="320" r="14" class="line-art" />
        <circle cx="480" cy="320" r="14" class="line-art" />

        <!-- Tombul Başlık Yazıları -->
        <text x="400" y="110" text-anchor="middle" font-size="52" class="bubble-char" letter-spacing="4">GÜLÜMSEMEK</text>
        <text x="400" y="520" text-anchor="middle" font-size="58" class="bubble-char" letter-spacing="4">SADAKADIR</text>

        <!-- Hadis Kaynağı -->
        <text x="400" y="565" text-anchor="middle" font-family="'Comic Sans MS', Arial, sans-serif" font-weight="bold" font-size="16" fill="#1e293b">
          (Hz. Muhammed s.a.v. • Tirmizî)
        </text>
      </svg>
    `
  },
  {
    id: "act-elhamd",
    category: "yazi",
    categoryName: "Hadis & Hat",
    badge: "Şükür",
    icon: "🌸",
    grade: "7. Sınıf BEP",
    title: "Şükür Sayfası: Elhamdülillah Boyama",
    desc: "Nimetlere şükretme, 'Elhamdülillah' kelimesini öğrenme ve çiçek motifi boyama.",
    instructions: "Yönerge: 'ELHAMDÜLİLLAH' yazısını ve etrafındaki kelebek ile çiçekleri renklendir.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .bubble-char { font-family: 'Arial Black', Impact, sans-serif; font-weight: 900; fill: #ffffff; stroke: #1e293b; stroke-width: 5; }
          </style>
        </defs>
        <rect x="50" y="50" width="700" height="500" rx="20" class="line-art" />

        <!-- Kelebek (Sol Üst) -->
        <circle cx="160" cy="140" r="10" class="line-art" />
        <path class="line-art" d="M 160 130 C 130 90, 80 120, 150 140 Z" />
        <path class="line-art" d="M 160 145 C 130 180, 90 150, 155 145 Z" />
        <path class="line-art" d="M 160 130 C 190 90, 240 120, 170 140 Z" />
        <path class="line-art" d="M 160 145 C 190 180, 230 150, 165 145 Z" />

        <!-- Çiçek (Sağ Üst) -->
        <circle cx="640" cy="140" r="15" class="line-art" />
        <circle cx="640" cy="110" r="12" class="line-art" />
        <circle cx="640" cy="170" r="12" class="line-art" />
        <circle cx="610" cy="140" r="12" class="line-art" />
        <circle cx="670" cy="140" r="12" class="line-art" />

        <!-- Büyük Tombul Yazı -->
        <text x="400" y="320" text-anchor="middle" font-size="64" class="bubble-char" letter-spacing="4">ELHAMDÜLİLLAH</text>

        <!-- Anlamı -->
        <text x="400" y="380" text-anchor="middle" font-family="'Comic Sans MS', Arial, sans-serif" font-weight="bold" font-size="22" fill="#1e293b">
          "Hamd ve Şükür Allah'a Mahsustur"
        </text>

        <!-- Alt Bahçe Çiçekleri -->
        <circle cx="250" cy="460" r="18" class="line-art" />
        <circle cx="400" cy="460" r="22" class="line-art" />
        <circle cx="550" cy="460" r="18" class="line-art" />
      </svg>
    `
  },
  {
    id: "act-tevhid",
    category: "yazi",
    categoryName: "Hadis & Hat",
    badge: "Kelime-i Tevhid",
    icon: "☝️",
    grade: "7. Sınıf BEP",
    title: "Kelime-i Tevhid Boyama Sayfası",
    desc: "İslam'ın temeli olan Tevhid inancını öğrenme ve harf farkındalığı.",
    instructions: "Yönerge: 'LÂ İLÂHE İLLALLÂH' kelimesini ve etrafındaki yıldızları boya.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
            .bubble-char { font-family: 'Arial Black', Impact, sans-serif; font-weight: 900; fill: #ffffff; stroke: #1e293b; stroke-width: 5; }
          </style>
        </defs>
        <!-- Dış Oval Çerçeve -->
        <ellipse cx="400" cy="300" rx="360" ry="240" class="line-art" />
        <ellipse cx="400" cy="300" rx="340" ry="220" stroke="#1e293b" stroke-width="2" fill="none" stroke-dasharray="10,6" />

        <text x="400" y="220" text-anchor="middle" font-size="52" class="bubble-char" letter-spacing="4">LÂ İLÂHE</text>
        <text x="400" y="320" text-anchor="middle" font-size="60" class="bubble-char" letter-spacing="4">İLLALLÂH</text>

        <!-- Anlamı -->
        <text x="400" y="410" text-anchor="middle" font-family="'Comic Sans MS', Arial, sans-serif" font-weight="bold" font-size="20" fill="#1e293b">
          "Allah'tan başka ilah yoktur"
        </text>
        <text x="400" y="450" text-anchor="middle" font-family="'Comic Sans MS', Arial, sans-serif" font-weight="bold" font-size="16" fill="#64748b">
          (Muhammedün Resûlullâh: Hz. Muhammed O'nun elçisidir)
        </text>
      </svg>
    `
  },

  // ---------------------------------------------------------------------------
  // 4. ÇİZGİ BİRLEŞTİRME VE KOLAY LABİRENTLER (MOTOR BECERİ)
  // ---------------------------------------------------------------------------
  {
    id: "act-nokta-hilal",
    category: "labirent",
    categoryName: "Çizgi & Labirent",
    badge: "Çizgi Birleştir",
    icon: "🌙",
    grade: "7. Sınıf BEP",
    title: "1'den 20'ye Sayı Birleştirerek Hilal Çizimi",
    desc: "1-20 arası sayı sayma, sırayla noktaları birleştirme ve el becerisi.",
    instructions: "Yönerge: 1 numaralı noktadan başlayarak 20'ye kadar çizgileri birleştir, ortaya çıkan Hilal ve Yıldızı boya!",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .dot { fill: #1e293b; stroke: #1e293b; stroke-width: 2; }
            .num { font-family: Arial, sans-serif; font-size: 15px; font-weight: bold; fill: #0f172a; }
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
          </style>
        </defs>
        <!-- Dış Kavis (1 - 10) -->
        <circle cx="380" cy="100" r="5" class="dot" /><text x="380" y="85" class="num">1</text>
        <circle cx="310" cy="120" r="5" class="dot" /><text x="295" y="115" class="num">2</text>
        <circle cx="240" cy="170" r="5" class="dot" /><text x="220" y="165" class="num">3</text>
        <circle cx="190" cy="240" r="5" class="dot" /><text x="170" y="240" class="num">4</text>
        <circle cx="170" cy="320" r="5" class="dot" /><text x="150" y="325" class="num">5</text>
        <circle cx="190" cy="400" r="5" class="dot" /><text x="170" y="415" class="num">6</text>
        <circle cx="240" cy="470" r="5" class="dot" /><text x="220" y="490" class="num">7</text>
        <circle cx="310" cy="520" r="5" class="dot" /><text x="295" y="540" class="num">8</text>
        <circle cx="390" cy="540" r="5" class="dot" /><text x="390" y="560" class="num">9</text>
        <circle cx="470" cy="520" r="5" class="dot" /><text x="480" y="540" class="num">10</text>

        <!-- İç Kavis (11 - 20) -->
        <circle cx="410" cy="480" r="5" class="dot" /><text x="415" y="470" class="num">11</text>
        <circle cx="340" cy="440" r="5" class="dot" /><text x="345" y="430" class="num">12</text>
        <circle cx="290" cy="380" r="5" class="dot" /><text x="300" y="375" class="num">13</text>
        <circle cx="270" cy="320" r="5" class="dot" /><text x="285" y="325" class="num">14</text>
        <circle cx="290" cy="260" r="5" class="dot" /><text x="300" y="260" class="num">15</text>
        <circle cx="340" cy="200" r="5" class="dot" /><text x="345" y="195" class="num">16</text>
        <circle cx="410" cy="160" r="5" class="dot" /><text x="415" y="150" class="num">17</text>
        <circle cx="470" cy="120" r="5" class="dot" /><text x="480" y="110" class="num">18</text>
        <circle cx="430" cy="105" r="5" class="dot" /><text x="435" y="90" class="num">19</text>
        <circle cx="400" cy="100" r="5" class="dot" /><text x="400" y="85" class="num">20</text>

        <!-- Ortadaki Yıldız (Zaten Çizili, Boyanmaya Hazır) -->
        <polygon points="530,280 545,320 590,320 555,345 570,385 530,360 490,385 505,345 470,320 515,320" class="line-art" />
      </svg>
    `
  },
  {
    id: "act-labirent-cami",
    category: "labirent",
    categoryName: "Çizgi & Labirent",
    badge: "Labirent",
    icon: "🧭",
    grade: "7. Sınıf BEP",
    title: "Camiye Ulaşım Labirenti",
    desc: "Problem çözme, dikkat odaklama ve camiye gitme isteğini pekiştirme.",
    instructions: "Yönerge: Sevimli çocuğun evinden çıkıp camiye ulaşması için doğru yolu kalemle çiz.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .wall { fill: none; stroke: #1e293b; stroke-width: 6; stroke-linecap: round; }
            .line-art { fill: #ffffff; stroke: #1e293b; stroke-width: 4; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <!-- Başlangıç (Ev ve Çocuk) -->
        <rect x="50" y="60" width="80" height="70" class="line-art" />
        <polygon points="40,60 90,20 140,60" class="line-art" />
        <text x="90" y="155" text-anchor="middle" font-size="16" class="text-art">BAŞLANGIÇ</text>

        <!-- Hedef (Cami) -->
        <rect x="670" y="470" width="90" height="70" class="line-art" />
        <path d="M 680 470 C 680 430, 750 430, 750 470 Z" class="line-art" />
        <text x="715" y="565" text-anchor="middle" font-size="16" class="text-art">CAMİ</text>

        <!-- Kolay Geniş Koridorlu Labirent Duvarları -->
        <rect x="180" y="60" width="460" height="460" rx="15" fill="none" stroke="#1e293b" stroke-width="6" />

        <!-- Giriş ve Çıkış Açıklıkları -->
        <line x1="180" y1="120" x2="180" y2="200" stroke="#ffffff" stroke-width="10" />
        <line x1="640" y1="420" x2="640" y2="480" stroke="#ffffff" stroke-width="10" />

        <!-- İç Duvarlar (Özel Eğitim için Geniş ve Sade) -->
        <line x1="280" y1="60" x2="280" y2="260" class="wall" />
        <line x1="280" y1="340" x2="280" y2="440" class="wall" />
        <line x1="280" y1="260" x2="420" y2="260" class="wall" />
        <line x1="380" y1="140" x2="560" y2="140" class="wall" />
        <line x1="480" y1="200" x2="480" y2="380" class="wall" />
        <line x1="380" y1="360" x2="560" y2="360" class="wall" />
        <line x1="380" y1="440" x2="560" y2="440" class="wall" />
      </svg>
    `
  },
  {
    id: "act-abdest-sira",
    category: "labirent",
    categoryName: "Çizgi & Labirent",
    badge: "Eşleştirme",
    icon: "💧",
    grade: "7. Sınıf BEP",
    title: "Abdestin Sırası Eşleştirme ve Sıralama",
    desc: "Abdest organlarını ve abdest alma sırasını görsel olarak kavrama.",
    instructions: "Yönerge: Numaralandırılmış adımları doğru abdest görseliyle çizgi çekerek eşleştir.",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .box { fill: #ffffff; stroke: #1e293b; stroke-width: 4; rx: 12; }
            .circle-num { fill: #ffffff; stroke: #1e293b; stroke-width: 4; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="55" text-anchor="middle" font-size="28" class="text-art">ABDESTİN SIRASINI BULALIM</text>

        <!-- Sol Sütun: Numaralar -->
        <circle cx="120" cy="140" r="30" class="circle-num" /><text x="120" y="150" text-anchor="middle" font-size="28" class="text-art">1</text>
        <circle cx="120" cy="240" r="30" class="circle-num" /><text x="120" y="250" text-anchor="middle" font-size="28" class="text-art">2</text>
        <circle cx="120" cy="340" r="30" class="circle-num" /><text x="120" y="350" text-anchor="middle" font-size="28" class="text-art">3</text>
        <circle cx="120" cy="440" r="30" class="circle-num" /><text x="120" y="450" text-anchor="middle" font-size="28" class="text-art">4</text>

        <!-- Sağ Sütun: Karışık Kartlar -->
        <!-- Kart A: Yüzü Yıkamak -->
        <rect x="360" y="100" width="340" height="75" class="box" />
        <text x="450" y="145" font-size="20" class="text-art">💧 Yüzü Yıkamak</text>
        <circle cx="340" cy="138" r="8" fill="#1e293b" />

        <!-- Kart B: Elleri Yıkamak -->
        <rect x="360" y="200" width="340" height="75" class="box" />
        <text x="450" y="245" font-size="20" class="text-art">👐 Elleri Yıkamak</text>
        <circle cx="340" cy="238" r="8" fill="#1e293b" />

        <!-- Kart C: Ayakları Yıkamak -->
        <rect x="360" y="300" width="340" height="75" class="box" />
        <text x="450" y="345" font-size="20" class="text-art">🦶 Ayakları Yıkamak</text>
        <circle cx="340" cy="338" r="8" fill="#1e293b" />

        <!-- Kart D: Kolları Yıkamak -->
        <rect x="360" y="400" width="340" height="75" class="box" />
        <text x="450" y="445" font-size="20" class="text-art">💪 Kolları Yıkamak</text>
        <circle cx="340" cy="438" r="8" fill="#1e293b" />
      </svg>
    `
  },

  // ---------------------------------------------------------------------------
  // 5. KES - YAPIŞTIR VE MASAÜSTÜ KARTLARI
  // ---------------------------------------------------------------------------
  {
    id: "act-dua-karti",
    category: "kes-yapistir",
    categoryName: "Kes - Yapıştır",
    badge: "Masaüstü Kartı",
    icon: "✂️",
    grade: "7. Sınıf BEP",
    title: "Masaüstü Yemek ve Uyku Duası Kartı",
    desc: "Kesilip ortadan katlanarak masaya dik duran pratik günlük dua kartı.",
    instructions: "Yönerge: Dış çerçeveden makasla kes, ortadaki kesik çizgiden ikiye katlayıp masana koy!",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .card-border { fill: #ffffff; stroke: #1e293b; stroke-width: 4; }
            .cut-line { stroke: #ef4444; stroke-width: 3; stroke-dasharray: 8,6; }
            .fold-line { stroke: #3b82f6; stroke-width: 4; stroke-dasharray: 12,6; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="50" text-anchor="middle" font-size="22" class="text-art">✂️ KES - ORTADAN KATLA - MASANA KOY ✂️</text>

        <!-- Kartın Tamamı -->
        <rect x="80" y="80" width="640" height="460" rx="15" class="card-border" />

        <!-- Ortadan Katlama Çizgisi -->
        <line x1="400" y1="80" x2="400" y2="540" class="fold-line" />
        <text x="400" y="310" text-anchor="middle" font-size="14" fill="#3b82f6" transform="rotate(-90 400 310)">--- KATLAMA ÇİZGİSİ ---</text>

        <!-- Sol Taraf: YEMEK DUASI -->
        <text x="240" y="140" text-anchor="middle" font-size="26" class="text-art">🍽️ YEMEK DUASI</text>
        <circle cx="240" cy="200" r="35" class="card-border" />
        <!-- Tabak ve Kaşık -->
        <ellipse cx="240" cy="200" rx="20" ry="12" stroke="#1e293b" stroke-width="3" fill="none" />
        <text x="240" y="290" text-anchor="middle" font-size="20" class="text-art">"Bismillah"</text>
        <text x="240" y="340" text-anchor="middle" font-size="16" class="text-art">Yemeğe Başlarken</text>
        <text x="240" y="400" text-anchor="middle" font-size="20" class="text-art">"Elhamdülillah"</text>
        <text x="240" y="440" text-anchor="middle" font-size="16" class="text-art">Yemekten Sonra</text>

        <!-- Sağ Taraf: UYKU DUASI -->
        <text x="560" y="140" text-anchor="middle" font-size="26" class="text-art">🌙 UYKU DUASI</text>
        <circle cx="560" cy="200" r="35" class="card-border" />
        <!-- Hilal ve Yıldız -->
        <path d="M 550 185 C 540 180, 550 215, 570 215 C 555 210, 560 190, 550 185 Z" fill="#1e293b" />
        <text x="560" y="300" text-anchor="middle" font-size="20" class="text-art">"Bismillâhirrahmânirrahîm"</text>
        <text x="560" y="360" text-anchor="middle" font-size="18" class="text-art">"Allah'ım senin isminle</text>
        <text x="560" y="395" text-anchor="middle" font-size="18" class="text-art">uyur ve uyanırım."</text>
        <text x="560" y="460" text-anchor="middle" font-size="16" class="text-art">Hayırlı Geceler ⭐</text>
      </svg>
    `
  },
  {
    id: "act-ramazan-feneri",
    category: "kes-yapistir",
    categoryName: "Kes - Yapıştır",
    badge: "El İşi",
    icon: "✂️",
    grade: "7. Sınıf BEP",
    title: "Kes-Yapıştır Ramazan ve Bayram Kapı Süsü",
    desc: "Makas kullanma, asma ipi geçirme ve bayram sevinci oluşturma.",
    instructions: "Yönerge: Hilal ve yıldızları dış çizgisinden makasla kes, üstteki delikten ip geçirerek odanın kapısına as!",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .cut-shape { fill: #ffffff; stroke: #1e293b; stroke-width: 4; stroke-dasharray: 6,4; }
            .hole { fill: #ffffff; stroke: #ef4444; stroke-width: 3; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="60" text-anchor="middle" font-size="24" class="text-art">✂️ KESİK ÇİZGİLERDEN KES VE AS ✂️</text>

        <!-- Büyük Hilal -->
        <path class="cut-shape" d="M 400 120 C 240 100, 240 480, 420 500 C 280 460, 280 180, 400 120 Z" />
        <!-- Asma Deliği -->
        <circle cx="340" cy="140" r="10" class="hole" />
        <text x="340" y="165" text-anchor="middle" font-size="12" fill="#ef4444">Delik</text>

        <!-- Hilal İçi Yazı -->
        <text x="310" y="320" text-anchor="middle" font-size="28" class="text-art" transform="rotate(-90 310 320)">HOŞ GELDİN RAMAZAN</text>

        <!-- Yan Yıldızlar (Kesilebilir) -->
        <polygon points="560,180 575,220 620,220 585,245 600,285 560,260 520,285 535,245 500,220 545,220" class="cut-shape" />
        <circle cx="560" cy="195" r="8" class="hole" />

        <polygon points="580,380 592,410 625,410 600,430 610,460 580,440 550,460 560,430 535,410 568,410" class="cut-shape" />
        <circle cx="580" cy="395" r="8" class="hole" />
      </svg>
    `
  },
  {
    id: "act-iyilik-kumbarasi",
    category: "kes-yapistir",
    categoryName: "Kes - Yapıştır",
    badge: "Kumbara",
    icon: "📦",
    grade: "7. Sınıf BEP",
    title: "Sadaka ve İyilik Kumbarası Katlama Şablonu",
    desc: "Sadaka bilinci, 3 boyutlu katlama ve kumbara oluşturma çalışması.",
    instructions: "Yönerge: Şablonu kes, kulakçıklardan katlayıp yapıştır. Kendi sadaka kumbaranı hazırla!",
    svgContent: `
      <svg viewBox="0 0 800 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#fff;">
        <defs>
          <style>
            .box-face { fill: #ffffff; stroke: #1e293b; stroke-width: 4; }
            .tab { fill: #f8fafc; stroke: #94a3b8; stroke-width: 3; stroke-dasharray: 6,4; }
            .text-art { font-family: 'Comic Sans MS', Arial, sans-serif; font-weight: bold; fill: #1e293b; }
          </style>
        </defs>
        <text x="400" y="50" text-anchor="middle" font-size="24" class="text-art">📦 SADAKA VE İYİLİK KUMBARASI ŞABLONU 📦</text>

        <!-- Kutu Açılımı (Küp Ağı) -->
        <!-- Kulakçıklar (Tabs) -->
        <polygon points="260,190 290,160 370,160 400,190" class="tab" />
        <polygon points="260,330 230,360 230,440 260,470" class="tab" />
        <polygon points="400,330 430,360 430,440 400,470" class="tab" />

        <!-- Yüzey 1 (Üst Kapak - Bozuk Para Yarığı) -->
        <rect x="260" y="190" width="140" height="140" class="box-face" />
        <rect x="300" y="250" width="60" height="12" rx="4" fill="#1e293b" />
        <text x="330" y="235" text-anchor="middle" font-size="14" class="text-art">PARA YARIĞI</text>

        <!-- Yüzey 2 (Ön Yüz) -->
        <rect x="260" y="330" width="140" height="140" class="box-face" />
        <text x="330" y="390" text-anchor="middle" font-size="18" class="text-art">SADAKA</text>
        <text x="330" y="420" text-anchor="middle" font-size="18" class="text-art">KUTUM</text>
        <circle cx="330" cy="445" r="12" class="box-face" />

        <!-- Yüzey 3 (Sol Yan) -->
        <rect x="120" y="330" width="140" height="140" class="box-face" />
        <text x="190" y="405" text-anchor="middle" font-size="16" class="text-art">Paylaşmak</text>
        <text x="190" y="430" text-anchor="middle" font-size="16" class="text-art">Güzeldir</text>

        <!-- Yüzey 4 (Sağ Yan) -->
        <rect x="400" y="330" width="140" height="140" class="box-face" />
        <text x="470" y="405" text-anchor="middle" font-size="16" class="text-art">İyilik Yap</text>
        <text x="470" y="430" text-anchor="middle" font-size="16" class="text-art">Huzur Bul</text>

        <!-- Yüzey 5 (Arka Yüz) -->
        <rect x="540" y="330" width="140" height="140" class="box-face" />
        <text x="610" y="405" text-anchor="middle" font-size="15" class="text-art">Merve Hacer</text>
        <text x="610" y="430" text-anchor="middle" font-size="15" class="text-art">SEVER</text>

        <!-- Yüzey 6 (Alt Taban) -->
        <rect x="260" y="470" width="140" height="100" class="box-face" />
        <text x="330" y="525" text-anchor="middle" font-size="14" class="text-art">TABAN</text>
      </svg>
    `
  }
];
