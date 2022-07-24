import UIKit
import RoomPlan

@available(iOS 16.0, *)

@objc public class NSCRoomPlan: UIViewController {
    @objc public var callback: ((_ destinationPath: String?) -> ())? = nil
    private var roomCapture: RoomCapture!
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        print("viewDidLoad!")
        roomCapture = RoomCapture()
        view.insertSubview(roomCapture.view, at: 0)
    }
    
    @objc public func startSession() {
        print("NSCRoomPlan startSession!")
        roomCapture.startSession()
    }
    
    @objc public func stopSession() {
        roomCapture.stopSession()
    }
    
    @objc public func exportResults(filePath: String? = nil, callback: ((_ destinationPath: String?) -> ())? = nil) {
        roomCapture.exportResults(filePath: filePath, callback: callback);
    }
}

@available(iOS 16.0, *)
class RoomCapture: UIViewController, RoomCaptureViewDelegate, RoomCaptureSessionDelegate {
    
    private var isScanning: Bool = false
    public var roomCaptureView: RoomCaptureView!
    
    
    private var roomCaptureSessionConfig: RoomCaptureSession.Configuration = RoomCaptureSession.Configuration()
    
    private var finalResults: CapturedRoom?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("RoomCapture viewDidLoad!")
        // Set up after loading the view.
        setupRoomCaptureView()
        
        startSession()
    }
    
    override func viewWillDisappear(_ flag: Bool) {
        super.viewWillDisappear(flag)
        print("RoomCapture viewWillDisappear!")
        stopSession()
    }
    
    public func setupRoomCaptureView() {
        print("setupRoomCaptureView!")
        roomCaptureView = RoomCaptureView(frame: view.bounds)
        roomCaptureView.captureSession.delegate = self
        roomCaptureView.delegate = self
        
        print("setupRoomCaptureView insert!")
        view.insertSubview(roomCaptureView, at: 0)
    }
    
    public func startSession() {
        print("RoomCapture startSession!")
        isScanning = true
        roomCaptureView?.captureSession.run(configuration: roomCaptureSessionConfig)
    }
    
    public func stopSession() {
        isScanning = false
        roomCaptureView?.captureSession.stop()
    }
    
    // Decide to post-process and show the final results.
    public func captureView(shouldPresent roomDataForProcessing: CapturedRoomData, error: Error?) -> Bool {
        return true
    }
    
    // Access the final post-processed results.
    public func captureView(didPresent processedResult: CapturedRoom, error: Error?) {
        finalResults = processedResult
    }
    
    public func exportResults(filePath: String? = nil, callback: ((_ destinationPath: String?) -> ())? = nil) {
        let destinationURL = filePath != nil ? URL(fileURLWithPath: filePath!) :  FileManager.default.temporaryDirectory.appending(path: "Room.usdz")
        do {
            try finalResults?.export(to: destinationURL)
            print(destinationURL)
            
            if (callback != nil) {
                callback!(destinationURL.absoluteString)
            }
            
        } catch {
            print("Error = \(error)")
        }
    }
}
