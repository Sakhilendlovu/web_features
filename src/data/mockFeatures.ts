export const mockFeatures = [
  {
    name: "CSS Grid",
    category: "CSS",
    description: "Two-dimensional grid layout system for creating complex web layouts with ease.",
    browserSupport: {
      chrome: 95,
      firefox: 92,
      safari: 88,
      edge: 95
    },
    performanceImpact: "low" as const,
    accessibilityScore: 92,
    polyfillAvailable: true,
    usage: 78,
    status: "stable" as const
  },
  {
    name: "Web Components",
    category: "JavaScript",
    description: "Custom HTML elements with encapsulated functionality and styling.",
    browserSupport: {
      chrome: 85,
      firefox: 82,
      safari: 75,
      edge: 85
    },
    performanceImpact: "medium" as const,
    accessibilityScore: 85,
    polyfillAvailable: true,
    usage: 45,
    status: "stable" as const
  },
  {
    name: "Container Queries",
    category: "CSS",
    description: "Apply styles based on the size of a containing element rather than the viewport.",
    browserSupport: {
      chrome: 90,
      firefox: 88,
      safari: 82,
      edge: 90
    },
    performanceImpact: "low" as const,
    accessibilityScore: 88,
    polyfillAvailable: true,
    usage: 32,
    status: "stable" as const
  },
  {
    name: "Intersection Observer",
    category: "APIs",
    description: "Asynchronously observe changes in the intersection of elements with viewport.",
    browserSupport: {
      chrome: 95,
      firefox: 90,
      safari: 85,
      edge: 95
    },
    performanceImpact: "low" as const,
    accessibilityScore: 95,
    polyfillAvailable: true,
    usage: 67,
    status: "stable" as const
  },
  {
    name: "CSS Subgrid",
    category: "CSS",
    description: "Allow grid items to participate in the sizing of their parent grid.",
    browserSupport: {
      chrome: 75,
      firefox: 88,
      safari: 70,
      edge: 75
    },
    performanceImpact: "low" as const,
    accessibilityScore: 90,
    polyfillAvailable: false,
    usage: 18,
    status: "experimental" as const
  },
  {
    name: "Service Workers",
    category: "APIs",
    description: "Scripts that run in the background, enabling offline functionality and push notifications.",
    browserSupport: {
      chrome: 98,
      firefox: 95,
      safari: 88,
      edge: 98
    },
    performanceImpact: "medium" as const,
    accessibilityScore: 85,
    polyfillAvailable: false,
    usage: 56,
    status: "stable" as const
  },
  {
    name: "WebAssembly",
    category: "Performance",
    description: "Binary instruction format for a stack-based virtual machine for high-performance applications.",
    browserSupport: {
      chrome: 98,
      firefox: 95,
      safari: 92,
      edge: 98
    },
    performanceImpact: "high" as const,
    accessibilityScore: 75,
    polyfillAvailable: false,
    usage: 28,
    status: "stable" as const
  },
  {
    name: "CSS :has() Selector",
    category: "CSS",
    description: "Parent selector that applies styles based on descendant elements.",
    browserSupport: {
      chrome: 88,
      firefox: 85,
      safari: 85,
      edge: 88
    },
    performanceImpact: "medium" as const,
    accessibilityScore: 92,
    polyfillAvailable: true,
    usage: 41,
    status: "stable" as const
  },
  {
    name: "Web Locks API",
    category: "APIs",
    description: "Coordinate access to shared resources across multiple tabs and workers.",
    browserSupport: {
      chrome: 82,
      firefox: 78,
      safari: 65,
      edge: 82
    },
    performanceImpact: "low" as const,
    accessibilityScore: 80,
    polyfillAvailable: true,
    usage: 12,
    status: "experimental" as const
  },
  {
    name: "CSS Flexbox Gap",
    category: "CSS",
    description: "Gap property support in flexbox layouts for consistent spacing.",
    browserSupport: {
      chrome: 92,
      firefox: 88,
      safari: 85,
      edge: 92
    },
    performanceImpact: "low" as const,
    accessibilityScore: 95,
    polyfillAvailable: true,
    usage: 73,
    status: "stable" as const
  },
  {
    name: "AppCache",
    category: "APIs",
    description: "Application cache for offline web applications (deprecated).",
    browserSupport: {
      chrome: 0,
      firefox: 0,
      safari: 0,
      edge: 0
    },
    performanceImpact: "high" as const,
    accessibilityScore: 60,
    polyfillAvailable: false,
    usage: 2,
    status: "deprecated" as const
  },
  {
    name: "CSS Cascade Layers",
    category: "CSS",
    description: "Control the cascade by creating explicit layers of specificity.",
    browserSupport: {
      chrome: 85,
      firefox: 82,
      safari: 78,
      edge: 85
    },
    performanceImpact: "low" as const,
    accessibilityScore: 88,
    polyfillAvailable: true,
    usage: 25,
    status: "stable" as const
  }
];

export const mockStats = {
  totalFeatures: mockFeatures.length,
  averageSupport: Math.round(
    mockFeatures.reduce((acc, feature) => {
      const avg = (feature.browserSupport.chrome + feature.browserSupport.firefox + 
                   feature.browserSupport.safari + feature.browserSupport.edge) / 4;
      return acc + avg;
    }, 0) / mockFeatures.length
  ),
  stableFeatures: mockFeatures.filter(f => f.status === "stable").length,
  experimentalFeatures: mockFeatures.filter(f => f.status === "experimental").length,
  deprecatedFeatures: mockFeatures.filter(f => f.status === "deprecated").length,
  polyfillCoverage: Math.round(
    (mockFeatures.filter(f => f.polyfillAvailable).length / mockFeatures.length) * 100
  ),
  accessibilityScore: Math.round(
    mockFeatures.reduce((acc, feature) => acc + feature.accessibilityScore, 0) / mockFeatures.length
  ),
  performanceImpact: {
    low: mockFeatures.filter(f => f.performanceImpact === "low").length,
    medium: mockFeatures.filter(f => f.performanceImpact === "medium").length,
    high: mockFeatures.filter(f => f.performanceImpact === "high").length,
  }
};