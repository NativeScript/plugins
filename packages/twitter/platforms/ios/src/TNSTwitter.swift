import Foundation
import Swifter
import SafariServices
import AuthenticationServices



struct TNSSession: Codable {
    var authToken: String?
    var authTokenSecret: String?
    var userName: String?
    var userId: String?
    
    init(token: Credential.OAuthAccessToken){
        authToken = token.key
        authTokenSecret = token.secret
        userName = token.screenName
        userId = token.userID
    }
}



@objcMembers
@objc(TNSTwitter)
public class TNSTwitter: NSObject {
    private var swifter: Swifter
    private var controller: UIViewController?
    private let encoder = JSONEncoder()
    
    public static func handleOpenURL(_ url: String,_ callbackURL: String,_ isSSO: Bool) -> Bool {
        return Swifter.handleOpenURL(URL(string: url)!, callbackURL: URL(string: callbackURL)!, isSSO: isSSO)
    }
    
    public init?(_ consumerKey: String, _ consumerSecret: String) {
        guard !consumerKey.isEmpty || !consumerSecret.isEmpty else {return nil}
        swifter = Swifter(consumerKey: consumerKey, consumerSecret: consumerSecret)
    }
    
    
    private func handleSession(_ token: Credential.OAuthAccessToken, _ callback: @escaping ((String?, NSError?) -> Void)){
        let session = TNSSession(token: token)
        do {
            callback(String(data: try self.encoder.encode(session), encoding: .utf8) ?? "", nil)
        }catch {
            callback(nil, error as NSError)
        }
    }
    
    public func verifyUser(
        _ includeEntities: Bool,
        _ skipStatus: Bool,
        _ includeEmail: Bool,_ callback: @escaping ((String?, NSError?) -> Void)) {
            swifter.verifyAccountCredentials(includeEntities: includeEntities, skipStatus: skipStatus, includeEmail: includeEmail) { user in
                callback(String(describing: user), nil)
            } failure: { error in
                callback(nil, error as NSError)
            }
            
        }
    
    public func authorizeWithSSO(_ callback: @escaping ((String?, NSError?) -> Void)){
        swifter.authorizeSSO { token in
            self.handleSession(token, callback)
        } failure: { error in
            callback(nil, error as NSError)
        }
    }
    
    public func authorizeWithBrowser(_ controller: UIViewController,_ callbackURL: String, _ callback: @escaping ((String?, NSError?) -> Void)){
        self.controller = controller
        if #available(iOS 13.0, *) {
            swifter.authorize(withProvider: self, callbackURL: URL(string: callbackURL)!) { token, response in
                self.controller = nil
                self.handleSession(token!, callback)
            } failure: {error in
                self.controller = nil
                callback(nil, error as NSError)
            }
        }else {
            swifter.authorize(withCallback: URL(string: callbackURL)!, presentingFrom: controller) { token, response in
                self.controller = nil
                self.handleSession(token!, callback)
            } failure: {error in
                self.controller = nil
                callback(nil, error as NSError)
            }
        }
    }
    
}


extension TNSTwitter: SFSafariViewControllerDelegate {
    @nonobjc func safariViewControllerDidFinish(_ controller: SFSafariViewController) {
        controller.dismiss(animated: true, completion: nil)
    }
}


@available(iOS 13.0, *)
extension TNSTwitter: ASWebAuthenticationPresentationContextProviding {
    public func presentationAnchor(for session: ASWebAuthenticationSession) -> ASPresentationAnchor {
        return controller!.view.window!
    }
}
