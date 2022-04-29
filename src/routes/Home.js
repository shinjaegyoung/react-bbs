import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header class="container">
          <div class="p-5 mb-4 bg-light rounded-3 text-center">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">React와 SpringBoot를 활용한 게시판</h1>
            </div>
          </div>
        </header>
        <main class="container">
          <section>
            <article>
              <div class="row">
                <div class="col">
                  <table class="table table-hover table-striped text-center">
                    <colgroup>
                      <col width="10%" />
                      <col width="50%" />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="10%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록시간</th>
                        <th>조회수</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>테스트 제목</td>
                        <td>테스터</td>
                        <td>2022.04.29 12:50:00</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>테스트 제목</td>
                        <td>테스터</td>
                        <td>2022.04.29 12:50:00</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary">글쓰기</button>
              </div>
            </article>
          </section>
        </main>
        <footer class="container-fluid mt-5 py-5 border-top">
          <p class="lead text-mute text-center">made by bitc</p>
        </footer>
      </div>
    );
  }
}

export default Home;