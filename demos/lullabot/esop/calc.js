// When any form element is updated, recalculate.
document.querySelector('form').addEventListener('input', calculateESOPDates, true)
const output = document.querySelector('output');

function calculateESOPDates({currentTarget: form}) {

  // Get values from form.
  let {
    hire_date: {
      value: hire_date_value
    },
    hire_rate: {
      value: hire_rate_value
    }
  } = form.elements;

  // Convert string to int.
  const hours_per_week = parseInt(hire_rate_value);
  const hours_per_day = hours_per_week / 5;

  // Halftime or more to qualify.
  if (hours_per_week < 20) {
    output.innerHTML = `
    <p>Unfortunately, at ${hours_per_week} hour(s) per week you do not qualify.</p>
    `
    return null;
  }
  // Convert string to PlainDate.
  const [hire_year, hire_month, hire_day] = hire_date_value.split('-').map(x => parseInt(x));
  const hire_date = new Temporal.PlainDate(hire_year, hire_month, hire_day);

  // New hires can enter on next Jan/July 1.
  // If all three windows are missed, we assume employee isn't working enough hours to ever enter.
  const entry_windows = [
    new Temporal.PlainDate(hire_year, 7, 1), // If hired very early in the year
    new Temporal.PlainDate(hire_year + 1, 1, 1), // If hired early-mid year
    new Temporal.PlainDate(hire_year + 1, 7, 1), // If hired mid-late year
  ];

  // See if employee is eligible on each window.
  let assume_true = false;
  const eligible_to_enter = entry_windows.map(window => {
    // Any prior eligible windows assume true.
    if (assume_true) return true;

    // Calculate hours of service
    // TODO: verify this math is right given different days of the week
    // TODO: do weekends not count?
    const count = hire_date.until(window).days;
    const weeks = Math.floor(count / 7);
    const days = count % 7;

    const hours_of_service = (weeks * hours_per_week) + (days * hours_per_day);

    if (hours_of_service > 1000) {
      assume_true = true;
      return true;
    }
  });

  // Get entry date from first eligible window.
  let entry_date = null;
  switch (true) {
    case eligible_to_enter[0]: {
      entry_date = entry_windows[0];
      break;
    }
    case eligible_to_enter[1]: {
      entry_date = entry_windows[1];
      break;
    }
    case eligible_to_enter[2]: {
      entry_date = entry_windows[2];
      break;
    }
    default:
      break;
  }

  const today = Temporal.PlainDate.from((new Date()).toISOString().substring(0, 10));

  let vested_years = 0;

  // If employee had 1000 service hours in their first year
  if (eligible_to_enter[1] && entry_windows[1].until(today).days > 0) {
    vested_years ++
  }

  // Auto-count all years between first year & this year.
  vested_years += Math.max(0, (today.year - hire_date.year - 1));

  // Add this year if over 1000 hours service.
  if ((today.dayOfYear * (5/7) * hours_per_day) >= 1000) {
    vested_years ++;
  }

  output.innerHTML = `
  <ul>
    <li>Entry Date: ${entry_date ? entry_date.toLocaleString() : 'never'}</li>
    <li>Years of Service: ${vested_years}</li>
  </ul>
  `
}
