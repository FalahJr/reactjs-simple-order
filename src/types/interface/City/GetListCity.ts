export interface RootListCity {
  rajaongkir: GetListCity;
}

export interface GetListCity {
  query: QueryListCity;
  status: StatusListCity;
  results: ListCity[];
}

export interface QueryListCity {
  province: string;
}

export interface StatusListCity {
  code: number;
  description: string;
}

export interface ListCity {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}
