// Bilingual content dictionary. Values are strings or JSX fragments.
export const T = {
  en: {
    nav: { about: 'About', skills: 'Skills', work: 'Work', experience: 'Experience', cta: "Let's talk" },
    hero: {
      avail: 'Open to work',
      stack: 'Flutter · Laravel · React',
      subRole: 'Mobile Developer',
      desc: (
        <>
          I build <em>cross-platform mobile apps</em> with Flutter, backed by the{' '}
          <em>web dashboards &amp; Laravel APIs</em> behind them. Informatics student at
          UPN &quot;Veteran&quot; Jawa Timur — shipping complete products end to end.
        </>
      ),
      btnWork: 'See my work',
      nowLabel: 'Now',
      nowText: (
        <>
          <strong>1st-year Informatics</strong> @ UPN &quot;Veteran&quot; Jawa Timur —
          building Flutter &amp; Laravel products on the side.
        </>
      ),
      repos: 'Repos', followers: 'Followers', yrs: 'Yrs Coding',
    },
    about: {
      eye: 'About me', titlePre: 'Building apps people ', grad: 'love using',
      p1: (
        <>
          Hi, I&apos;m <strong>Naufal Dwi Arifianto</strong> — a Fullstack &amp; Mobile
          Developer from Indonesia who builds complete products, from the{' '}
          <strong>Flutter app in your hand</strong> to the{' '}
          <strong>Laravel API and React dashboard</strong> behind it.
        </>
      ),
      p2: (
        <>
          My core is <strong>Flutter &amp; Dart</strong> — smooth animations, custom
          widgets, clean UI and architecture. On the backend I use <strong>Laravel</strong>,{' '}
          <strong>REST APIs</strong>, and <strong>Firebase / Supabase</strong> as the project needs.
        </>
      ),
      p3: (
        <>
          I graduated from <strong>SMKN 1 Pasuruan</strong> (Software Engineering) and
          interned at <strong>PT Humma Teknologi Indonesia</strong> as a Mobile Developer,
          shipping real client apps in an agile team. I&apos;m now a first-year{' '}
          <strong>Informatics</strong> student at <strong>UPN &quot;Veteran&quot; Jawa Timur</strong>.
        </>
      ),
      info: {
        location: ['Location', 'Indonesia'],
        status: ['Status', '🟢 Open to work'],
        education: ['Education', 'Informatics · UPNVJT (freshman)'],
        mobile: ['Mobile', 'Flutter · Dart'],
        backend: ['Backend & Web', 'Laravel · React · Supabase'],
        whatsapp: ['WhatsApp', '+62 822-4408-9648'],
        instagram: ['Instagram', '@pallarfnt_'],
      },
    },
    skills: {
      eye: 'Tech Stack', title: 'What I work with',
      sub: 'A focused stack built around shipping mobile experiences that feel native and backends that scale.',
    },
    projectsSec: {
      eye: 'More on GitHub', titlePre: 'Fresh from my ', grad: 'repositories',
      sub: 'Pulled live from the GitHub API — updated the moment I push.',
      loading: 'Fetching from GitHub…',
      errPre: "Couldn't load repos right now. Visit ", errPost: ' directly.',
      allRepos: 'All Repos ↗', noDesc: 'No description.',
    },
    work: {
      eye: 'Selected Work', titlePre: "Projects I'm ", grad: 'proud of',
      sub: 'End-to-end products I designed and shipped — each spanning mobile, web, and backend. Real code, not mockups.',
      kind: { demo: 'Live Demo', mobile: 'Mobile App', web: 'Web', api: 'Backend API' },
      projects: {
        gerai: {
          tag: 'Flagship', status: 'Completed', tagline: 'Multi-Vendor Booking Platform',
          desc: 'A complete, production-ready service-booking ecosystem — customers book vendors, vendors manage their storefront, admins oversee everything. Three connected products on one Laravel API: slot locking, a booking state machine, and Midtrans/Xendit payments.',
        },
        velvoria: {
          tag: 'Marketplace · 2026', status: 'In Progress', tagline: 'Premium Luxury Marketplace',
          desc: 'A premium multi-vendor luxury marketplace with 20+ polished screens, clean architecture and Riverpod — live shopping, AR try-on concepts, and a full admin dashboard.',
        },
        batik: {
          tag: 'SME Marketplace · 2026', status: 'In Progress', tagline: 'Batik Marketplace for Pasuruan SMEs',
          desc: 'A marketplace bringing local Pasuruan batik SMEs online — product catalog, orders, and vendor management across mobile, web, and a Laravel API.',
        },
        quizyfy: {
          tag: 'EdTech · 2026', status: 'In Progress', tagline: 'Online Examination Platform',
          desc: 'An online exam platform with real-time scoring, a question bank, analytics, and role-based access. Full Figma design across web, tablet & mobile — the mobile app and Laravel backend are live, web is next. A solo continuation of an exam app I first prototyped during my internship.',
        },
      },
    },
    experience: {
      eye: 'Career', title: (<>Experience &amp;<br />Education</>),
      timeline: [
        { date: '2026 — Present', role: 'Informatics Student', company: 'UPN "Veteran" Jawa Timur', badge: 'Freshman',
          body: 'Admitted via SNBP to the Informatics program. Waiting for orientation (Aug 17, 2026) while continuing to build Flutter & Laravel projects.' },
        { date: 'Jul – Dec 2025', role: 'Mobile Developer Intern', company: 'PT Humma Teknologi Indonesia (Hummatech)', badge: 'Internship',
          body: 'A 6-month internship building Flutter apps for real clients — I shipped 4 client projects and led a project division. Two apps went live on the Play Store under Mijurnal: "Jurnal Siswa" and "Jurnal Mengajar".' },
        { date: '2023 — 2026', role: 'Software Engineering (RPL)', company: 'SMKN 1 Pasuruan', badge: 'Vocational',
          body: 'Grew from programming basics (C++, databases) into mobile, web & Laravel — plus UI design in Figma and REST API integration — becoming a fullstack developer by my final-year project.' },
      ],
      edu: [
        { ico: '🎓', name: 'UPN "Veteran" Jawa Timur', meta: 'Informatics · Freshman · 2026', tag: 'Current Education' },
        { ico: '🏫', name: 'SMKN 1 Pasuruan', meta: 'Software Engineering (RPL) · Graduated 2026', tag: 'Alumni' },
        { ico: '🏢', name: 'PT Humma Teknologi Indonesia', meta: 'Mobile Developer Intern · 2025', tag: 'Industry Experience' },
        { ico: '🚀', name: 'Mijurnal — Play Store', meta: 'Jurnal Siswa & Jurnal Mengajar · Released', tag: 'Shipped' },
      ],
    },
    contact: {
      eye: 'Contact',
      cq: (<>Have a project?<br />Let&apos;s <span>build it</span><br />together.</>),
      sub: 'Open to freelance, internship, part-time, and full-time. I reply fast — reach out anytime.',
    },
    footer: {
      copyright: '© 2026 Naufal Dwi Arifianto · Fullstack & Mobile Developer · Indonesia',
      built: 'Designed & built with React 📱',
    },
  },

  id: {
    nav: { about: 'Tentang', skills: 'Skill', work: 'Karya', experience: 'Pengalaman', cta: 'Hubungi' },
    hero: {
      avail: 'Terbuka untuk kerja',
      stack: 'Flutter · Laravel · React',
      subRole: 'Mobile Developer',
      desc: (
        <>
          Saya membangun <em>aplikasi mobile lintas platform</em> dengan Flutter, lengkap
          dengan <em>dashboard web &amp; API Laravel</em> di baliknya. Mahasiswa Informatika
          UPN &quot;Veteran&quot; Jawa Timur — membangun produk utuh dari hulu ke hilir.
        </>
      ),
      btnWork: 'Lihat Karya',
      nowLabel: 'Sekarang',
      nowText: (
        <>
          <strong>Maba Informatika</strong> @ UPN &quot;Veteran&quot; Jawa Timur — sambil
          terus bikin produk Flutter &amp; Laravel.
        </>
      ),
      repos: 'Repo', followers: 'Pengikut', yrs: 'Thn Ngoding',
    },
    about: {
      eye: 'Tentang saya', titlePre: 'Membangun aplikasi yang ', grad: 'disukai orang',
      p1: (
        <>
          Halo, saya <strong>Naufal Dwi Arifianto</strong> — Fullstack &amp; Mobile Developer
          dari Indonesia yang membangun produk utuh, dari{' '}
          <strong>aplikasi Flutter di tanganmu</strong> sampai{' '}
          <strong>API Laravel &amp; dashboard React</strong> di baliknya.
        </>
      ),
      p2: (
        <>
          Fokus utama saya <strong>Flutter &amp; Dart</strong> — animasi mulus, widget
          custom, UI &amp; arsitektur rapi. Di backend saya pakai <strong>Laravel</strong>,{' '}
          <strong>REST API</strong>, dan <strong>Firebase / Supabase</strong> sesuai kebutuhan.
        </>
      ),
      p3: (
        <>
          Saya lulusan <strong>SMKN 1 Pasuruan</strong> (RPL) dan pernah magang di{' '}
          <strong>PT Humma Teknologi Indonesia</strong> sebagai Mobile Developer,
          mengerjakan aplikasi klien nyata di tim agile. Sekarang saya maba{' '}
          <strong>Informatika</strong> di <strong>UPN &quot;Veteran&quot; Jawa Timur</strong>.
        </>
      ),
      info: {
        location: ['Lokasi', 'Indonesia'],
        status: ['Status', '🟢 Terbuka untuk kerja'],
        education: ['Pendidikan', 'Informatika · UPNVJT (maba)'],
        mobile: ['Mobile', 'Flutter · Dart'],
        backend: ['Backend & Web', 'Laravel · React · Supabase'],
        whatsapp: ['WhatsApp', '+62 822-4408-9648'],
        instagram: ['Instagram', '@pallarfnt_'],
      },
    },
    skills: {
      eye: 'Tech Stack', title: 'Yang saya pakai',
      sub: 'Stack terfokus untuk membangun pengalaman mobile yang terasa native dan backend yang scalable.',
    },
    projectsSec: {
      eye: 'Lebih di GitHub', titlePre: 'Langsung dari ', grad: 'repositori',
      sub: 'Diambil live dari GitHub API — update begitu saya push.',
      loading: 'Mengambil dari GitHub…',
      errPre: 'Gagal memuat repo sekarang. Kunjungi ', errPost: ' langsung.',
      allRepos: 'Semua Repo ↗', noDesc: 'Tanpa deskripsi.',
    },
    work: {
      eye: 'Karya Pilihan', titlePre: 'Project yang saya ', grad: 'banggakan',
      sub: 'Produk end-to-end yang saya desain dan kirim — mencakup mobile, web, dan backend. Kode asli, bukan mockup.',
      kind: { demo: 'Demo Live', mobile: 'Aplikasi Mobile', web: 'Web', api: 'Backend API' },
      projects: {
        gerai: {
          tag: 'Unggulan', status: 'Selesai', tagline: 'Platform Booking Multi-Vendor',
          desc: 'Ekosistem booking jasa yang lengkap & siap produksi — pelanggan pesan vendor, vendor kelola toko, admin awasi semua. Tiga produk terhubung di satu API Laravel: slot locking, state machine booking, dan pembayaran Midtrans/Xendit.',
        },
        velvoria: {
          tag: 'Marketplace · 2026', status: 'Dikerjakan', tagline: 'Marketplace Mewah Premium',
          desc: 'Marketplace mewah multi-vendor dengan 20+ layar rapi, clean architecture & Riverpod — live shopping, konsep AR try-on, dan dashboard admin lengkap.',
        },
        batik: {
          tag: 'Marketplace UMKM · 2026', status: 'Dikerjakan', tagline: 'Marketplace Batik UMKM Pasuruan',
          desc: 'Marketplace yang mengangkat UMKM batik Pasuruan ke online — katalog produk, pesanan, dan manajemen vendor lintas mobile, web, dan API Laravel.',
        },
        quizyfy: {
          tag: 'EdTech · 2026', status: 'Dikerjakan', tagline: 'Platform Ujian Online',
          desc: 'Platform ujian online dengan skoring real-time, bank soal, analitik, dan akses berbasis peran. Desain Figma lengkap untuk web, tablet & mobile — aplikasi mobile dan backend Laravel sudah jalan, web menyusul. Lanjutan solo dari aplikasi ujian yang saya rancang saat magang.',
        },
      },
    },
    experience: {
      eye: 'Karier', title: (<>Pengalaman &amp;<br />Pendidikan</>),
      timeline: [
        { date: '2026 — Sekarang', role: 'Mahasiswa Informatika', company: 'UPN "Veteran" Jawa Timur', badge: 'Maba',
          body: 'Lolos SNBP dan diterima di prodi Informatika. Menunggu ospek/PKKMB (17 Agustus 2026) sambil terus membangun project Flutter & Laravel.' },
        { date: 'Jul – Des 2025', role: 'Magang Mobile Developer', company: 'PT Humma Teknologi Indonesia (Hummatech)', badge: 'Magang',
          body: 'Magang 6 bulan bikin aplikasi Flutter untuk klien nyata — mengerjakan 4 project klien dan pernah jadi lead divisi. Dua aplikasi rilis di Play Store lewat Mijurnal: "Jurnal Siswa" dan "Jurnal Mengajar".' },
        { date: '2023 — 2026', role: 'Rekayasa Perangkat Lunak (RPL)', company: 'SMKN 1 Pasuruan', badge: 'SMK',
          body: 'Berkembang dari dasar pemrograman (C++, database) ke mobile, web & Laravel — plus desain UI di Figma dan integrasi REST API — sampai jadi fullstack developer di project akhir kelas 3.' },
      ],
      edu: [
        { ico: '🎓', name: 'UPN "Veteran" Jawa Timur', meta: 'Informatika · Maba · 2026', tag: 'Pendidikan Sekarang' },
        { ico: '🏫', name: 'SMKN 1 Pasuruan', meta: 'RPL · Lulus 2026', tag: 'Alumni' },
        { ico: '🏢', name: 'PT Humma Teknologi Indonesia', meta: 'Magang Mobile Developer · 2025', tag: 'Pengalaman Industri' },
        { ico: '🚀', name: 'Mijurnal — Play Store', meta: 'Jurnal Siswa & Jurnal Mengajar · Rilis', tag: 'Sudah Rilis' },
      ],
    },
    contact: {
      eye: 'Kontak',
      cq: (<>Punya project?<br />Ayo <span>bangun</span><br />bareng.</>),
      sub: 'Terbuka untuk freelance, magang, part-time, dan full-time. Saya balas cepat — hubungi kapan aja.',
    },
    footer: {
      copyright: '© 2026 Naufal Dwi Arifianto · Fullstack & Mobile Developer · Indonesia',
      built: 'Didesain & dibangun dengan React 📱',
    },
  },
};
