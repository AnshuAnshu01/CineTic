export const dateFormat = (date) => {
  return new Date(date).toLocaleString('en-US', {
    weekday: 'short',   // e.g., "Mon"
    month: 'long',      // e.g., "August"
    day: 'numeric',     // e.g., "1"
    hour: 'numeric',    // e.g., "11 AM"
    minute: 'numeric'   // e.g., "30"
  });
};
