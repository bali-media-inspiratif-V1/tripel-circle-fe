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
  condition: string
  rate: string
}

export interface TourPackage {
  id: string
  title: string
  subtitle: string
  duration: string
  paxNote: string
  pricingNote: string
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
    subtitle: 'Udara pegunungan yang sejuk, taman penuh warna, destinasi unik, dan pengalaman berkesan dalam satu perjalanan.',
    duration: '4 Hari 3 Malam',
    paxNote: 'Berdasarkan 8–10 Peserta',
    pricingNote: 'Estimasi harga berdasarkan proposal penawaran (berlaku hingga 15 Agustus 2026). Harga final dan ketersediaan dikonfirmasi ulang sebelum reservasi.',
    highlights: [
      'Da Lat Flower Park',
      'Mongoland (Dry Grass Tubing Slide & Hobbit House)',
      'Fresh Garden',
      'Hoang Long Ohayo (Nuansa Budaya Jepang)',
      'Langbiang Land (Rainbow Slide, Zooland, Strawberry Picking)',
      'Crazy House (Hang Nga Villa)',
      'High-Tech Strawberry Farm'
    ],
    prices: [
      {
        stars: 3,
        hotelName: 'Rum Yang Hotel atau Hotel Setara',
        price: 5864000
      },
      {
        stars: 4,
        hotelName: 'TTC Hotel atau Hotel Setara',
        price: 6985000
      }
    ],
    includes: [
      'Akomodasi selama 3 malam di hotel sesuai kategori pilihan atau setara',
      'Transportasi: Kendaraan AC 16 kursi untuk tour wisata & 29 kursi untuk transfer bandara',
      'Makan sesuai yang tercantum dalam itinerary',
      'Air mineral 1 botol per orang per hari selama perjalanan',
      'Seluruh tiket masuk objek wisata sesuai itinerary',
      'Gratis 1 minuman per orang di Lời Của Gió Coffee',
      'Pemandu wisata profesional berbahasa Inggris',
      'Biaya tip wajib pemandu dan driver sebesar USD 3 per orang per hari'
    ],
    excludes: [
      'Tiket pesawat internasional beserta pajak bandara',
      'Makanan dan minuman yang tidak disebutkan dalam program perjalanan',
      'Biaya pengurusan visa, asuransi perjalanan, dan pengeluaran pribadi',
      'Layanan lain yang tidak disebutkan secara jelas dalam program perjalanan'
    ],
    childPolicy: [
      {
        category: 'Bayi di bawah 2 tahun',
        condition: 'Tidak dikenakan biaya',
        rate: 'Gratis'
      },
      {
        category: 'Anak usia 2 hingga 6 tahun',
        condition: 'Berbagi tempat tidur dengan orang dewasa',
        rate: '50% tarif dewasa'
      },
      {
        category: 'Anak usia > 6 hingga < 10 tahun',
        condition: 'Berbagi tempat tidur dengan orang dewasa',
        rate: '75% tarif dewasa'
      },
      {
        category: 'Anak usia di atas 10 tahun',
        condition: 'Dikenakan tarif penuh',
        rate: '100% tarif dewasa'
      },
      {
        category: 'Extra Bed (Tempat Tidur Tambahan)',
        condition: 'Anak yang menggunakan tempat tidur tambahan',
        rate: '100% tarif dewasa'
      }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kedatangan — Da Lat Flower Park — Da Lat Night Market',
        meals: 'Makan Siang & Makan Malam',
        activities: [
          'Pemandu wisata menjemput rombongan di Bandara Da Lat dan transfer ke pusat kota (jadwal disesuaikan waktu penerbangan).',
          'Makan siang di restoran lokal dan istirahat sejenak.',
          'Mengunjungi Taman Bunga Da Lat yang menampilkan ribuan bunga berwarna-warni dan taman tematik.',
          'Transfer menuju hotel untuk proses check-in dan istirahat.',
          'Makan malam di restoran lokal dilanjutkan waktu santai di Da Lat Night Market (kuliner pizza Da Lat, susu kedelai hangat, dan jajanan lokal).'
        ]
      },
      {
        day: 2,
        title: 'Mongoland — Fresh Garden — Hoang Long Ohayo — Outdoor BBQ',
        meals: 'Sarapan, Makan Siang & Makan Malam',
        activities: [
          'Sarapan di hotel dan penjemputan oleh pemandu wisata.',
          'Eksplorasi Mongoland: wahana Dry Grass Tubing Slide, spot foto Hobbit House, Giant Sky Swing, dan taman bunga.',
          'Mengunjungi Fresh Garden dengan hamparan taman bunga luas dan lanskap artistik.',
          'Makan siang di restoran lokal dan istirahat sejenak.',
          'Mengunjungi kawasan bertema budaya Jepang di Hoang Long Ohayo (Gerbang Torii merah, sakura, dan danau tenang).',
          'Makan malam Outdoor BBQ santai dengan panorama lampu kota Da Lat di malam hari.'
        ]
      },
      {
        day: 3,
        title: 'Langbiang Land — Crazy House — High-Tech Strawberry Farm',
        meals: 'Sarapan, Makan Siang & Makan Malam',
        activities: [
          'Sarapan di hotel dan menuju Langbiang Land: Rainbow Slide, Grass Tubing Slide, Zooland, Dinosaur Park, serta memetik stroberi musiman.',
          'Makan siang di restoran lokal dan istirahat sejenak.',
          'Mengunjungi keunikan arsitektur surealis dunia di Crazy House (Hang Nga Villa).',
          'Kunjungan ke High-Tech Strawberry Farm: edukasi budidaya stroberi modern, berfoto di greenhouse, dan tester 1 buah stroberi gratis di konter.',
          'Makan malam di restoran lokal dan waktu bebas kedua di Da Lat Night Market.'
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