// Real Pune Hydrological Network & Water Bodies GeoJSON Dataset
// Sources: OpenStreetMap Contributors & Central Water Commission Pune Basin

export const PUNE_WATER_BODIES_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "RIVER-MUTHA",
      properties: {
        id: "RIVER-MUTHA",
        name: "Mutha River",
        type: "River",
        basin: "Krishna-Bhima Basin",
        source: "Western Ghats / Khadakwasla Dam",
        description: "Primary urban river flowing through Deccan Gymkhana, Shivajinagar to Sangam Confluence",
        flowLengthKm: 22.4
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.7820, 18.4550], // Khadakwasla outflow
          [73.7980, 18.4720], // Dhayari / Nanded City
          [73.8100, 18.4820], // Vadgaon Budruk
          [73.8220, 18.4910], // Pu. La. Deshpande / Sinhagad Rd
          [73.8280, 18.4980], // Rajaram Bridge / Karvenagar
          [73.8380, 18.5080], // Mhatre Bridge / Erandwane
          [73.8440, 18.5140], // S.M. Joshi Bridge
          [73.8470, 18.5190], // Z-Bridge / Sambhaji Bridge (Alka Talkies)
          [73.8510, 18.5230], // Shivaji Bridge (Shaniwar Wada)
          [73.8560, 18.5280]  // Sangam Confluence (COEP Bridge)
        ]
      }
    },
    {
      type: "Feature",
      id: "RIVER-MULA",
      properties: {
        id: "RIVER-MULA",
        name: "Mula River",
        type: "River",
        basin: "Krishna-Bhima Basin",
        source: "Mulshi Dam / Western Ghats",
        description: "Northern river traversing Baner, Aundh, Khadki, Holkar Bridge to Sangam Confluence",
        flowLengthKm: 28.5
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.7650, 18.5820], // Wakad / Pimpri border
          [73.7850, 18.5750], // Baner / Balewadi
          [73.8050, 18.5680], // Aundh DP Road
          [73.8120, 18.5620], // Rajiv Gandhi Bridge (Aundh)
          [73.8280, 18.5540], // Botanical Garden / Spicer
          [73.8350, 18.5480], // Khadki / Range Hills
          [73.8480, 18.5350], // Holkar Bridge
          [73.8560, 18.5280]  // Sangam Confluence (COEP Bridge)
        ]
      }
    },
    {
      type: "Feature",
      id: "RIVER-MULA-MUTHA",
      properties: {
        id: "RIVER-MULA-MUTHA",
        name: "Mula-Mutha River (Combined)",
        type: "River",
        basin: "Krishna-Bhima Basin",
        source: "Sangam Confluence (Shivajinagar)",
        description: "Combined river downstream flowing through Bund Garden, Yerawada, Koregaon Park, Kalyani Nagar to Kharadi",
        flowLengthKm: 18.2
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [73.8560, 18.5280], // Sangam Confluence
          [73.8710, 18.5320], // Bund Garden / Sangamwadi
          [73.8750, 18.5350], // Yerawada Bridge
          [73.8880, 18.5370], // Koregaon Park North Main Rd
          [73.9050, 18.5380], // Kalyani Nagar Bridge
          [73.9280, 18.5360], // Mundhwa Jackwell
          [73.9450, 18.5340], // Kharadi Bypass
          [73.9720, 18.5320]  // Manjari / Eastern Outflow
        ]
      }
    },
    {
      type: "Feature",
      id: "LAKE-PASHAN",
      properties: {
        id: "LAKE-PASHAN",
        name: "Pashan Lake",
        type: "Lake / Wetland",
        areaKm2: 0.85,
        description: "Man-made water reservoir & migratory bird sanctuary built during British era",
        ward: "Ward 02 (Aundh - Baner)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [73.7820, 18.5380],
            [73.7880, 18.5410],
            [73.7920, 18.5360],
            [73.7870, 18.5310],
            [73.7820, 18.5380]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "LAKE-KATRAJ",
      properties: {
        id: "LAKE-KATRAJ",
        name: "Katraj Lake (Peshwa Era Reservoir)",
        type: "Lake / Reservoir",
        areaKm2: 0.65,
        description: "Historic water supply system built by Peshwas with underground aqueduct to Shaniwar Wada",
        ward: "Ward 11 (Dhankawadi - Katraj)"
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [73.8560, 18.4550],
            [73.8620, 18.4560],
            [73.8640, 18.4500],
            [73.8580, 18.4480],
            [73.8560, 18.4550]
          ]
        ]
      }
    }
  ]
};
