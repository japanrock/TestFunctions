const GraphemeSplitter = require("grapheme-splitter");

/**
 * count
 * @customfunction
 * @param {string} str The string to count.
 * @returns {number} The number of grapheme clusters in the string.
 */
export function graphemeclusterCount(str) {
  const splitter = new GraphemeSplitter();
  return splitter.countGraphemes(str);
}

/**
 * Displays the current time once a second
 * @customfunction
 * @param {CustomFunctions.StreamingInvocation<string>} invocation Custom function invocation
 */
export function clock(invocation) {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time
 * @returns {string} String with the current time formatted for the current locale.
 */
export function currentTime() {
  return new Date().toLocaleTimeString();
}
