# @nativescript/jetpack-compose

A plugin that allows you to use Jetpack Compose in NativeScript.

## Contents
* [Installation](#installation)
* [Use @nativescript/jetpack-compose](#use-nativescriptjetpack-compose)
    * [Add Jetpack Compose version and dependencies](#add-jetpack-compose-version-and-dependencies)
    * [Create a Compose view](#create-a-compose-view)
    * [Register your Compose view](#register-your-compose-view)
    * [Use Compose view with any NativeScript layout](#use-compose-view-with-any-nativescript-layout)
    * [Use Jetpack Compose with Angular](#use-jetpack-compose-with-angular)
* [Credits](#credits)

## Installation

```cli
npm install @nativescript/jetpack-compose
```

## Use @nativescript/jetpack-compose

### Add Jetpack Compose version and dependencies

Adjust `App_Resources/Android/app.gradle` to include your desired Jetpack Compose version and dependencies:

```ts
dependencies {
    def compose_version = "1.2.1"
    implementation "androidx.compose.ui:ui:$compose_version"
    // Tooling support (Previews, etc.)
    implementation "androidx.compose.ui:ui-tooling:$compose_version"

    // Add any other dependencies your Jetpack Compose UI needs
}

android {
    // other settings like targetSdk, etc.

    buildFeatures {
        compose true
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    composeOptions {
        kotlinCompilerExtensionVersion '1.3.2'
    }
}
```

### Create a Compose view

Any Kotlin file can be created in your App_Resources, for example:

- `App_Resources/Android/src/main/java/BasicView.kt`

```java
class BasicView {
    data class ExampleUIState(
        val text: String = ""
    ) {}

    class ExampleViewModel(
    ) : ViewModel() {
        var uiState by mutableStateOf(ExampleUIState())
    }

    var mViewModel = ExampleViewModel()

    fun generateComposeView(view: ComposeView): ComposeView {
        return view.apply {
            setContent {
                MaterialTheme {
                    val uiState = mViewModel.uiState;
                    Text(uiState.text)
                }
            }
        }
    }

    fun updateData(value: Map<Any, Any>) {
        val v = value["data"] as String;
        onEvent?.invoke(v)
        mViewModel.uiState = ExampleUIState(v);
    }

    var onEvent: ((String) -> Unit)? = null
}
```

### Register your Compose view

This can be done in the bootstrap file (often `app.ts` or `main.ts`) or even the view component that needs it.

* `app.ts`

```typescript
import { registerJetpackCompose, ComposeDataDriver } from '@nativescript/jetpack-compose';

// A. You can generate types for your own Compose Provider with 'ns typings android --aar {path/to/{name}.aar}'
// B. Otherwise you can ignore by declaring the package resolution path you know you provided
declare var com;
registerJetpackCompose('flyingHearts', (view) => new ComposeDataDriver(new com.example.FlyingHearts(), view));
```

### Use Compose view with any NativeScript layout

This illustrates what is often called a "vanilla" flavored NativeScript app. However, you can use this plugin with any flavor (Angular, React, Svelte, Vue, etc.)

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo" class="page" xmlns:jc="@nativescript/jetpack-compose">
  <StackLayout>
    <jc:JetpackCompose composeId="flyingHearts" composeEvent="{{ onEvent }}" data="{{ text }}"/>
  </StackLayout>
</Page>
```

### Use Jetpack Compose with Angular

```ts
import { registerElement } from '@nativescript/angular'
import { JetpackCompose } from '@nativescript/jetpack-compose'

registerElement('JetpackCompose', () => JetpackCompose)
```

It can now be used within any Angular component, eg:

```xml
<StackLayout>
    <JetpackCompose composeId="flyingHearts" (composeEvent)="onEvent($event)" [data]="data"></JetpackCompose>
</StackLayout>
```

## Credits

<img src="https://raw.githubusercontent.com/valor-software/.github/d947b8547a9d5a6021e4f6af7b1df816c1c5f268/profile/valor-logo%20for-light.png#gh-light-mode-only" alt="Valor Software" width="200" />

NativeScript is proudly supported by Valor Software as an official partner. We are proud to offer guidance, consulting, and development assistance in all things NativeScript.

[Contact Valor for assistance](https://valor-software.com/).

## License

MIT
