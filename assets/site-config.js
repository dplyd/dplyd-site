// Single source of truth for prices and primary CTA. Elements marked
// data-cfg="<key>" are filled from here; meta/OG/JSON-LD must be kept in sync by hand
// (crawlers do not run this script).
window.DPLYD_CONFIG = {
  prices: {
    entry: {
      amount: '$500/month',
      perSeat: '$25/seat/month',
      includedSeats: 1,
      title: 'Starts at $500/month',
      body: 'Includes 1 seat, then $25 per additional seat per month. Software, models, and management on compatible hardware you buy and own.'
    },
    full: {
      amount: '$5,000/month',
      title: '$5,000/month, fully leased',
      body: 'Unlimited seats. Hardware, models, maintenance, patching, and support. No CapEx.'
    }
  }
};
(function () {
  var c = window.DPLYD_CONFIG;
  var get = function (path) { return path.split('.').reduce(function (o, k) { return o && o[k]; }, c); };
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-cfg]'), function (el) {
      var v = get(el.getAttribute('data-cfg'));
      if (typeof v === 'string') el.textContent = v;
    });
  });
})();
