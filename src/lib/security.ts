/**
 * Security Helper Functions
 *
 * Implements defensive checks against SQLi, XSS, and HTML Injection
 * and handles input validations and local rate-limiting counters.
 */

// Strip HTML tags and replace HTML entities to prevent XSS / HTML injection
export const sanitizeInput = (val: string): string => {
  if (!val) return "";
  return val
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[&<>"'/]/g, (match) => {
      // Escape special characters to entities
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
      };
      return map[match] || match;
    })
    .trim();
};

// Validate Name: letters and spaces only, length between 2 and 50
export const validateName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  return nameRegex.test(name.trim());
};

// Validate Phone: digits only, length between 10 and 15
export const validatePhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/\D/g, "");
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

// Validate Email: standard email format
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

// Validate Travel Date: must parse to a valid date and not be in the past
export const validateTravelDate = (dateStr: string): boolean => {
  if (!dateStr) return false;
  let y = 0, m = 0, d = 0;
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    if (parts[0].length === 4) {
      // YYYY-MM-DD
      y = Number(parts[0]);
      m = Number(parts[1]) - 1;
      d = Number(parts[2]);
    } else if (parts[2].length === 4) {
      // DD-MM-YYYY
      d = Number(parts[0]);
      m = Number(parts[1]) - 1;
      y = Number(parts[2]);
    } else {
      return false;
    }
  } else {
    const timestamp = Date.parse(dateStr);
    if (isNaN(timestamp)) return false;
    const parsed = new Date(timestamp);
    y = parsed.getFullYear();
    m = parsed.getMonth();
    d = parsed.getDate();
  }
  
  if (isNaN(y) || isNaN(m) || isNaN(d)) return false;
  
  const selectedDate = new Date(y, m, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Validate Pickup Location: alphanumeric and common punctuation, no special characters or HTML tags
export const validateLocation = (loc: string): boolean => {
  if (!loc) return true; // Optional field in some places
  // Allow letters, numbers, spaces, commas, periods, hyphens, and hash signs
  const locRegex = /^[A-Za-z0-9\s,.\-#]{3,100}$/;
  return locRegex.test(loc.trim());
};

// Local Client-Side Rate Limiter to protect all forms from spam
export const checkRateLimit = (actionKey: string, limitSeconds = 60): { allowed: boolean; remaining: number } => {
  const now = Date.now();
  const lastSubmit = localStorage.getItem(`last_submit_${actionKey}`);
  if (lastSubmit) {
    const elapsed = (now - Number(lastSubmit)) / 1000;
    if (elapsed < limitSeconds) {
      return { allowed: false, remaining: Math.ceil(limitSeconds - elapsed) };
    }
  }
  return { allowed: true, remaining: 0 };
};

// Record a successful submission timestamp
export const recordSubmit = (actionKey: string): void => {
  localStorage.setItem(`last_submit_${actionKey}`, String(Date.now()));
};

// Parse review date string (e.g. "12 July 2025" or "18 April 2026") into a Date object
export const parseReviewDate = (dateStr: string): Date => {
  if (!dateStr) return new Date(0);
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 3) {
    const day = Number(parts[0]);
    const monthName = parts[1];
    const year = Number(parts[2]);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months.indexOf(monthName);
    if (month !== -1 && !isNaN(day) && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  const timestamp = Date.parse(dateStr);
  if (!isNaN(timestamp)) {
    return new Date(timestamp);
  }
  return new Date(0); // Fallback for invalid/unparseable dates
};

