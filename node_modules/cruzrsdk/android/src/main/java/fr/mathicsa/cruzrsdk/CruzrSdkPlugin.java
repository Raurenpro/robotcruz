package fr.mathicsa.cruzrsdk;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.ubtechinc.cruzr.serverlibutil.aidl.Position;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("ALL")
@CapacitorPlugin(name = "CruzrSdk")
public class CruzrSdkPlugin extends Plugin {

    private final CruzrSdk implementation = new CruzrSdk();

    private final Map<String, PluginCall> watchingCalls = new HashMap<>();

    @PluginMethod
    public void clearWatch(PluginCall call) {
        String id = call.getString("id");
        PluginCall toDelete = watchingCalls.remove(id);
        toDelete.release(bridge);
        call.resolve();
    }

    @PluginMethod
    public void init(PluginCall call) {
        implementation.init(getContext());
        call.resolve();
    }

    @PluginMethod
    public void moveJoint(PluginCall call) {
        String part = call.getString("jointName");
        float angle = call.getFloat("angle");
        int time = call.getInt("time");

        JSObject ret = new JSObject();
        ret.put("result", implementation.moveJoint(part, angle, time));
        call.resolve(ret);
    }

    @PluginMethod
    public void stopJoint(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.stopJoint());
        call.resolve(ret);
    }

    @PluginMethod
    public void getJointCurrentAngle(PluginCall call) {
        String part = call.getString("jointName");

        JSObject ret = new JSObject();
        ret.put("result", implementation.getJointCurrentAngle(part));
        call.resolve(ret);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchJointAngle(PluginCall call) {
        call.setKeepAlive(true);

        String part = call.getString("jointName");
        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject ret = new JSObject();
                ret.put("result", implementation.getJointCurrentAngle(part));
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }


    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchIsDancing(PluginCall call) {
        call.setKeepAlive(true);

        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject ret = new JSObject();
                ret.put("result", implementation.isDancing());
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchisTtsSpeaking(PluginCall call) {
        call.setKeepAlive(true);

        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject ret = new JSObject();
                ret.put("result", implementation.isTtsSpeaking());
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchGetCurrentMap(PluginCall call) {
        call.setKeepAlive(true);

        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject ret = new JSObject();
                ret.put("result", implementation.getCurrentMap());
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchIsMoveActive(PluginCall call) {
        call.setKeepAlive(true);

        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject ret = new JSObject();
                ret.put("result", implementation.isMoveActive());
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchGetPosition(PluginCall call) {
        call.setKeepAlive(true);

        boolean useSensor = call.getBoolean("useSensor", false);
        long interval = call.getInt("interval", 1000);

        watchingCalls.put(call.getCallbackId(), call);

        Thread t = new Thread(() -> {
            do {
                JSObject pos = new JSObject();
                Position p = implementation.getPosition(useSensor);
                pos.put("x", p.x);
                pos.put("y", p.y);
                pos.put("theta", p.theta);

                JSObject ret = new JSObject();
                ret.put("result", pos);
                call.resolve(ret);

                try {
                    Thread.sleep(interval);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            } while (watchingCalls.get(call.getCallbackId()) != null);
        });

        t.start();
    }


    @PluginMethod
    public void ledSetColor(PluginCall call) {
        int r = call.getInt("r");
        int g = call.getInt("g");
        int b = call.getInt("b");
        int times = call.getInt("times");

        JSObject ret = new JSObject();
        ret.put("result", implementation.ledSetColor(r, g, b, times));
        call.resolve(ret);
    }

    @PluginMethod
    public void ledSetEffect(PluginCall call) {
        int lightEffect = call.getInt("lightEffect");
        int brightness = call.getInt("brightness");
        int color = call.getInt("color");

        JSObject ret = new JSObject();
        ret.put("result", implementation.ledSetEffect(lightEffect, brightness, color));
        call.resolve(ret);
    }

    @PluginMethod
    public void ledSetWorkByTimes(PluginCall call) {
        int lightEffect = call.getInt("effect");
        int brightness = call.getInt("brightness");
        int color = call.getInt("color");
        int times = call.getInt("times");

        JSObject ret = new JSObject();
        ret.put("result", implementation.ledSetWorkByTimes(lightEffect, brightness, color, times));
        call.resolve(ret);
    }

    @PluginMethod
    public void ledSetOnOff(PluginCall call) {
        boolean onOff = call.getBoolean("onOff");

        JSObject ret = new JSObject();
        ret.put("result", implementation.ledSetOnOff(onOff));
        call.resolve(ret);
    }

    @PluginMethod
    public void isDancing(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.isDancing());
        call.resolve(ret);
    }

    @PluginMethod
    public void getCurrentDance(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.getCurrentDance());
        call.resolve(ret);
    }

    @PluginMethod
    public void dance(PluginCall call) {
        String danceName = call.getString("danceName");

        JSObject ret = new JSObject();
        ret.put("result", implementation.dance(danceName));
        call.resolve(ret);
    }

    @PluginMethod
    public void getCruzrFacesList(PluginCall call) {
        implementation.getCruzrFacesList(call);
    }

    @PluginMethod
    public void getDanceList(PluginCall call) {
        implementation.getDanceList(call);
    }

    @PluginMethod
    public void stopDance(PluginCall call) {
        implementation.stopDance();
        call.resolve();
    }

    @PluginMethod
    public void setCruzrFace(PluginCall call) {
        String faceId = call.getString("faceId");
        boolean playMusic = call.getBoolean("playMusic");
        boolean loop = call.getBoolean("loop");

        JSObject ret = new JSObject();
        ret.put("result", implementation.setCruzrFace(faceId, playMusic, loop));
        call.resolve(ret);
    }

    @PluginMethod
    public void run(PluginCall call) {
        String action = call.getString("action");

        JSObject ret = new JSObject();
        ret.put("result", implementation.run(action));
        call.resolve(ret);
    }

    @PluginMethod
    public void stopRun(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.stopRun());
        call.resolve(ret);
    }

    @PluginMethod
    public void speechSetTtsVolume(PluginCall call) {
        int volume = call.getInt("volume");

        JSObject ret = new JSObject();
        ret.put("result", implementation.speechSetTtsVolume(volume));
        call.resolve(ret);
    }

    @PluginMethod
    public void speechStartTTS(PluginCall call) {
        String text = call.getString("text");

        JSObject ret = new JSObject();
        ret.put("result", implementation.speechStartTTS(text));
        call.resolve(ret);
    }

    @PluginMethod
    public void speechStopTTS(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.speechStopTTS());
        call.resolve(ret);
    }

    @PluginMethod
    public void speechGetVoiceName(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.speechGetVoiceName());
        call.resolve(ret);
    }

    @PluginMethod
    public void isTtsSpeaking(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.isTtsSpeaking());
        call.resolve(ret);
    }

    @PluginMethod
    public void setCurrentMap(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.setCurrentMap(call.getString("map")));
        call.resolve(ret);
    }

    @PluginMethod
    public void getCurrentMap(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.getCurrentMap());
        call.resolve(ret);
    }

    @PluginMethod
    public void clearMap(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.clearMap());
        call.resolve(ret);
    }

    @PluginMethod
    public void dockOnStation(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.dockOnStation());
        call.resolve(ret);
    }

    @PluginMethod
    public void cancelDockOn(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.cancelDockOn());
        call.resolve(ret);
    }

    @PluginMethod
    public void gotoRecharge(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.gotoRecharge(call.getFloat("x"), call.getFloat("y")));
        call.resolve(ret);
    }

    @PluginMethod
    public void leaveStation(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.leaveStation());
        call.resolve(ret);
    }

    @PluginMethod
    public void navigateToByPresetedSpeed(PluginCall call) {
        float x = call.getFloat("x");
        float y = call.getFloat("y");
        float theta = call.getFloat("theta");

        JSObject ret = new JSObject();
        ret.put("result", implementation.navigateToByPresetedSpeed(x, y, theta));
        call.resolve(ret);
    }

    @PluginMethod
    public void navigateTo(PluginCall call) {
        float x = call.getFloat("x");
        float y = call.getFloat("y");
        float theta = call.getFloat("theta");
        float maxspeed = call.getFloat("maxspeed");

        JSObject ret = new JSObject();
        ret.put("result", implementation.navigateTo(x, y, theta, maxspeed));
        call.resolve(ret);
    }


    @PluginMethod
    public void cancelNavigate(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.cancelNavigate());
        call.resolve(ret);
    }

    @PluginMethod
    public void navigateRelocationStartByPos(PluginCall call) {
        float x = call.getFloat("x");
        float y = call.getFloat("y");
        float theta = call.getFloat("theta");

        JSObject ret = new JSObject();
        ret.put("result", implementation.navigateRelocationStartByPos(x, y, theta));
        call.resolve(ret);
    }

    @PluginMethod
    public void moveTo(PluginCall call) {
        float x = call.getFloat("x");
        float y = call.getFloat("y");
        float theta = call.getFloat("theta");
        float maxspeed = call.getFloat("maxspeed");

        JSObject ret = new JSObject();
        ret.put("result", implementation.moveTo(x, y, theta, maxspeed));
        call.resolve(ret);
    }

    @PluginMethod
    public void moveToward(PluginCall call) {
        float x = call.getFloat("x");
        float y = call.getFloat("y");
        float theta = call.getFloat("theta");

        JSObject ret = new JSObject();
        ret.put("result", implementation.moveToward(x, y, theta));
        call.resolve(ret);
    }

    @PluginMethod
    public void stopMove(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.stopMove());
        call.resolve(ret);
    }

    @PluginMethod
    public void isMoveActive(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", implementation.isMoveActive());
        call.resolve(ret);
    }

    @PluginMethod
    public void getPosition(PluginCall call) {
        JSObject pos = new JSObject();
        Position p = implementation.getPosition(call.getBoolean("useSensor", false));
        pos.put("x", p.x);
        pos.put("y", p.y);
        pos.put("theta", p.theta);

        JSObject ret = new JSObject();
        ret.put("result", pos);
        call.resolve(ret);
    }

    @PluginMethod
    public void powerOn(PluginCall call) {
        String currentTime = call.getString("currentTime");
        String scheduleTime = call.getString("scheduleTime");
        String option = call.getString("option");

        JSObject ret = new JSObject();
        ret.put("result", implementation.powerOn(currentTime, scheduleTime, option));
        call.resolve(ret);
    }

    @PluginMethod
    public void powerOffRos(PluginCall call) {
        int type = call.getInt("type");

        JSObject ret = new JSObject();
        ret.put("result", implementation.powerOffRos(type));
        call.resolve(ret);
    }

}
