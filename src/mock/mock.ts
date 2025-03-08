import type { loginBannerType } from '@/types/types';
import image1 from '@/assets/loginBanner/image1.png';
import image2 from '@/assets/loginBanner/image2.png';
import image3 from '@/assets/loginBanner/image3.png';

export const loginBanner = (): loginBannerType => {
  const images = [image1, image2, image3];
  return { images };
};
