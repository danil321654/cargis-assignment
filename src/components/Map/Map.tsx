import "./Map.scss";

import { FC, useRef } from "react";
import { YMaps, Map as Ymap, YMapsApi } from "react-yandex-maps";
import { MapProps } from "./types";

export const Map: FC<MapProps> = ({ center, zoom, route }) => {
  const map = useRef<any>(null);
  const mapState = {
    center,
    zoom,
  };

  const addRoute = (ymaps: YMapsApi) => {
    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: route,
        params: {
          routingMode: "auto",
        },
      },
      {
        boundsAutoApply: true,
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  return (
    <div className="yandex-maps">
      <YMaps query={{ apikey: process.env.REACT_APP_MAPS_API }}>
        <Ymap
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map as unknown as undefined}
          onLoad={addRoute}
        ></Ymap>
      </YMaps>
    </div>
  );
};
