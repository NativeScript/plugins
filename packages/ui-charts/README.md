# @nativescript/ui-charts 

NativeScript for Highcharts iOS and Android SDKs

<img src="https://github.com/NativeScript/nativescript-ui-charts/blob/master/assets/screenshot-android.png?raw=true" height="320" >

## Installation

```
npm install @nativescript/ui-charts
```

## Usage 

The best way to explore the usage of the plugin is to inspect the demo app in the plugin's root folder. 
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/demos` for different chart types.

### NativeScript Core
	
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:uc="@nativescript/ui-charts">  <!-- Don't forget to declare the namespace -->
  <GridLayout>
    <uc:UIChartsView options="{{ chartOptions }}" />
  </GridLayout>
</Page>
```

The `chartOptions` is a HICharts options object,
refer to https://www.highcharts.com/demo/ for inspiration, and also checkout https://api.highcharts.com/highcharts/ for API reference
