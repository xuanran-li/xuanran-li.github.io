// Google Maps is used when a key is present. Without a key, the same travel
// entries are displayed on the built-in Leaflet preview map.
// Browser API keys are public: restrict your key to your website's HTTP
// referrers and the Maps JavaScript API in Google Cloud Console.
export const mapConfig = {
  googleMapsApiKey: '',
  // Replace this development map ID with your own map ID for production.
  googleMapsMapId: 'DEMO_MAP_ID',
  language: 'en',
};
