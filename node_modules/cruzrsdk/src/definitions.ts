export interface SdkResult {
  result: any;
}

export type WatchCallback = (
    result: SdkResult,
) => void;

export interface CruzrSdkPlugin {
  init(): Promise<void>;
  moveJoint(options: { jointName: string, angle: number, time: number }): Promise<SdkResult>;
  stopJoint(): Promise<SdkResult>;
  getJointCurrentAngle(options: { jointName: string }): Promise<SdkResult>;
  watchJointAngle(options: { jointName: string, interval?: number }, callback: WatchCallback): Promise<string>;

  clearWatch(options: { id: string }): Promise<null>;

  // LED
  ledSetColor(options: { r: number, g: number, b: number, times: number }): Promise<SdkResult>;
  ledSetEffect(options: { lightEffect: number, brightness: number, color: number }): Promise<SdkResult>;
  ledSetWorkByTimes(options: { effect: number, brightness: number, color: number, times: number }): Promise<SdkResult>;
  ledSetOnOff(options: { onOff: boolean }): Promise<SdkResult>;

  // Dance
  isDancing(): Promise<SdkResult>;
  watchIsDancing(options: { interval?: number }, callback: WatchCallback): Promise<string>;
  getCurrentDance(): Promise<SdkResult>;
  getDanceList(): Promise<SdkResult>;
  stopDance(): Promise<SdkResult>;
  dance(options: { danceName: string }): Promise<SdkResult>;


  getCruzrFacesList(): Promise<SdkResult>;
  setCruzrFace(options: { cruzrFaceCallBackImpl: any, faceId: number, playMusic: boolean, loop: boolean }): Promise<SdkResult>;

  run(options: { action: string }): Promise<SdkResult>;
  stopRun(): Promise<SdkResult>;

  // TTS
  speechSetTtsVolume(options: { volume: number }): Promise<SdkResult>;
  speechStartTTS(options: { text: string }): Promise<SdkResult>;
  speechStopTTS(): Promise<SdkResult>;
  speechGetVoiceName(): Promise<SdkResult>;
  isTtsSpeaking(): Promise<SdkResult>;
  watchisTtsSpeaking(options: { interval?: number }, callback: WatchCallback): Promise<string>;

  // Map operation
  setCurrentMap(options: { name: number }): Promise<SdkResult>;
  getCurrentMap(): Promise<SdkResult>;
  watchGetCurrentMap(options: { interval?: number }, callback: WatchCallback): Promise<string>;

  clearMap(): Promise<SdkResult>;

  // Charging operation
  dockOnStation(): Promise<SdkResult>;
  cancelDockOn(): Promise<SdkResult>;
  gotoRecharge(options: { x: number, y: number }): Promise<SdkResult>;

  leaveStation(): Promise<SdkResult>;

  // Navigation operation
  navigateToByPresetedSpeed(options: { x: number, y: number, theta: number }): Promise<SdkResult>;
  navigateTo(options: { x: number, y: number, theta: number, maxSpeed: number }): Promise<SdkResult>;
  cancelNavigate(): Promise<SdkResult>;
  navigateRelocationCtrl(options: { opt: number }): Promise<SdkResult>;
  navigateRelocationStartByPos(options: { x: number, y: number, theta: number }): Promise<SdkResult>;

  // move operation
  moveTo(options: { x: number, y: number, theta: number, maxSpeed: number }): Promise<SdkResult>;
  moveToward(options: { x: number, y: number, theta: number }): Promise<SdkResult>;
  stopMove(): Promise<SdkResult>;
  isMoveActive(): Promise<SdkResult>;
  watchIsMoveActive(options: { interval?: number }, callback: WatchCallback): Promise<string>;

  getPosition(options: { useSensor: boolean }): Promise<SdkResult>;
  watchGetPosition(options: { interval?: number }, callback: WatchCallback): Promise<string>;

  // Power operation
  powerOn(options: { currentTime: string, scheuleTime: string, option: string }): Promise<SdkResult>;
  powerOffRos(options: { type: number }): Promise<SdkResult>;

}
