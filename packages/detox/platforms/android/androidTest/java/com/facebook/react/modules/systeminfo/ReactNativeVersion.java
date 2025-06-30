package com.facebook.react.modules.systeminfo;

import java.util.HashMap;
import java.util.Map;

public class ReactNativeVersion {
    public static final Map<String, Object> VERSION;

    static {
        VERSION = new HashMap<>();
        VERSION.put("major", 99); // Arbitrary placeholder values
        VERSION.put("minor", 0);
        VERSION.put("patch", 0);
        VERSION.put("prerelease", null);
    }
}
