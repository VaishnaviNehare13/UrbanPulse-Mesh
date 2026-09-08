// Real Pune Healthcare Infrastructure GeoJSON Dataset
// Sources: PMC Health Department & OpenCity Public Health Dataset

export const PUNE_HOSPITALS_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "HOSP-SASSOON",
      properties: {
        id: "HOSP-SASSOON",
        name: "Sassoon General Hospital & B.J. Medical College",
        type: "Government Tertiary Care & Trauma Center",
        ownership: "Government of Maharashtra / PMC",
        ward: "Ward 06 (Dhole Patil Road / Station)",
        location: "Station Road, Near Pune Junction",
        capacityBeds: 1296,
        isMajorFacility: true, // Visible at city zoom
        specialties: ["Level 1 Trauma", "Burn ICU", "Pediatric Super Speciality", "Emergency Triage"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8744, 18.5262]
      }
    },
    {
      type: "Feature",
      id: "HOSP-DEENANATH",
      properties: {
        id: "HOSP-DEENANATH",
        name: "Deenanath Mangeshkar Hospital & Research Center",
        type: "Multi-Speciality Tertiary Care Hospital",
        ownership: "Lata Mangeshkar Medical Trust",
        ward: "Ward 12 (Kothrud - Erandwane)",
        location: "Erandwane, Near Mhatre Bridge",
        capacityBeds: 900,
        isMajorFacility: true, // Visible at city zoom
        specialties: ["Cardiology", "Organ Transplant", "Oncology", "Neuro ICU"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8340, 18.5028]
      }
    },
    {
      type: "Feature",
      id: "HOSP-KEM",
      properties: {
        id: "HOSP-KEM",
        name: "K.E.M. Hospital",
        type: "Tertiary Referral & Teaching Hospital",
        ownership: "K.E.M. Hospital Trust",
        ward: "Ward 03 (Rasta Peth)",
        location: "489 Rasta Peth, Sardar Moodliar Road",
        capacityBeds: 550,
        isMajorFacility: true, // Visible at city zoom
        specialties: ["Neonatology", "Renal Sciences", "Cardiac Surgery", "Critical Care"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8682, 18.5186]
      }
    },
    {
      type: "Feature",
      id: "HOSP-RUBY",
      properties: {
        id: "HOSP-RUBY",
        name: "Ruby Hall Clinic",
        type: "Multi-Disciplinary Super Speciality Hospital",
        ownership: "Grant Medical Foundation",
        ward: "Ward 06 (Dhole Patil Road)",
        location: "40 Sassoon Road, Sangamwadi",
        capacityBeds: 600,
        isMajorFacility: true, // Visible at city zoom
        specialties: ["Interventional Cardiology", "Oncology", "Trauma", "Neurosurgery"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8785, 18.5328]
      }
    },
    {
      type: "Feature",
      id: "HOSP-SAHYADRI",
      properties: {
        id: "HOSP-SAHYADRI",
        name: "Sahyadri Super Speciality Hospital (Deccan)",
        type: "Super Speciality Hospital",
        ownership: "Sahyadri Hospitals Group",
        ward: "Ward 10 (Shivajinagar / Deccan)",
        location: "Prabhat Road, Deccan Gymkhana",
        capacityBeds: 250,
        isMajorFacility: false,
        specialties: ["Neuro Sciences", "Emergency Triage", "Hematology", "Orthopedics"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8378, 18.5147]
      }
    },
    {
      type: "Feature",
      id: "HOSP-SANCHETI",
      properties: {
        id: "HOSP-SANCHETI",
        name: "Sancheti Hospital & Orthopaedic Research Institute",
        type: "Speciality Orthopaedic & Trauma Hospital",
        ownership: "Sancheti Healthcare Trust",
        ward: "Ward 10 (Shivajinagar)",
        location: "16 Shivajinagar, Sancheti Chowk",
        capacityBeds: 200,
        isMajorFacility: false,
        specialties: ["Orthopaedic Trauma", "Joint Replacement", "Spine Surgery", "Sports Medicine"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8525, 18.5312]
      }
    },
    {
      type: "Feature",
      id: "HOSP-JEHANGIR",
      properties: {
        id: "HOSP-JEHANGIR",
        name: "Jehangir Hospital",
        type: "Tertiary Multi-Speciality Hospital",
        ownership: "Jehangir Clinical Development Center",
        ward: "Ward 06 (Station Area)",
        location: "32 Sassoon Road, Pune Station",
        capacityBeds: 350,
        isMajorFacility: false,
        specialties: ["Emergency Care", "Gastroenterology", "Pulmonology"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8762, 18.5298]
      }
    },
    {
      type: "Feature",
      id: "HOSP-KAMLA-NEHRU",
      properties: {
        id: "HOSP-KAMLA-NEHRU",
        name: "PMC Kamla Nehru General Hospital",
        type: "Municipal General Hospital",
        ownership: "Pune Municipal Corporation (PMC)",
        ward: "Ward 07 (Kasba / Mangalwar Peth)",
        location: "Mangalwar Peth, Near Gadikhana",
        capacityBeds: 450,
        isMajorFacility: false,
        specialties: ["General Medicine", "Maternal Care", "Emergency Ward", "Dialysis Unit"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8640, 18.5230]
      }
    },
    {
      type: "Feature",
      id: "HOSP-BHARATI",
      properties: {
        id: "HOSP-BHARATI",
        name: "Bharati Vidyapeeth Medical College & Hospital",
        type: "Medical College Hospital & Tertiary Center",
        ownership: "Bharati Vidyapeeth Trust",
        ward: "Ward 11 (Dhankawadi / Katraj)",
        location: "Pune-Satara Road, Katraj",
        capacityBeds: 850,
        isMajorFacility: true, // Visible at city zoom
        specialties: ["Community Health", "Critical Care", "Pediatrics", "Trauma"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8520, 18.4580]
      }
    },
    {
      type: "Feature",
      id: "HOSP-POONA",
      properties: {
        id: "HOSP-POONA",
        name: "Poona Hospital & Research Centre",
        type: "Multi-Speciality Hospital",
        ownership: "Poona Hospital Trust",
        ward: "Ward 07 (Sadashiv Peth)",
        location: "Near Alka Talkies / Sambhaji Bridge",
        capacityBeds: 300,
        isMajorFacility: false,
        specialties: ["Cardiology", "Nephrology", "General Surgery"]
      },
      geometry: {
        type: "Point",
        coordinates: [73.8442, 18.5125]
      }
    }
  ]
};
