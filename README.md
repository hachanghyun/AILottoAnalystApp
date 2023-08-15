### 기존에 작업하던 프로젝트 github에 올리는법

#### 깃허브에 들어가서 repository 새로 생성한다. (단. Read.ME 만들지말것!!! 나중에 commit할때 충돌남!!) 

#### 생성후 repository 주소 복사한다.
    https://github.com/hachanghyun/chatGptLottoWebView.git

#### 기존작업중인 프로젝트 디렉토리안에 들어간다 (일반폴더에서 git 저장소로 변환)
    git init 

#### 추적하지 않는 파일에 붉은글씨로 자신이 commit 해야할 파일 표시해준다
    git status

#### 자신이 commit 할 파일을 추가해준다 ("git add ." 은 모든파일 선택, git add <파일/디렉토리경로>)
    git add .
    git add *
    git add <파일/디렉토리 경로명>

#### 추가했던 파일 commit 
    git commit -m "커밋메시지"

#### github repository에 자신의 프로젝트 추가
    git remote add origin <조금 전 repository에서 복사한 주소>

#### 커밋한 파일을 push
    git push origin master
    
