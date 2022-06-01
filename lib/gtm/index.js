export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export const pageView = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.dataLayer.push({
    event: action,
    event_category: category,
    event_label: label,
    value: value,
  });
};
