const Icons = {
  all: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/>
      <path d="M4 8.5h2M4 15.5h2M18 8.5h2M18 15.5h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

  burger: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9.5C4 6.5 7.5 4 12 4s8 2.5 8 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="9" cy="6.7" r="0.5" fill="currentColor"/>
      <circle cx="12" cy="6" r="0.5" fill="currentColor"/>
      <circle cx="15" cy="6.7" r="0.5" fill="currentColor"/>
      <path d="M3.5 11.5h17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M4 14.5c1.5 1 4.8 1.6 8 1.6s6.5-.6 8-1.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M3.5 18c1 1.3 4.7 2 8.5 2s7.5-.7 8.5-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,

  pizza: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 3 20h18L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M6.3 15.5h11.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="12" cy="9.5" r="1" fill="currentColor"/>
      <circle cx="9.6" cy="13" r="1" fill="currentColor"/>
      <circle cx="14.4" cy="13" r="1" fill="currentColor"/>
    </svg>`,

  asian: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11h16l-1.4 6.3a2 2 0 0 1-2 1.7H7.4a2 2 0 0 1-2-1.7L4 11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M3 11a9 9 0 0 1 18 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 4.5c.6.8.6 1.7 0 2.5M13 3.8c.6.9.6 1.9 0 2.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M17 15.5 20 20M19.2 15.2 21 20" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,

  dessert: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10.5h12l-1.3 8.2a2 2 0 0 1-2 1.7H9.3a2 2 0 0 1-2-1.7L6 10.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M4.5 10.5h15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M8 10.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="12" cy="3.8" r="1.1" fill="currentColor"/>
    </svg>`,

  healthy: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11h16c0 4.4-3.6 8-8 8s-8-3.6-8-8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M12 11c0-3 1.6-5.5 4.5-6.5-1 2.7-.6 4.9 1 6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 8.5c1.2.4 2 1.3 2.3 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>`,

  drinks: (size = 22) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 8h11l-1.1 10.3a2 2 0 0 1-2 1.7H9.6a2 2 0 0 1-2-1.7L6.5 8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M5.5 8h13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M14 8 15.5 3M15.5 3 17 4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 11.5h7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
    </svg>`,

  wave: (size = 18) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 12V4.8a1.5 1.5 0 0 1 3 0V12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 12V6.3a1.5 1.5 0 0 1 3 0V13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17 13v-2.3a1.4 1.4 0 0 1 2.8 0V15c0 3.9-2.7 7-6.8 7-2.6 0-4.3-1-5.8-2.8L4 15.8c-.5-.7-.3-1.6.4-2 .6-.4 1.4-.3 1.9.3L8 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  money: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <rect x="2.5" y="6" width="19" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/>
      <path d="M5.5 9v0M18.5 15v0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,

  phone: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 2-3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>`,

  truck: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <path d="M2 7h11v10H2z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="M13 10h4l4 3.5V17h-8z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      <circle cx="6.5" cy="18" r="1.6" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="17" cy="18" r="1.6" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,

  home: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <path d="M4 11 12 4l8 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 9.5V20h12V9.5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M10 20v-5h4v5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>`,

  smile: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/>
      <path d="M8 13.5c1 1.3 2.4 2 4 2s3-.7 4-2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      <circle cx="9" cy="10" r="1" fill="currentColor"/>
      <circle cx="15" cy="10" r="1" fill="currentColor"/>
    </svg>`,

  cuisine: (size = 15) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px">
      <path d="M3 8.5C3 6 5.5 4 8.5 4S14 6 14 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M2.6 10.5h11.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M3 13c1.2.8 3.8 1.3 6.4 1.3S14 13.8 14 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M17 20 22 9h-6l3-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

  spinner: (size = 20) => `
    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-spin">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.2" opacity="0.2"/>
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`,

  deliveryPerson: (size = 100) => `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="url(#deliveryGrad)"/>
      <defs>
        <linearGradient id="deliveryGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="38" r="15" fill="rgba(255,255,255,0.95)"/>
      <path d="M22 84c2-16 12-26 28-26s26 10 28 26" fill="rgba(255,255,255,0.95)"/>
    </svg>`
};
