const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'images', 'products');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper: Wrap in SVG boilerplate
function wrapSVG(content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
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
    ${content}
  </g>
</svg>`;
}

// 1. SNEAKERS SVG GENERATOR
function generateSneaker(color1, color2, color3, style) {
  let extraElements = '';
  
  if (style === 'air') {
    // Air bubble in the sole
    extraElements = `
      <!-- Air Bubble Window -->
      <path d="M 160 290 Q 180 290 190 280 H 150 Z" fill="#ffffff" opacity="0.6"/>
      <ellipse cx="170" cy="285" rx="12" ry="4" fill="${color3}" opacity="0.8"/>
    `;
  } else if (style === 'trail') {
    // Heavy lugs / treads
    extraElements = `
      <!-- Rugged treads -->
      <path d="M 120 300 L 125 308 L 135 300 L 140 308 L 150 300 L 155 308 L 165 300 L 170 308 L 180 300" fill="none" stroke="${color3}" stroke-width="4" stroke-linejoin="round"/>
      <!-- Mudguard overlay -->
      <path d="M 110 270 Q 150 280, 200 270 C 230 260, 280 240, 310 200 L 330 215 C 300 260, 240 290, 110 290 Z" fill="${color3}" opacity="0.3"/>
    `;
  } else if (style === 'retro') {
    // Flat stitched panels
    extraElements = `
      <!-- Retro stripe -->
      <path d="M 230 180 Q 210 230, 260 275" fill="none" stroke="${color3}" stroke-width="12" stroke-linecap="round" opacity="0.8"/>
      <path d="M 245 175 Q 225 225, 275 270" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linecap="round"/>
    `;
  }

  const content = `
    <defs>
      <linearGradient id="soleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#cbd5e1"/>
      </linearGradient>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    
    <!-- Shoe Upper Body -->
    <path d="M 110 250 
             C 105 220, 120 170, 160 150 
             C 175 140, 200 130, 220 160 
             C 240 185, 290 200, 330 200 
             C 365 200, 385 220, 390 240
             C 395 260, 380 280, 350 280
             C 320 280, 120 285, 110 250 Z" 
          fill="url(#bodyGrad)"/>
          
    <!-- Heel Collar Accent -->
    <path d="M 160 150 C 145 165, 150 190, 160 200 C 170 190, 175 160, 160 150 Z" fill="${color3}"/>
    
    <!-- Toe Cap / Overlay -->
    <path d="M 330 200 C 355 200, 385 220, 390 240 C 375 255, 340 230, 330 200 Z" fill="${color3}" opacity="0.6"/>

    <!-- Laces System -->
    <path d="M 210 165 L 230 195 M 220 160 L 245 190 M 230 155 L 260 185" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    <path d="M 200 170 Q 185 160, 175 175 Q 165 190, 180 185" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Outsole (Midsole + Bottom) -->
    <path d="M 108 250 
             C 108 275, 120 295, 150 300 
             C 200 305, 300 305, 360 295 
             C 385 290, 392 275, 392 255
             C 392 245, 360 250, 350 275
             C 330 282, 120 282, 108 250 Z" 
          fill="url(#soleGrad)"/>
    
    <path d="M 115 298 C 200 308, 300 308, 385 293" fill="none" stroke="${color3}" stroke-width="4" stroke-linecap="round"/>

    ${extraElements}
  `;
  return wrapSVG(content);
}

// 2. LEATHER SHOES SVG GENERATOR
function generateLeather(color1, color2, style) {
  let brogueDetails = '';
  if (style === 'brogue') {
    // Perforations/brogue patterns
    brogueDetails = `
      <!-- Wingtip stitches -->
      <path d="M 340 215 Q 350 235, 380 250" fill="none" stroke="#78350f" stroke-width="2" stroke-dasharray="2 3"/>
      <!-- Perforation dots -->
      <circle cx="345" cy="225" r="1.5" fill="#451a03"/>
      <circle cx="352" cy="232" r="1.5" fill="#451a03"/>
      <circle cx="360" cy="238" r="1.5" fill="#451a03"/>
      <circle cx="370" cy="243" r="1.5" fill="#451a03"/>
      <!-- Mid-body stitches -->
      <path d="M 230 195 Q 260 220, 250 270" fill="none" stroke="#78350f" stroke-width="1.5" stroke-dasharray="2 3"/>
    `;
  } else if (style === 'derby') {
    // Open lacing flaps
    brogueDetails = `
      <path d="M 205 170 Q 235 190, 245 235" fill="none" stroke="#1e293b" stroke-width="2"/>
    `;
  }

  const content = `
    <defs>
      <linearGradient id="leatherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="70%" stop-color="${color2}"/>
        <stop offset="100%" stop-color="#000000"/>
      </linearGradient>
      <linearGradient id="soleWood" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#78350f"/>
        <stop offset="100%" stop-color="#451a03"/>
      </linearGradient>
    </defs>
    
    <!-- Wooden Sole and Heel -->
    <!-- Heel -->
    <path d="M 125 270 L 125 300 L 155 300 L 160 270 Z" fill="url(#soleWood)"/>
    <!-- Sole -->
    <path d="M 120 270 C 150 270, 220 275, 270 285 C 310 293, 350 288, 380 270 L 385 278 C 350 298, 310 300, 270 292 C 220 282, 150 276, 120 276 Z" fill="url(#soleWood)"/>
    
    <!-- Shoe Upper Body -->
    <path d="M 115 250
             C 112 210, 130 170, 185 160
             C 200 155, 220 170, 235 190
             C 255 210, 310 225, 355 225
             C 380 225, 388 238, 388 250
             C 388 268, 370 275, 345 272
             C 290 268, 130 268, 115 250 Z"
          fill="url(#leatherGrad)"/>
          
    <!-- Ankle opening lining -->
    <path d="M 185 160 C 170 170, 160 190, 165 205" fill="none" stroke="#f1f5f9" stroke-width="1.5" opacity="0.3"/>
    
    <!-- Laces -->
    <path d="M 200 178 L 220 188 M 195 188 L 215 198 M 190 198 L 210 208" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
    <!-- Hanging laces ribbon -->
    <path d="M 205 170 Q 215 150, 200 145 M 205 170 Q 225 155, 230 140" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Light reflection highlight on shoe nose -->
    <path d="M 330 230 Q 365 232, 378 245" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.25"/>

    ${brogueDetails}
  `;
  return wrapSVG(content);
}

// 3. HIGH HEELS SVG GENERATOR
function generateHeels(color1, color2, colorAccent) {
  const content = `
    <defs>
      <linearGradient id="heelsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="70%" stop-color="${color2}"/>
        <stop offset="100%" stop-color="#000000"/>
      </linearGradient>
      <linearGradient id="innerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${colorAccent}"/>
        <stop offset="100%" stop-color="#1e293b"/>
      </linearGradient>
    </defs>
    
    <!-- The Slender Heel -->
    <path d="M 140 220 L 125 310 L 132 310 L 152 220 Z" fill="url(#heelsGrad)"/>
    <!-- Heel Cap -->
    <rect x="123" y="308" width="10" height="4" fill="#1e293b" rx="1"/>
    
    <!-- Main Shoe Structure (Insole / Inner Arch) -->
    <path d="M 135 210
             C 165 210, 195 240, 230 265
             C 260 285, 300 295, 345 295
             C 365 295, 375 285, 380 275
             C 370 295, 335 305, 300 305
             C 260 305, 210 295, 175 260
             C 145 230, 138 215, 135 210 Z"
          fill="url(#heelsGrad)"/>

    <!-- Inner Sole lining (visible portion of the inside shoe) -->
    <path d="M 137 210 C 160 210, 190 235, 225 260 C 255 280, 290 290, 330 290 L 325 295 C 285 295, 250 285, 220 265 C 185 240, 155 215, 137 210 Z" fill="url(#innerGrad)"/>

    <!-- Toe Box Cover -->
    <path d="M 310 270
             C 335 270, 368 280, 380 290
             C 370 302, 330 306, 310 300
             C 295 295, 295 275, 310 270 Z"
          fill="url(#heelsGrad)"/>
          
    <!-- Ankle Strap (Elegant detail) -->
    <path d="M 140 210 Q 155 170, 175 190" fill="none" stroke="url(#heelsGrad)" stroke-width="6" stroke-linecap="round"/>
    <path d="M 172 185 Q 185 195, 195 190" fill="none" stroke="${colorAccent}" stroke-width="3" stroke-linecap="round"/>
    <!-- Gold Buckle -->
    <circle cx="173" cy="188" r="4" fill="none" stroke="#f59e0b" stroke-width="2"/>
    
    <!-- Glossy Highlight Curve -->
    <path d="M 330 275 Q 360 280, 372 288" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  `;
  return wrapSVG(content);
}

// 4. CASUAL SHOES SVG GENERATOR
function generateCasual(color1, color2, style) {
  let details = '';
  if (style === 'canvas') {
    details = `
      <!-- White toe cap -->
      <path d="M 345 220 C 365 225, 382 240, 385 252 C 375 268, 355 268, 340 255 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Laces on canvas -->
      <path d="M 215 160 L 255 200 M 230 150 L 270 190 M 245 140 L 285 180" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Side double stitch line -->
      <path d="M 160 240 Q 250 255, 340 240" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3 3"/>
    `;
  } else if (style === 'slipon') {
    details = `
      <!-- Elastic band gusset -->
      <polygon points="230,170 245,185 240,195 220,180" fill="#1e293b" opacity="0.3"/>
      <!-- Webbing Pull Tab on heel -->
      <path d="M 130 195 Q 115 185, 125 175 Q 135 185, 130 195" fill="#f43f5e"/>
    `;
  } else if (style === 'loafer') {
    details = `
      <!-- Loafer Strap (Saddle) -->
      <path d="M 225 180 C 240 200, 245 230, 225 245" fill="none" stroke="#451a03" stroke-width="10" stroke-linecap="round"/>
      <path d="M 225 180 C 240 200, 245 230, 225 245" fill="none" stroke="${color1}" stroke-width="6" stroke-linecap="round"/>
      <!-- Metal ornament on saddle (Horsebit look) -->
      <path d="M 235 205 H 245" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
      <circle cx="233" cy="205" r="5" fill="none" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="247" cy="205" r="5" fill="none" stroke="#fbbf24" stroke-width="2"/>
    `;
  }

  const content = `
    <defs>
      <linearGradient id="casualBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    
    <!-- White rubber sole -->
    <path d="M 120 260
             C 120 275, 140 285, 180 288
             C 240 292, 320 292, 360 282
             C 382 276, 388 265, 388 252
             L 384 246
             C 350 262, 140 262, 120 246 Z"
          fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
          
    <!-- Thin red stripe on sole (sneaker accent) -->
    <path d="M 130 270 Q 250 280, 375 268" fill="none" stroke="#ef4444" stroke-width="2"/>

    <!-- Shoe Upper Body -->
    <path d="M 125 245
             C 120 220, 130 180, 175 165
             C 195 158, 220 180, 245 205
             C 275 225, 330 235, 370 235
             C 385 235, 388 244, 388 252
             C 388 260, 360 265, 340 262
             C 280 258, 140 258, 125 245 Z"
          fill="url(#casualBody)"/>

    <!-- Collar trim -->
    <path d="M 175 165 C 160 175, 150 200, 155 215" fill="none" stroke="#f1f5f9" stroke-width="2" opacity="0.5"/>

    ${details}
  `;
  return wrapSVG(content);
}

// 5. OTHERS (BOOT & SLIPPER)
function generateOthers(style) {
  let content = '';
  if (style === 'boot') {
    // Rugged Winter Boot
    content = `
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
      
      <!-- Rugged Sole & Heel -->
      <path d="M 120 270 L 120 310 L 150 310 L 155 285 L 360 295 L 375 270 Z" fill="url(#bootSole)"/>
      <!-- Tread pattern -->
      <path d="M 155 300 L 160 308 L 170 300 L 175 308 L 185 300 L 190 308 L 200 300" fill="none" stroke="#000000" stroke-width="4"/>
      
      <!-- Boot Body (High ankle) -->
      <path d="M 125 255
               C 120 230, 115 150, 120 130
               C 125 110, 155 110, 175 125
               C 185 135, 205 180, 225 200
               C 255 220, 310 230, 360 230
               C 382 230, 385 250, 385 265
               C 385 278, 350 282, 335 280
               C 270 275, 140 275, 125 255 Z"
            fill="url(#bootLeather)"/>
            
      <!-- Fur Collar Lining at top -->
      <ellipse cx="148" cy="120" rx="28" ry="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <path d="M 120 120 C 130 135, 165 135, 175 120" fill="#f8fafc"/>
      
      <!-- Boot Lace Eyelets & Laces -->
      <circle cx="168" cy="155" r="4" fill="#fbbf24"/>
      <circle cx="178" cy="180" r="4" fill="#fbbf24"/>
      <circle cx="190" cy="205" r="4" fill="#fbbf24"/>
      <path d="M 150 150 L 168 155 M 158 175 L 178 180 M 170 200 L 190 205" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
    `;
  } else if (style === 'slipper') {
    // Cozy home slipper
    content = `
      <defs>
        <linearGradient id="slipperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
      </defs>
      
      <!-- Flat comfortable sole -->
      <path d="M 120 260 C 120 280, 200 290, 370 275 C 380 270, 380 255, 370 250 C 200 240, 120 250, 120 260 Z" fill="#e2e8f0"/>
      
      <!-- Fuzzy inner footbed -->
      <path d="M 125 258 C 125 272, 200 280, 360 268 C 360 258, 200 250, 125 258 Z" fill="#f8fafc"/>
      
      <!-- Cozy Upper shell (covers front, back is open) -->
      <path d="M 210 215 
               C 240 210, 320 220, 365 240 
               C 380 250, 380 265, 365 270 
               C 310 270, 230 260, 210 245
               C 195 235, 195 220, 210 215 Z" 
            fill="url(#slipperGrad)"/>
            
      <!-- Furry trim on upper shell rim -->
      <path d="M 210 215 C 200 225, 200 235, 210 245" fill="none" stroke="#f8fafc" stroke-width="8" stroke-linecap="round"/>
      <path d="M 210 215 C 200 225, 200 235, 210 245" fill="none" stroke="#f1f5f9" stroke-width="4" stroke-linecap="round"/>
    `;
  }
  return wrapSVG(content);
}

// 6. ACCESSORIES (BELT & CARE KIT)
function generateAccessory(style) {
  let content = '';
  if (style === 'belt') {
    // Coiled leather belt with gold buckle
    content = `
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
      
      <!-- Coiled belt strap -->
      <circle cx="230" cy="220" r="80" fill="none" stroke="url(#beltLeather)" stroke-width="24"/>
      <circle cx="230" cy="220" r="60" fill="none" stroke="url(#beltLeather)" stroke-width="20" opacity="0.8"/>
      
      <!-- Stitches on belt strap -->
      <circle cx="230" cy="220" r="88" fill="none" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 6"/>
      <circle cx="230" cy="220" r="72" fill="none" stroke="#a16207" stroke-width="1.5" stroke-dasharray="4 6"/>

      <!-- Loose belt end overlapping -->
      <path d="M 230 140 C 280 140, 330 180, 330 230 L 354 230 C 354 160, 290 116, 230 116 Z" fill="url(#beltLeather)"/>
      <path d="M 330 230 L 330 260 L 342 275 L 354 260 L 354 230 Z" fill="url(#beltLeather)"/>

      <!-- Gold Buckle -->
      <g transform="translate(180, 110)">
        <rect x="0" y="0" width="60" height="50" rx="8" fill="none" stroke="url(#shinyGold)" stroke-width="10"/>
        <rect x="25" y="-5" width="10" height="60" fill="url(#shinyGold)" rx="2"/>
        <!-- Buckle prong -->
        <path d="M 30 25 L 55 25" stroke="#451a03" stroke-width="5" stroke-linecap="round"/>
      </g>
    `;
  } else if (style === 'care') {
    // Care Kit: Brush, polish tin, cloth
    content = `
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
      
      <!-- Soft folded cloth on background -->
      <path d="M 120 280 Q 200 240, 280 270 Q 340 300, 380 280 L 360 320 Q 300 320, 250 330 Q 150 340, 120 280 Z" fill="#fb7185" opacity="0.4"/>
      
      <!-- Shoe Brush -->
      <g transform="translate(160, 160) rotate(-15)">
        <!-- Bristles (Black) -->
        <rect x="10" y="35" width="130" height="25" fill="#1e293b" rx="4"/>
        <!-- Wooden Handle -->
        <rect x="0" y="10" width="150" height="25" fill="url(#brushWood)" rx="8" stroke="#78350f" stroke-width="2"/>
        <path d="M 15 15 H 135" stroke="#fef08a" stroke-width="1.5" opacity="0.3"/>
      </g>
      
      <!-- Polish Tin -->
      <g transform="translate(260, 220)">
        <!-- Tin shadow -->
        <circle cx="42" cy="42" r="42" fill="#000000" opacity="0.1" transform="translate(3, 5)"/>
        <!-- Tin Base -->
        <circle cx="40" cy="40" r="40" fill="url(#tinMetal)" stroke="#334155" stroke-width="2"/>
        <circle cx="40" cy="40" r="32" fill="#0f172a"/>
        <!-- Logo / Wax fill -->
        <circle cx="40" cy="40" r="28" fill="#d97706" opacity="0.9"/>
        <text x="40" y="45" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">WAX</text>
      </g>
    `;
  }
  return wrapSVG(content);
}

// Data of products to generate
const products = [
  { name: 'sneakers_1.svg', data: generateSneaker('#06b6d4', '#3b82f6', '#10b981', 'air') },
  { name: 'sneakers_2.svg', data: generateSneaker('#f97316', '#475569', '#1e293b', 'trail') },
  { name: 'sneakers_3.svg', data: generateSneaker('#f8fafc', '#e2e8f0', '#1e3a8a', 'retro') },
  
  { name: 'leather_1.svg', data: generateLeather('#1e293b', '#0f172a', 'oxford') },
  { name: 'leather_2.svg', data: generateLeather('#78350f', '#451a03', 'derby') },
  { name: 'leather_3.svg', data: generateLeather('#92400e', '#78350f', 'brogue') },
  
  { name: 'heels_1.svg', data: generateHeels('#dc2626', '#991b1b', '#fbbf24') },
  { name: 'heels_2.svg', data: generateHeels('#1e293b', '#020617', '#e2e8f0') },
  { name: 'heels_3.svg', data: generateHeels('#fbbf24', '#d97706', '#ffffff') },
  
  { name: 'casual_1.svg', data: generateCasual('#475569', '#334155', 'slipon') },
  { name: 'casual_2.svg', data: generateCasual('#1d4ed8', '#1e3a8a', 'canvas') },
  { name: 'casual_3.svg', data: generateCasual('#b45309', '#78350f', 'loafer') },
  
  { name: 'others_1.svg', data: generateOthers('boot') },
  { name: 'others_2.svg', data: generateOthers('slipper') },
  
  { name: 'accessories_1.svg', data: generateAccessory('belt') },
  { name: 'accessories_2.svg', data: generateAccessory('care') }
];

products.forEach(p => {
  const filePath = path.join(outputDir, p.name);
  fs.writeFileSync(filePath, p.data, 'utf8');
  console.log(`Generated: ${p.name}`);
});

console.log('All product SVGs generated successfully!');
