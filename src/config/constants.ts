/**
 * Centralized Configuration Constants
 * Zero hardcoded magic strings/numbers across the application.
 */

export const CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  DEFAULT_CATEGORY_ID: '1',
  DEFAULT_LOCATION: 'Canada',
  MOCK_DELAY_MS: 500,
  ASSETS: {
    DEFAULT_PROFILE_IMG: '/images/profile-v3.png',
    MENU_ICON: '/images/menu-icon-v3.png',
    SEARCH_ICON: '/images/search-icon.png',
    FILTER_ICON: '/images/filter-icon.png',
    HOME_ICON: '/images/home-icon.png',
  }
};
