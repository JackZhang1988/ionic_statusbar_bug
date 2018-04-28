<!-- Before submitting an issue, please consult our troubleshooting guide (http://ionicframework.com/docs/troubleshooting/) and developer resources (http://ionicframework.com/docs/developer-resources/) -->

<!-- Please make sure you are posting an issue pertaining to the Ionic Framework. If you are having an issue with the Ionic Pro services (Ionic View, Ionic Deploy, etc.) please consult the Ionic Pro support portal (http://support.ionicjs.com) -->

**Ionic version:**  (check one with "x")
(For Ionic 1.x issues, please use https://github.com/ionic-team/ionic-v1)
[ ] **2.x**
[x ] **3.x**
[ ] **4.x**

**I'm submitting a ...**  (check one with "x")
[x ] bug report
[ ] feature request

<!-- Please do not submit support requests or "How to" questions here. Instead, please use one of these channels: https://forum.ionicframework.com/ or http://ionicworldwide.herokuapp.com/ -->

**Current behavior:**
<!-- Describe how the bug manifests. -->
![img_4181](https://user-images.githubusercontent.com/1697710/39391151-a422e75a-4ad1-11e8-86aa-e0694515deff.PNG)

I very same like the bug here: https://github.com/ionic-team/ionic/issues/13294, but the issue closed seems hard to reproduce, now i finally reproduced.

**Steps to reproduce:**
<!--  Please explain the steps required to duplicate the issue, especially if you are able to provide a sample application. -->

These bug happen when you nav a new page in a modal,  I have create repository for this: https://github.com/JackZhang1988/ionic_statusbar_bug


```
// in hello-ionic page ,you open modal
openModal() {
    let curModal = this.modalCtrl.create("Modal1Page");
    curModal.present();
  }

// the in modal page,  click a button to nav new page
 navModal2() {
    this.navCtrl.push('Modal2Page');
  }
```

run `sudo ionic cordova prepare ios`, and build on iPhone by Xcode.

then, you can reproduce the bug show as the picture.

i tried add newest `cordova-plugin-statusbar` but it is not work

**Ionic info:**
cli packages: (/usr/local/lib/node_modules)

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

global packages:

    cordova (Cordova CLI) : not installed

local packages:

    @ionic/app-scripts : 3.1.9
    Cordova Platforms  : none
    Ionic Framework    : ionic-angular 3.9.2

System:

    Android SDK Tools : 26.0.2
    ios-deploy        : 1.9.2
    ios-sim           : 6.0.0
    Node              : v8.9.1
    npm               : 6.0.0
    OS                : macOS High Sierra
    Xcode             : Xcode 9.3 Build version 9E145

Environment Variables:

    ANDROID_HOME : /Users/jianbo/Library/Android/sdk

Misc:

    backend : pro


**ionic cordova plugin list**
cordova-plugin-device 2.0.2 "Device"
cordova-plugin-ionic-keyboard 2.0.5 "cordova-plugin-ionic-keyboard"
cordova-plugin-ionic-webview 1.1.19 "cordova-plugin-ionic-webview"
cordova-plugin-splashscreen 5.0.2 "Splashscreen"
cordova-plugin-statusbar 2.4.2 "StatusBar"
cordova-plugin-whitelist 1.3.3 "Whitelist"
