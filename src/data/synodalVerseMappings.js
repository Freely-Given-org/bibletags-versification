// original mapped to the synodal

// See kjvLikeVerseMappings.js for examples

// I need mappings to skipped verses and otherwise

/*
Notes:
16007068 is in the Synodel and KJV, but does not exist in the WLC.
The ESV notes, "Compare Ezra 2:66 and the margins of some Hebrew manuscripts; Hebrew lacks all of verse 68."
*/


const synodalVerseMappings = {
  "01032001": "01031055",
  "01032002-033": -1,
  "02007026-029": 975,
  "02008001-028": 4,
  "02021037": "02022001",
  "02022001-030": 1,
  "03005020-026": 981,
  "03006001-023": 7,
  "03014055": "03014055:1-8",
  "03014056": "03014055:9-", //"03014055:9-17"
  "03014057": "03014056",
  "04012016": "04013001",
  "04013001-033": 1,
  "04017001-015": -965,
  "04017016-028": -15,
  "04025019": "04026001:1-3",
  "04026001": "04026001:4-", //"04026001:4-12"
  "05013001": "05012032",
  "05013002-019": -1,
  "05023001": "05022030",
  "05023002-026": -1,
  "05028069": "05029001",
  "05029001-028": 1,
  "06006001": "06005016",
  "06006002-027": -1,
  "09021001": "09020043",
  "09021002-016": -1,
  "10019001": "10018033",
  "10019002-044": -1,
  "11005001-014": -980,
  "11005015-032": -14,
  "11022043": "11022043:1-17",
  "11022044": "11022043:18-", //"11022043:18-30"
  "11022045-054": -1,
  "12012001": "12011021",
  "12012002-022": -1,
  "13005027-041": 974,
  "13006001-066": 15,
  "13012004": "13012004:1-9",
  "13012005": "13012004:10-", //"13012004:10-16"
  "13012006-041": -1,
  "14001018": "14002001",
  "14002001-017": 1,
  "14013023": "14014001",
  "14014001-014": 1,
  "16003033-038": 968,
  "16004001-017": 6,
  "16007068:1-9": "16007068",
  "16007068:10-": "16007069",
  "16007069-071": 1,
  "16007072:1-11": "16007073",
  "16007072:12-": "16008001:1-11", //"16007072:12-17": "16008001:1-11",
  "16008001": "16008001:12-", //"16008001:12-38",
  "16010001": "16009038",
  "16010002-040": -1,
  "18040001-005": -970,
  "18040006-024": -5,
  "18040025-032": -5,
  "19010001-018": -979,
  "19011001-007": -1000,
  "19012001-009": -1000,
  "19013001-005": -1000,
  "19013006:1-6": "19012005",
  "19013006:7-": "19012006",
  "19014001-007": -1000,
  "19015001-005": -1000,
  "19016001-011": -1000,
  "19017001-015": -1000,
  "19018001-051": -1000,
  "19019001-015": -1000,
  "19020001-010": -1000,
  "19021001-014": -1000,
  "19022001-032": -1000,
  "19023001-006": -1000,
  "19024001-010": -1000,
  "19025001-022": -1000,
  "19026001-012": -1000,
  "19027001-014": -1000,
  "19028001-009": -1000,
  "19029001-011": -1000,
  "19030001-013": -1000,
  "19031001-025": -1000,
  "19032001-011": -1000,
  "19033001-022": -1000,
  "19034001-023": -1000,
  "19035001-028": -1000,
  "19036001-013": -1000,
  "19037001-040": -1000,
  "19038001-023": -1000,
  "19039001-014": -1000,
  "19040001-018": -1000,
  "19041001-014": -1000,
  "19042001-012": -1000,
  "19043001-005": -1000,
  "19044001-027": -1000,
  "19045001-018": -1000,
  "19046001-012": -1000,
  "19047001-010": -1000,
  "19048001-015": -1000,
  "19049001-021": -1000,
  "19050001-023": -1000,
  "19051001-021": -1000,
  "19052001-011": -1000,
  "19053001-007": -1000,
  "19054001-009": -1000,
  "19055001-024": -1000,
  "19056001-014": -1000,
  "19057001-012": -1000,
  "19058001-012": -1000,
  "19059001-018": -1000,
  "19060001-014": -1000,
  "19061001-009": -1000,
  "19062001-013": -1000,
  "19063001-012": -1000,
  "19064001-011": -1000,
  "19065001-014": -1000,
  "19066001-020": -1000,
  "19067001-008": -1000,
  "19068001-036": -1000,
  "19069001-037": -1000,
  "19070001-006": -1000,
  "19071001-024": -1000,
  "19072001-020": -1000,
  "19073001-028": -1000,
  "19074001-023": -1000,
  "19075001-011": -1000,
  "19076001-013": -1000,
  "19077001-021": -1000,
  "19078001-072": -1000,
  "19079001-013": -1000,
  "19080001-020": -1000,
  "19081001-017": -1000,
  "19082001-008": -1000,
  "19083001-019": -1000,
  "19084001-013": -1000,
  "19085001-014": -1000,
  "19086001-017": -1000,
  "19087001:1-4": "19086001",
  "19087001:5-": "19086002:1-5", //"19087001:5-7": "19086002:1-5",
  "19087002": "19086002:6-",  //"19086002:6-13",
  "19087003-007": -1000,
  "19088001-019": -1000,
  "19089001-053": -1000,
  "19090001-005": -999,
  "19090007-017": -1000,
  "19091001-016": -1000,
  "19092001-016": -1000,
  "19093001-005": -1000,
  "19094001-023": -1000,
  "19095001-011": -1000,
  "19096001-013": -1000,
  "19097001-012": -1000,
  "19098001-009": -1000,
  "19099001-009": -1000,
  "19100001-005": -1000,
  "19101001-008": -1000,
  "19102001-029": -1000,
  "19103001-022": -1000,
  "19104001-035": -1000,
  "19105001-045": -1000,
  "19106001-048": -1000,
  "19107001-043": -1000,
  "19108001-014": -1000,
  "19109001-031": -1000,
  "19110001-007": -1000,
  "19111001-010": -1000,
  "19112001-010": -1000,
  "19113001-009": -1000,
  "19114001-008": -1000,
  "19115001-018": -1992,
  "19116001-009": -2000,
  "19116010-019": -1009,
  "19117001-002": -1000,
  "19118001-029": -1000,
  "19119001-176": -1000,
  "19120001-007": -1000,
  "19121001-008": -1000,
  "19122001-009": -1000,
  "19123001-004": -1000,
  "19124001-008": -1000,
  "19125001-005": -1000,
  "19126001-006": -1000,
  "19127001-005": -1000,
  "19128001-006": -1000,
  "19129001-008": -1000,
  "19130001-008": -1000,
  "19131001-003": -1000,
  "19132001-018": -1000,
  "19133001-003": -1000,
  "19134001-003": -1000,
  "19135001-021": -1000,
  "19136001-026": -1000,
  "19137001-009": -1000,
  "19138001-008": -1000,
  "19139001-024": -1000,
  "19140001-014": -1000,
  "19141001-010": -1000,
  "19142002-008": -1001,
  "19143001-012": -1000,
  "19144001-015": -1000,
  "19145001-021": -1000,
  "19146001-010": -1000,
  "19147001-011": -1000,
  "19147012-020": -11,
  "22001002-017": -1,
  "23003019": "23003019:1-5",
  "23003020": "23003019:6-", //"23003019:6-17",
  "23003021-026": -1,
  "23008023": "23009001",
  "23009001-020": 1,
  "23063019:1-9": "23063019",
  "23063019:10-16": "23064001",
  "23064001-011": 1,
  "24008023": "24009001",
  "24009001-025": 1,
  "26021001-005": -956,
  "26021006-037": -5,
  "27006001": "27005031",
  "27006002-029": -1,
  "28002001-002": -991,
  "28002003-025": -2,
  "28012001": "28011012",
  "28012002-015": -1,
  "29003001-005": -973,
  "29004001-021": -1000,
  "33004014": "33005001",
  "33005001-014": 1,
  "34002001": "34001015",
  "34002002-014": -1,
  "38002001-004": -983,
  "38002005-017": -4,
  "39003019-024": 982,
  // 44019020 has partial verse issue
  "45016025-027": -2001,
  "47011032": "47011032:1-12",
  "47011033": "47011032:13-", //"47011032:13-26",
  // 54013012 has partial verse issue
  "66012018": "66013001:1-6",
  "66013001": "66013001:7-", //"66013001:7-30",
}

export default synodalVerseMappings