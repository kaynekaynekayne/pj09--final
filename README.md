# [Around](https://howcanigothere.herokuapp.com/)

## 프로젝트 소개
**공연을 예매한 후 공연장까지 어떻게 가는지 찾아볼 때 마다 포털에 공연명 검색, 공연장 확인, 지도 웹사이트 접속, 길찾기의 순서를 통해서 검색해야 하는 불편함이 있었습니다. 공연명만을 입력해도 바로 지도에 장소가 표시되고 길찾기 서비스를 쉽게 이용할 수 있는 플랫폼을 구현하였습니다.**

## 구현 기능
- 로그인  
- 회원가입  
- 검색  
- 공연 목록 출력  
- 공연의 상세 정보 출력  
- 지도 출력  
- 길찾기  

## 기술
#### 프론트엔드
- React  
- Styled-Components  
- Material-UI  


#### 백엔드
- Node.js  
- Express  
- MongoDB  

#### 배포
- heroku  

## 개요  
- 공연에 관한 데이터를 받기 위해 [공연 예술 통합전산망의 openAPI](https://www.kopis.or.kr/por/cs/openapi/openApiInfo.do?menuId=MNU_00074)를 이용하였습니다.  
- 구글맵 API를 이용하여 공연장의 위치, 출발지로부터 공연장까지의 거리, 걸리는 시간, 대중 교통 등이 화면에 간단하게 출력되도록 구현하였습니다.  
- Node.js+express로 서버를 구축하였습니다.  
- MongoDB에 저장된 회원들의 데이터를 바탕으로 회원가입 · 로그인이 가능하도록 구현하였습니다.   

## 미리보기
### 홈 화면  
  
![arhome](https://user-images.githubusercontent.com/96046698/206897479-9ca4e914-930a-49b9-87f4-74218a453a36.png)  

### 회원가입  
  
![arsignup](https://user-images.githubusercontent.com/96046698/206897553-75ee82f6-a025-4b98-a9c9-f722897978ea.png)  

### 로그인  
  
![arlogin](https://user-images.githubusercontent.com/96046698/206897613-3c540a66-3453-43a3-bfc2-489d7e68c9b5.png)  

### 검색  
  
![arsearch](https://user-images.githubusercontent.com/96046698/206897753-20654337-8cf7-4578-ad7b-0b614be4518b.png)    

### 상세 페이지  
  
![ardetail](https://user-images.githubusercontent.com/96046698/206897836-ec4e5254-7f8f-4c78-a7fa-39c7a13ebeec.png)    

  
### 공연 상세 정보  
  
![detail-info](https://user-images.githubusercontent.com/96046698/201513397-c4916121-1cb4-4191-a5e1-bd5874623a7b.gif)  
 

### 공연장까지 길찾기  
![detail-map2](https://user-images.githubusercontent.com/96046698/201513401-51990fc1-f7d8-455f-bc6f-098ab9bb0f86.gif)  
