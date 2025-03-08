import { kakaoOAuth } from '@/api/login/oAuth-config';
import { getKakaoUserProfile, getToken } from '@/api/login/oauth-service';
import {
  createFileRoute,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/auth/callback/kakao/')({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processKakaoLogin = async () => {
      try {
        // URL에서 인증 코드 추출
        const params = new URLSearchParams(location.search);
        const code = params.get('code');

        if (!code) {
          setError('인증 코드가 없습니다.');
          setLoading(false);
          return;
        }

        // 인증 코드로 토큰 요청
        const token = await getToken(code, kakaoOAuth);

        // 토큰으로 사용자 정보 요청
        const userProfile = await getKakaoUserProfile(token);

        // 사용자 정보 저장 (실제로는 상태 관리 라이브러리 또는 컨텍스트 사용 권장)
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('카카오 로그인 처리 중 오류:', error);
        setError('로그인 처리 중 오류가 발생했습니다.');
        setLoading(false);
      }
    };

    processKakaoLogin();
  }, [location.search, navigate]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <p>로그인 처리 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <p style={{ color: 'red' }}>{error}</p>
        <button>로그인 페이지로 돌아가기</button>
      </div>
    );
  }

  return null;
}
