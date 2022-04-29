import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Write extends React.Component {
  state = {
    title: '',
    content: '',
    userId: '',
  };

  titleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  userIdChange = (e) => {
    this.setState({ userId: e.target.value });
  };

  contentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  dataClear = () =>{
    this.setState({
      title: '',
      content: '',
      userId: '',
    })
  };
  sendData = () => {
    const datas = {
      title: this.state.title,
      content: this.state.content,
      createId: this.state.userId,
    };

    axios
      .post('/ajax/boardWrite', null, { params: datas })
      .then((res) => {
        console.log('통신 성공');
        console.log(res.data);
      })
      .catch((err) => {
        console.log('통신 실패');
        console.log(err);
      });
  };
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
                <div class="col-sm-6 mx-auto">
                  <div class="my-3">
                    <label for="title">제목 : </label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      name="title"
                      placeholder="제목을 입력해주세요"
                      value={this.state.title}
                      onChange={this.titleChange}
                    ></input>
                  </div>
                  <div class="my-3">
                    <label for="user-id">ID : </label>
                    <input
                      type="text"
                      class="form-control"
                      id="user-id"
                      name="user-id"
                      placeholder="사용자의 id를 입력하세요"
                      value={this.state.userId}
                      onChange={this.userIdChange}
                    ></input>
                  </div>
                  <div class="my-3">
                    <label for="content">글 내용 : </label>
                    <textarea
                      rows="10"
                      class="form-control"
                      id="content"
                      name="content"
                      placeholder="간단한 내용을 입력하세요"
                      value={this.state.content}
                      onChange={this.contentChange}
                    ></textarea>
                  </div>
                  <div class="my-3 d-flex justify-content-between">
                    <div>
                      <button type="button" class="btn btn-secondary">
                        <Link to="/" className="decoration-none">
                          목록
                        </Link>
                      </button>
                    </div>
                    <div>
                      <button type="button" class="btn btn-primary mx-3" onClick={this.sendData}>
                        등록
                      </button>
                      <button type="reset" class="btn btn-warning" onClick={this.dataClear}>
                        취소
                      </button>
                    </div>
                  </div>
                </div>
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

export default Write;