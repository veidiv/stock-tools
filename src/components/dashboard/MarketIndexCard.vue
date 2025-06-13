<template>
  <div class="market-index-card">
    <h3 class="index-name">{{ indexData.name }}</h3>
    <p class="index-value" :class="{ 'positive-change': indexData.change >= 0, 'negative-change': indexData.change < 0 }">
      {{ indexData.value.toFixed(2) }} <!-- Assuming value is a number, format to 2 decimal places -->
    </p>
    <p class="index-change" :class="{ 'positive-change': indexData.change >= 0, 'negative-change': indexData.change < 0 }">
      <span v-if="indexData.change > 0">+</span>{{ indexData.change.toFixed(2) }}
      (<span v-if="indexData.percentageChange > 0">+</span>{{ indexData.percentageChange.toFixed(2) }}%)
    </p>
    <div class="mini-trendline">
      <!-- Placeholder for a mini trendline chart component -->
      <!-- Example: <MiniSparklineChart :data="indexData.trendData" /> -->
      <p v-if="!indexData.trendData || indexData.trendData.length === 0" class="trendline-placeholder-text">
        Trendline chart
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// TypeScript interface for the market index data
// This could also be defined in a central types file (e.g., src/types/market.ts) and imported.
export interface MarketIndex {
  id: string; // Unique identifier for key prop
  name: string;
  value: number;
  change: number;
  percentageChange: number;
  trendData?: number[]; // Optional: array of numbers for the mini trendline
}

// Define props for the component
// The 'indexData' prop is expected to be an object conforming to the MarketIndex interface.
const props = defineProps<{
  indexData: MarketIndex;
}>();

// Optional: Computed properties for more complex formatting if needed
// const formattedValue = computed(() => props.indexData.value.toFixed(2));
// const formattedChange = computed(() => `${props.indexData.change > 0 ? '+' : ''}${props.indexData.change.toFixed(2)}`);
// const formattedPercentageChange = computed(() => `(${props.indexData.percentageChange > 0 ? '+' : ''}${props.indexData.percentageChange.toFixed(2)}%)`);
</script>

<style scoped>
.market-index-card {
  /* Consistent with premium feel: good spacing, clean lines */
  background-color: var(--card-bg-color, #ffffff); /* Theme variable */
  padding: 15px 20px;
  border-radius: 8px; /* Consistent border-radius */
  box-shadow: var(--card-shadow, 0 2px 8px rgba(0, 0, 0, 0.05)); /* Subtle shadow */
  /* Consider a subtle border: border: 1px solid var(--card-border-color, #e0e0e0); */
  width: 220px; /* Example fixed width, or use flex-grow in parent */
  margin: 10px; /* Spacing between cards */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.market-index-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-hover-shadow, 0 4px 12px rgba(0, 0, 0, 0.1));
}

.index-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-color-primary, #333333); /* Theme variable */
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.index-value {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
}

.index-change {
  font-size: 14px;
  margin-bottom: 10px;
}

.positive-change {
  color: var(--positive-color, #28a745); /* Green for positive change - theme variable */
}

.negative-change {
  color: var(--negative-color, #dc3545); /* Red for negative change - theme variable */
}

.mini-trendline {
  height: 50px; /* Placeholder height */
  background-color: var(--trendline-bg-color, #f0f0f0); /* Placeholder background */
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Actual chart component will fill this space */
}

.trendline-placeholder-text {
  font-size: 12px;
  color: var(--text-color-secondary, #777777);
}
</style>
