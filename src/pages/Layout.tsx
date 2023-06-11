import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture src="https://s3.orbi.kr/data/file/united2/8db470e26c2c4675b52f4c38e56a9ef8.jpg" alt="프로필 사진" />
        </div>
        <div>
          <Name>민갱</Name>
          <Description>StudentID : 202102654</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
