var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer:"merve sezer",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyaş AVM",
        puan: "2",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
      {
        ad: "Pidem",
        adres: "Iyaş AVM",
        puan: "9",
        imkanlar: ["pide", "künefe", "içecek"],
        mesafe: "5km",
      },
      {
        ad: "Burger King",
        adres: "Iyaş AVM",
        puan: "7",
        imkanlar: ["hamburger", "içecek"],
        mesafe: "5km",
      },
      {
        ad: "B&B Burger",
        adres: "Iyaş AVM Yanı",
        puan: "10",
        imkanlar: ["hamburger", "pizza", "içecek"],
        mesafe: "10km",
      },

    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer:"merve sezer",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Merve Sezer",
          puan: "3",
          tarih: "1 Aralık 2020",
          yorumMetni: "Kahveleri Çok Pahalı",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
