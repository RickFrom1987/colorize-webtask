const WT_CONTAINER = 'wt-f97cc476b30cdf26437b040f6ef286c8-0'; 
const WT_NAME = 'colorize';
const WT_URL = `https://${WT_CONTAINER}.run.webtask.io/${WT_NAME}`;

module.exports = { 
  host: WT_CONTAINER,
  name: WT_NAME,
  base_url: WT_URL,
};