const apiKey = process.env.MAP_BOX_API_KEY;
const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${apiKey}`;