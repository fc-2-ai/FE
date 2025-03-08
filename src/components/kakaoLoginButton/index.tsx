import React from 'react';
import { getAuthorizationUrl } from '@/api/login/oauth-service';
import { kakaoOAuth } from '@/api/login/oAuth-config';

const KakaoLoginButton = () => {
  const handleKakaoLogin = () => {
    const authUrl = getAuthorizationUrl(kakaoOAuth);
    window.location.href = authUrl;
  };

  return (
    <button
      onClick={handleKakaoLogin}
      style={{
        backgroundColor: '#FEE500',
        color: '#000000',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '5vh',
        fontSize: '14px',
      }}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
        alt="카카오 로고"
        style={{ width: '25px', marginRight: '8px' }}
      />
      카카오 계정으로 가입하기
    </button>
  );
};

export default KakaoLoginButton;
