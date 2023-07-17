const dataMap = [
	{
		id: 1,
		nama: "Rektorat",
		deskripsi:
			"Gedung Rektorat merupakan gedung 8 lantai yang terletak di belakang lapangan rektorat. Rektorat merupakan tempat kerja jajaran rektor, wakil rektor, beserta jajaran karyawan untuk mengatur berbagai layanan dan administrasi kemahasiswaan, seperti keuangan dan kemahasiswaan.",
	},
	{
		id: 2,
		nama: "Fakultas Hukum",
		deskripsi:
			"Fakultas Hukum menjadi fakultas tertua di Universitas Brawijaya. Bangunan FH memiliki arsitektur yang khas yaitu seperti bangunan badan peradilan. Fakultas Hukum bersebelahan dengan FIA, FEB, dan FT. Fakultas Hukum terdiri dari 3 gedung. Untuk menuju ke FH, dapat melalui Gerbang UB COFFEE atau Gerbang Watu Gong agar lebih dekat.",
	},
	{
		id: 3,
		nama: "Fakultas Ekonomi dan Bisnis",
		deskripsi:
			"Fakultas Ekonomi dan Bisnis menjadi salah satu tempat yang strategis karena berdekatan dengan Gedung Widyaloka, Lapangan Rektorat, dan Rekorat. Gedung FEB memiliki arsitektur  yang unik. Fakultas Ekonomi dan Bisnis terdiri dari 32 gedung, terdiri 12 GU, 4 GE, 4 GD, 3 GA, 3 GB, 7 dan GF.",
	},
	{
		id: 4,
		nama: "Fakultas Ilmu Administrasi",
		deskripsi:
			"Fakultas Ilmu Administrasi gedung dengan nuansa warna putih. FIA berdekatan dengan FH, FEB, dan FT. Fakultas Ilmu Administrasi dekat dengan gerbang Soekarno Hatta.",
	},
	{
		id: 5,
		nama: "Fakultas Teknik",
		deskripsi:
			"Fakultas Teknik menjadi salah satu fakultas terluas di Universitas Brawijaya. FT dekat dengan gerbang UB COFFEE dan Watu Gong. Selain itu, FT berdekatan dengan FH dan FISIP.",
	},

	{
		id: 6,
		nama: "Fakultas Ilmu Sosial dan Ilmu Politik",
		deskripsi: "",
	},
	{
		id: 7,
		nama: "Fakultas Peternakan",
		deskripsi: "",
	},
	{
		id: 8,
		nama: "Fakultas MIPA",
		deskripsi: "",
	},
	{
		id: 9,
		nama: "Fakultas Ilmu Budaya",
		deskripsi:
			"Fakultas Ilmu Budaya terletak di dekat Rektorat dan Perpustakaan UB. Selain itu FIB Gedung B dekat dengan FH dan juga Gedung Kuliah Bersama. Sedangkan Gedung A bersebelahan dengan FMIPA dan FK. FIB letaknya sangat unik karena antara Gedung A dan B dipisahkan oleh Rektorat.",
	},
	{
		id: 10,
		nama: "Fakultas Perikanan dan Ilmu Kelautan",
		deskripsi:
			"Fakultas Perikanan dan Ilmu Kelautan terdiri dari 4 gedung yaitu, gedung B (gedung utama), gedung kuliah S2, gedung C, dan gedung D kuliah S1. FPIK dekat dengan gerbang veteran. Selain itu FPIK berdekatan dengan FMIPA dan FIB.",
	},
	{
		id: 11,
		nama: "Fakultas Pertanian",
		deskripsi:
			"Fakultas Pertanian merupakan salah satu fakultas yang terletak di dekat Gerbang Veteran. FP terletak di sebelah FK dan  FMIPA. Selain itu, Fakultas Pertanian juga terletak di dekat Gazebo Raden Patah.",
	},
	{
		id: 12,
		nama: "Fakultas Kedokteran",
		deskripsi:
			"Fakultas Kedokteran  merupakan salah satu fakultas yang terletak di dekat Gerbang Veteran. FK terletak di sebelah FILKOM dan  FMIPA. Selain itu, Fakultas Pertanian juga terletak di dekat Gazebo Raden Patah dan Perpustakaan UB. FK memiliki arsitektur yang khas dan bangunannya berwarna putih.",
	},
	{
		id: 13,
		nama: "Fakultas Ilmu Komputer",
		deskripsi:
			"Fakultas Ilmu Komputer merupakan salah satu fakultas yang terletak di dekat Gerbang Veteran. FILKOM juga terletak di dekat FK, FTP dan gedung Griya UB. Tahukah kamu kalau FILKOM merupakan bangunan tertinggi yang ada di dalam lingkungan Universitas Brawijaya?",
	},
	{
		id: 14,
		nama: "Fakultas Teknologi Pertanian",
		deskripsi:
			"Fakultas Teknologi Pertanian adalah fakultas yang letaknya persis di depan TuguBundaran Rektorat UB, salah satu tempat ikonik para mahasiswa untuk berfoto. Letak FTP juga sangat strategis dengan jaraknya yang cukup dekat dengan Lapangan Rektorat, Rektorat, FEB, Masjid Raden Patah, Gedung Kebudayaan, Samantha Krida, dan FILKOM.",
	},
	{
		id: 15,
		nama: "Fakultas Kedokteran Gigi",
		deskripsi:
			"Fakultas Kedokteran Gigi adalah fakultas yang jaraknya sangat dekat dengan Gerbang Veteran. Selain itu FKG juga bersebelahan dengan FK dan Rumah Sakit Gigi dan Mulut. Di dekat FKG juga ada pohon beringin loh,,,",
	},
	{
		id: 16,
		nama: "Pascasarjana",
		deskripsi:
			"Jika dilihat-lihat, Gedung Pascasarjana merupakan gedung yang letaknya sangat jauh dari Gerbang Veteran, tetapi tenang saja karena Gedung Pascasarjana cukup dekat dengan Gerbang Watu Gong. Gedung Pascasarjana juga bersebelahan dengan KPRI, Gedung A Teknik Sipil UB, dan UB Coffee loh!",
	},
	{
		id: 17,
		nama: "Program Vokasi",
		deskripsi:
			"Gedung Program Vokasi merupakan salah satu gedung yang letaknya cukup luar dari lingkungan Universitas Brawijaya. Gedung Program Vokasi dihimpit oleh Gedung Inbis dan Rumah Sakit Gigi dan Mulut.",
	},
	{
		id: 18,
		nama: "Gedung Widyaloka",
		deskripsi:
			"Gedung Widyaloka merupakan aula yang biasanya menjadi tempat pertemuan. Gedung Widyaloka sendiri dapat menampung kurang lebih 500 orang. Gedung Widyaloka terletak di antara FH dan FEB. Selain itu, jarak Gedung Widyaloka juga cukup dekat dengan Gedung Kuliah Bersama.",
	},
	{
		id: 19,
		nama: "Perpustakaan",
		deskripsi:
			"Perpustakaan UB juga merupakan salah satu tempat yang letaknya cukup strategis. Perpustakaan UB terletak berdekatan dengan Gedung A FIB, FMIPA, dan Laboratorium Gizi FK UB. Tepat di luar Perpustakaan UB terdapat sejumlah meja dan kursi yang dapat digunakan untuk membaca buku, mengerjakan tugas, hingga kerja kelompok.",
	},
	{
		id: 20,
		nama: "Samanthakrida",
		deskripsi:
			"Samanthakrida merupakan gedung serbaguna yang terletak di dekat GOR Pertamina UB, Gedung Kebudayaan, serta FTP. Samanthakrida biasanya digunakan sebagai tempat wisuda para mahasiswa dan mahasiswi Universitas Brawijaya. Samanthakrida juga berjarak cukup dekat dengan Kantin CL UB loh!",
	},
	{
		id: 21,
		nama: "GOR Pertamina",
		deskripsi:
			"GOR Pertamina UB terletak persis di antara Samanthakrida dan Griya UB. GOR Pertamina UB merupakan salah satu sarana fasilitas yang disediakan oleh Universitas Brawijaya dalam mendukung minat dan bakat mahasiswanya dalam bidang olahraga.",
	},
	{
		id: 22,
		nama: "Gedung Kebudayaan",
		deskripsi:
			"Gedung Kebudayaan atau Student Culture Building merupakan bangunan yang terletak berdekatan dengan Samanthakrida, FTP, dan Masjid Raden Patah.",
	},
	{
		id: 23,
		nama: "Masjid Raden Patah",
		deskripsi:
			"Masjid Raden Patah masih berada di satu komplek dengan Gedung Biosains, Gedung Layanan Bersama, dan Guest House. Masjid Raden Patah juga berdekatan dengan FTP dan Gedung Kebudayaan. Masjid ini dapat menampung hingga kurang lebih 5.000 orang dan sudah ramah terhadap penyandang disabilitas.",
	},
	{
		id: 24,
		nama: "UKM & EM",
		deskripsi:
			"UKM dan EM merupakan sebuah komplek bangunan yang terdiri dari Gedung EM UB dan Gedung UKM UB. Komplek bangunan ini berdekatan dengan Samanthakrida, Gedung Budaya, dan Rusunawa.",
	},
	{
		id: 25,
		nama: "POLIKNIK UB",
		deskripsi:
			"Poliklinik UB menjadi tempat yang memberikan pelayanan kesehatan bagi seluruh civitas akademika di Universitas Brawijaya dan juga masyarakat umum. Poliklinik UB terletak di Jalan MT Haryono satu komplek dengan Universitas Brawijaya. Poliklinik UB menerima layanan BPJS sejak tahun 2010 atas nama dokter perorangan dan telah di upgrade per 1 januari 2018 dengan status menjadi faskes tingkat pertama atas nama Klinik Universitas Brawijaya. Seiring dengan perkembangan tersebut, poliklinik UB merubah nama menjadi Klinik Universitas Brawijaya yang disingkat Klinik UB. Klinik UB memberikan berbagai jenis pelayanan mulai dari Poli Umum, Poli Gigi, Poli KIA (Kesehatan Ibu dan Anak), Poli Gizi, Farmasi, Laboratorium, hingga Rekam Medis.",
	},
	{
		id: 26,
		nama: "GUEST HOUSE UB",
		deskripsi:
			"UB Guest House merupakan salah satu unit usaha non akademik dari Universitas Brawijaya Malang yang secara operasional berada di bawah tanggung jawab rektorat. UB Guest House memiliki beberapa fasilitas yang dapat dinikmati oleh seluruh civitas akademika UB maupun masyarakat umum diantaranya adalah Coffee Shop atau Resto, penginapan setara hotel berbintang 3, dan meeting room dengan beberapa pilihan kuota. UB Guest House berada di Jalan MT Haryono sebelah Fakultas Ekonomi dan Bisni (FEB) dan masih satu lokasi dengan Universitas Brawijaya.",
	},
	{
		id: 27,
		nama: "GEDUNG BIOSAINS",
		deskripsi:
			"Gedung Biosains merupakan sebuah sarana pendukung kegiatan riset terpadu, pelatihan, pengujian dan pengembangan bahan dasar industri biologis berbasis Good Laboratory Practice (GLP) dan Good Manufacturing Practice (GMP) yang berada di bawah naungan Universitas Brawijaya. Seiring dengan kebutuhan dan perkembangan kegiatan di Laboratorium Biosains dan untuk memenuhi tuntutan dalam mewujudkan sinergi A-B-G-C (Academy-Business-Government-Community) maka pada September 2016, Laboratorium Biosains berubah nama menjadi Institut Biosains.",
	},
	{
		id: 28,
		nama: "GEDUNG LAYANAN BERSAMA",
		deskripsi:
			"Gedung Layanan Bersama merupakan gedung pusat kegiatan unit usaha kampus, seperti BUNA dan BUA, Gedung Pusat Jaminan Mutu, LPPM UB, dsb.",
	},
	{
		id: 29,
		nama: "RUSUNAWA",
		deskripsi:
			"Rumah susun sederhana sewa atau Rusunawa merupakan asrama yang disediakan oleh Universitas Brawijaya khususnya bagi mahasiswa putra. Gedung asrama Rusunawa memiliki 2 (dua) gedung khusus asrama Putra. Rusunawa A memiliki 42 kamar tidur sedangkan Rusunawa B memiliki 36 kamar tidur, setiap kamar memiliki tempat tidur, kasur, almari, meja, dan kursi belajar. Harga sewa yang diberikan tentunya dengan harga yang terjangkau dan setiap kamar maksimal diisi oleh 2 (dua) mahasiswa.",
	},
	{
		id: 30,
		nama: "GRIYA UB",
		deskripsi:
			"Griya UB merupakan asrama yang disediakan oleh Universitas Brawijaya khusus bagi mahasiswa putri. Gedung Griya Brawijaya terdiri dari 4 (empat) gedung asrama khusus mahasiswa putri. Gedung A memiliki 70 kamar tidur, Gedung B memiliki 60 kamar tidur, Gedung C memiliki 20 kamar tidur (khusus mahasiswa internasional), Gedung D memiliki 75 kamar tidur setiap kamar memiliki tempat tidur, kasur, almari, meja, dan kursi belajar. Harga sewa yang diberikan tentunya dengan harga yang terjangkau dan setiap kamar maksimal diisi oleh 2 (dua) mahasiswa.",
	},
	{
		id: 31,
		nama: "INBIS",
		deskripsi:
			"Gedung INBIS (Inkubator Bisnis) merupakan badan layanan yang memiliki tujuan untuk menciptakan dan meningkatkan jumlah wirausaha baru berbasis teknologi dan jasa profesional baik dari civitas akademik dan masyarakat umum.",
	},
	{
		id: 32,
		nama: "SPORT CLUB HOUSE PERTAMINA - UB",
		deskripsi:
			"Sport Club House Pertamina-UB atau yang sekarang disebut UB Sport Center merupakan hasil kerjasama antara PT. Pertamina (Persero) dengan Universitas Brawijaya dalam menyediakan fasilitas olahraga terlengkap di UB terletak di Jalan Terusan Cibogo No. 1 Kota Malang. Sport Club House Pertamina-UB merupakan sarana olahraga yang cocok digunakan oleh seluruh kalangan dilengkapi dengan berbagai fasilitas dan memberikan kenyamanan dalam berolahraga. Sport Club House Pertamina-UB memiliki 7 pilihan cabang olahraga, yaitu Fitness, Aerobik, Tenis Lapangan, Bulu Tangkis, Tenis Meja, dan Futsal yang dilengkapi ruangan loker untuk keamanan dan kenyamanan pengunjung dalam berolahraga.Selain itu, sebagai bentuk penunjang fasilitas bagi civitas akademika Universitas Brawijaya, UB Sport Center memberikan harga-harga khusus baik bagi mahasiswa, pegawai UB, dan masyarakat umum.",
	},
	{
		id: 33,
		nama: "KPRI",
		deskripsi:
			"Koperasi Pegawai Republik Indonesia Universitas Brawijaya (KPRI UB) merupakan sebuah koperasi yang didirikan khususnya bagi para pegawai terletak di Jalan MT. Haryono No. 169 di depan UB Coffee. KPRI UB sendiri memiliki toserba di yang menjual berbagai macam kebutuhan. Harga barang yang dijual cukup murah sehingga terjangkau oleh kantong serta barangnya yang lengkap sehingga konsumen pun senang. Selain itu, terdapat juga Kantin KPRI UB yang makanannya dijamin enak dan sesuai dengan kantong mahasiswa.",
	},
	{
		id: 34,
		nama: "RUMAH SAKIT GIGI DAN MULUT (RSGM)",
		deskripsi:
			"Rumah Sakit Gigi dan Mulut (RSGM) merupakan bangunan baru yang terletak satu komplek dengan Fakultas Kedokteran Gigi. Fasilitas yang tersedia tidak hanya fokus untuk pendidikan saja tetapi juga untuk pengobatan bagi masyarakat umum mulai dari UGD, rawat jalan, rawat inap, unit dental, dan bidang-bidang yang berhubungan dengan gigi dan mulut.",
	},
	{
		id: 35,
		nama: "SD, SMP, DAN SMA BSS",
		deskripsi:
			"BSS (Brawijaya Smart School) merupakan SD, SMP, SMA yang didirikan di bawah naungan naungan Universitas Brawijaya yang dipersiapkan untuk menjadi Sekolah Bertaraf Internasional bertekad untuk menghasilkan lulusan berkualitas internasional yang mampu bersaing dengan secara global.",
	},
];

export default dataMap;
