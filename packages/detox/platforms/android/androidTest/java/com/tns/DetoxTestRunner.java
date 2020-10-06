package com.tns;

import android.app.Application;
import android.content.Context;
import androidx.test.runner.AndroidJUnitRunner;

public class DetoxTestRunner extends AndroidJUnitRunner {

    @Override
    public Application newApplication(ClassLoader cl, String className, Context context)
        throws IllegalAccessException, ClassNotFoundException, InstantiationException {
        return super.newApplication(cl, com.tns.NativeScriptApplication.class.getName(), context);
    }
}