import { DemoSharedBase } from '../utils';
import { Brightness } from '@nativescript/brightness';
import { PropertyChangeData, Observable } from '@nativescript/core';

export class DemoSharedBrightness extends DemoSharedBase {
	public message: string;
  public currentValue: number;
  public sliderValue: number;
  public minValue: number;
  public maxValue: number;
  private brightness: Brightness;

  constructor() {
    super();

    this.brightness = new Brightness();
    this.minValue = 0;
    this.maxValue = 100;
    this.currentValue = this.brightness.get();
    this.sliderValue = this.currentValue;
    this.setMessage();

    this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
      if (propertyChangeData.propertyName === "sliderValue") {
        let value = Math.round(propertyChangeData.value);
        if (value !== this.get("currentValue")) {
          this.brightness.set({ intensity: value });
          this.set("currentValue", value);
          this.setMessage();
        }
      }
    });
  }

  private setMessage(): void {
    this.set("message", `Your screen brightness is ${this.currentValue}`);
  }
}
