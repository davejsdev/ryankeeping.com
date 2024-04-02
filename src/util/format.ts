export const formatDate = new Intl.DateTimeFormat('en-CA', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC'
  }).format;

export const formatDistance = Intl.NumberFormat('en-CA', {
    maximumFractionDigits: 2,
    unit: 'kilometer',
    style:'unit'
}).format;

export const formatDollars = Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency',
    minimumFractionDigits: 0
}).format;