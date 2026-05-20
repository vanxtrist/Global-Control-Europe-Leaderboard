/*
 * ===========================
 *  GLOBAL CE LEADERBOARD DATA
 * ===========================
 *
 *  All player data lives here.
 *  Edit via admin.html or directly in this file.
 *  Ranks are auto-assigned based on array order & event wins.
 */

// ── EVENT WINS LEADERBOARD ──────────────────────────────
const eventData = [
  {
    name: "Mattie",
    robloxUser: "matiteo01",
    clan: "Valhalla",
    tier: "",
    eventWins: 38,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Bonekoko",
    robloxUser: "Wouidzy",
    clan: "Valhalla",
    tier: "",
    eventWins: 19,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Rotgel",
    robloxUser: "R0tgel",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 19,
    img: "assets/images/rotgel.jpg"
  },
  {
    name: "S29",
    robloxUser: "realspeccy",
    clan: "Valhalla",
    tier: "",
    eventWins: 16,
    img: "assets/images/s29.jpg"
  },
  {
    name: "Mvv",
    robloxUser: "aevvre",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 14,
    img: "assets/images/m.jpg"
  },
  {
    name: "Floppa",
    robloxUser: "dafforiol44",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 12,
    img: "assets/images/floppa.jpg"
  },
  {
    name: "Boris",
    robloxUser: "Forest_ivan",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 6,
    img: "assets/images/boris.jpg"
  },
  {
    name: "Enel",
    robloxUser: "XxEnelxxx",
    clan: "Valhalla",
    tier: "",
    eventWins: 5,
    img: "assets/images/enel.jpg"
  },
  {
    name: "Cevokud",
    robloxUser: "Cevokud",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 4,
    img: "assets/images/cevo.jpg"
  },
  {
    name: "Baba",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    tier: "",
    eventWins: 4,
    img: "assets/images/baba.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    tier: "",
    eventWins: 4,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    tier: "",
    eventWins: 3,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Raze",
    robloxUser: "gg_razegg",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 3,
    img: "assets/images/raze.jpg"
  },
  {
    name: "Rimu",
    robloxUser: "fhnrbnhrrb",
    clan: "Valhalla",
    tier: "",
    eventWins: 2,
    img: "assets/images/rimu.jpg"
  },
  {
    name: "Ananas",
    robloxUser: "Ananasparon",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 2,
    img: "assets/images/ananas.jpg"
  },
  {
    name: "Shadow",
    robloxUser: "powerface123455",
    clan: "Valhalla",
    tier: "",
    eventWins: 2,
    img: "assets/images/shadow.jpg"
  },
  {
    name: "Sigmar",
    robloxUser: "HAMUMUGts",
    clan: "Unknown",
    tier: "",
    eventWins: 2,
    img: "assets/images/sigmar.jpg"
  },
  {
    name: "Alexander",
    robloxUser: "jickezn",
    clan: "Rebellion",
    tier: "",
    eventWins: 2,
    img: "assets/images/alex.jpg"
  },
  {
    name: "Shuljo",
    robloxUser: "Pametansam",
    clan: "Rebellion",
    tier: "",
    eventWins: 2,
    img: "assets/images/shuljo.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "SGT_Saket",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/saket.jpg"
  },
  {
    name: "AnimeFlame",
    robloxUser: "canadalop",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 1,
    img: "assets/images/flame.jpg"
  },
  {
    name: "At_oom",
    robloxUser: "At_oom",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/at_oom.jpg"
  },
  {
    name: "AyzakFozterr",
    robloxUser: "SubZero_TV1",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/ayzak.jpg"
  },
  {
    name: "BondT",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Ducksareoverrated",
    robloxUser: "ducksareoverrated",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/ducksareoverrated.jpg"
  },
  {
    name: "Eleina",
    robloxUser: "Unknown",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/eleina.jpg"
  },
  {
    name: "Georgy",
    robloxUser: "asxxascccoo",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 1,
    img: "assets/images/georgy.jpg"
  },
  {
    name: "Honeydewloon",
    robloxUser: "honeydewloon",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/honey.jpg"
  },
  {
    name: "Loopy_33",
    robloxUser: "Loopy_33",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/loopy.jpg"
  },
  {
    name: "Mana",
    robloxUser: "Unknown",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/mana.jpg"
  },
  {
    name: "Nebula",
    robloxUser: "tymixz",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/nebula.jpg"
  },
  {
    name: "Nexus",
    robloxUser: "frostaken80",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/nexus.jpg"
  },
  {
    name: "Novarhia",
    robloxUser: "TTmobs1001",
    clan: "Unaffiliated",
    tier: "",
    eventWins: 1,
    img: "assets/images/nova.jpg"
  },
  {
    name: "Sai",
    robloxUser: "sai_zzzzzzz",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/sai.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "sinan061214",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/sinan.png"
  },
  {
    name: "Superman",
    robloxUser: "SuperManRZ",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/superman.jpg"
  },
  {
    name: "V4mp4t",
    robloxUser: "V4mp4t",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/vamp.jpg"
  },
  {
    name: "Whisper",
    robloxUser: "whisper055",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/whisper.jpg"
  },
  {
    name: "Zotvl",
    robloxUser: "Nimbus_98765432",
    clan: "Unknown",
    tier: "",
    eventWins: 1,
    img: "assets/images/zotvl.jpg"
  }
];

// ── 1v1 SKILL LEADERBOARD ──────────────────────────────
// Order = rank (first entry = #1, second = #2, etc.)
const skillData = [
  {
    name: "Shuljo",
    robloxUser: "Pametansam",
    clan: "Rebellion",
    tier: "LT5",
    eventWins: 2,
    img: "assets/images/shuljo.jpg"
  },
  {
    name: "M.",
    robloxUser: "aevvre",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 14,
    img: "assets/images/m.jpg"
  },
  {
    name: "Mattie",
    robloxUser: "matiteo01",
    clan: "Valhalla",
    tier: "",
    eventWins: 38,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Sai",
    robloxUser: "sai_zzzzzzz",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/sai.jpg"
  },
  {
    name: "Aion",
    robloxUser: "aion",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/aion.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    tier: "",
    eventWins: 3,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "SGT_Saket",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/pawani.jpg"
  },
  {
    name: "Changv",
    robloxUser: "tyduong",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/changv.jpg"
  },
  {
    name: "Bonekoko",
    robloxUser: "Wouidzy",
    clan: "Valhalla",
    tier: "",
    eventWins: 19,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Cevokud",
    robloxUser: "Cevokud",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 3,
    img: "assets/images/cevo.jpg"
  },
  {
    name: "Raze",
    robloxUser: "gg_razegg",
    clan: "Unaffiliated",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/raze.jpg"
  },
  {
    name: "Bondt",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    tier: "",
    eventWins: 2,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Rastaclat",
    robloxUser: "?",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/rasta.jpg"
  },
  {
    name: "Turn",
    robloxUser: "txrning_gxxd",
    clan: "Rebellion",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/turn.jpg"
  },
  {
    name: "Alexandar",
    robloxUser: "jickezn",
    clan: "Rebellion",
    tier: "",
    eventWins: 2,
    img: "assets/images/alex.jpg"
  },
  {
    name: "Infantrator",
    robloxUser: "cattohugedad",
    clan: "Rebellion",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/catto.jpg"
  },
  {
    name: "Ananasparon",
    robloxUser: "Ananasparon",
    clan: "Rebellion",
    tier: "",
    eventWins: 2,
    img: "assets/images/ananas.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "sinan061214",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/sinan.png"
  },
  {
    name: "Babatunde",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    tier: "",
    eventWins: 3,
    img: "assets/images/baba.jpg"
  }
];
// ── VALLHALLA LEADERBOARD ──────────────────────────────
const valhallaData = [
  {
    name: "M.",
    robloxUser: "aevvre",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/m.jpg"
  },
  {
    name: "Aion",
    robloxUser: "aion",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/aion.jpg"
  },
  {
    name: "Mattie",
    robloxUser: "matiteo01",
    clan: "Valhalla",
    tier: "",
    eventWins: 37,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "SGT_Saket",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/pawani.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Bondt",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    tier: "",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    tier: "",
    eventWins: 3,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Rastaclat",
    robloxUser: "?",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/rasta.jpg"
  },
  {
    name: "Real Flash",
    robloxUser: "Rel_Flash",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 1,
    img: "assets/images/realflash.jpg"
  },
  {
    name: "Babatunde",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    tier: "",
    eventWins: 4,
    img: "assets/images/baba.jpg"
  }
];

// ── TIERS ──────────────────────────────
const tiers = [
  {
    name: "Shuljo",
    robloxUser: "",
    clan: "Rebellion",
    tier: "LT1",
    eventWins: 0,
    img: "assets/images/shuljo.jpg"
  },
  {
    name: "M.",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT1",
    eventWins: 0,
    img: "assets/images/m.jpg"
  },
  {
    name: "Mattie",
    robloxUser: "undefined",
    clan: "Valhalla",
    tier: "HT2",
    eventWins: 0,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT2",
    eventWins: 0,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Aion",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT2",
    eventWins: 0,
    img: "assets/images/aion.jpg"
  },
  {
    name: "Sai",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT2",
    eventWins: 0,
    img: "assets/images/sai.jpg"
  },
  {
    name: "Bonekoko",
    robloxUser: "undefined",
    clan: "Valhalla",
    tier: "LT2",
    eventWins: 0,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Changv",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT2",
    eventWins: 0,
    img: "assets/images/changv.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT2",
    eventWins: 0,
    img: "assets/images/pawani.jpg"
  },
  {
    name: "Bondt",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT3",
    eventWins: 0,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Raze",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT3",
    eventWins: 0,
    img: "assets/images/raze.jpg"
  },
  {
    name: "Cevokud",
    robloxUser: "",
    clan: "Unaffiliated",
    tier: "HT3",
    eventWins: 0,
    img: "assets/images/cevo.jpg"
  },
  {
    name: "Poney",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT3",
    eventWins: 0,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Floppa",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT3",
    eventWins: 0,
    img: "assets/images/floppa.jpg"
  },
  {
    name: "Alexander",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT3",
    eventWins: 0,
    img: "assets/images/alex.jpg"
  },
  {
    name: "Ananas",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT3",
    eventWins: 0,
    img: "assets/images/ananas.jpg"
  },
  {
    name: "Rastaclat",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT3",
    eventWins: 0,
    img: "assets/images/rasta.jpg"
  },
  {
    name: "Turn",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/turn.jpg"
  },
  {
    name: "Enel",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/enel.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/sinan.png"
  },
  {
    name: "Catto",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/catto.jpg"
  },
  {
    name: "Babatunde",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/baba.jpg"
  },
  {
    name: "Exify",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/primeandrew.jpg"
  },
  {
    name: "Real Flash",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/realflash.jpg"
  },
  {
    name: "S29",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT4",
    eventWins: 0,
    img: "assets/images/s29.jpg"
  },
  {
    name: "Imesium",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT4",
    eventWins: 0,
    img: "assets/images/imesium.jpg"
  },
  {
    name: "Boris",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT4",
    eventWins: 0,
    img: "assets/images/boris.jpg"
  },
  {
    name: "Shadow",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT4",
    eventWins: 0,
    img: "assets/images/shadow.jpg"
  },
  {
    name: "Vini",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT4",
    eventWins: 0,
    img: "assets/images/vini.jpg"
  },
  {
    name: "Jayden",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT4",
    eventWins: 0,
    img: "assets/images/realflash.jpg"
  },
  {
    name: "Fshy",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/fshy.jpg"
  },
  {
    name: "Nav",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/nav.jpg"
  },
  {
    name: "Nexus",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/nexus.jpg"
  },
  {
    name: "Aydan",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/aydan.jpg"
  },
  {
    name: "Rimu",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/rimu.jpg"
  },
  {
    name: "Mira",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/mira.jpg"
  },
  {
    name: "Zane",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/zane.jpg"
  },
  {
    name: "Rotgel",
    robloxUser: "",
    clan: "Valhalla",
    tier: "HT5",
    eventWins: 0,
    img: "assets/images/rotgel.jpg"
  },
  {
    name: "Heavy",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/heavy.jpg"
  },
  {
    name: "Nebula",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/nebula.jpg"
  },
  {
    name: "Chama",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/chama.jpg"
  },
  {
    name: "Xscape",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/xscape.jpg"
  },
  {
    name: "Hudii",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/hudii.jpg"
  },
  {
    name: "Olinkian",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/olink.jpg"
  },
  {
    name: "Raga",
    robloxUser: "",
    clan: "Valhalla",
    tier: "LT5",
    eventWins: 0,
    img: "assets/images/raga.jpg"
  }
];

