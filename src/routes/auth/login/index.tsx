import theme from '@/styles/theme';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';
import { loginBanner } from '@/mock/mock';
import logo from '@/assets/logo.png';
import KakaoLoginButton from '@/components/kakaoLoginButton';
import GoogleLoginButton from '@/components/googleLoginButton';

export const Route = createFileRoute('/auth/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { images } = loginBanner();

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginLeftContainer>
          <S.LoginImg>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="logoBanner"
              />
            ))}
          </S.LoginImg>
          <S.LoginTitleContainer>
            <h2>설명 아무거나</h2>
            <p>로그인 페이지에용</p>
          </S.LoginTitleContainer>
        </S.LoginLeftContainer>
        <S.LoginRightContainer>
          <S.LoginRightFormContainer>
            <S.LogoImg>
              <img
                src={logo}
                alt="logo"
              />
            </S.LogoImg>
            <S.LoginForm>
              <S.LoginTempContainer />
              <S.LoginTempContainer />
            </S.LoginForm>
            <S.LoginRightSubContainer>
              <div>
                <input
                  type="checkbox"
                  id="saveId"
                />
                <label htmlFor="saveId">아이디 저장</label>
              </div>
              <p>비밀번호를 잊으셨나요?</p>
            </S.LoginRightSubContainer>
            <S.LoginTempContainer />
            <S.LoginColumn>
              <span>또는</span>
              <KakaoLoginButton />
              <GoogleLoginButton />
            </S.LoginColumn>
            <S.LoginRow>
              계정이 없나요?
              <p>회원가입</p>
            </S.LoginRow>
          </S.LoginRightFormContainer>
        </S.LoginRightContainer>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
}

const S = {
  LoginWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `,
  LoginContainer: styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 80vh;
  `,
  LoginLeftContainer: styled.div`
    width: 45%;
    height: 88%;
    background-color: ${theme.colors.background1};
    border-radius: ${theme.radius.large};
    padding-top: 5%;
    padding-left: 5%;
  `,
  LoginImg: styled.div`
    width: 100%;
    height: 70%;
    background-color: ${theme.colors.primary} img {
      object-fit: cover;
    }
  `,

  LoginForm: styled.div`
    margin-top: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  LoginTitleContainer: styled.div`
    max-width: 70%;
    height: 20%;
    overflow-wrap: break-word;

    h2 {
      font-size: ${theme.fontSizes.fz24};
      font-weight: ${theme.fontWeights.bold};
    }

    p {
      font-size: ${theme.fontSizes.fz18};
    }
  `,

  LoginRightContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: ${theme.colors.white};
    font-size: ${theme.fontSizes.fz16};
  `,
  LoginRightFormContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 80%;
    position: relative;
    gap: 5%;
    padding: 0 20px 20px;
  `,
  LogoImg: styled.div`
    position: absolute;
    left: 0.8vw;
    top: 0;

    img {
      width: 80%;
    }
  `,
  LoginRightSubContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      cursor: pointer;
      color: blue;
      font-weight: ${theme.fontWeights.medium};
    }
  `,

  LoginRow: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 8px;
    width: 100%;
    margin-top: auto;

    p {
      cursor: pointer;
      color: blue;
      font-weight: ${theme.fontWeights.medium};
    }
  `,
  LoginColumn: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    gap: 1vh;
    span {
      margin-bottom: 2vh;
    }
  `,
  LoginTempContainer: styled.div`
    width: 100%;
    height: 6vh;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius.medium};
    border: 1px solid ${theme.colors.black};
  `,
};
