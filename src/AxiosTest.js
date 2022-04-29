import React from "react";
import axios from "axios";

class AxiosTest extends React.Component{
    getData = () =>{
        // 스프링 부트로 생성한 로컬 서버에 접속 시 오류가 발생함(CORS 오류)
        // CORS 오류발생 (Cross-Origin Resource Sharing) : http 헤더를 사용하여 한 출처에서 실행중인 웹 
        // 애플리케이션이 다른 출처의 자원에 접근할 경우 오류가 발생함
        // 서버가 두개가 다르다 스프링 9099 , 리액트 3000 이걸 없애주어야 한다.
        axios
        //   .get('http://localhost:9099/ajax/test?data=test')
        // .get('https://yts-proxy.now.sh/list_movies.json')
        //  .get('/ajax/test?data=test')
        .get('/ajax/boardList')
        .then((res) => {
            console.log("통신 성공");
            console.log(res);
        })
        .catch((err)=> {
            console.log('통신 실패');
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                <h1>리액트로 서버와 통신하기</h1>
                <button type="button" onClick={this.getData}>
                클릭시 서버와 통신
                </button>
            </div>
        
        )
    }
    
}

export default AxiosTest;