import UIKit
import SwiftUI

@objc
protocol SwiftUIProvider where Self: UIViewController {
    func updateData(data: NSDictionary)
    var onEvent: ((NSDictionary) -> ())? { get set }
}

extension SwiftUIProvider {
    
    func setupSwiftUIView<Content>(content: Content) where Content: View {
        let childVC = buildViewController(content: content)
        addChild(childVC)
        childVC.view.translatesAutoresizingMaskIntoConstraints = false
        childVC.view.frame = view.frame
        view.addSubview(childVC.view)
        childVC.view.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor).isActive = true
        childVC.view.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor).isActive = true
        childVC.view.widthAnchor.constraint(equalToConstant: 128).isActive = true
        childVC.view.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor).isActive = true
        childVC.didMove(toParent: self)
    }
    
    private func buildViewController<Content>(content: Content) -> UIViewController where Content : View {
        return UIHostingController(rootView: content)
    }
}
