const supported_languages = [
 'zh-cn',
 'zh-tw',
 'nl-nl',
 'en-us',
 'fr-fr',
 'de-de',
 'it-it',
 'ja-jp',
 'ko-kr',
 'pl-pl',
 'es-es',
 'pt-br',
 'ru-ru',
 'sv-se',
 'id-id',
];

const formatters = Object.fromEntries(supported_languages.map(lc_cc => {
  return [lc_cc, {
    to_days: new Intl.NumberFormat(lc_cc, {style: 'unit', unit: 'day', unitDisplay: 'long'}),
    to_hours: new Intl.NumberFormat(lc_cc, {style: 'unit', unit: 'hour', unitDisplay: 'long'}),
    to_minutes: new Intl.NumberFormat(lc_cc, {style: 'unit', unit: 'minute', unitDisplay: 'long'}),
    to_seconds: new Intl.NumberFormat(lc_cc, {style: 'unit', unit: 'second', unitDisplay: 'long'}),
  }]
}))

const countdown_target = new Date(Date.now() + 10_000_000_000);

const ms_per = {
  second: 1_000,
  minute: 1_000 * 60,
  hour:   1_000 * 60 * 60,
  day:    1_000 * 60 * 60 * 24
}

function calculateDiff() {
  const now = Date.now();
  let diff = countdown_target - now;

  const days = Math.floor(diff / ms_per.day);
  diff = diff - (days * ms_per.day);

  const hours = Math.floor(diff / ms_per.hour);
  diff = diff - (hours * ms_per.hour);

  const minutes = Math.floor(diff / ms_per.minute);
  diff = diff - (minutes * ms_per.minute);

  const seconds = Math.floor(diff / ms_per.second);

  return {days, hours, minutes, seconds};
}

setInterval(() => {
  const output = document.querySelector('output');
  const { days, hours, minutes, seconds } = calculateDiff();

  const markup = Object.entries(formatters).map(([lc_cc, formatters]) => {
    const {
      to_days,
      to_hours,
      to_minutes,
      to_seconds
    } = formatters;


    return `<h2>${lc_cc}</h2><samp>${to_days.format(days)} | ${to_hours.format(hours)} | ${to_minutes.format(minutes)} | ${to_seconds.format(seconds)}</samp>`;
  })

  output.innerHTML = markup.join('');
}, ms_per.second);
