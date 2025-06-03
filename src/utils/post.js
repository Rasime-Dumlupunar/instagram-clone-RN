const postData = [
  {
    id: 1,
    description:
      'Bugün uzun bir yürüyüş yaptım, doğanın sesiyle sakinleştim. Kuş sesleri ve temiz hava tüm stresimi aldı.',
    date: '2024-06-01 09:30',
    likes: 120,
    commenta: 45,
    image: 'https://picsum.photos/1080/601',
    user: {
      name: 'Rasime Çetin',
      avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    },
  },
  {
    id: 2,
    description:
      'Kahvemi alıp balkona çıktım. Gökyüzü masmaviydi, güneş içimi ısıttı. Hayatın tadını çıkarmayı unutmamalı insan.',
    date: '2024-06-02 11:20',
    likes: 98,
    commenta: 32,
    image: 'https://picsum.photos/1080/602',
    user: {
      name: 'Mert Yıldız',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
  },
  {
    id: 3,
    description:
      'Bugün kitap okumaya doyamadım. Sayfalar arasında kaybolmak gibisi yok. Yeni bilgiler öğrenmek ruhuma iyi geldi.',
    date: '2024-06-03 15:00',
    likes: 75,
    commenta: 28,
    image: 'https://picsum.photos/1080/603',
    user: {
      name: 'Elif Demir',
      avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
  },
  {
    id: 4,
    description:
      'Arkadaşlarımla güzel bir piknik yaptık. Kahkahalar, sohbetler ve nefis yemekler... Unutulmaz bir gündü gerçekten.',
    date: '2024-06-04 08:45',
    likes: 134,
    commenta: 40,
    image: 'https://picsum.photos/1080/604',
    user: {
      name: 'Baran Aydın',
      avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
  },
  {
    id: 5,
    description:
      'Sabah erkenden uyanıp spor yaptım. Enerjim tavan yaptı. Gün boyunca çok daha zinde ve odaklı hissettim kendimi.',
    date: '2024-06-05 18:10',
    likes: 110,
    commenta: 27,
    image: 'https://picsum.photos/1080/605',
    user: {
      name: 'Zeynep Kurt',
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
  },
  {
    id: 6,
    description:
      'Deniz kenarında yürüyüş yapmak gibisi yok. Dalgaların sesi ve rüzgarın serinliği insanı bambaşka bir moda sokuyor.',
    date: '2024-06-06 13:30',
    likes: 152,
    commenta: 39,
    image: 'https://picsum.photos/1080/606',
    user: {
      name: 'Selin Arslan',
      avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
    },
  },
  {
    id: 7,
    description:
      'Yeni tarifler denemeyi çok seviyorum. Bugün harika bir kek yaptım. Ailem tadına bayıldı, tarif artık favorim oldu.',
    date: '2024-06-07 19:00',
    likes: 89,
    commenta: 22,
    image: 'https://picsum.photos/1080/607',
    user: {
      name: 'Emre Koç',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
  },
  {
    id: 8,
    description:
      'Gün batımını izlemek beni her zaman duygulandırıyor. Gökyüzünün renkleri insanı büyülüyor, huzur veriyor gerçekten.',
    date: '2024-06-08 20:10',
    likes: 167,
    commenta: 48,
    image: 'https://picsum.photos/1080/608',
    user: {
      name: 'Merve Yılmaz',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
  },
  {
    id: 9,
    description:
      'Bugün uzun zamandır görüşmediğim bir dostumla buluştum. Sohbet etmek, eski günleri hatırlamak çok iyi geldi bana.',
    date: '2024-06-09 10:15',
    likes: 145,
    commenta: 36,
    image: 'https://picsum.photos/1080/609',
    user: {
      name: 'Ahmet Şahin',
      avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
    },
  },
  {
    id: 10,
    description:
      'Sessiz bir köşede oturup sadece etrafı izlemek, düşüncelere dalmak bazen ihtiyacım olan tek şey olabiliyor gerçekten.',
    date: '2024-06-10 17:00',
    likes: 102,
    commenta: 24,
    image: 'https://picsum.photos/1080/610',
    user: {
      name: 'Fatma Güneş',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
  },
  {
    id: 11,
    description:
      'Hayat küçük anlarla güzel. Bir gülümseme, samimi bir söz ya da içten bir bakış bile günümü aydınlatabiliyor bazen.',
    date: '2024-06-11 12:30',
    likes: 78,
    commenta: 19,
    image: 'https://picsum.photos/1080/611',
    user: {
      name: 'İsmail Korkmaz',
      avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
  },
  {
    id: 12,
    description:
      'Bugün yağmur yağdı. Cam kenarında oturup kahvemi yudumladım. Yağmurun sesi ruhuma iyi geldi, huzur verdi bana.',
    date: '2024-06-12 14:40',
    likes: 132,
    commenta: 29,
    image: 'https://picsum.photos/1080/612',
    user: {
      name: 'Melis Tüfekçi',
      avatar: 'https://randomuser.me/api/portraits/women/31.jpg',
    },
  },
  {
    id: 13,
    description:
      'Yeni projeme başladım, oldukça heyecanlıyım. İlk adımlar her zaman zor olur ama motivasyonum tam, inancım yüksek.',
    date: '2024-06-13 08:00',
    likes: 99,
    commenta: 21,
    image: 'https://picsum.photos/1080/613',
    user: {
      name: 'Hakan Ateş',
      avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
    },
  },
  {
    id: 14,
    description:
      'Bugün pazara çıktım, taze meyve ve sebzeler aldım. Sağlıklı beslenmek için bu alışverişleri yapmayı seviyorum çok.',
    date: '2024-06-14 10:10',
    likes: 124,
    commenta: 33,
    image: 'https://picsum.photos/1080/614',
    user: {
      name: 'Derya Soylu',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
  },
  {
    id: 15,
    description:
      'Film gecesi yaptık! Mısırlarımızı patlattık, battaniyeye sarıldık. Ailecek böyle vakit geçirmek çok değerli bizim için.',
    date: '2024-06-15 16:20',
    likes: 163,
    commenta: 42,
    image: 'https://picsum.photos/1080/615',
    user: {
      name: 'Uğur Kaplan',
      avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
    },
  },
  {
    id: 16,
    description:
      'Bugün annemle mutfağa girdik. Onun tariflerinden birini denedim. Hem eğlendik hem lezzetli bir yemek ortaya çıktı.',
    date: '2024-06-16 13:45',
    likes: 87,
    commenta: 26,
    image: 'https://picsum.photos/1080/616',
    user: {
      name: 'Aylin Kılıç',
      avatar: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
  },
  {
    id: 17,
    description:
      'Kütüphaneye uğradım, birkaç kitap aldım. Okumayı ne kadar özlediğimi fark ettim. Sessizlik içinde kayboldum resmen.',
    date: '2024-06-17 09:50',
    likes: 115,
    commenta: 30,
    image: 'https://picsum.photos/1080/617',
    user: {
      name: 'Kerem Dinç',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    },
  },
  {
    id: 18,
    description:
      'Bugün kendime zaman ayırdım. Telefonu kapattım, sosyal medyadan uzaklaştım. Ruhuma iyi geldi, biraz yalnızlık şart.',
    date: '2024-06-18 11:30',
    likes: 143,
    commenta: 37,
    image: 'https://picsum.photos/1080/618',
    user: {
      name: 'Sibel Eryılmaz',
      avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
    },
  },
  {
    id: 19,
    description:
      'Sabah koşusu yaptım. Ayakkabılarımı giyip müzikle birlikte yola çıktım. Hava serindi ama enerjim harikaydı bugün.',
    date: '2024-06-19 07:15',
    likes: 121,
    commenta: 33,
    image: 'https://picsum.photos/1080/619',
    user: {
      name: 'Orhan Bayraktar',
      avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  },
  {
    id: 20,
    description:
      'Bugün resim yaptım. Boyalarla oynamak içimdeki çocuğu ortaya çıkardı. Renklerle ruhumu ifade etmek çok güzeldi.',
    date: '2024-06-20 14:55',
    likes: 97,
    commenta: 25,
    image: 'https://picsum.photos/1080/620',
    user: {
      name: 'Nisa Elmas',
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
  },
];
export default postData;
