# How to run

Emulator should be up and running before executing commands.

1. npm run wdio -> run all tests
2. npm run wdio --spec spec.file.js -> run specific test

## Prerequisites

1. node.js
2. ANDROID_HOME and JAVA_HOME variables should be set
3. adb, android, emulator, apkanalyzer should exist in ANDROID_HOME
4. UiAutomator2 driver
5. capabilities in wdio.conf.js should be set based on existing emulator.
