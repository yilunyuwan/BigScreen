import {geoCoordMap} from '../geo/geoCoordMap';

export const getAirlines =  (locations, destination) => {
  let res = [];
  const toCoord = geoCoordMap[destination];
  for (let i = 0; i < locations.length; i++) {
    const fromCoord = geoCoordMap[locations[i]];
    if (fromCoord && toCoord) {
      res.push({
        fromName: locations[i],
        toName: destination,
        coords: [fromCoord, toCoord],
      });
    }
  }
  return res;
};