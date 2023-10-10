import { AuthCard } from '@/components'
import {
  Form,
  FormGroup,
  Label,
  SubmitButton,
  TextInput,
} from '@/components/FormKit'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

interface IFormForgotPassword {
  email: string
}

export const ForgotPassword = (): JSX.Element => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Ingrese una dirección de correo electrónico válida')
      .required('Campo Requerido'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormForgotPassword>({
    resolver: yupResolver<IFormForgotPassword>(schema),
  })

  const onSubmitHandler = (data: IFormForgotPassword) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log({ data })
    reset()
  }

  return (
    <AuthCard showLogo>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">¿Olvidaste tu constraseña?</h2>
          <p className="text-sm text-gray-600 pt-3">
            Ingresa tu direccion de correo registrado para recuperar el acceso a
            tu cuenta
          </p>
        </div>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <FormGroup>
            <Label required>Correo electrócico</Label>
            <TextInput
              id="email"
              register={register('email')}
              error={errors.email}
            />
          </FormGroup>
          <div className="flex flex-col pt-4 space-y-2">
            <SubmitButton>Recuperar contraseña</SubmitButton>
          </div>
        </Form>
        <div className="flex items-center justify-center pt-5">
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-900 text-sm inline-flex hover:underline transition-all ease-in-out"
          >
            Cancelar
          </Link>
        </div>
      </div>
    </AuthCard>
  )
}
