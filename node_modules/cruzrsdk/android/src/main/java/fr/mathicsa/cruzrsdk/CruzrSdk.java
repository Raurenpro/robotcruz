package fr.mathicsa.cruzrsdk;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.ubtechinc.cruzr.sdk.dance.DanceControlApi;
import com.ubtechinc.cruzr.sdk.face.CruzrFaceApi;
import com.ubtechinc.cruzr.sdk.face.CruzrFaceCallBackImpl;
import com.ubtechinc.cruzr.sdk.face.FaceInfo;
import com.ubtechinc.cruzr.sdk.ros.RosRobotApi;
import com.ubtechinc.cruzr.sdk.speech.SpeechRobotApi;
import com.ubtechinc.cruzr.serverlibutil.aidl.Position;
import com.ubtechinc.cruzr.serverlibutil.interfaces.InitListener;

import org.json.JSONArray;

import java.util.ArrayList;

public class CruzrSdk {

    public void init(Context context) {
        RosRobotApi.get().initializ(context, new InitListener() {
            @Override
            public void onInit() {
                CruzrFaceApi.initCruzrFace(context);
                DanceControlApi.getInstance().initialize(context);
                SpeechRobotApi.get().initializ(context, 103, new InitListener() {
                    @Override
                    public void onInit() {
                        super.onInit();
                    }
                });
            }
        });

    }

    public int moveJoint(String part, float angle, int time) {
        return RosRobotApi.get().setAngles(part, angle, time);
    }

    public int stopJoint() {
        return RosRobotApi.get().stopJoint();
    }

    public float getJointCurrentAngle(String part) {
        return RosRobotApi.get().getJointCurrentAngle(part);
    }

    public int ledSetColor(int r, int g, int b, int times) {
        return RosRobotApi.get().ledSetColor(r, g, b, times);
    }

    public int ledSetEffect(int lightEffect, int brightness, int color) {
        return RosRobotApi.get().ledSetEffect(lightEffect, brightness, color);
    }

    public int ledSetWorkByTimes(int lightEffect, int brightness, int color, int times) {
        return RosRobotApi.get().ledSetWorkByTimes(lightEffect, brightness, color, times);
    }

    public int ledSetOnOff(boolean onOff) {
        return RosRobotApi.get().ledSetOnOff(onOff);
    }

    public String getCurrentDance() {
        return DanceControlApi.getInstance().getCurrentDance();
    }

    public void getDanceList(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", new JSONArray(DanceControlApi.getInstance().getDanceList()));

        call.resolve(ret);
    }

    public void stopDance() {
        DanceControlApi.getInstance().stop();
    }

    public boolean isDancing() {
        return DanceControlApi.getInstance().isDancing();
    }

    public int dance(String danceName) {
        return DanceControlApi.getInstance().dance(danceName);
    }

    public void getCruzrFacesList(PluginCall call) {
        CruzrFaceApi.getCruzrFacesList(new CruzrFaceCallBackImpl() {
            @Override
            public void onCruzrFaceListCallBack(ArrayList<FaceInfo> arrayList) {
                JSObject ret = new JSObject();
                ArrayList<String> faceIds = new ArrayList<>();

                for (int i = 0; i < arrayList.size(); i++) {
                    faceIds.add(arrayList.get(i).faceId);
                }

                ret.put("result", new JSONArray(faceIds));

                call.resolve(ret);
            }

            @Override
            public void onCruzrFaceSetCallBack(int i) {

            }

            @Override
            public void onCurrentFaceIdCallBack(String s) {

            }

            @Override
            public void onCruzrFaceNameCallBack(String s) {

            }

            @Override
            public void onCruzrFaceUriCallBack(String s) {

            }
        });
    }

    public int setCruzrFace(String faceId, boolean playMusic, boolean loop) {
        return CruzrFaceApi.setCruzrFace(null, faceId, playMusic, loop);
    }

    public int run(String action) {
        return RosRobotApi.get().run(action);
    }

    public int stopRun() {
        return RosRobotApi.get().stopRun();
    }

    public int speechSetTtsVolume(int volume) {
        return SpeechRobotApi.get().speechSetTtsVolume(volume);
    }

    public int speechStartTTS(String text) {
        return SpeechRobotApi.get().speechStartTTS(text, null);
    }

    public int speechStopTTS() {
        return SpeechRobotApi.get().speechStopTTS();
    }

    public String speechGetVoiceName() {
        return SpeechRobotApi.get().speechGetVoiceName();
    }

    public boolean isTtsSpeaking() {
        return SpeechRobotApi.get().isTtsSpeaking();
    }

    public int setCurrentMap(String map) {
        return RosRobotApi.get().setCurrentMap(map);
    }

    public String getCurrentMap() {
        return RosRobotApi.get().getCurrentMap();
    }

    public int clearMap() {
        return RosRobotApi.get().clearMap();
    }

    public int dockOnStation() {
        return RosRobotApi.get().dockOnStation();
    }

    public int cancelDockOn() {
        return RosRobotApi.get().cancelDockOn();
    }

    public int gotoRecharge(float x, float y) {
        return RosRobotApi.get().gotoRecharge(x, y);
    }

    public int leaveStation() {
        return RosRobotApi.get().leaveStation();
    }

    public int navigateToByPresetedSpeed(float x, float y, float theta) {
        return RosRobotApi.get().navigateToByPresetedSpeed(x, y, theta);
    }

    public int navigateTo(float x, float y, float theta, float maxSpeed) {
        return RosRobotApi.get().navigateTo(x, y, theta, maxSpeed);
    }

    public int cancelNavigate() {
        return RosRobotApi.get().cancelNavigate();
    }

    public int navigateRelocationCtrl(int opt) {
        return RosRobotApi.get().navigateRelocationCtrl(opt);
    }

    public int navigateRelocationStartByPos(float x, float y, float theta) {
        return RosRobotApi.get().navigateRelocationStartByPos(x, y, theta);
    }

    public int moveTo(float x, float y, float theta, float maxSpeed) {
        return RosRobotApi.get().moveTo(x, y, theta, maxSpeed);
    }

    public int moveToward(float x, float y, float theta) {
        return RosRobotApi.get().moveToward(x, y, theta);
    }

    public int stopMove() {
        return RosRobotApi.get().stopMove();
    }

    public boolean isMoveActive() {
        return RosRobotApi.get().isMoveActive();
    }

    public Position getPosition(boolean useSensor) {
        return RosRobotApi.get().getPosition(useSensor);
    }

    public int powerOn(String currentTime, String scheduleTime, String option) {
        return RosRobotApi.get().powerOn(currentTime, scheduleTime, option);
    }

    public int powerOffRos(int type) {
        return RosRobotApi.get().powerOffRos(type);
    }
}
