import { Observable, EventData, Page } from '@nativescript/core';
import { Directions } from '@nativescript/directions';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends Observable {
	private directions: Directions;

  constructor() {
    super();
    this.directions = new Directions();
  }

  public doCheckAvailable() {
    this.directions.available().then((avail) => {
      console.log("Avail? " + avail);
      alert(avail);
    }, (err) => {
      alert(err);
    });
  }

  public doCurrentLocationToAddress() {
    this.directions.navigate({
      to: {
        address: "Hof der Kolommen 34, Amersfoort, Netherlands"
      },
      type: "transit"
    }).then(() => {
      console.log("Current location to address directions launched!");
    }, (err) => {
      alert(err);
    });
  }

  public doAddressToAddressToAddress() {
    this.directions.navigate({
      from: {
        address: "Hof der Kolommen 34, Amersfoort, Netherlands"
      },
      type: "walking",
      to: [
        {
          address: "Middenstraat 21, Loppersum, Netherlands"
        },
        {
          address: "Aak 98, Wieringerwerf, Netherlands"
        }],
      ios: {
        allowGoogleMapsWeb: true
      }
    }).then(() => {
      console.log("Address to address directions launched!");
    }, (err) => {
      alert(err);
    });
  }

  public doAddressToCoordinate() {
    this.directions.navigate({
      from: {
        address: "Hof der Kolommen 34, Amersfoort, Netherlands"
      },
      to: [{
        lat: 52.215987,
        lng: 5.282764
      }],
      type: "walking",
      ios: {
        allowGoogleMapsWeb: true,
        preferGoogleMaps: true
      }
    }).then(() => {
      console.log("Address to coord directions launched!");
    }, (err) => {
      alert(err);
    });
  }

  public doCoordinateToCoordinate() {
    this.directions.navigate({
      from: {
        lat: 52.215987,
        lng: 5.282764
      },
      to: {
        lat: 52.515987,
        lng: 5.382764
      }
    }).then(() => {
      console.log("Coord to coord directions launched!");
    }, (err) => {
      alert(err);
    });
  }
}
