/**
 * GBIF map tile URL for a species. GBIF's "adhoc" endpoint can filter by
 * month but is slower, so the plain density tiles are used for all year.
 * "@1x" tiles are 512px, which is sharp on high-DPI screens at tileSize 256.
 * @param month 0 = all year, 1 = January.
 */
export const gbifTileUrl = (taxonKey: number, month: number) => {
  const params = new URLSearchParams({
    srs: "EPSG:3857",
    taxonKey: String(taxonKey),
    bin: "hex",
    hexPerTile: "60",
    style: "classic-noborder.poly",
  });
  if (month === 0) {
    return `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?${params}`;
  }
  params.set("month", String(month));
  return `https://api.gbif.org/v2/map/occurrence/adhoc/{z}/{x}/{y}@1x.png?${params}`;
};
