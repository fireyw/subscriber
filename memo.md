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