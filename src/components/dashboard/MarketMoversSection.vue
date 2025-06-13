<template>
  <section class="market-movers-section">
    <h2 class="section-title">Market Movers</h2>

    <div class="tabs-container">
      <button
        class="tab-button"
        :class="{ 'active-tab': activeTab === 'gainers' }"
        @click="selectTab('gainers')"
      >
        Top Gainers
      </button>
      <button
        class="tab-button"
        :class="{ 'active-tab': activeTab === 'losers' }"
        @click="selectTab('losers')"
      >
        Top Losers
      </button>
      <button
        class="tab-button"
        :class="{ 'active-tab': activeTab === 'active' }"
        @click="selectTab('active')"
      >
        Most Active
      </button>
    </div>

    <div class="movers-list-wrapper">
      <table class="movers-table">
        <thead>
          <tr>
            <th>Stock Name/Code</th>
            <th>Last Price</th>
            <th v-if="activeTab === 'gainers' || activeTab === 'losers'">% Change</th>
            <th v-if="activeTab === 'active'">Turnover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="currentListData.length === 0">
            <td :colspan="activeTab === 'active' ? 3 : 3" class="empty-list-message">
              No data available for this category.
            </td>
          </tr>
          <tr v-for="item in currentListData" :key="item.id" class="mover-item-row">
            <td class="stock-info">
              <div class="stock-name">{{ item.name }}</div>
              <div class="stock-code">{{ item.code }}</div>
            </td>
            <td>{{ item.lastPrice.toFixed(2) }}</td>
            <td v-if="activeTab === 'gainers' || activeTab === 'losers'"
                :class="{ 'positive-change': item.percentageChange !== undefined && item.percentageChange >= 0,
                            'negative-change': item.percentageChange !== undefined && item.percentageChange < 0 }">
              <span v-if="item.percentageChange !== undefined">
                {{ (item.percentageChange > 0 ? '+' : '') + item.percentageChange.toFixed(2) }}%
              </span>
              <span v-else>-</span>
            </td>
            <td v-if="activeTab === 'active'">
              {{ item.turnover || '-' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// TypeScript Interface for Market Mover Item
interface MarketMoverItem {
  id: string;
  name: string;
  code: string;
  lastPrice: number;
  percentageChange?: number; // Used for Gainers/Losers
  turnover?: string;         // Used for Most Active, e.g., "¥1.5B", "¥800M"
}

const activeTab = ref<'gainers' | 'losers' | 'active'>('gainers');

const topGainers = ref<MarketMoverItem[]>([
  { id: 'g1', name: '科创信息', code: '300730', lastPrice: 25.80, percentageChange: 10.55 },
  { id: 'g2', name: '华工科技', code: '000988', lastPrice: 18.50, percentageChange: 8.75 },
  { id: 'g3', name: '中微半导', code: '688380', lastPrice: 75.20, percentageChange: 7.20 },
]);

const topLosers = ref<MarketMoverItem[]>([
  { id: 'l1', name: '退市园城', code: '600766', lastPrice: 1.20, percentageChange: -10.80 },
  { id: 'l2', name: 'ST板块', code: '885522', lastPrice: 450.00, percentageChange: -5.60 }, // Example Index Mover
  { id: 'l3', name: '天合光能', code: '688599', lastPrice: 30.15, percentageChange: -4.50 },
]);

const mostActiveStocks = ref<MarketMoverItem[]>([
  { id: 'a1', name: '贵州茅台', code: '600519', lastPrice: 1700.50, turnover: '¥2.5B' },
  { id: 'a2', name: '宁德时代', code: '300750', lastPrice: 190.20, turnover: '¥1.8B' },
  { id: 'a3', name: '比亚迪', code: '002594', lastPrice: 215.80, turnover: '¥1.2B' },
]);

const currentListData = computed<MarketMoverItem[]>(() => {
  switch (activeTab.value) {
    case 'gainers':
      return topGainers.value;
    case 'losers':
      return topLosers.value;
    case 'active':
      return mostActiveStocks.value;
    default:
      return [];
  }
});

function selectTab(tabName: 'gainers' | 'losers' | 'active') {
  activeTab.value = tabName;
}

// Placeholder for potential actions on item click
// function viewStockDetails(item: MarketMoverItem) {
//   console.log('View details for:', item.code);
//   // uni.navigateTo({ url: `/pages/stock/StockDetailPage?code=${item.code}` });
// }
</script>

<style scoped>
.market-movers-section {
  /* Styling similar to WatchlistSection if it's a card-like element */
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color-primary, #333);
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--header-border-color, #e0e0e0);
}

.tabs-container {
  display: flex;
  margin-bottom: 15px;
  border-bottom: 2px solid var(--card-border-color, #e0e0e0);
}

.tab-button {
  padding: 10px 15px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 15px;
  color: var(--text-color-secondary, #555);
  position: relative;
  bottom: -2px; /* To align with the bottom border */
  margin-right: 5px;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
}

.tab-button:hover {
  color: var(--text-color-link, #007bff);
}

.tab-button.active-tab {
  color: var(--text-color-link, #007bff);
  font-weight: 600;
  border-bottom: 2px solid var(--text-color-link, #007bff);
}

.movers-list-wrapper {
  overflow-x: auto;
}

.movers-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  color: var(--text-color-secondary, #555);
}

.movers-table th,
.movers-table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid var(--card-border-color, #e0e0e0);
  vertical-align: middle;
}

.movers-table th {
  font-weight: 600;
  color: var(--text-color-primary, #333);
  background-color: var(--table-header-bg, #f8f9fa);
  font-size: 13px;
  text-transform: uppercase;
}

.mover-item-row:hover {
  background-color: var(--table-row-hover-bg, #f1f3f5);
}

.stock-info .stock-name {
  font-weight: 500;
  color: var(--text-color-primary, #333);
}

.stock-info .stock-code {
  font-size: 12px;
  color: var(--text-color-tertiary, #777);
}

.positive-change {
  color: var(--positive-color, #28a745);
  font-weight: 500;
}

.negative-change {
  color: var(--negative-color, #dc3545);
  font-weight: 500;
}

.empty-list-message {
  text-align: center;
  padding: 20px;
  color: var(--text-color-secondary, #777);
  font-style: italic;
}
</style>
