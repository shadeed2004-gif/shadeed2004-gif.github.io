// Firmware snippet data for WaveGuard case study
export const waveGuardLoop = `// 20-sample rolling window for swell surge detection
#define WINDOW_SIZE 20
float accelBuffer[WINDOW_SIZE];
int bufferIndex = 0;

float computeRollingAvg() {
  float sum = 0;
  for (int i = 0; i < WINDOW_SIZE; i++) {
    sum += accelBuffer[i];
  }
  return sum / WINDOW_SIZE;
}

void classifySurge(float avgAccel) {
  if (avgAccel > THRESHOLD_DANGER) {
    triggerSMS("DANGER: Kallakkadal detected");
    setAlertLevel(ALERT_RED);
  } else if (avgAccel > THRESHOLD_WARNING) {
    setAlertLevel(ALERT_YELLOW);
  } else {
    setAlertLevel(ALERT_GREEN);
  }
}`;
