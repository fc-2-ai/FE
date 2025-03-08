import { z } from 'zod';

export type LoginSchemaType = {
  email: string;
  password: string;
};
const LoginSchema = z.object({
  email: z.string().email('유효한 이메일 주소를 입력해주세요'),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
      '비밀번호를 숫자, 영문 포함 8자리 이상으로 입력해주세요'
    ),
});

export { LoginSchema };
