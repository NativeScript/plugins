//
//  SecurityFacade.swift
//  NativeScriptIosSecurity
//
//  Created by Teodor Dermendzhiev on 8.09.21.
//

import Foundation

func tupleToArray(tuple: Any) -> [Any] {
    let tupleMirror = Mirror(reflecting: tuple)
    let tupleElements = tupleMirror.children.map({ $0.value })
    return tupleElements
}

@objc public class FileIntegrityCheckFacade: NSObject {
    public var origin: FileIntegrityCheck
    
    @objc public init(bundleID: String) {
        self.origin = FileIntegrityCheck.bundleID(bundleID)
    }
    
    @objc public init(mobileProvision: String) {
        self.origin = FileIntegrityCheck.mobileProvision(mobileProvision)
    }
    
    @objc public init(machO: String, machO1: String) {
        self.origin = FileIntegrityCheck.machO(machO, machO1)
    }
}

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
    
    @objc public static func amITampered(_ checks: [FileIntegrityCheckFacade]) -> [Any] {
        
        var params = [FileIntegrityCheck]()
        for check in checks {
            params.append(check.origin)
        }
        
        return tupleToArray(tuple: IOSSecuritySuite.amITampered(params))
    }
    
    @objc public static func amIRuntimeHooked(dyldWhiteList: [String], detectionClass: AnyClass, selector: Selector, isClassMethod: Bool) -> Bool {
        return IOSSecuritySuite.amIRuntimeHooked(dyldWhiteList: dyldWhiteList, detectionClass: detectionClass, selector: selector, isClassMethod: isClassMethod)
    }
    
}
