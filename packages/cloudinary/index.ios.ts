import { CloudinaryCommon } from './common';

export class Cloudinary extends CloudinaryCommon {

  public cloudinary: any;

  public init(cloudinaryUrl) {


		return new Promise((resolve, reject) => {
			let config = CLDConfiguration.new();
      config.initWithCloudinaryUrl(cloudinaryUrl);
      this.cloudinary = CLDCloudinary.alloc().initWithConfigurationNetworkAdapterSessionConfiguration(config, null, null);
      console.log('init with ' + cloudinaryUrl)
      console.log(this.cloudinary);
      resolve(true);
		});
	}

  public showWidget() {
    let myConfig = new CLDWidgetConfiguration({
      allowRotate: false, 
      initialAspectLockState: AspectRatioLockState.Disabled, 
      uploadType: new CLDUploadType({signed: false, preset: "native_mobile_dev"})
    })

    // this borks.
    let delegate: CLDUploaderWidgetDelegate = {
      uploadWidgetDidDismiss: () => {
        console.log('dismissed!')
      },
      uploadWidgetWillCall: (uploadWidget: CLDUploaderWidget, requests: NSArray<CLDUploadRequest>) => {
        console.log(requests);
      },
      widgetDidCancel: () => {
        console.log('canceled!')
      }
    }

    
    let uploadWidget = new CLDUploaderWidget({cloudinary: this.cloudinary, configuration: myConfig, images: null, delegate: null})
    uploadWidget.setDelegateFromDelegate(delegate);
    const keyWindow = UIApplication.sharedApplication.keyWindow;
    let root = keyWindow.rootViewController;
    let presented = root.presentedViewController;
    let page = presented ? presented : root;
    uploadWidget.presentWidgetFrom(page)

  }

  public uploadPhoto(filePath) {
    return new Promise((resolve, reject) => {
      resolve(true);
      // let uploader: CLDUploader = this.cloudinary.createUploader();
      // let url = NSURL.URLWithString(filePath)
      // let params = CLDUploadRequestParams.new()
      // uploader.uploadWithUrlUploadPresetParamsProgressCompletionHandler(url, 'native_mobile_dev', params, (progress: NSProgress) => {
      //   // console.log('progress', progress)
      //   // this._zone.run(() => {
      //   //   this.photoService.uploadingMap[filename] = (progress.fractionCompleted * 100).toFixed(0) + '%';
      //   // })
      //   // console.log(this.photoService.uploadingMap);
      // }, (result: CLDUploadResult, error: NSError) => {
      //   console.log('result', result)
      //   if (result) {
      //     resolve({
      //       url: result.url,
      //       public_id: result.publicId
      //     });
      //   } else if (error) {
      //     console.log('error', error)
      //     alert('There was an error uploading your photo, please try again later.')
      //   }
      // })
    })
  }
}
