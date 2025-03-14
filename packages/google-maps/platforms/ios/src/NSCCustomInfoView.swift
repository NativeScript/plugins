import Foundation
import UIKit

@objc(NSCCustomInfoView)
@objcMembers
public class NSCCustomInfoView: UIView {
    public override func didMoveToSuperview() {
        superview?.autoresizesSubviews = false;
    }
}
