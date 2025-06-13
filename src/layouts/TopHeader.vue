<template>
  <header class="top-header">
    <!-- Page Title Placeholder -->
    <div class="page-title-container">
      <h1 class="page-title">{{ currentRouteName || 'Dashboard' }}</h1>
      <!-- This title should ideally be dynamic based on the current page.
           It can be managed via a store (Pinia) or passed as a prop.
           uni-app's pages.json sets navigationBarTitleText, this is for in-page headers.
      -->
    </div>

    <div class="header-actions">
      <!-- Global Search Bar Placeholder -->
      <div class="search-bar-container">
        <!-- Replace with actual GlobalSearch.vue component later -->
        <!-- <GlobalSearch /> -->
        <input type="search" placeholder="Search stocks (e.g., 600519)..." class="global-search-input" />
        <uni-icons type="search" size="20" class="search-icon"></uni-icons>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <!-- Theme Toggle Placeholder -->
        <button class="action-button theme-toggle-button">
          <!-- Icon for theme (e.g., sun/moon) -->
          <uni-icons type="color" size="22"></uni-icons> <!-- Placeholder icon -->
        </button>

        <!-- Notifications Icon Placeholder -->
        <button class="action-button notifications-button">
          <!-- Icon for notifications (e.g., bell) -->
          <uni-icons type="notification" size="22"></uni-icons>
          <span class="notification-badge">3</span> <!-- Example badge -->
        </button>

        <!-- User Profile Dropdown Placeholder -->
        <div class="user-profile-dropdown">
          <button class="action-button profile-button">
            <uni-icons type="person" size="22"></uni-icons>
            <!-- User avatar or name can also be here -->
          </button>
          <!-- Dropdown menu for profile, settings, logout - to be implemented -->
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// In a real UniApp project, you might get route information differently.
// This is a conceptual way to make the title dynamic.
// For instance, use Pinia store to set page title from each page component.
const currentRouteName = ref(''); // Placeholder, should be updated based on actual route

// Example of how one might get current page title in UniApp, though often set in pages.json
// or managed via a global store updated by each page's onShow/onLoad.
// For a purely client-side dynamic title in the header component itself:
// import { getCurrentPages } from '@dcloudio/uni-app';
// currentRouteName.value = computed(() => {
//   const pages = getCurrentPages();
//   if (pages.length) {
//     const currentPage = pages[pages.length - 1];
//     // This gets the route path, you might need a mapping to friendly names
//     // or use the navigationBarTitleText from pages.json if accessible
//     return currentPage.route || 'Page';
//   }
//   return 'Page';
// });

// Placeholder for search functionality
// function performSearch(event: Event) {
//   const query = (event.target as HTMLInputElement).value;
//   console.log('Search query:', query);
// }
</script>

<style scoped>
.top-header {
  height: 60px; /* Standard header height, adjust as needed */
  /* Theme variable for background */
  background-color: var(--header-bg-color, #ffffff);
  /* Theme variable for text/icon color */
  color: var(--header-text-color, #333333);
  border-bottom: 1px solid var(--header-border-color, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
}

.page-title-container {
  /* Takes up space to push other items to the right if needed, or can be fixed width */
}

.page-title {
  font-size: 20px;
  font-weight: 600;
  /* Color can be themed */
}

.header-actions {
  display: flex;
  align-items: center;
}

.search-bar-container {
  display: flex;
  align-items: center;
  margin-right: 20px; /* Spacing between search and other actions */
  position: relative;
}

.global-search-input {
  padding: 8px 12px 8px 30px; /* Padding to make space for icon */
  border: 1px solid var(--search-border-color, #cccccc);
  border-radius: 15px; /* Rounded corners */
  min-width: 250px; /* Adjust as needed */
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.global-search-input:focus {
  border-color: var(--search-focus-border-color, #007bff); /* Example focus color */
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* Example focus shadow */
  outline: none;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: var(--search-icon-color, #777777);
}

.quick-actions {
  display: flex;
  align-items: center;
}

.action-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: 10px; /* Spacing between action buttons */
  color: inherit; /* Inherits color from .top-header */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Circular buttons for icons */
  width: 36px;
  height: 36px;
  transition: background-color 0.2s ease;
}

.action-button:hover {
  background-color: var(--action-button-hover-bg, #f0f0f0); /* Example hover color */
}

.notifications-button {
  position: relative; /* For badge positioning */
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: var(--notification-badge-bg, #e74c3c); /* Example red badge */
  color: white;
  border-radius: 50%;
  padding: 2px 5px;
  font-size: 10px;
  font-weight: bold;
  line-height: 1;
}

.user-profile-dropdown {
  /* Styles for the dropdown menu itself would be here or in a dedicated component */
}
</style>
