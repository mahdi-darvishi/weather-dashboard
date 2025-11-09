export const monthlyAvgTemperatures: Record<string, number[]> = {
  // --- Iran Cities ---
  teh: [8, 10, 15, 22, 28, 34, 37, 35, 30, 23, 15, 10], // Tehran
  isf: [6, 9, 14, 20, 26, 32, 35, 33, 29, 21, 13, 7], // Isfahan
  mhd: [2, 4, 9, 16, 22, 27, 29, 27, 23, 16, 9, 4], // Mashhad
  tbz: [-2, 0, 6, 13, 19, 24, 28, 28, 23, 16, 8, 2], // Tabriz
  shz: [9, 11, 16, 21, 28, 33, 35, 34, 30, 24, 16, 11], // Shiraz
  ahv: [12, 15, 20, 26, 33, 38, 40, 39, 35, 29, 20, 14], // Ahvaz
  rst: [7, 8, 10, 14, 19, 23, 26, 26, 23, 18, 13, 9], // Rasht
  yzd: [8, 11, 17, 23, 29, 35, 37, 35, 31, 24, 16, 10], // Yazd
  krm: [6, 9, 14, 20, 26, 31, 33, 31, 27, 21, 13, 8], // Kerman
  bnd: [20, 21, 24, 28, 32, 34, 35, 35, 33, 30, 26, 22], // Bandar Abbas
  ksh: [20, 21, 24, 28, 32, 34, 36, 36, 34, 31, 27, 22], // Kish
  ilm: [5, 7, 12, 18, 24, 31, 35, 34, 29, 22, 13, 7], // Ilam
  krh: [3, 5, 10, 16, 22, 28, 32, 31, 27, 20, 11, 5], // Kermanshah
  sri: [8, 9, 11, 15, 20, 24, 27, 27, 24, 19, 14, 10], // Sari
  zah: [9, 12, 17, 23, 28, 32, 34, 32, 28, 22, 15, 10], // Zahedan

  // --- Global Cities (Northern Hemisphere) ---
  ldn: [8, 8, 11, 14, 18, 21, 23, 23, 20, 15, 11, 8], // London (Mild)
  par: [5, 6, 10, 14, 18, 21, 24, 24, 20, 15, 9, 6], // Paris (Mild)
  ber: [1, 2, 6, 11, 16, 19, 22, 21, 17, 11, 5, 2], // Berlin (Colder)
  nyc: [0, 2, 7, 13, 19, 24, 27, 26, 22, 15, 9, 3], // New York (Varied)
  sfc: [11, 12, 13, 14, 15, 16, 17, 17, 18, 17, 14, 11], // San Francisco (Very Mild)
  tok: [6, 7, 10, 15, 20, 23, 27, 28, 24, 19, 13, 8], // Tokyo (Temperate)
  dub: [20, 21, 24, 29, 33, 35, 37, 37, 34, 30, 26, 22], // Dubai (Hot)
  ist: [6, 6, 8, 12, 17, 22, 25, 25, 21, 16, 12, 8], // Istanbul (Mild)
  rom: [8, 9, 12, 15, 20, 24, 27, 27, 23, 18, 13, 9], // Rome (Mediterranean)
  mos: [-6, -6, 0, 9, 17, 20, 23, 21, 15, 8, 1, -4], // Moscow (Cold)
  tor: [-4, -3, 2, 9, 16, 21, 24, 23, 19, 12, 5, -1], // Toronto (Cold)
  cai: [14, 15, 18, 23, 27, 30, 30, 30, 28, 25, 20, 16], // Cairo (Hot Desert)
  rey: [1, 1, 2, 5, 9, 12, 14, 13, 10, 6, 3, 1], // Reykjavik (Polar)
  sgp: [27, 27, 28, 28, 29, 29, 28, 28, 28, 28, 27, 27], // Singapore (Tropical)
  anc: [-8, -6, -2, 4, 10, 14, 16, 15, 10, 2, -5, -7], // Anchorage (Subarctic)

  // --- Global Cities (Southern Hemisphere - Reversed Seasons) ---
  syd: [23, 23, 22, 19, 16, 14, 13, 14, 16, 18, 20, 22], // Sydney
  cpt: [22, 22, 21, 18, 16, 14, 13, 13, 14, 16, 18, 20], // Cape Town
  rio: [27, 27, 26, 25, 22, 21, 21, 22, 22, 23, 24, 26], // Rio de Janeiro

  // --- Fallback default ---
  default: [10, 12, 15, 18, 22, 25, 28, 27, 24, 20, 15, 11],
};

// --- Labels for the X-Axis ---

// English Labels (3-letter abbreviation)
export const monthlyLabelsEn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Persian Labels (Jalali months)
// (Note: These align with Gregorian Jan-Dec, not the true Jalali calendar start)
export const monthlyLabelsFa = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
