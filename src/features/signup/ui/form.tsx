import style from './form.module.scss';

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Field, MyButton } from "../../../shared/ui";

const schema = z.object({
  signUp: z.string().trim().min(1, { message: "Поле не должно быть пустым" }).email({ message: "Неверно введен email" }),
});

type Schema = z.infer<typeof schema>;

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = () => {
    console.log('Форма отправлена')
  }

  return (
    <>
      <h5>Подписка</h5>
      <form onSubmit={handleSubmit(onSubmitForm)} className={style.form}>
        <Controller
          name="signUp"
          control={control}
          render={({ field }) => (
            <Field 
              {...field}
              placeholder="Ваш email"
              errorMessage={errors.signUp?.message}
            />
          )}
        />
        <MyButton
          type='submit'
          btnVariant="dark"
          childrenVariant="uppercased"
          disabled={isSubmitting}
        >
          Отправить
        </MyButton>
      </form>
    </>
  );
};
