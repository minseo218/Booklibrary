import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { PORT } from '../../set';
import DaumPost from '../DaumPost';

const Signup = () => {
  const [user, setUser] = useState({
    id: '',
    pwd: '',
    name: '',
    team: '',
    addr: '',
  });

  const teamList = [
    '경영대학',
    '사범대학',
    '사회과학대학',
    '문과대학',
    '예술체육대학',
    '공과대학',
    '자연과학대학',
    '소프트웨어융합대학',
    '의과대학',
    '국제학부',
    '미래융합대학',
    '프론티어학부대학',
    '바이오시스템융합학부',
  ];

  var getUserinfo = () => {
    fetch(`${PORT}/signup`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.text()).then((res) => {
      if (res === 'success') {
        alert('회원가입 되었습니다.');
        window.location.replace('/');
      } else if (res === 'noID') {
        alert('아이디를 입력해 주세요');
      } else if (res === 'noPWD') {
        alert('비밀번호를 입력해 주세요');
      } else if (res === 'noName') {
        alert('이름을 입력해 주세요');
      } else if (res === 'noTeam') {
        alert('소속학부를 선택해 주세요');
      } else if (res === 'noAddr') {
        alert('주소를 입력해 주세요');
      } else {
        alert('회원가입 실패하였습니다.');
      }
    });
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handelClick = () => {
    getUserinfo();
  };

  const getPost = (post) => {
    setUser({ ...user, addr: post });
  };

  return (
    <Row>
      <Col xl="4"></Col>
      <Col xl="4">
        <br />
        <h2>Signup</h2> <br />
        <Form.Floating className="mb-3">
          <Form.Control id="id" type="text" placeholder="Id" onChange={onChange} />
          <label htmlFor="floatingInputCustom">ID</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control id="pwd" type="password" placeholder="Password" onChange={onChange} />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>

        <Form.Floating className="mb-3">
          <Form.Control id="name" type="text" placeholder="Name" onChange={onChange} />
          <label htmlFor="floatingInputCustom">Name</label>
        </Form.Floating>
		<Form.Select size="lg" className="mb-3" id="team" onChange={onChange} style={{ fontSize: '16px', padding: '14px' }}>
					<option>소속 학부 선택</option>
					{teamList.map((teamName, index) => <option key={index}>{teamName}</option>)}
				</Form.Select>

        <Row className="mb-3">
          <Col xs="9">
            <Form.Floating>
              <Form.Control
                id="addr"
                type="text"
                placeholder="Address"
                value={user.addr || ''}
                onChange={onChange}
              />
              <label htmlFor="floatingInputCustom">Address</label>
            </Form.Floating>
          </Col>
          <Col xs="3">
            <DaumPost getPost={getPost} />
          </Col>
        </Row>

		<Form.Floating style={{ marginTop: '6rem' }}>
        	<Button variant="secondary" onClick={handelClick} style={{ fontSize: '14px', height: '57px', width: '100%'}}>
          		Signup
        	</Button>
		</Form.Floating>
      </Col>
    </Row>
  );
};

export default Signup;
