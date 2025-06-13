<template>
  <section class="watchlist-section">
    <h2 class="section-title">My Watchlist</h2>
    <div class="watchlist-table-wrapper">
      <table class="watchlist-table">
        <thead>
          <tr>
            <th>Stock Name/Code</th>
            <th>Last Price</th>
            <th>Change</th>
            <th>Volume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in watchlistItems" :key="item.id" class="watchlist-row">
            <td class="stock-info">
              <div class="stock-name">{{ item.name }}</div>
              <div class="stock-code">{{ item.code }}</div>
            </td>
            <td :class="{ 'positive-change': item.change >= 0, 'negative-change': item.change < 0 }">
              {{ item.lastPrice.toFixed(2) }}
            </td>
            <td :class="{ 'positive-change': item.change >= 0, 'negative-change': item.change < 0 }">
              <div>{{ (item.change > 0 ? '+' : '') + item.change.toFixed(2) }}</div>
              <div>({{ (item.percentageChange > 0 ? '+' : '') + item.percentageChange.toFixed(2) }}%)</div>
            </td>
            <td>{{ item.volume }}</td>
            <td class="actions-cell">
              <button class="action-btn" @click="viewChart(item)" title="View Chart">
                <uni-icons type="chatboxes-filled" size="20"></uni-icons> <!-- Placeholder for chart icon -->
              </button>
              <button class="action-btn" @click="setAlert(item)" title="Set Alert">
                <uni-icons type="flag-filled" size="20"></uni-icons>
              </button>
              <button class="action-btn" @click="tradeStock(item)" title="Trade">
                <uni-icons type="paperplane-filled" size="20"></uni-icons> <!-- Placeholder for trade icon -->
              </button>
            </td>
          </tr>
          <tr v-if="watchlistItems.length === 0">
            <td colspan="5" class="empty-watchlist-message">Your watchlist is empty. Add stocks to monitor them.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// TypeScript Interface for Watchlist Item
interface WatchlistItem {
  id: string;
  name: string;
  code: string;
  lastPrice: number;
  change: number;
  percentageChange: number;
  volume: string; // e.g., "1.2M", "500K" - formatted string
}

// Static placeholder data for the watchlist
const watchlistItems = ref<WatchlistItem[]>([
  {
    id: '1',
    name: '贵州茅台',
    code: '600519',
    lastPrice: 1700.50,
    change: 15.20,
    percentageChange: 0.90,
    volume: '1.2M',
  },
  {
    id: '2',
    name: '宁德时代',
    code: '300750',
    lastPrice: 190.20,
    change: -2.50,
    percentageChange: -1.30,
    volume: '850K',
  },
  {
    id: '3',
    name: '中国平安',
    code: '601318',
    lastPrice: 42.75,
    change: 0.15,
    percentageChange: 0.35,
    volume: '2.1M',
  },
  {
    id: '4',
    name: '比亚迪',
    code: '002594',
    lastPrice: 215.80,
    change: -1.10,
    percentageChange: -0.51,
    volume: '760K',
  },
  {
    id: '5',
    name: '招商银行',
    code: '600036',
    lastPrice: 33.50,
    change: 0.00,
    percentageChange: 0.00,
    volume: '1.5M',
  }
]);

// Placeholder functions for actions
function viewChart(item: WatchlistItem) {
  console.log('View chart for stock:', item.code);
  // uni.navigateTo({ url: `/pages/charts/StockChartPage?code=${item.code}` }); // Example navigation
}

function setAlert(item: WatchlistItem) {
  console.log('Set alert for stock:', item.code);
  // Logic to open alert creation modal/page
}

function tradeStock(item: WatchlistItem) {
  console.log('Trade stock:', item.code);
  // Logic for initiating a trade
}

// Function to add a stock (example, not used by template directly here)
// function addStockToWatchlist(stock: WatchlistItem) {
//   watchlistItems.value.push(stock);
// }

// Function to remove a stock (example)
// function removeStockFromWatchlist(stockId: string) {
//   watchlistItems.value = watchlistItems.value.filter(item => item.id !== stockId);
// }
</script>

<style scoped>
.watchlist-section {
  /* Inherits background from dashboard-section or page background */
  /* If it's a card-like section itself as per DashboardPage.vue, these might be redundant */
  /* background-color: var(--card-bg-color, #ffffff); */
  /* padding: 20px; */
  /* border-radius: 8px; */
  /* box-shadow: var(--card-shadow, 0 2px 8px rgba(0,0,0,0.05)); */
  /* margin-top: 25px; */ /* Spacing from MarketOverviewSection */
}

.section-title {
  font-size: 18px; /* Consistent with titles in DashboardPage placeholders */
  font-weight: 600;
  color: var(--text-color-primary, #333);
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--header-border-color, #e0e0e0);
}

.watchlist-table-wrapper {
  overflow-x: auto; /* Allows table to be scrolled horizontally on small screens */
}

.watchlist-table {
  width: 100%;
  border-collapse: collapse; /* Clean table lines */
  font-size: 14px;
  color: var(--text-color-secondary, #555);
}

.watchlist-table th,
.watchlist-table td {
  padding: 12px 15px; /* Vertical and horizontal padding */
  text-align: left;
  border-bottom: 1px solid var(--card-border-color, #e0e0e0); /* Light border for rows */
  vertical-align: middle;
}

.watchlist-table th {
  font-weight: 600;
  color: var(--text-color-primary, #333);
  background-color: var(--table-header-bg, #f8f9fa); /* Slight background for header */
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.watchlist-row:hover {
  background-color: var(--table-row-hover-bg, #f1f3f5); /* Subtle hover for rows */
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

.actions-cell {
  text-align: center; /* Center align action buttons */
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0 4px; /* Spacing between buttons */
  color: var(--text-color-tertiary, #777);
  transition: color 0.2s ease;
}

.action-btn:hover {
  color: var(--text-color-link, #007bff); /* Highlight on hover */
}

.action-btn uni-icons { /* Ensure icons are vertically aligned if needed */
  vertical-align: middle;
}

.empty-watchlist-message {
  text-align: center;
  padding: 20px;
  color: var(--text-color-secondary, #777);
  font-style: italic;
}
</style>
