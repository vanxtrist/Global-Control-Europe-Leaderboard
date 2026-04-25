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
    eventWins: 37,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Bonekoko",
    robloxUser: "Wouidzy",
    clan: "Valhalla",
    eventWins: 19,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Rotgel",
    robloxUser: "R0tgel",
    clan: "Unaffiliated",
    eventWins: 19,
    img: "assets/images/rotgel.jpg"
  },
  {
    name: "S29",
    robloxUser: "realspeccy",
    clan: "Valhalla",
    eventWins: 16,
    img: "assets/images/s29.jpg"
  },
  {
    name: "Mvv",
    robloxUser: "aevvre",
    clan: "Valhalla",
    eventWins: 14,
    img: "assets/images/m.jpg"
  },
  {
    name: "Floppa",
    robloxUser: "dafforiol44",
    clan: "Unaffiliated",
    eventWins: 12,
    img: "assets/images/floppa.jpg"
  },
  {
    name: "Boris",
    robloxUser: "Forest_ivan",
    clan: "Unaffiliated",
    eventWins: 6,
    img: "assets/images/boris.jpg"
  },
  {
    name: "Enel",
    robloxUser: "XxEnelxxx",
    clan: "Valhalla",
    eventWins: 5,
    img: "assets/images/enel.jpg"
  },
  {
    name: "Cevokud",
    robloxUser: "Cevokud",
    clan: "RoS",
    eventWins: 4,
    img: "assets/images/cevo.jpg"
  },
  {
    name: "Baba",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    eventWins: 4,
    img: "assets/images/baba.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    eventWins: 4,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    eventWins: 3,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Raze",
    robloxUser: "gg_razegg",
    clan: "RoS",
    eventWins: 3,
    img: "assets/images/raze.jpg"
  },
  {
    name: "Rimu",
    robloxUser: "fhnrbnhrrb",
    clan: "Valhalla",
    eventWins: 2,
    img: "assets/images/rimu.jpg"
  },
  {
    name: "Ananas",
    robloxUser: "Ananasparon",
    clan: "RoS",
    eventWins: 2,
    img: "assets/images/ananas.jpg"
  },
  {
    name: "Shadow",
    robloxUser: "powerface123455",
    clan: "Valhalla",
    eventWins: 2,
    img: "assets/images/shadow.jpg"
  },
  {
    name: "Sigmar",
    robloxUser: "HAMUMUGts",
    clan: "Unknown",
    eventWins: 2,
    img: "assets/images/sigmar.jpg"
  },
  {
    name: "Alexander",
    robloxUser: "jickezn",
    clan: "RoS",
    eventWins: 2,
    img: "assets/images/alex.jpg"
  },
  {
    name: "Shuljo",
    robloxUser: "Pametansam",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/shuljo.jpg"
  },
  {
    name: "AnimeFlame",
    robloxUser: "canadalop",
    clan: "Unaffiliated",
    eventWins: 1,
    img: "assets/images/flame.jpg"
  },
  {
    name: "At_oom",
    robloxUser: "At_oom",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/at_oom.jpg"
  },
  {
    name: "AyzakFozterr",
    robloxUser: "SubZero_TV1",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/ayzak.jpg"
  },
  {
    name: "BondT",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Ducksareoverrated",
    robloxUser: "ducksareoverrated",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/ducksareoverrated.jpg"
  },
  {
    name: "Eleina",
    robloxUser: "Unknown",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/eleina.jpg"
  },
  {
    name: "Georgy",
    robloxUser: "asxxascccoo",
    clan: "Unaffiliated",
    eventWins: 1,
    img: "assets/images/georgy.jpg"
  },
  {
    name: "Honeydewloon",
    robloxUser: "honeydewloon",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/honey.jpg"
  },
  {
    name: "Loopy_33",
    robloxUser: "Loopy_33",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/loopy.jpg"
  },
  {
    name: "Mana",
    robloxUser: "Unknown",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/mana.jpg"
  },
  {
    name: "Nebula",
    robloxUser: "tymixz",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/nebula.jpg"
  },
  {
    name: "Nexus",
    robloxUser: "frostaken80",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/nexus.jpg"
  },
  {
    name: "Novarhia",
    robloxUser: "TTmobs1001",
    clan: "Unaffiliated",
    eventWins: 1,
    img: "assets/images/nova.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "SGT_Saket",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/saket.jpg"
  },
  {
    name: "Sai",
    robloxUser: "sai_zzzzzzz",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/sai.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "sinan061214",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/sinan.png"
  },
  {
    name: "Superman",
    robloxUser: "SuperManRZ",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/superman.jpg"
  },
  {
    name: "V4mp4t",
    robloxUser: "V4mp4t",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/vamp.jpg"
  },
  {
    name: "Whisper",
    robloxUser: "whisper055",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/whisper.jpg"
  },
  {
    name: "Zotvl",
    robloxUser: "Nimbus_98765432",
    clan: "Unknown",
    eventWins: 1,
    img: "assets/images/zotvl.jpg"
  }
];

// ── 1v1 SKILL LEADERBOARD ──────────────────────────────
// Order = rank (first entry = #1, second = #2, etc.)
const skillData = [
  {
    name: "Mattie",
    robloxUser: "matiteo01",
    clan: "Valhalla",
    eventWins: 37,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Bonekoko",
    robloxUser: "Wouidzy",
    clan: "Valhalla",
    eventWins: 19,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Shuljo",
    robloxUser: "Pametansam",
    clan: "Rebellion",
    eventWins: 1,
    img: "assets/images/shuljo.jpg"
  },
  {
    name: "Cevokud",
    robloxUser: "Cevokud",
    clan: "RoS",
    eventWins: 3,
    img: "assets/images/cevo.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    eventWins: 3,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Aion",
    robloxUser: "aion",
    clan: "RoS",
    eventWins: 0,
    img: "assets/images/aion.jpg"
  },
  {
    name: "Pawani",
    robloxUser: "SGT_Saket",
    clan: "Valhalla",
    eventWins: 0,
    img: "assets/images/saket.jpg"
  },
  {
    name: "Turn",
    robloxUser: "txrning_gxxd",
    clan: "Unaffiliated",
    eventWins: 0,
    img: "assets/images/turn.jpg"
  },
  {
    name: "Sai",
    robloxUser: "sai_zzzzzzz",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/sai.jpg"
  },
  {
    name: "Bondt",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    eventWins: 2,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Babatunde",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    eventWins: 3,
    img: "assets/images/baba.jpg"
  },
  {
    name: "Ananasparon",
    robloxUser: "Ananasparon",
    clan: "Rebellion",
    eventWins: 2,
    img: "assets/images/ananas.jpg"
  },
  {
    name: "Alexandar",
    robloxUser: "jickezn",
    clan: "Rebellion",
    eventWins: 2,
    img: "assets/images/alex.jpg"
  },
  {
    name: "Rotgel",
    robloxUser: "R0TGEL",
    clan: "Unaffiliated",
    eventWins: 19,
    img: "assets/images/rotgel.jpg"
  },
  {
    name: "RastaClat",
    robloxUser: "rastaclat",
    clan: "RoS",
    eventWins: 0,
    img: "assets/images/rasta.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "sinan061214",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/sinan.png"
  },
  {
    name: "Nebula",
    robloxUser: "tymixz",
    clan: "RoS",
    eventWins: 1,
    img: "assets/images/nebula.jpg"
  },
  {
    name: "Aydan",
    robloxUser: "aydanbestrivals",
    clan: "Valhalla",
    eventWins: 0,
    img: "assets/images/aydan.jpg"
  },
  {
    name: "Nav",
    robloxUser: "Yaqoob273",
    clan: "Rebellion",
    eventWins: 0,
    img: "assets/images/nav.jpg"
  }
];
// ── VALLHALLA LEADERBOARD ──────────────────────────────
const valhallaData = [
  {
    name: "Bonekoko",
    robloxUser: "Wouidzy",
    clan: "Valhalla",
    eventWins: 19,
    img: "assets/images/bonekoko.jpg"
  },
  {
    name: "Mattie",
    robloxUser: "matiteo01",
    clan: "Valhalla",
    eventWins: 37,
    img: "assets/images/mattie.jpg"
  },
  {
    name: "Bondt",
    robloxUser: "lucky_jaguar668",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/bondt.jpg"
  },
  {
    name: "Ryaan",
    robloxUser: "supermanzzxz3",
    clan: "Valhalla",
    eventWins: 3,
    img: "assets/images/ryaan.jpg"
  },
  {
    name: "Poney",
    robloxUser: "Poneysw",
    clan: "Valhalla",
    eventWins: 3,
    img: "assets/images/poney.jpg"
  },
  {
    name: "Babatunde",
    robloxUser: "121111deasd",
    clan: "Valhalla",
    eventWins: 4,
    img: "assets/images/baba.jpg"
  },
  {
    name: "Turn",
    robloxUser: "txrning_gxxd",
    clan: "Valhalla",
    eventWins: 0,
    img: "assets/images/turn.jpg"
  },
  {
    name: "Shadow",
    robloxUser: "powerface123455",
    clan: "Valhalla",
    eventWins: 2,
    img: "assets/images/shadow.jpg"
  },
  {
    name: "Rimu",
    robloxUser: "fhnrbnhrrb",
    clan: "Valhalla",
    eventWins: 2,
    img: "assets/images/rimu.jpg"
  },
  {
    name: "Sinan",
    robloxUser: "sinan061214",
    clan: "Valhalla",
    eventWins: 1,
    img: "assets/images/sinan.png"
  }
];

const tiers = [
  { name: "Mattie", clan: "Valhalla", tier: "HT1", region: "NA", img: "assets/images/mattie.jpg" },
  { name: "Bonekoko", clan: "Valhalla", tier: "LT1", region: "EU", img: "assets/images/bonekoko.jpg" },
  { name: "Rotgel", clan: "Valhalla", tier: "HT2", region: "EU", img: "assets/images/rotgel.jpg" },
  { name: "S29", clan: "Valhalla", tier: "LT2", region: "NA", img: "assets/images/s29.jpg" },
  { name: "Mvv", clan: "Valhalla", tier: "HT3", region: "EU", img: "assets/images/m.jpg" },
  { name: "Floppa", clan: "Valhalla", tier: "LT3", region: "NA", img: "assets/images/floppa.jpg" },
  { name: "Boris", clan: "Valhalla", tier: "HT4", region: "EU", img: "assets/images/boris.jpg" },
  { name: "Enel", clan: "Valhalla", tier: "LT4", region: "NA", img: "assets/images/enel.jpg" }
];
