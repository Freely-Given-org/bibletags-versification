// original mapped to the KJV

// Examples
//   {
//     "02011030": "02012001",
//     "02012001-021": -1,
//     "05022005:1-5": "05022005",
//     "05022005:6-10": "05022006",
//     "08002009:5-10": "08002009:1-7",
//     "08002010:1-2": "08002009:8-9",
//   }

// 8+ character strings represent a passage location:
//   BBCCCVVV
//     BB is a zero-padded bookId with KJV ordering (1-66)
//     CCC is a zero-padded chapter
//     VVV is a zero-padded verse
//   BBCCCVVV:W1-W2
//     W1 is the starting word number in cases where a partial verse must be mapped
//     W2 is the ending word number in cases where a partial verse must be mapped
//   BBCCCVVV-VVV
//     The key can also be a location range, with an integer as the value. Use this
//     when all the verses in the key range are to be increased by the same amount.

// So far I only have the mappings to skipped verses
/*
 Notes:
 16007068 is in the KJV and Synodel, but does not exist in the WLC.
 The ESV notes, "Compare Ezra 2:66 and the margins of some Hebrew manuscripts; Hebrew lacks all of verse 68."
/*

check stats from Biblearc DB that this is likely all the mappings

*/


const kjvVerseMappings = {
  "01032001": "01031055",
  "01032002-033": -1,
  "02007026-029": 975,
  "02008001-028": 4,
  "02021037": "02022001",
  "02022001-030": 1,
  "03005020-026": 981,
  "03006001-023": 7,
  "04017001-015": -965,
  "04017016-028": -15,
  "04025019": "04026001:1-8", // NUM 25:19 = NUM 26:1a kjv
  "04026001": "04026001:9-24", // NUM 26:1 = NUM 26:1b kjv  
  "04030001": "04029040",
  "04030002-017": -1,
  "05013001": "05012032",
  "05013002-019": -1,
  "05023001": "05022030",
  "05023002-026": -1,
  "05028069": "05029001",
  "05029001-028": 1,
  "09020042": "09020042:1-39", //1SA 20:42 = 1SA 20:42a kjv
  "09021001": "09020042:40-50", //1SA 21:1 = 1SA 20:42b kjv
  "09021002-016": -1,
  "09024001": "09023029",
  "09024002-023": -1,
  "10019001": "10018033",
  "10019002-044": -1,
  "11005001-014": -980,
  "11005015-032": -14,
  "11018033": "11018033:1-19", //1KI 18:33 = 1KI 18:33a kjv
  "11018034:1-10": "11018033:20-37", //1KI 18:34a = 1KI 18:33b kjv
  "11018034:11-16": "11018034", //1KI 18:34b = 1 KI 18:34 kjv
  "11022043": "11022043:1-28", //1KI 22:43 = 1KI 22:43a kjv
  "11022044": "11022043:29-48", //1KI 22:44 = 1KI 22:43b kjv
  "11022045-054": -1,
  "12012001": "12011021",
  "12012002-022": -1,
  "13005027-041": 974,
  "13006001-066": 15,
  "13012004": "13012004:1-14", //1CH 12:4 = 1CH 12:4a kjv
  "13012005": "13012004:15-24", //1CH 12:5 = 1CH 12:4b kjv
  "13012006-041": -1,
  "14001018": "14002001",
  "14002001-017": 1,
  "14013023": "14014001",
  "14014001-014": 1,
  "16003033-038": 968,
  "16004001-017": 6,
  "16007068-072": 1,
  "16010001": "16009038",
  "16010002-040": -1,
  "18040025-032": 976,
  "18041001-026": 8,
  "19003001-009": -1,
  "19004001-009": -1,
  "19005001-013": -1,
  "19006001-011": -1,
  "19007001-018": -1,
  "19008001-010": -1,
  "19009001-021": -1,
  "19011001:1-2": "19011000", //PS11:1a = PS11 heading kjv
  "19011001:3-8": "19011001", //PS11:1b = PS11:1 kjv
  "19012001-009": -1,
  "19013001-006": -1,
  "19014001:1-2": "19014000", //PS14:1a = PS14 heading kjv
  "19014001:3-13": "19014001", //PS14:1b = PS14:1 kjv
  "19015001:1-2": "19015000", //PS15:1a = PS15 heading kjv
  "19015001:3-10": "19015001", //PS15:1b = PS15:1 kjv
  "19016001:1-2": "19016000", //PS16:1a = PS16 heading kjv
  "19016001:3-7": "19016001", //PS16:1b = PS16:1 kjv
  "19017001:1-2": "19017000", //PS17:1a = PS17 heading kjv
  "19017001:3-12": "19017001", //PS17:1b = PS17:1 kjv
  "19018001": "19018000:1-44", //PS18:1 = PS18:heading a,b,c kjv
  "19018002:1": "19018000:45-47", //PS18:2a = PS18:0d kjv
  "19018002:2-4": "19018001", //PS18:2b = PS18:1 kjv
  "19018003-051": -1,
  "19019001-015": -1,
  "19020001-010": -1,
  "19021001-014": -1,
  "19022001-032": -1,
  "19023001:1-2": "19023000", //PS23:1a = PS23 heading kjv
  "19023001:3-6": "19023001", //PS23:1b = PS23:1 kjv
  "19024001:1-2": "19024000", //PS24:1a = PS24 heading kjv
  "19024001:3-8": "19024001", //PS24:1b = PS24:1 kjv
  "19025001:1": "19025000", //PS25:1a = PS25 heading kjv
  "19025001:2-5": "19025001", //PS25:1b = PS25:1 kjv
  "19026001:1": "19026000", //PS26:1a = PS26 heading kjv
  "19026001:2-11": "19026001", //PS26:1b = PS26:1 kjv
  "19027001:1": "19027000", //verse 1a = heading kjv
  "19027001:2-11": "19027001", //verse 1b = verse 1 kjv
  "19028001:1": "19028000", //verse 1a = heading kjv
  "19028001:2-15": "19028001", //verse 1b = verse 1 kjv
  "19029001:1-2": "19029000", //verse 1a = heading kjv
  "19029001:3-10": "19029001", //verse 1b = verse 1 kjv
  "19030001-013": -1,
  "19031001-025": -1,
  "19032001:1-2": "19032000", //verse 1a = heading kjv
  "19032001:3-7": "19032001", //verse 1b = verse 1 kjv
  "19034001-023": -1,
  "19035001:1": "19035000", //verse 1a = heading kjv
  "19035001:2-8": "19035001", //verse 1b = verse 1 kjv
  "19036001-013": -1,
  "19037001:1": "19037000", //verse 1a = heading kjv
  "19037001:2-8": "19037001", //verse 1b = verse 1 kjv
  "19038001-023": -1,
  "19039001-014": -1,
  "19040001-018": -1,
  "19041001-014": -1,
  "19042001-012": -1,
  "19044001-027": -1,
  "19045001-018": -1,
  "19046001-012": -1,
  "19047001-010": -1,
  "19048001-015": -1,
  "19049001-021": -1,
  "19050001:1-2": "19050000", //verse 1a = heading kjv
  "19050001:3-12": "19050001", //verse 1b = verse 1 kjv
  "19051001": "19051000:1-8",
  "19051002": "19051000:9-22",
  "19051003-021": -2,
  "19052001": "19052000:1-9",
  "19052002": "19052000:10-29",
  "19052003-011": -2,
  "19053001-007": -1,
  "19054001": "19054000:1-11",
  "19054002": "19054000:12-26",
  "19054003-009": -2,
  "19055001-024": -1,
  "19056001-014": -1,
  "19057001-012": -1,
  "19058001-012": -1,
  "19059001-018": -1,
  "19060001": "19060000:1-11",
  "19060002": "19060000:12-33",
  "19060003-014": -2,
  "19061001-009": -1,
  "19062001-013": -1,
  "19063001-012": -1,
  "19064001-011": -1,
  "19065001-014": -1,
  "19066001:1-3": "19066000", //verse 1a = heading kjv
  "19066001:4-7": "19066001", //verse 1b = verse 1 kjv
  "19067001-008": -1,
  "19068001-036": -1,
  "19069001-037": -1,
  "19070001-006": -1,
  "19072001:1": "19072000", //verse 1a = heading kjv
  "19072001:2-8": "19072001", //verse 1b = verse 1 kjv
  "19073001:1-2": "19073000", //verse 1a = heading kjv
  "19073001:3-8": "19073001", //verse 1b = verse 1 kjv
  "19074001:1-2": "19074000", //verse 1a = heading kjv
  "19074001:3-10": "19074001", //verse 1b = verse 1 kjv
  "19075001-011": -1,
  "19076001-013": -1,
  "19077001-021": -1,
  "19078001:1-2": "19078000", //verse 1a = heading kjv
  "19078001:3-9": "19078001", //verse 1b = verse 1 kjv
  "19079001:1-2": "19079000", //verse 1a = heading kjv
  "19079001:3-14": "19079001", //verse 1b = verse 1 kjv
  "19080001-020": -1,
  "19081001-017": -1,
  "19082001:1-2": "19082000", //verse 1a = heading kjv
  "19082001:3-9": "19082001", //verse 1b = verse 1 kjv
  "19083001-019": -1,
  "19084001-013": -1,
  "19085001-014": -1,
  "19086001:1-2": "19086000", //verse 1a = heading kjv
  "19086001:3-10": "19086001", //verse 1b = verse 1 kjv
  "19087001:1-4": "19087000", //verse 1a = heading kjv
  "19087001:5-7": "19087001", //verse 1b = verse 1 kjv
  "19088001-019": -1,
  "19089001-053": -1,
  "19090001:1-4": "19090000", //verse 1a = heading kjv
  "19090001:5-11": "19090001", //verse 1b = verse 1 kjv
  "19092001-016": -1,
  "19098001:1": "19098000", //verse 1a = heading kjv
  "19098001:2-13": "19098001", //verse 1b = verse 1 kjv
  "19100001:1-2": "19100000", //verse 1a = heading kjv
  "19100001:3-6": "19100001", //verse 1b = verse 1 kjv
  "19101001:1-2": "19101000", //verse 1a = heading kjv
  "19101001:3-8": "19101001", //verse 1b = verse 1 kjv
  "19102001-029": -1,
  "19103001:1": "19103000", //verse 1a = heading kjv
  "19103001:2-10": "19103001", //verse 1b = verse 1 kjv
  "19108001-014": -1,
  "19109001:1-3": "19109000", //verse 1a = heading kjv
  "19109001:4-7": "19109001", //verse 1b = verse 1 kjv
  "19110001:1-2": "19110000", //verse 1a = heading kjv
  "19110001:3-12": "19110001", //verse 1b = verse 1 kjv
  "19120001:1-2": "19120000", //verse 1a = heading kjv
  "19120001:3-8": "19120001", //verse 1b = verse 1 kjv
  "19121001:1-2": "19121000", //verse 1a = heading kjv
  "19121001:3-9": "19121001", //verse 1b = verse 1 kjv
  "19122001:1-3": "19122000", //verse 1a = heading kjv
  "19122001:4-9": "19122001", //verse 1b = verse 1 kjv
  "19123001:1-2": "19123000", //verse 1a = heading kjv
  "19123001:3-8": "19123001", //verse 1b = verse 1 kjv
  "19124001:1-3": "19124000", //verse 1a = heading kjv
  "19124001:4-10": "19124001", //verse 1b = verse 1 kjv
  "19125001:1-2": "19125000", //verse 1a = heading kjv
  "19125001:3-10": "19125001", //verse 1b = verse 1 kjv
  "19126001:1-2": "19126000", //verse 1a = heading kjv
  "19126001:3-9": "19126001", //verse 1b = verse 1 kjv
  "19127001:1-3": "19127000", //verse 1a = heading kjv
  "19127001:4-20": "19127001", //verse 1b = verse 1 kjv
  "19128001:1-2": "19128000", //verse 1a = heading kjv
  "19128001:3-8": "19128001", //verse 1b = verse 1 kjv
  "19129001:1-2": "19129000", //verse 1a = heading kjv
  "19129001:3-8": "19129001", //verse 1b = verse 1 kjv
  "19130001:1-2": "19130000", //verse 1a = heading kjv
  "19130001:3-5": "19130001", //verse 1b = verse 1 kjv
  "19131001:1-3": "19131000", //verse 1a = heading kjv
  "19131001:4-15": "19131001", //verse 1b = verse 1 kjv
  "19132001:1-2": "19132000", //verse 1a = heading kjv
  "19132001:3-8": "19132001", //verse 1b = verse 1 kjv
  "19133001:1-3": "19133000", //verse 1a = heading kjv
  "19133001:4-12": "19133001", //verse 1b = verse 1 kjv
  "19134001:1-2": "19134000", //verse 1a = heading kjv
  "19134001:3-13": "19134001", //verse 1b = verse 1 kjv
  "19138001:1": "19138000", //verse 1a = heading kjv
  "19138001:2-7": "19138001", //verse 1b = verse 1 kjv
  "19139001:1-3": "19139000", //verse 1a = heading kjv
  "19139001:4-6": "19139001", //verse 1b = verse 1 kjv
  "19140001-014": -1,
  "19141001:1-2": "19141000", //verse 1a = heading kjv
  "19141001:3-10": "19141001", //verse 1b = verse 1 kjv
  "19142001-008": -1,
  "19143001:1-2": "19143000", //verse 1a = heading kjv
  "19143001:3-11": "19143001", //verse 1b = verse 1 kjv
  "19144001:1": "19144000", //verse 1a = heading kjv
  "19144001:4-7": "19144001", //verse 1b = verse 1 kjv
  "19145001:1-2": "19145000", //verse 1a = heading kjv
  "19145001:3-9": "19145001", //verse 1b = verse 1 kjv
  "21004017": "21005001",
  "21005001-019": 1,
  "22007001": "22006013",
  "22007002-014": -1,
  "23008023": "23009001",
  "23009001-020": 1,
  "23064001-011": 1,
  "24008023": "24009001",
  "24009001-025": 1,
  "26021001-002": -956,
  "26021003": "26020047",
  "26021004-005": -956,
  "26021006-037": -5,
  "27003031-033": 970,
  "27004001-034": 3,
  "27006001": "27005031",
  "27006002-029": -1,
  "28002001-002": -991,
  "28002003-025": -2,
  "28012001": "28011012",
  "28012002-015": -1,
  "28014001": "28013016",
  "28014002-010": -1,
  "29003001-005": -973,
  "29004001-021": -1000,
  "32002001": "32001017",
  "32002002-011": -1,
  "33004014": "33005001",
  "33005001-014": 1,
  "34002001": "34001015",
  "34002002-014": -1,
  "38002001-004": -983,
  "38002005-017": -4,
  "39003019-024": 982,
}

export default kjvVerseMappings