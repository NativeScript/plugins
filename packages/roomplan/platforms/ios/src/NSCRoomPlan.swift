import UIKit
import RoomPlan

@available(iOS 16.0, *)
@objc class NSCRoomPlan: UIViewController, RoomCaptureViewDelegate, RoomCaptureSessionDelegate {
    private var isScanning: Bool = false
    private var roomCaptureView: RoomCaptureView!
    private var roomCaptureSessionConfig: RoomCaptureSession.Configuration = RoomCaptureSession.Configuration()
    private var finalResults: CapturedRoom?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Set up after loading the view.
        setupRoomCaptureView()
        
        startSession()
    }
    
    override func viewWillDisappear(_ flag: Bool) {
        super.viewWillDisappear(flag)
        stopSession()
    }
    
    public func setupRoomCaptureView() {
        roomCaptureView = RoomCaptureView(frame: view.bounds)
        roomCaptureView.captureSession.delegate = self
        roomCaptureView.delegate = self
        
        view.insertSubview(roomCaptureView, at: 0)
    }
    
    @objc public func startSession() {
        isScanning = true
        roomCaptureView?.captureSession.run(configuration: roomCaptureSessionConfig)
    }
    
    @objc public func stopSession() {
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
    
    @objc public func exportResults(filePath: String? = nil, callback: ((_ destinationPath: String?) -> ())? = nil, errorCallback: ((_ error: String?) -> ())? = nil) {
        let destinationURL = filePath != nil ? URL(fileURLWithPath: filePath!) :  FileManager.default.temporaryDirectory.appending(path: "Room.usdz")
        do {
            try finalResults?.export(to: destinationURL)
            
            if (callback != nil) {
                callback!(destinationURL.absoluteString)
            }
            
        } catch {
            print("Error = \(error)")
            if (errorCallback != nil) {
                errorCallback!("Export error: \(error.localizedDescription)")
            }
        }
    }
}
