const exampleOrderListElement = {
  id: 1509,
  loading_address:
    "344006, Ростовская обл, г Ростов-на-Дону, Ворошиловский пр-кт, уч 12",
  unloading_address: "101000, г Москва, ул Забелина, д 3",
  views_count: 127,
  tariff_c: 300000,
  distance_m: 1085128,
  load_dt: null as null | string,
  ending_dt: null as null | string,
  cargo_type: "Ячмень",
  cargo_type_object: {
    id: 3,
    title: "Ячмень",
    order_type_id: 1,
    nomenclature_code: "000000004",
  },
  tonnage_kg: null as null | number,
  tonnage_balance_kg: 0,
  lat_lng_from: {
    latitude: 47.219826,
    longitude: 39.7198642,
  },
  lat_lng_to: {
    latitude: 55.7547599,
    longitude: 37.638328,
  },
  create_dt: "19.01.2022 8:00",
};

export type OrderListElement = typeof exampleOrderListElement;

const exampleOrder = {
  id: 1714,
  loading_address: "344000, Ростовская обл, г Ростов-на-Дону",
  unloading_address: "350000, Краснодарский край, г Краснодар",
  views_count: 0,
  tariff_c: 50000,
  distance_m: 276880,
  load_dt: "2022-12-31",
  ending_dt: "2023-01-06",
  cargo_type: "Овёс",
  cargo_type_object: {
    id: 15,
    title: "Овёс",
    order_type_id: 1,
    nomenclature_code: null as null | string,
  },
  tonnage_kg: 2000000,
  tonnage_balance_kg: 2000000,
  lat_lng_from: {
    latitude: 47.2306734,
    longitude: 39.7174089,
  },
  lat_lng_to: {
    latitude: 45.0322259,
    longitude: 38.9708116,
  },
  create_dt: "07.12.2022 7:05",
  short_name: "ООО КАРГИС",
  coords_from: "47.2306734,39.7174089",
  coords_to: "45.0322259,38.9708116",
  loading_city: "Ростов-на-Дону",
  unloading_city: "Краснодар",
  transport_type: "Зерновоз - Самосвал",
  scales_length_cm: 0,
  scales_capacity_kg: 0,
  loading_desc: "Комбайн",
  downtime_desc: null as null | number,
  downtime_cost: 0,
  additional_info: "",
  daily_shipping_rate_kg: 40000,
  deviation_percent: 0,
  deviation_type: "kg",
  kontur_status: 2,
  verification: 0,
};

export type OrderData = typeof exampleOrder;
