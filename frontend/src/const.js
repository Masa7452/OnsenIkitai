// Hokkaido_Tohoku
export const HOKKAIDO  = { code: 1,  name: `Hokkaido` };
export const AOMORI    = { code: 2,  name: `Aomori`   };
export const IWATE     = { code: 3,  name: `Iwate`    };
export const MIYAGI    = { code: 4,  name: `Miyagi`   };
export const AKITA     = { code: 5,  name: `Akita`    };
export const YAMAGATA  = { code: 6,  name: `Yamagata` };
export const FUKUSHIMA = { code: 7,  name: `Fukushima`};

// Kanto
export const IBARAKI   = { code: 8,  name: `Ibaraki`  };
export const TOCHIGI   = { code: 9,  name: `Tochigi`  };
export const GUNMA     = { code: 10, name: `Gunma`    };
export const SAITAMA   = { code: 11, name: `Saitama`  };
export const CHIBA     = { code: 12, name: `Chiba`    };
export const TOKYO     = { code: 13, name: `Tokyo`    };
export const KANAGAWA  = { code: 14, name: `Kanagawa` };

// Hokuriku_Koshinetsu
export const NIIGATA   = { code: 15, name: `Niigata`  };
export const TOYAMA    = { code: 16, name: `Toyama`   };
export const ISHIKAWA  = { code: 17, name: `Ishikawa` };
export const FUKUI     = { code: 18, name: `Fukui`    };
export const YAMANASHI = { code: 19, name: `Yamanashi`};
export const NAGANO    = { code: 20, name: `Nagano`   };

// Tokai
export const GIFU      = { code: 21, name: `Gifu`     };
export const SHIZUOKA  = { code: 22, name: `Shizuoka` };
export const AICHI     = { code: 23, name: `Aichi`    };
export const MIE       = { code: 24, name: `Mie`      };

// Kinki
export const SHIGA     = { code: 25, name: `Shiga`    };
export const KYOTO     = { code: 26, name: `Kyoto`    };
export const OSAKA     = { code: 27, name: `Osaka`    };
export const HYOGO     = { code: 28, name: `Hyogo`    };
export const NARA      = { code: 29, name: `Nara`     };
export const WAKAYAMA  = { code: 30, name: `Wakayama` };

// Chugoku_Shikoku
export const TOTTORI   = { code: 31, name: `Tottori`  };
export const SHIMANE   = { code: 32, name: `Shimane`  };
export const OKAYAMA   = { code: 33, name: `Okayama`  };
export const HIROSHIMA = { code: 34, name: `Hiroshima`};
export const YAMAGUCHI = { code: 35, name: `Yamaguchi`};
export const TOKUSHIMA = { code: 36, name: `Tokushima`};
export const KAGAWA    = { code: 37, name: `Kagawa`   };
export const EHIME     = { code: 38, name: `Ehime`    };
export const KOCHI     = { code: 39, name: `Kochi`    };

// Kyushu_Okinawa
export const FUKUOKA   = { code: 40, name: `Fukuoka`  };
export const SAGA      = { code: 41, name: `Saga`     };
export const NAGASAKI  = { code: 42, name: `Nagasaki` };
export const KUMAMOTO  = { code: 43, name: `Kumamoto` };
export const OITA      = { code: 44, name: `Oita`     };
export const MIYAZAKI  = { code: 45, name: `Miyazaki` };
export const KAGOSHIMA = { code: 46, name: `Kagoshima`};
export const OKINAWA   = { code: 47, name: `Okinawa`  };


export const PREFECTURES =
[
    { areas: [ `Hokkaido`, `Tohoku` ]     , prefectures: [ HOKKAIDO, AOMORI, IWATE, MIYAGI, AKITA, YAMAGATA, FUKUSHIMA ] },
    { areas: [ `Kanto` ]                  , prefectures: [ IBARAKI,  TOCHIGI, GUNMA, SAITAMA, CHIBA, TOKYO,  KANAGAWA ] },
    { areas: [ `Hokuriku`, `Koshinetsu` ] , prefectures: [ NIIGATA, TOYAMA, ISHIKAWA, FUKUI, YAMANASHI, NAGANO ] },
    { areas: [ `Tokai` ]                  , prefectures: [ GIFU, SHIZUOKA, AICHI, MIE ] },
    { areas: [ `Kinki` ]                  , prefectures: [ SHIGA, KYOTO, OSAKA, HYOGO, NARA, WAKAYAMA ] },
    { areas: [ `Chugoku`, `Shikoku`]      , prefectures: [ TOTTORI, SHIMANE, OKAYAMA, HIROSHIMA, YAMAGUCHI, TOKUSHIMA, KAGAWA, EHIME, KOCHI ] },
    { areas: [ `Kyushu`, `Okinawa` ]      , prefectures: [ FUKUOKA, SAGA, NAGASAKI, KUMAMOTO, OITA, MIYAZAKI, KAGOSHIMA, OKINAWA ] }
]