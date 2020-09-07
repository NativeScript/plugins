export function validateOptions(options) {
  if (isNaN(options.intensity)) {
      options.intensity = 100;
  }
  if (options.intensity < 0) {
      options.intensity = 0;
  }
  if (options.intensity > 100) {
      options.intensity = 100;
  }
}
