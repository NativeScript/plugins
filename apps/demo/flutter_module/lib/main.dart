import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {

     NativeScript.getInstance()
        .notify("incrementCounter", 0);
        
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or press Run > Flutter Hot Reload in a Flutter IDE). Notice that the
        // counter didn't reset back to zero; the application is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

extension SymbolName on Symbol {
  String get name {
    var str = toString();
    str = str.substring(8, str.length - 2);
    if (str.endsWith('=')) str = str.substring(0, str.length - 1);
    return str;
  }
}

class NativeScriptObject {
  String? _id;
  bool isClass;
  String? _parent;
  String? _name;

  NativeScriptObject._(this._id, this.isClass, this._parent, this._name);

  @override
  dynamic noSuchMethod(Invocation invocation) {
    if (invocation.isGetter && invocation.memberName != #get) {
      String name = invocation.memberName.name;
      return NativeScriptObject._(
          null, false, "${_parent != null ? "$_parent." : ""}$_name", name);
    }

    return NativeScriptProxy.handleInvocation(this, invocation);
  }
}

const MethodChannel nsc = MethodChannel('org.nativescript.flutter/channel');

class NativeScriptProxy {
  static final Map<Symbol, dynamic> objects = {};

  NativeScriptProxy();

  static dynamic handleInvocation(dynamic object, Invocation invocation) {
    if (invocation.isGetter && invocation.memberName != #get) {
      String name = invocation.memberName.name;
      dynamic ret = NativeScriptObject._(null, false, null, name);
      objects[invocation.memberName] = ret;
      return ret;
    }

    Map<String, dynamic> namedArguments =
        invocation.namedArguments.map((key, value) {
      if (value is NativeScriptObject) {
        if (value._id != null) {
          return MapEntry(key.name, "__nativeInstance:${value._id}");
        }

        return MapEntry(key.name, "__nativeNS:${value._parent}.${value._name}");
      }
      return MapEntry(key.name, value);
    });

    String? instance;

    if (object != null) {
      if (object._id != null) {
        instance = "__nativeInstance:${object._id}";
      } else {
        instance = "__nativeNS:${object._parent}.${object._name}";
      }
    }

    return nsc.invokeMethod("__native", {
      "instance": instance,
      "isAccessor": invocation.isAccessor,
      "isGetter": invocation.isGetter,
      "isMethod": invocation.isMethod,
      "isSetter": invocation.isSetter,
      "memberName": invocation.memberName.name,
      "positionalArguments": invocation.positionalArguments.map((e) {
        if (e is NativeScriptObject) {
          if (e._id != null) {
            return "__nativeInstance:${e._id}";
          }

          return "__nativeNS:${e._parent}.${e._name}";
        }
        return e;
      }).toList(),
      "namedArguments": namedArguments,
      "typeArguments":
          invocation.typeArguments.map<String>((e) => e.toString()).toList()
    });

    // return super.noSuchMethod(invocation);
  }

  @override
  dynamic noSuchMethod(Invocation invocation) {
    return handleInvocation(null, invocation);
  }
}

class NativeScript {
  NativeScript._();

  static NativeScript getInstance(){
    return nativeScript;
  }

  final dynamic native = NativeScriptProxy();

  Future<void> notify(String event, dynamic data) {
    return nsc.invokeMethod<void>("__notify:$event", data);
  }

  Future<void> log(dynamic data) {
    return nsc.invokeMethod<void>("log", data);
  }
}

final NativeScript nativeScript = NativeScript._();

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  NativeScript nativescript = NativeScript.getInstance();

  Future<void> _incrementCounter() async {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });

    // nativescript.native.Osei;

    try {

    // nsc.invokeMethod('incrementCounter', _counter);
    await nativescript
        .notify("incrementCounter", _counter);

      int matchParent = await nativescript
          .native.android.widget.LinearLayout.LayoutParams.MATCH_PARENT
          .get();

      await nativescript.log("MATCH_PARENT: $matchParent ${matchParent == -1}");

      String schemeContent = await nativescript
          .native.android.content.ContentResolver.SCHEME_CONTENT
          .get();

      await nativescript
          .log("SCHEME_CONTENT: $schemeContent ${schemeContent == "content"}");
    } catch (e) {
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
