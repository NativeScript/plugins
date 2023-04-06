//
// Created by Osei Fortune on 10/06/2022.
//

#include "MMKVImpl.h"

extern "C" void NSMain(const v8::FunctionCallbackInfo<v8::Value>& args){
    auto isolate = args.GetIsolate();
    v8::Locker locker(isolate);
    v8::Isolate::Scope isolate_scope(isolate);
    v8::HandleScope handle_scope(isolate);

    auto len = args.Length();

    if (len != 5) {
        auto errMsg = v8::String::NewFromUtf8(isolate, "Wrong number of arguments (expected 5)");
        auto err = v8::Exception::Error(errMsg.ToLocalChecked());
        isolate->ThrowException(err);
        return;
    }

    MMKVImpl::Init(isolate);
}
