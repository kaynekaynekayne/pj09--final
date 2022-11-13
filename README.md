# [Around](https://howcanigothere.herokuapp.com/)

## 프로젝트 소개
**공연을 예매한 후 공연장까지 어떻게 가는지 찾아볼 때 마다 포털에 공연명 검색, 공연장 확인, 지도 웹사이트 접속, 길찾기의 순서를 통해서 검색해야 하는 불편함이 있었습니다. 공연명만을 입력해도 바로 지도에 장소가 표시되고 길찾기 서비스를 쉽게 이용할 수 있는 플랫폼을 구현하려고 했습니다.**

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
- Material-UI  
- Styled-Components  

#### 백엔드
- Node.js  
- Express  
- MongoDB  

#### 배포
- heroku  

## 개요  
- [공연 예술 통합전산망의 openAPI](https://www.kopis.or.kr/por/cs/openapi/openApiInfo.do?menuId=MNU_00074)를 이용하여 전국의 공연 정보를 받아왔습니다.  
- 구글맵 API를 이용하여 공연장의 위치, 출발지로부터 공연장까지의 거리, 걸리는 시간, 대중 교통 등이 화면에 간단하게 출력되도록 구현하였습니다.  
- Node.js+express로 서버를 구축하였습니다.  
- 회원들의 데이터는 MongoDB에 저장됩니다.  

## 미리보기
### 홈 화면  
  
![home](https://user-images.githubusercontent.com/96046698/201461783-eeebb888-881c-4fea-8a51-610eb5681952.png)  

### 회원가입  
  
![signup](https://user-images.githubusercontent.com/96046698/201462863-ba2ca4ea-8f2e-4815-b3db-ba17735fe2ba.png)  

### 로그인  
  
![login](https://user-images.githubusercontent.com/96046698/201462861-bea2f126-82dc-4b8d-b1a4-ac9776bdccda.png)  

### 검색  
  
![searching](https://user-images.githubusercontent.com/96046698/201461990-db71fc73-0d67-401e-8eed-53448c8196c2.png)  

### 상세 페이지  
  
![searched](https://user-images.githubusercontent.com/96046698/201462041-705f363a-0f8d-40b3-aa7e-4e58877cdfb3.png)  

  
### 공연 상세 정보  
  
![detail-info](https://user-images.githubusercontent.com/96046698/201513397-c4916121-1cb4-4191-a5e1-bd5874623a7b.gif)  
 

### 공연장까지 길찾기  
![detail-map2](https://user-images.githubusercontent.com/96046698/201513401-51990fc1-f7d8-455f-bc6f-098ab9bb0f86.gif)  
