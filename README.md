## SERVER Deployment URL
  https://github.com/hachanghyun/awsSaaSummaryServer

## FrontEnd Deployment URL
  https://github.com/hachanghyun/AwsSaaSumApp

## expo 설치가이드
### expo-cli 전역으로 설치해주는 명령어
    npm install -g expo-cli 

### expo 프로젝트 만들어주는 명령어
    expo init "프로젝트명"
    npx react-native init awsSaaSummaryApp
    
### node module 설치 명령어(패키지안에서 실행)
    npm install
     
### expo 프로젝트 실행
    npm start
    
### log in expo accout
    eas login

### configure the project
    eas build:configure
    
### 빌드전 실행
    npm install -g eas-cli

### IOS 빌드
    eas build -p ios

### ios 배포진행
    eas submit --platform ios 

### eas.json
            {
              "build": {
                "preview": {
                  "android": {
                    "buildType": "apk"
                  }
                },
                "preview2": {
                  "android": {
                    "gradleCommand": ":app:assembleRelease"
                  }
                },
                "preview3": {
                  "developmentClient": true
                },
                "production": {}
              }
            }


### 안드로이드 빌드 (에뮬레이터용 빌드)
     eas build -p android --profile preview
     
### 안드로이드 빌드 
    eas build -p android
