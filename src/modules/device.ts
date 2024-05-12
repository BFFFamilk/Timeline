//Checking device types
export class Device {
  static isMobile(): boolean {
    // Regular expression to match common mobile user-agent strings
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    // Check if the user-agent string matches a mobile device
    return mobileRegex.test(navigator.userAgent);
  }

  static isTouchDevice(): boolean {
    // Check if the device supports touch events
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.maxTouchPoints > 0
    );
  }

  static hasAccelerometer(): boolean {
    // Check if the device has an accelerometer
    return "DeviceOrientationEvent" in window;
  }

  static isMobilePixelRatio(): boolean {
    // Check if the device pixel ratio indicates a mobile device
    return window.devicePixelRatio > 1 && window.devicePixelRatio > 1;
  }
}
