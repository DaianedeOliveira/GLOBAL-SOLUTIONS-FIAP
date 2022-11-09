// import Client from "facilmap-client";

// const client = new Client("https://facilmap.org/");
// await client.setPadId("myMapId");
// console.log(client.padData, client.types, client.lines);

import L from "leaflet";
import Client from "facilmap-client";
import { MarkersLayer } from "facilmap-leaflet";

const map = L.map('map');
const client = new Client("https://facilmap.org/mymap", "myMapId");
const markersLayer = new MarkersLayer(client).addTo(map);
      