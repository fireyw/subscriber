# 이슈사항 및 기타
* input box 에서 reducer로 이벤트 전달이 잘안됨->해결방법 못찾음
    * ex)
      ~~~
      const handleChange = () => {
          addSubName();
      }
      <input type="text" onChange={handleChange}></input>
      ~~~
* jsonPlaceHolder
    * dummy 데이터를 얻을 수 있다 
    * https://jsonplaceholder.typicode.com/
* fetch
    * Request나 Response와 같은 HTTP의 파이프라인을 구성하는 요소를 조작하는것이 가능합니다. 또한 fetch() 메서드를 이용하는 것으로 비동기 네트워크 통신을 알기쉽게 기술할 수 있습니다.   
      이전에 이러한 기능을  XMLHttpRequest에서 제공하고 있었습니다. Fetch는 이러한 API의 대체제로 Service Workers같은 기술로 간단히 이용하는것이 가능합니다. 또한 CORS나 HTTP확장같은  HTTP에 관련한 개념을 모아 정의하고 있습니다.  
  
* middleware
    * 운영 체제와 응용 소프트웨어의 중간에서 조정과 중개의 역할을 수행하는 소프트웨어이다.
    * 주로 공통 기능 logger, 통신 쪽에서 사용