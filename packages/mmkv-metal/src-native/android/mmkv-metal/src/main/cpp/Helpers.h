//
// Created by Osei Fortune on 10/06/2022.
//

#pragma once

#include "Common.h"

class Helpers {
public:
    static const char* LOG_TAG;

    static int m_maxLogcatObjectSize;

    static void sendToADBLogcat(const std::string& message, android_LogPriority logPriority);

    static void LogToConsole(const std::string &message);

    static void ThrowIllegalConstructor(v8::Isolate *isolate);

    static v8::Local<v8::String> ConvertToV8String(v8::Isolate *isolate, const std::string &string);

    static std::string ConvertFromV8String(v8::Isolate *isolate, const v8::Local<v8::Value> &value);

    static bool IsInstanceOf(v8::Isolate *isolate, v8::Local<v8::Value> value, const std::string& clazz);

    static void SetInternalClassName(v8::Isolate *isolate, v8::Local<v8::Object> value, const std::string& clazz);

    static void
    SetPrivate(v8::Isolate *isolate, v8::Local<v8::Object> object, const std::string& property, v8::Local<v8::Value> value);

    static v8::Local<v8::Value> GetPrivate(v8::Isolate *isolate, v8::Local<v8::Object> object, const std::string& property);
};
