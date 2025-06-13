<template>
  <section class="market-overview-section">
    <!-- Optional Title: Can also be part of the parent page's template -->
    <h2 class="section-title">Market Overview</h2>

    <div class="cards-container">
      <MarketIndexCard
        v-for="index in marketIndices"
        :key="index.id"
        :index-data="index"
      />
      <!-- Placeholder for loading state or empty state -->
      <div v-if="loading" class="loading-placeholder">Loading market data...</div>
      <div v-if="!loading && marketIndices.length === 0" class="empty-placeholder">
        Market data is currently unavailable.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarketIndexCard, { type MarketIndex } from './MarketIndexCard.vue'; // Import component and type

// Reactive variable to hold the list of market indices.
// In a real application, this data would be fetched from an API (e.g., in onMounted or via a Pinia store action).
const marketIndices = ref<MarketIndex[]>([
  {
    id: 'sse_composite',
    name: 'SSE Composite (上证指数)',
    value: 3005.45,
    change: 12.80,
    percentageChange: 0.43,
    trendData: [2980, 2990, 3000, 2995, 3005, 3010, 3005], // Example trend data
  },
  {
    id: 'szse_component',
    name: 'SZSE Component (深证成指)',
    value: 9068.70,
    change: -45.10,
    percentageChange: -0.50,
    trendData: [9150, 9100, 9080, 9050, 9060, 9070, 9068],
  },
  {
    id: 'chinext_price',
    name: 'ChiNext Price (创业板指)',
    value: 1730.11,
    change: 8.25,
    percentageChange: 0.48,
    trendData: [1700, 1710, 1720, 1715, 1725, 1735, 1730],
  },
  {
    id: 'csi_300',
    name: 'CSI 300 (沪深300)',
    value: 3500.75,
    change: -5.60,
    percentageChange: -0.16,
    // trendData: [] // Example with no trend data
  },
]);

// Placeholder for loading state
const loading = ref(false);

// Placeholder for fetching data - e.g., using onMounted lifecycle hook
// import { onMounted } from 'vue';
// import { stockService } from '@/services/stockService'; // Example service
// onMounted(async () => {
//   loading.value = true;
//   try {
//     // marketIndices.value = await stockService.getMarketIndices(); // Fetch actual data
//   } catch (error) {
//     console.error("Failed to fetch market indices:", error);
//     // Handle error state, perhaps show a message to the user
//   } finally {
//     loading.value = false;
//   }
// });
</script>

<style scoped>
.market-overview-section {
  padding: 20px 0; /* Vertical padding, horizontal might be handled by page layout */
  /* background-color: var(--section-bg-color, transparent); */ /* Optional section background */
}

.section-title {
  font-size: 20px; /* Consistent with dashboard_ui.txt */
  font-weight: 600;
  color: var(--text-color-primary, #333333);
  margin-bottom: 15px;
  /* Optional: text-align: center; or specific alignment */
}

.cards-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens or if many cards */
  justify-content: flex-start; /* Align cards to the start by default */
  /* Or use grid:
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  */
  margin: -10px; /* Negative margin to counteract card margins for alignment */
}

/* For responsive adjustments if needed */
@media (max-width: 768px) {
  .cards-container {
    justify-content: center; /* Center cards on smaller screens */
  }
}

.loading-placeholder,
.empty-placeholder {
  width: 100%;
  text-align: center;
  padding: 30px;
  font-size: 16px;
  color: var(--text-color-secondary, #777777);
}
</style>
