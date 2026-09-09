export interface ItineraryDay {
  day: number
  title: string
  meals: string
  activities: string[]
}

export interface HotelPrice {
  stars: number
  hotelName: string
  price: number
}

export interface ChildPolicyItem {
  category: string
  rate: string
}

export interface TourPackage {
  id: string
  title: string
  subtitle: string
  duration: string
  minPax: string
  highlights: string[]
  prices: HotelPrice[]
  includes: string[]
  excludes: string[]
  childPolicy: ChildPolicyItem[]
  itinerary: ItineraryDay[]
}

export const useTours = () => {
  const tourPackage: TourPackage = {
    id: 'dalat-4d3n',
    title: 'Jelajahi Da Lat — 4 Hari 3 Malam',
    subtitle: 'Udara pegunungan yang sejuk, taman penuh warna, destinasi unik, dan pengalaman berkesan.',
    duration: '4 Hari 3 Malam',
    minPax: '8–10 Peserta',
    highlights: [
      'Da Lat Flower Park & Mongoland (Dry Grass Tubing Slide)',
      'Fresh Garden & Suasana Jepang di Hoang Long Ohayo',
      'Langbiang Land (Rainbow Slide, Zooland, Strawberry Picking)',
      'Crazy House & High-Tech Strawberry Farm',
      'Da Lat Night Market & Outdoor BBQ Dinner'
    ],
    prices: [
      { stars: 3, hotelName: 'Rum Yang Hotel / Setara', price: 5864000 },
      { stars: 4, hotelName: 'TTC Hotel / Setara', price: 6985000 }
    ],
    includes: [
      'Akomodasi 3 malam di hotel pilihan atau setara',
      'Transportasi AC (16 kursi wisata & 29 kursi transfer bandara)',
      'Makan sesuai itinerary + Air mineral 1 botol/orang/hari',
      'Tiket masuk seluruh objek wisata sesuai itinerary',
      'Gratis 1 minuman per orang di Lời Của Gió Coffee',
      'Pemandu wisata profesional berbahasa Inggris',
      'Tip wajib pemandu & driver USD 3/orang/hari'
    ],
    excludes: [
      'Tiket pesawat internasional & pajak bandara',
      'Makanan dan minuman di luar program itinerary',
      'Biaya visa, asuransi perjalanan, dan pengeluaran pribadi',
      'Layanan lain yang tidak tercantum dalam program'
    ],
    childPolicy: [
      { category: 'Bayi (< 2 Tahun)', rate: 'Gratis (Free)' },
      { category: 'Anak 2–6 Tahun', rate: '50% tarif dewasa (sharing bed)' },
      { category: 'Anak > 6 s/d < 10 Tahun', rate: '75% tarif dewasa (sharing bed)' },
      { category: 'Anak > 10 Thn / Extra Bed', rate: '100% tarif dewasa' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kedatangan — Taman Bunga Da Lat — Pasar Malam',
        meals: 'Makan Siang & Makan Malam',
        activities: [
          'Pemandu wisata menyambut rombongan di Bandara Lien Khuong dan transfer ke pusat kota.',
          'Makan siang di restoran lokal dan istirahat sejenak.',
          'Mengunjungi Taman Bunga Da Lat yang dipenuhi ribuan bunga warna-warni.',
          'Transfer ke hotel untuk proses check-in dan istirahat.',
          'Makan malam di restoran lokal dilanjutkan waktu bebas di Da Lat Night Market.'
        ]
      },
      {
        day: 2,
        title: 'Mongoland — Fresh Garden — Hoang Long Ohayo',
        meals: 'Sarapan, Makan Siang & Makan Malam',
        activities: [
          'Eksplorasi Mongoland: Spot foto ala Nordik, Hobbit House, dan Dry Grass Tubing Slide.',
          'Mengunjungi Fresh Garden dengan hamparan taman bunga luas.',
          'Makan siang di restoran lokal.',
          'Menikmati suasana Jepang di Hoang Long Ohayo (Gerbang Torii merah, sakura, dan danau tenang).',
          'Outdoor BBQ Dinner santai dengan pemandangan lampu kota malam hari.'
        ]
      },
      {
        day: 3,
        title: 'Langbiang Land — Crazy House — Kebun Stroberi',
        meals: 'Sarapan, Makan Siang & Makan Malam',
        activities: [
          'Aktivitas di Langbiang Land: Rainbow Slide, Grass Tubing, Zooland, dan Dinosaur Park.',
          'Makan siang di restoran lokal.',
          'Mengunjungi keunikan arsitektur surealis Crazy House (Hang Nga Villa).',
          'Kunjungan ke High-Tech Strawberry Farm dan tester 1 buah stroberi gratis.',
          'Makan malam hidangan khas Vietnam dan waktu santai kedua di Da Lat Night Market.'
        ]
      },
      {
        day: 4,
        title: 'Kepulangan ke Kota Asal',
        meals: 'Sarapan',
        activities: [
          'Sarapan di hotel dan proses check-out.',
          'Pemandu wisata mengantar rombongan menuju Bandara Internasional Lien Khuong untuk penerbangan kembali.'
        ]
      }
    ]
  }

  return { tourPackage }
}