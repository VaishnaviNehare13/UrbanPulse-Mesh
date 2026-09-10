// Centralized Design Tokens for UrbanPulse Mesh (Civic Intelligence Aesthetic)

export const TOKENS = {
  colors: {
    textPrimary: "#172033",     // Primary text
    deepNavy: "#0F1B2D",        // Deep navy
    civicBlue: "#2563A6",       // Civic blue
    lightCivicBlue: "#EAF2FA",  // Light civic blue
    pageBg: "#F7F8FA",          // Page background
    surface: "#FFFFFF",         // Surface
    border: "#D9E0E8",          // Subtle border
    borderStrong: "#CBD5E1",    // Strong border
    secondaryText: "#64748B",   // Secondary text
    
    // Status semantic colors
    operationalGreen: "#16856B", // Operational / Normal
    attentionAmber: "#C47A00",   // Attention / Delay / High Load
    emergencyRed: "#C93434",     // Emergency / Active Incident / Critical
    mutedBg: "#F1F4F7",          // Muted background
    
    // Legacy mapping helpers
    normal: "#16856B",
    attention: "#C47A00",
    critical: "#C93434",
    brand: "#2563A6"
  },
  typography: {
    productTitle: "16px",
    sectionLabel: "11px",
    pageTitle: "22px",
    subheading: "14px",
    body: "13px",
    secondary: "12px",
    metadata: "11px"
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px"
  },
  shadow: {
    subtle: "0 1px 3px rgba(15, 27, 45, 0.08)",
    dropdown: "0 4px 12px rgba(15, 27, 45, 0.12)",
    modal: "0 10px 25px -5px rgba(15, 27, 45, 0.2), 0 8px 10px -6px rgba(15, 27, 45, 0.2)"
  }
};

