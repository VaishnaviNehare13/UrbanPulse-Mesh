// Real Pune Municipal Parks & Public Green Spaces GeoJSON Dataset
// Source: PMC Garden Department / OpenCity

export const PUNE_PARKS_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "PARK-SAMBHAJI",
      properties: {
        id: "PARK-SAMBHAJI",
        name: "Chhatrapati Sambhaji Park",
        subtype: "Municipal Public Garden & Riverfront Promenade",
        ward: "Ward 10 (Shivajinagar / JM Road)",
        location: "JM Road, Shivajinagar",
        areaAcres: 16.5,
        features: ["Botanical Aquarium", "River Promenade", "Children Play Arena"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8450, 18.5220]
      }
    },
    {
      type: "Feature",
      id: "PARK-PULA-DESHPANDE",
      properties: {
        id: "PARK-PULA-DESHPANDE",
        name: "Pu. La. Deshpande (Okayama) Friendship Garden",
        subtype: "Japanese Style Cultural & Eco Garden",
        ward: "Ward 09 (Sinhagad Road)",
        location: "Sinhagad Road, Dattawadi",
        areaAcres: 28.0,
        features: ["Water Canals & Waterfalls", "Bonsai Collection", "Mughal Garden Annex"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8340, 18.4920]
      }
    },
    {
      type: "Feature",
      id: "PARK-SARASBAUG",
      properties: {
        id: "PARK-SARASBAUG",
        name: "Saras Baug & Peshwe Park",
        subtype: "Historic Municipal Garden & Lake",
        ward: "Ward 08 (Swargate - Parvati)",
        location: "Sarasbaug Road, Swargate",
        areaAcres: 25.0,
        features: ["Talyatla Ganpati Temple", "Peshwe Energy Park", "Lawn Grounds"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8520, 18.5010]
      }
    },
    {
      type: "Feature",
      id: "PARK-EMPRESS",
      properties: {
        id: "PARK-EMPRESS",
        name: "Empress Botanical Garden",
        subtype: "Heritage Botanical & Agri-Horticultural Sanctuary",
        ward: "Ward 06 / Pune Cantonment",
        location: "Near Race Course, Ghorpadi",
        areaAcres: 39.0,
        features: ["Centennial Trees", "Rare Flora Conservatory", "Nursery Complex"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8960, 18.5140]
      }
    },
    {
      type: "Feature",
      id: "PARK-KAMALA-NEHRU",
      properties: {
        id: "PARK-KAMALA-NEHRU",
        name: "Kamala Nehru Park",
        subtype: "Urban Public Park",
        ward: "Ward 12 (Erandwane)",
        location: "Prabhat Road, Erandwane",
        areaAcres: 8.5,
        features: ["Jogging Track", "Fighter Jet Display", "Open Air Stage"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8320, 18.5110]
      }
    },
    {
      type: "Feature",
      id: "PARK-KATRAJ-ZOO",
      properties: {
        id: "PARK-KATRAJ-ZOO",
        name: "Rajiv Gandhi Zoological Park & Wildlife Center",
        subtype: "Municipal Zoo, Lake & Conservation Park",
        ward: "Ward 11 (Katraj)",
        location: "Pune-Satara Road, Katraj",
        areaAcres: 130.0,
        features: ["Katraj Lake", "Snake Park & Reptile Center", "Animal Rescue Center"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8590, 18.4520]
      }
    }
  ]
};
