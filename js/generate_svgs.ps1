$outputDir = Join-Path $PSScriptRoot "..\images\products"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Force -Path $outputDir
}

function Wrap-SVG($content) {
    return @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
  <defs>
    <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.15"/>
    </filter>
  </defs>
  
  <!-- Studio Background -->
  <rect width="100%" height="100%" fill="#f8fafc" rx="16"/>
  <circle cx="250" cy="200" r="180" fill="#f1f5f9" opacity="0.6"/>
  
  <!-- Floor Shadow -->
  <ellipse cx="250" cy="315" rx="150" ry="18" fill="url(#floorShadow)"/>
  
  <g filter="url(#softShadow)">
    $content
  </g>
</svg>
"@
}

# 1. Sneakers 1: Air Comfort Run (cyan/blue/emerald)
$sneakers_1 = Wrap-SVG @"
    <defs>
      <linearGradient id="soleGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="bodyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#3b82f6"/>
      </linearGradient>
    </defs>
    
    <path d="M 110 250 C 105 220, 120 170, 160 150 C 175 140, 200 130, 220 160 C 240 185, 290 200, 330 200 C 365 200, 385 220, 390 240 C 395 260, 380 280, 350 280 C 320 280, 120 285, 110 250 Z" fill="url(#bodyGrad1)"/>
    <path d="M 160 150 C 145 165, 150 190, 160 200 C 170 190, 175 160, 160 150 Z" fill="#10b981"/>
    <path d="M 330 200 C 355 200, 385 220, 390 240 C 375 255, 340 230, 330 200 Z" fill="#10b981" opacity="0.6"/>
    <path d="M 210 165 L 230 195 M 220 160 L 245 190 M 230 155 L 260 185" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <path d="M 200 170 Q 185 160, 175 175 Q 165 190, 180 185" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <path d="M 108 250 C 108 275, 120 295, 150 300 C 200 305, 300 305, 360 295 C 385 290, 392 275, 392 255 C 392 245, 360 250, 350 275 C 330 282, 120 282, 108 250 Z" fill="url(#soleGrad1)"/>
    <path d="M 115 298 C 200 308, 300 308, 385 293" fill="none" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
    <path d="M 160 290 Q 180 290 190 280 H 150 Z" fill="#ffffff" opacity="0.6"/>
    <ellipse cx="170" cy="285" rx="12" ry="4" fill="#10b981" opacity="0.8"/>
"@

# 2. Sneakers 2: Trail Master (orange/slate/dark)
$sneakers_2 = Wrap-SVG @"
    <defs>
      <linearGradient id="soleGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
      <linearGradient id="bodyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f97316"/>
        <stop offset="100%" stop-color="#ea580c"/>
      </linearGradient>
    </defs>
    
    <path d="M 110 250 C 105 220, 120 170, 160 150 C 175 140, 200 130, 220 160 C 240 185, 290 200, 330 200 C 365 200, 385 220, 390 240 C 395 260, 380 280, 350 280 C 320 280, 120 285, 110 250 Z" fill="url(#bodyGrad2)"/>
    <path d="M 160 150 C 145 165, 150 190, 160 200 C 170 190, 175 160, 160 150 Z" fill="#1e293b"/>
    <path d="M 330 200 C 355 200, 385 220, 390 240 C 375 255, 340 230, 330 200 Z" fill="#1e293b" opacity="0.6"/>
    <path d="M 210 165 L 230 195 M 220 160 L 245 190 M 230 155 L 260 185" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <path d="M 200 170 Q 185 160, 175 175 Q 165 190, 180 185" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <path d="M 108 250 C 108 275, 120 295, 150 300 C 200 305, 300 305, 360 295 C 385 290, 392 275, 392 255 C 392 245, 360 250, 350 275 C 330 282, 120 282, 108 250 Z" fill="url(#soleGrad2)"/>
    <path d="M 120 300 L 125 308 L 135 300 L 140 308 L 150 300 L 155 308 L 165 300 L 170 308 L 180 300" fill="none" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/>
    <path d="M 110 270 Q 150 280, 200 270 C 230 260, 280 240, 310 200 L 330 215 C 300 260, 240 290, 110 290 Z" fill="#1e293b" opacity="0.3"/>
"@

# 3. Sneakers 3: Retro Court (white/grey/navy)
$sneakers_3 = Wrap-SVG @"
    <defs>
      <linearGradient id="soleGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#fef08a"/>
      </linearGradient>
      <linearGradient id="bodyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f1f5f9"/>
      </linearGradient>
    </defs>
    
    <path d="M 110 250 C 105 220, 120 170, 160 150 C 175 140, 200 130, 220 160 C 240 185, 290 200, 330 200 C 365 200, 385 220, 390 240 C 395 260, 380 280, 350 280 C 320 280, 120 285, 110 250 Z" fill="url(#bodyGrad3)" stroke="#e2e8f0" stroke-width="1"/>
    <path d="M 160 150 C 145 165, 150 190, 160 200 C 170 190, 175 160, 160 150 Z" fill="#1e3a8a"/>
    <path d="M 330 200 C 355 200, 385 220, 390 240 C 375 255, 340 230, 330 200 Z" fill="#e2e8f0" opacity="0.6"/>
    <path d="M 210 165 L 230 195 M 220 160 L 245 190 M 230 155 L 260 185" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
    <path d="M 108 250 C 108 275, 120 295, 150 300 C 200 305, 300 305, 360 295 C 385 290, 392 275, 392 255 C 392 245, 360 250, 350 275 C 330 282, 120 282, 108 250 Z" fill="url(#soleGrad3)"/>
    <path d="M 230 180 Q 210 230, 260 275" fill="none" stroke="#1e3a8a" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
    <path d="M 245 175 Q 225 225, 275 270" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
"@

# 4. Leather 1: Classic Oxford (black)
$leather_1 = Wrap-SVG @"
    <defs>
      <linearGradient id="leatherGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#334155"/>
        <stop offset="70%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#000000"/>
      </linearGradient>
      <linearGradient id="soleWood1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3f2305"/>
        <stop offset="100%" stop-color="#1a0f02"/>
      </linearGradient>
    </defs>
    <path d="M 125 270 L 125 300 L 155 300 L 160 270 Z" fill="url(#soleWood1)"/>
    <path d="M 120 270 C 150 270, 220 275, 270 285 C 310 293, 350 288, 380 270 L 385 278 C 350 298, 310 300, 270 292 C 220 282, 150 276, 120 276 Z" fill="url(#soleWood1)"/>
    <path d="M 115 250 C 112 210, 130 170, 185 160 C 200 155, 220 170, 235 190 C 255 210, 310 225, 355 225 C 380 225, 388 238, 388 250 C 388 268, 370 275, 345 272 C 290 268, 130 268, 115 250 Z" fill="url(#leatherGrad1)"/>
    <path d="M 185 160 C 170 170, 160 190, 165 205" fill="none" stroke="#f1f5f9" stroke-width="1.5" opacity="0.3"/>
    <path d="M 200 178 L 220 188 M 195 188 L 215 198 M 190 198 L 210 208" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
    <path d="M 205 170 Q 215 150, 200 145 M 205 170 Q 225 155, 230 140" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 330 230 Q 365 232, 378 245" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.25"/>
"@

# 5. Leather 2: Premium Derby (brown)
$leather_2 = Wrap-SVG @"
    <defs>
      <linearGradient id="leatherGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78350f"/>
        <stop offset="70%" stop-color="#451a03"/>
        <stop offset="100%" stop-color="#1c0a00"/>
      </linearGradient>
      <linearGradient id="soleWood2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#b45309"/>
        <stop offset="100%" stop-color="#78350f"/>
      </linearGradient>
    </defs>
    <path d="M 125 270 L 125 300 L 155 300 L 160 270 Z" fill="url(#soleWood2)"/>
    <path d="M 120 270 C 150 270, 220 275, 270 285 C 310 293, 350 288, 380 270 L 385 278 C 350 298, 310 300, 270 292 C 220 282, 150 276, 120 276 Z" fill="url(#soleWood2)"/>
    <path d="M 115 250 C 112 210, 130 170, 185 160 C 200 155, 220 170, 235 190 C 255 210, 310 225, 355 225 C 380 225, 388 238, 388 250 C 388 268, 370 275, 345 272 C 290 268, 130 268, 115 250 Z" fill="url(#leatherGrad2)"/>
    <path d="M 185 160 C 170 170, 160 190, 165 205" fill="none" stroke="#f1f5f9" stroke-width="1.5" opacity="0.3"/>
    <path d="M 200 178 L 220 188 M 195 188 L 215 198 M 190 198 L 210 208" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
    <path d="M 205 170 Q 215 150, 200 145 M 205 170 Q 225 155, 230 140" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 330 230 Q 365 232, 378 245" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.25"/>
    <path d="M 205 170 Q 235 190, 245 235" fill="none" stroke="#451a03" stroke-width="2"/>
"@

# 6. Leather 3: Luxury Brogue (tan brogue)
$leather_3 = Wrap-SVG @"
    <defs>
      <linearGradient id="leatherGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#b45309"/>
        <stop offset="70%" stop-color="#78350f"/>
        <stop offset="100%" stop-color="#451a03"/>
      </linearGradient>
      <linearGradient id="soleWood3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#92400e"/>
      </linearGradient>
    </defs>
    <path d="M 125 270 L 125 300 L 155 300 L 160 270 Z" fill="url(#soleWood3)"/>
    <path d="M 120 270 C 150 270, 220 275, 270 285 C 310 293, 350 288, 380 270 L 385 278 C 350 298, 310 300, 270 292 C 220 282, 150 276, 120 276 Z" fill="url(#soleWood3)"/>
    <path d="M 115 250 C 112 210, 130 170, 185 160 C 200 155, 220 170, 235 190 C 255 210, 310 225, 355 225 C 380 225, 388 238, 388 250 C 388 268, 370 275, 345 272 C 290 268, 130 268, 115 250 Z" fill="url(#leatherGrad3)"/>
    <path d="M 185 160 C 170 170, 160 190, 165 205" fill="none" stroke="#f1f5f9" stroke-width="1.5" opacity="0.3"/>
    <path d="M 200 178 L 220 188 M 195 188 L 215 198 M 190 198 L 210 208" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
    <path d="M 205 170 Q 215 150, 200 145 M 205 170 Q 225 155, 230 140" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 330 230 Q 365 232, 378 245" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.25"/>
    <path d="M 340 215 Q 350 235, 380 250" fill="none" stroke="#451a03" stroke-width="2" stroke-dasharray="2 3"/>
    <circle cx="345" cy="225" r="1.5" fill="#451a03"/>
    <circle cx="352" cy="232" r="1.5" fill="#451a03"/>
    <circle cx="360" cy="238" r="1.5" fill="#451a03"/>
    <circle cx="370" cy="243" r="1.5" fill="#451a03"/>
    <path d="M 230 195 Q 260 220, 250 270" fill="none" stroke="#451a03" stroke-width="1.5" stroke-dasharray="2 3"/>
"@

# 7. Heels 1: Elegant Stiletto (red)
$heels_1 = Wrap-SVG @"
    <defs>
      <linearGradient id="heelsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#dc2626"/>
        <stop offset="70%" stop-color="#991b1b"/>
        <stop offset="100%" stop-color="#450a0a"/>
      </linearGradient>
      <linearGradient id="innerGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    <path d="M 140 220 L 125 310 L 132 310 L 152 220 Z" fill="url(#heelsGrad1)"/>
    <rect x="123" y="308" width="10" height="4" fill="#1e293b" rx="1"/>
    <path d="M 135 210 C 165 210, 195 240, 230 265 C 260 285, 300 295, 345 295 C 365 295, 375 285, 380 275 C 370 295, 335 305, 300 305 C 260 305, 210 295, 175 260 C 145 230, 138 215, 135 210 Z" fill="url(#heelsGrad1)"/>
    <path d="M 137 210 C 160 210, 190 235, 225 260 C 255 280, 290 290, 330 290 L 325 295 C 285 295, 250 285, 220 265 C 185 240, 155 215, 137 210 Z" fill="url(#innerGrad1)"/>
    <path d="M 310 270 C 335 270, 368 280, 380 290 C 370 302, 330 306, 310 300 C 295 295, 295 275, 310 270 Z" fill="url(#heelsGrad1)"/>
    <path d="M 140 210 Q 155 170, 175 190" fill="none" stroke="url(#heelsGrad1)" stroke-width="6" stroke-linecap="round"/>
    <path d="M 172 185 Q 185 195, 195 190" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    <circle cx="173" cy="188" r="4" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <path d="M 330 275 Q 360 280, 372 288" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
"@

# 8. Heels 2: Velvet Pumps (black)
$heels_2 = Wrap-SVG @"
    <defs>
      <linearGradient id="heelsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b"/>
        <stop offset="70%" stop-color="#020617"/>
        <stop offset="100%" stop-color="#000000"/>
      </linearGradient>
      <linearGradient id="innerGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#94a3b8"/>
      </linearGradient>
    </defs>
    <path d="M 140 220 L 125 310 L 132 310 L 152 220 Z" fill="url(#heelsGrad2)"/>
    <rect x="123" y="308" width="10" height="4" fill="#1e293b" rx="1"/>
    <path d="M 135 210 C 165 210, 195 240, 230 265 C 260 285, 300 295, 345 295 C 365 295, 375 285, 380 275 C 370 295, 335 305, 300 305 C 260 305, 210 295, 175 260 C 145 230, 138 215, 135 210 Z" fill="url(#heelsGrad2)"/>
    <path d="M 137 210 C 160 210, 190 235, 225 260 C 255 280, 290 290, 330 290 L 325 295 C 285 295, 250 285, 220 265 C 185 240, 155 215, 137 210 Z" fill="url(#innerGrad2)"/>
    <path d="M 310 270 C 335 270, 368 280, 380 290 C 370 302, 330 306, 310 300 C 295 295, 295 275, 310 270 Z" fill="url(#heelsGrad2)"/>
    <path d="M 330 275 Q 360 280, 372 288" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.15"/>
"@

# 9. Heels 3: Evening Strap Heels (gold)
$heels_3 = Wrap-SVG @"
    <defs>
      <linearGradient id="heelsGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="70%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#78350f"/>
      </linearGradient>
      <linearGradient id="innerGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <path d="M 140 220 L 125 310 L 132 310 L 152 220 Z" fill="url(#heelsGrad3)"/>
    <rect x="123" y="308" width="10" height="4" fill="#78350f" rx="1"/>
    <path d="M 135 210 C 165 210, 195 240, 230 265 C 260 285, 300 295, 345 295 C 365 295, 375 285, 380 275 C 370 295, 335 305, 300 305 C 260 305, 210 295, 175 260 C 145 230, 138 215, 135 210 Z" fill="url(#heelsGrad3)"/>
    <path d="M 137 210 C 160 210, 190 235, 225 260 C 255 280, 290 290, 330 290 L 325 295 C 285 295, 250 285, 220 265 C 185 240, 155 215, 137 210 Z" fill="url(#innerGrad3)"/>
    <path d="M 310 270 C 335 270, 368 280, 380 290 C 370 302, 330 306, 310 300 C 295 295, 295 275, 310 270 Z" fill="url(#heelsGrad3)"/>
    <path d="M 140 210 Q 155 170, 175 190" fill="none" stroke="url(#heelsGrad3)" stroke-width="6" stroke-linecap="round"/>
    <path d="M 172 185 Q 185 195, 195 190" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="173" cy="188" r="4" fill="none" stroke="#fbbf24" stroke-width="2"/>
    <path d="M 330 275 Q 360 280, 372 288" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
"@

# 10. Casual 1: Urban Slip-on (grey)
$casual_1 = Wrap-SVG @"
    <defs>
      <linearGradient id="casualBody1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#475569"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <path d="M 120 260 C 120 275, 140 285, 180 288 C 240 292, 320 292, 360 282 C 382 276, 388 265, 388 252 L 384 246 C 350 262, 140 262, 120 246 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
    <path d="M 130 270 Q 250 280, 375 268" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <path d="M 125 245 C 120 220, 130 180, 175 165 C 195 158, 220 180, 245 205 C 275 225, 330 235, 370 235 C 385 235, 388 244, 388 252 C 388 260, 360 265, 340 262 C 280 258, 140 258, 125 245 Z" fill="url(#casualBody1)"/>
    <path d="M 175 165 C 160 175, 150 200, 155 215" fill="none" stroke="#f1f5f9" stroke-width="2" opacity="0.5"/>
    <polygon points="230,170 245,185 240,195 220,180" fill="#1e293b" opacity="0.3"/>
    <path d="M 130 195 Q 115 185, 125 175 Q 135 185, 130 195" fill="#f43f5e"/>
"@

# 11. Casual 2: Canvas Classic (blue canvas)
$casual_2 = Wrap-SVG @"
    <defs>
      <linearGradient id="casualBody2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1d4ed8"/>
        <stop offset="100%" stop-color="#1e3a8a"/>
      </linearGradient>
    </defs>
    <path d="M 120 260 C 120 275, 140 285, 180 288 C 240 292, 320 292, 360 282 C 382 276, 388 265, 388 252 L 384 246 C 350 262, 140 262, 120 246 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
    <path d="M 130 270 Q 250 280, 375 268" fill="none" stroke="#ef4444" stroke-width="2"/>
    <path d="M 125 245 C 120 220, 130 180, 175 165 C 195 158, 220 180, 245 205 C 275 225, 330 235, 370 235 C 385 235, 388 244, 388 252 C 388 260, 360 265, 340 262 C 280 258, 140 258, 125 245 Z" fill="url(#casualBody2)"/>
    <path d="M 175 165 C 160 175, 150 200, 155 215" fill="none" stroke="#f1f5f9" stroke-width="2" opacity="0.5"/>
    <path d="M 345 220 C 365 225, 382 240, 385 252 C 375 268, 355 268, 340 255 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
    <path d="M 215 160 L 255 200 M 230 150 L 270 190 M 245 140 L 285 180" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    <path d="M 160 240 Q 250 255, 340 240" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3 3"/>
"@

# 12. Casual 3: Modern Loafer (beige suede)
$casual_3 = Wrap-SVG @"
    <defs>
      <linearGradient id="casualBody3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d97706"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>
    </defs>
    <path d="M 120 260 C 120 275, 140 285, 180 288 C 240 292, 320 292, 360 282 C 382 276, 388 265, 388 252 L 384 246 C 350 262, 140 262, 120 246 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
    <path d="M 130 270 Q 250 280, 375 268" fill="none" stroke="#78350f" stroke-width="2"/>
    <path d="M 125 245 C 120 220, 130 180, 175 165 C 195 158, 220 180, 245 205 C 275 225, 330 235, 370 235 C 385 235, 388 244, 388 252 C 388 260, 360 265, 340 262 C 280 258, 140 258, 125 245 Z" fill="url(#casualBody3)"/>
    <path d="M 175 165 C 160 175, 150 200, 155 215" fill="none" stroke="#f1f5f9" stroke-width="2" opacity="0.5"/>
    <path d="M 225 180 C 240 200, 245 230, 225 245" fill="none" stroke="#451a03" stroke-width="10" stroke-linecap="round"/>
    <path d="M 225 180 C 240 200, 245 230, 225 245" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
    <path d="M 235 205 H 245" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
    <circle cx="233" cy="205" r="5" fill="none" stroke="#fbbf24" stroke-width="2"/>
    <circle cx="247" cy="205" r="5" fill="none" stroke="#fbbf24" stroke-width="2"/>
"@

# 13. Others 1: Winter Boot
$others_1 = Wrap-SVG @"
      <defs>
        <linearGradient id="bootLeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b45309"/>
          <stop offset="60%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <linearGradient id="bootSole" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <path d="M 120 270 L 120 310 L 150 310 L 155 285 L 360 295 L 375 270 Z" fill="url(#bootSole)"/>
      <path d="M 155 300 L 160 308 L 170 300 L 175 308 L 185 300 L 190 308 L 200 300" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 125 255 C 120 230, 115 150, 120 130 C 125 110, 155 110, 175 125 C 185 135, 205 180, 225 200 C 255 220, 310 230, 360 230 C 382 230, 385 250, 385 265 C 385 278, 350 282, 335 280 C 270 275, 140 275, 125 255 Z" fill="url(#bootLeather)"/>
      <ellipse cx="148" cy="120" rx="28" ry="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 120 120 C 130 135, 165 135, 175 120" fill="#f8fafc"/>
      <circle cx="168" cy="155" r="4" fill="#fbbf24"/>
      <circle cx="178" cy="180" r="4" fill="#fbbf24"/>
      <circle cx="190" cy="205" r="4" fill="#fbbf24"/>
      <path d="M 150 150 L 168 155 M 158 175 L 178 180 M 170 200 L 190 205" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
"@

# 14. Others 2: Cozy Slipper
$others_2 = Wrap-SVG @"
      <defs>
        <linearGradient id="slipperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <path d="M 120 260 C 120 280, 200 290, 370 275 C 380 270, 380 255, 370 250 C 200 240, 120 250, 120 260 Z" fill="#e2e8f0"/>
      <path d="M 125 258 C 125 272, 200 280, 360 268 C 360 258, 200 250, 125 258 Z" fill="#f8fafc"/>
      <path d="M 210 215 C 240 210, 320 220, 365 240 C 380 250, 380 265, 365 270 C 310 270, 230 260, 210 245 C 195 235, 195 220, 210 215 Z" fill="url(#slipperGrad)"/>
      <path d="M 210 215 C 200 225, 200 235, 210 245" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linecap="round"/>
      <path d="M 210 215 C 200 225, 200 235, 210 245" fill="none" stroke="#f1f5f9" stroke-width="4" stroke-linecap="round"/>
"@

# 15. Accessories 1: Premium Leather Belt
$accessories_1 = Wrap-SVG @"
      <defs>
        <linearGradient id="beltLeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <linearGradient id="shinyGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <circle cx="230" cy="220" r="80" fill="none" stroke="url(#beltLeather)" stroke-width="24"/>
      <circle cx="230" cy="220" r="60" fill="none" stroke="url(#beltLeather)" stroke-width="20" opacity="0.8"/>
      <circle cx="230" cy="220" r="88" fill="none" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 6"/>
      <circle cx="230" cy="220" r="72" fill="none" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 6"/>
      <path d="M 230 140 C 280 140, 330 180, 330 230 L 354 230 C 354 160, 290 116, 230 116 Z" fill="url(#beltLeather)"/>
      <path d="M 330 230 L 330 260 L 342 275 L 354 260 L 354 230 Z" fill="url(#beltLeather)"/>
      <g transform="translate(180, 110)">
        <rect x="0" y="0" width="60" height="50" rx="8" fill="none" stroke="url(#shinyGold)" stroke-width="10"/>
        <rect x="25" y="-5" width="10" height="60" fill="url(#shinyGold)" rx="2"/>
        <path d="M 30 25 L 55 25" stroke="#451a03" stroke-width="5" stroke-linecap="round"/>
      </g>
"@

# 16. Accessories 2: Shoe Care Kit
$accessories_2 = Wrap-SVG @"
      <defs>
        <linearGradient id="brushWood" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
        <linearGradient id="tinMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="50%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      <path d="M 120 280 Q 200 240, 280 270 Q 340 300, 380 280 L 360 320 Q 300 320, 250 330 Q 150 340, 120 280 Z" fill="#fb7185" opacity="0.4"/>
      <g transform="translate(160, 160) rotate(-15)">
        <rect x="10" y="35" width="130" height="25" fill="#1e293b" rx="4"/>
        <rect x="0" y="10" width="150" height="25" fill="url(#brushWood)" rx="8" stroke="#78350f" stroke-width="2"/>
        <path d="M 15 15 H 135" stroke="#fef08a" stroke-width="1.5" opacity="0.3"/>
      </g>
      <g transform="translate(260, 220)">
        <circle cx="42" cy="42" r="42" fill="#000000" opacity="0.1" transform="translate(3, 5)"/>
        <circle cx="40" cy="40" r="40" fill="url(#tinMetal)" stroke="#334155" stroke-width="2"/>
        <circle cx="40" cy="40" r="32" fill="#0f172a"/>
        <circle cx="40" cy="40" r="28" fill="#d97706" opacity="0.9"/>
        <text x="40" y="45" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">WAX</text>
      </g>
"@

# Write all to files
Set-Content -Path (Join-Path $outputDir "sneakers_1.svg") -Value $sneakers_1
Set-Content -Path (Join-Path $outputDir "sneakers_2.svg") -Value $sneakers_2
Set-Content -Path (Join-Path $outputDir "sneakers_3.svg") -Value $sneakers_3

Set-Content -Path (Join-Path $outputDir "leather_1.svg") -Value $leather_1
Set-Content -Path (Join-Path $outputDir "leather_2.svg") -Value $leather_2
Set-Content -Path (Join-Path $outputDir "leather_3.svg") -Value $leather_3

Set-Content -Path (Join-Path $outputDir "heels_1.svg") -Value $heels_1
Set-Content -Path (Join-Path $outputDir "heels_2.svg") -Value $heels_2
Set-Content -Path (Join-Path $outputDir "heels_3.svg") -Value $heels_3

Set-Content -Path (Join-Path $outputDir "casual_1.svg") -Value $casual_1
Set-Content -Path (Join-Path $outputDir "casual_2.svg") -Value $casual_2
Set-Content -Path (Join-Path $outputDir "casual_3.svg") -Value $casual_3

Set-Content -Path (Join-Path $outputDir "others_1.svg") -Value $others_1
Set-Content -Path (Join-Path $outputDir "others_2.svg") -Value $others_2

Set-Content -Path (Join-Path $outputDir "accessories_1.svg") -Value $accessories_1
Set-Content -Path (Join-Path $outputDir "accessories_2.svg") -Value $accessories_2

Write-Output "All 16 SVGs written successfully!"
