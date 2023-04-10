import UIKit
import IonicLiveUpdates

@objc
class NSCIonicPortals: NSObject {
    @objc public static func syncNow(appIds: [String], isParallel: Bool = true, complete: @escaping (_ status: String) -> Void) {

        LiveUpdateManager.shared.sync(appIds: appIds, isParallel: isParallel, appComplete: {
            result in
            switch (result) {
            case .failure(let error):
                complete(error.localizedDescription)
                
            case .success:
                complete("success")
            }
        })
    }
    
    @objc public static func getLastSync(appId: String) -> Date? {
        return LiveUpdateManager.shared.lastSync(for: appId);
    }
}
