<template>
  <nav class="sidebar-nav">
    <!-- App Logo/Name Placeholder -->
    <div class="logo-container">
      <!-- Replace with actual logo component or image -->
      <img src="@/assets/images/logo_placeholder.png" alt="App Logo" class="app-logo" />
      <span class="app-name">A-Share Tool</span>
    </div>

    <!-- Navigation Items -->
    <ul class="nav-list">
      <li class="nav-item active"> <!-- 'active' class for demonstration -->
        <!-- Icon Placeholder (e.g., <i class="icon-dashboard"></i>) -->
        <uni-icons type="home-filled" size="20"></uni-icons>
        <a href="#" class="nav-link">Dashboard</a>
        <!-- In UniApp, navigation is typically done via uni.navigateTo, uni.switchTab, etc.
             These <a> tags are placeholders. For actual navigation, you'd use
             @click handlers calling UniApp navigation methods.
        -->
      </li>
      <li class="nav-item">
        <!-- Icon Placeholder -->
        <uni-icons type="shop-filled" size="20"></uni-icons>
        <a href="#" class="nav-link">Market</a>
      </li>
      <li class="nav-item">
        <!-- Icon Placeholder -->
        <uni-icons type="chat-filled" size="20"></uni-icons> <!-- Using a placeholder icon -->
        <a href="#" class="nav-link">Charts</a>
      </li>
      <li class="nav-item">
        <!-- Icon Placeholder -->
        <uni-icons type="wallet-filled" size="20"></uni-icons>
        <a href="#" class="nav-link">Portfolio Tracker</a>
      </li>
      <li class="nav-item">
        <!-- Icon Placeholder -->
        <uni-icons type="notification-filled" size="20"></uni-icons>
        <a href="#" class="nav-link">News & Analysis</a>
      </li>
      <li class="nav-item">
        <!-- Icon Placeholder -->
        <uni-icons type="flag-filled" size="20"></uni-icons>
        <a href="#" class="nav-link">Alerts</a>
      </li>
    </ul>

    <!-- User Profile/Settings Placeholder -->
    <div class="user-profile-section">
      <!-- Icon Placeholder -->
      <uni-icons type="person-filled" size="24"></uni-icons>
      <span class="user-name">User Name</span>
      <!-- Settings/Logout icons/options would go here -->
      <uni-icons type="gear-filled" size="20" class="settings-icon"></uni-icons>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Props, emits, and component logic for sidebar.
// For example, navItems could be an array of objects to dynamically render the list.
// const navItems = ref([
//   { name: 'Dashboard', path: '/pages/dashboard/DashboardPage', icon: 'home-filled' },
//   { name: 'Market', path: '/pages/market/MarketPage', icon: 'shop-filled' },
//   // ...
// ]);

// function navigateTo(path: string) {
//   uni.navigateTo({ url: path });
// }

// Logic for active link highlighting based on current route.
// Logic for sidebar collapsibility.
</script>

<style scoped>
.sidebar-nav {
  width: 250px; /* Standard width, can be made dynamic/collapsible */
  /* Theme variable for background */
  background-color: var(--sidebar-bg-color, #2c3e50); /* Example dark sidebar */
  color: var(--sidebar-text-color, #ecf0f1);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%; /* Full height */
  transition: width 0.3s ease; /* For collapsibility animation */
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 0 20px 20px 20px; /* Padding for logo area */
  border-bottom: 1px solid var(--sidebar-border-color, #34495e); /* Example border */
}

.app-logo {
  width: 30px; /* Adjust as needed */
  height: 30px; /* Adjust as needed */
  margin-right: 10px;
}

.app-name {
  font-size: 18px;
  font-weight: bold;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1; /* Allows this section to take available space */
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 20px; /* Padding for nav items */
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.nav-item:hover {
  background-color: var(--sidebar-hover-bg-color, #34495e); /* Example hover color */
}

.nav-item.active {
  background-color: var(--sidebar-active-bg-color, #1abc9c); /* Example active color */
  /* border-left: 3px solid var(--sidebar-active-indicator-color, #ffffff); */ /* Optional active indicator */
}

.nav-item uni-icons { /* Targeting uni-icons specifically if used */
  margin-right: 10px;
  color: var(--sidebar-icon-color, #ecf0f1); /* Ensure icons inherit or have specific color */
}

.nav-link {
  text-decoration: none;
  color: inherit; /* Inherits color from .sidebar-nav or .nav-item */
  font-size: 15px;
}

.user-profile-section {
  padding: 20px;
  border-top: 1px solid var(--sidebar-border-color, #34495e); /* Example border */
  display: flex;
  align-items: center;
}

.user-profile-section uni-icons {
  margin-right: 10px;
}
.user-name {
  flex-grow: 1;
  font-size: 14px;
}
.settings-icon {
  cursor: pointer;
}

/* For collapsibility (conceptual):
.sidebar-nav.collapsed {
  width: 80px;
}
.sidebar-nav.collapsed .app-name,
.sidebar-nav.collapsed .nav-link,
.sidebar-nav.collapsed .user-name {
  display: none;
}
.sidebar-nav.collapsed .logo-container,
.sidebar-nav.collapsed .nav-item,
.sidebar-nav.collapsed .user-profile-section {
  justify-content: center;
}
*/
</style>
