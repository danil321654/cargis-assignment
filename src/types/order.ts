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
