import { DemoSharedBase } from '../utils';
import { Cloudinary } from '@nativescript/cloudinary';

export class DemoSharedCloudinary extends DemoSharedBase {
	public cloudinary: Cloudinary;
	public url: string = 'cloudinary://675165224779272:eVSH_LmKt0WUV90sCbzsCwpAehc@davecoffin';
	testIt() {
		console.log('test cloudinary!');
		this.cloudinary = new Cloudinary();
		this.cloudinary.init(this.url).then(result => {
			console.log(result);
			this.showUploaderWidget();
		})
	}

	showUploaderWidget() {
		this.cloudinary.showWidget()
	}

	uploadPhoto() {
		//  this.cloudinary.uploadPhoto()
	}
}