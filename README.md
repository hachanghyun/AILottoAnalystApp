## expo 설치가이드
### expo-cli 전역으로 설치해주는 명령어
    npm install -g expo-cli 

### expo 프로젝트 만들어주는 명령어
    expo init "프로젝트명"
    
### npm install node module 설치 명령어
    다 패키지안에서 설치할것
    
### expo 프로젝트 실행
    npm init
    
### eas 세팅
    npm install -g eas-cli

### log in expo accout
    eas login

### configure the project
    eas build:configure

### expo 프로젝트 실행
    npx expo start 
    npm start 
     
### webview app 라이브러리 설치
    npx expo install react-native-webview
    
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

### 안드로이드 구글플레이 배포시 키값오류가 나는데 키값 다시만들고 하니까 됫다..
