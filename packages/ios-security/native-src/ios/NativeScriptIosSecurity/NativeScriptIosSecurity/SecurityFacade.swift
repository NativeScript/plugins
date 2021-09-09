//
//  SecurityFacade.swift
//  NativeScriptIosSecurity
//
//  Created by Teodor Dermendzhiev on 8.09.21.
//

import Foundation

@objc public class SecurityFacade: NSObject {
    
    @objc public static func amIJailbroken() -> Bool {
        return IOSSecuritySuite.amIJailbroken()
    }
    
    @objc public static func amIDebugged() -> Bool {
        return IOSSecuritySuite.amIDebugged()
    }
    
    @objc public static func amIRunInEmulator() -> Bool {
        return IOSSecuritySuite.amIRunInEmulator()
    }
    
    @objc public static func denyDebugger() {
        return IOSSecuritySuite.denyDebugger()
    }
    
    @objc public static func amIReverseEngineered() -> Bool {
        return IOSSecuritySuite.amIReverseEngineered()
    }
    
    @objc public static func amIProxied() -> Bool {
        return IOSSecuritySuite.amIProxied()
    }
    
}
