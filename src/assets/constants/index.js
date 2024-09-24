import data from "../../data.json";

export const keyMetrices = data?.keyMetrics;

export const userGrowth = data.userGrowth
  .map((item) => ({
    month: item.month.value,
    totalUsers: item.totalUsers.value,
    activeUsers: item.activeUsers.value,
  }))
  .sort((a, b) => new Date(a.month) - new Date(b.month));

export const recentStreams = data?.recentStreams;

export const revenueDistribution = data?.revenueDistribution;

export const topStreamedSongs = data?.topStreamedSongs.sort(
  (a, b) => new Date(a.streams.value) - new Date(b.streams.value)
);

export const defaultFilters = data?.additionalFeatures;

export const sortingOptions = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

export const sideBarOptions = [
  {
    label: "Dashboard",
    value: "dashboard",
    path: "/dashboard",
  },
  {
    label: "Key Matrices",
    value: "key_metrices",
    path: "/key_metrices",
  },
  {
    label: "Data Visualization",
    value: "data_visualization",
    path: "/data_visualization",
  },
  {
    label: "Recent Streams Table",
    value: "recent_streams",
    path: "/recent_streams",
  },
];

export const avatar =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

export const barChartColors = ["#0088FE", "#FF8042"];
