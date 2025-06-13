<template>
  <!-- AppLayout will provide the overall structure including Sidebar and TopHeader -->
  <AppLayout>
    <div class="dashboard-page-content">
      <!-- The page title might be handled by TopHeader dynamically based on the route,
           or we can have a specific welcome message here if needed.
           For now, assuming TopHeader handles the main title "Dashboard".
      -->
      <!-- <h1 class="welcome-title">Welcome, User!</h1> -->

      <!-- Market Overview Section -->
      <MarketOverviewSection />

      <!-- Placeholder for Watchlist Section -->
      <div class="dashboard-section placeholder-section">
        <h2 class="section-title">My Watchlist</h2>
        <p class="placeholder-text">
          <!-- WatchlistTable.vue component will go here -->
          [Watchlist Table Placeholder]
        </p>
      </div>

      <!-- Placeholder for Market Movers Section -->
      <div class="dashboard-section placeholder-section">
        <h2 class="section-title">Market Movers</h2>
        <p class="placeholder-text">
          <!-- MarketMoversTabs.vue component will go here -->
          [Market Movers Tabs Placeholder - Gainers, Losers, Active]
        </p>
      </div>

      <!-- Placeholder for News Feed Snippet -->
      <div class="dashboard-section placeholder-section">
        <h2 class="section-title">Latest News</h2>
        <p class="placeholder-text">
          <!-- NewsSnippetList.vue component will go here -->
          [News Feed Snippet Placeholder]
        </p>
      </div>

    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'; // Standard Vue lifecycle hooks
import { onLoad, onShow, onReady, onHide, onUnload, onPullDownRefresh } from '@dcloudio/uni-app'; // UniApp page lifecycle hooks

import AppLayout from '@/layouts/AppLayout.vue';
import MarketOverviewSection from '@/components/dashboard/MarketOverviewSection.vue';
// Import other dashboard components when they are created, e.g.:
// import WatchlistTable from '@/components/dashboard/WatchlistTable.vue';
// import MarketMoversTabs from '@/components/dashboard/MarketMoversTabs.vue';
// import NewsSnippetList from '@/components/dashboard/NewsSnippetList.vue';

console.log('DashboardPage.vue: Script setup executed');

// UniApp Page Lifecycle Hooks
onLoad((options) => {
  // Options are the parameters passed from uni.navigateTo, uni.redirectTo
  console.log('DashboardPage.vue: onLoad lifecycle hook triggered.', options);
  // Typically used for fetching initial page data.
});

onShow(() => {
  console.log('DashboardPage.vue: onShow lifecycle hook triggered.');
  // Called when page is shown, or app returns to foreground with this page active.
  // Good for refreshing data that might change while page is not visible.
});

onReady(() => {
  console.log('DashboardPage.vue: onReady lifecycle hook triggered.');
  // Called when the page is loaded and ready for rendering, DOM operations can be done here.
});

onHide(() => {
  console.log('DashboardPage.vue: onHide lifecycle hook triggered.');
  // Called when page is hidden (e.g., navigating away, app to background).
});

onUnload(() => {
  console.log('DashboardPage.vue: onUnload lifecycle hook triggered.');
  // Called when page is being unloaded/destroyed. Clean up listeners, timers.
});

onPullDownRefresh(() => {
  console.log('DashboardPage.vue: onPullDownRefresh triggered.');
  // Handle pull-down-to-refresh action.
  // Remember to call uni.stopPullDownRefresh() after data is refreshed.
  // This needs "enablePullDownRefresh": true in pages.json for this page or globally.
  setTimeout(() => {
    uni.stopPullDownRefresh();
  }, 2000); // Simulate data fetching
});

// Standard Vue Lifecycle Hooks (can also be used)
onMounted(() => {
  console.log('DashboardPage.vue: Vue onMounted hook triggered.');
});

onUnmounted(() => {
  console.log('DashboardPage.vue: Vue onUnmounted hook triggered.');
});
</script>

<style scoped>
.dashboard-page-content {
  padding: 0px; /* AppLayout already provides padding for page-content-area */
  /* If AppLayout's slot is directly the page-content-area, no extra padding here.
     If AppLayout's slot is inside another div, then this padding might be useful.
     Adjust based on AppLayout.vue's structure.
  */
}

.welcome-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--text-color-primary, #333);
  margin-bottom: 20px;
  text-align: left;
}

.dashboard-section {
  background-color: var(--card-bg-color, #ffffff);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--card-shadow, 0 2px 8px rgba(0,0,0,0.05));
  margin-top: 25px; /* Space between sections */
}

.section-title { /* Styling for titles within placeholder sections */
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color-primary, #333);
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--header-border-color, #e0e0e0); /* Consistent with TopHeader border */
}

.placeholder-text {
  color: var(--text-color-secondary, #777);
  font-style: italic;
  text-align: center;
  padding: 20px;
}

/* Add more specific styles for the dashboard page if needed */
</style>
