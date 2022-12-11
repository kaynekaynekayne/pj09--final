# [Around](https://howcanigothere.herokuapp.com/)

## 프로젝트 소개
**공연을 예매한 후 공연장까지 어떻게 가는지 찾아볼 때 마다, 포털에 공연명 검색→공연장 확인→지도 웹사이트 접속→길찾기의 순서로 검색해야 하는 불편함이 있었습니다. 공연명만을 입력해도 바로 지도에 장소가 표시되고 길찾기 서비스를 쉽게 이용할 수 있는 플랫폼을 구현하였습니다.**

## 구현 기능
- 로그인  
- 회원가입  
- 검색  
- 공연 목록 출력  
- 공연의 상세 정보 출력  
- 지도 출력  
- 길찾기  
- 닉네임 수정  

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
- MongoDB에 저장된 회원들의 데이터를 바탕으로 회원가입 · 로그인 · 닉네임 수정이 가능하도록 구현하였습니다.   

## 미리보기
### 홈 화면  
  
![ar-home](https://user-images.githubusercontent.com/96046698/206911032-07ba1e31-5b94-4932-ad51-6b8de616b739.png)    

### 회원가입  
  
![ar-signup](https://user-images.githubusercontent.com/96046698/206911037-f47489ab-d6ee-41ee-a819-6705cf509bd0.png)   

### 로그인  
  
![ar-login](https://user-images.githubusercontent.com/96046698/206911034-3659b3ce-4313-44ac-952f-2b82896e099c.png)  

### 검색  
  
![ar-search](https://user-images.githubusercontent.com/96046698/206911036-bd2247b9-b8a2-4b9f-be2d-dba109f0cce1.png)  

### 상세 페이지  
  
![ar-detail](https://user-images.githubusercontent.com/96046698/206911028-5491a83f-35da-46d9-8149-ef872217bda5.png)  

  
### 공연 상세 정보  
  
![gif-ar-event](https://user-images.githubusercontent.com/96046698/206911978-9473226d-cb45-478c-a393-c4f60e536b83.gif)  
 

### 공연장까지 길찾기  
![gif-ar-map](https://user-images.githubusercontent.com/96046698/206911981-c93aa206-2cee-4ac3-a737-235463c914cb.gif)  
 
### 닉네임 수정  
![gif-ar-username](https://user-images.githubusercontent.com/96046698/206914566-bd3efce5-851f-46c8-a446-70649a834165.gif)  
 
