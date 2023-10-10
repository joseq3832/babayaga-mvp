import { Consent, LoginCard, Separator, SsoButton } from '@/components'
import {
  CheckboxInput,
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

interface IFormLogin {
  email: string
  password: string
}

export const Login = (): JSX.Element => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Ingrese una dirección de correo electrónico válida')
      .required('Campo Requerido'),
    password: yup.string().max(32).required('Campo Requerido'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormLogin>({
    resolver: yupResolver<IFormLogin>(schema),
  })

  const onSubmitHandler = (data: IFormLogin) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log({ data })
    reset()
  }

  return (
    <LoginCard title="Ingresa a tu cuenta" register>
      <Form className="m-0 space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
        <FormGroup>
          <Label htmlFor="email" required>
            Correo electrónico
          </Label>
          <TextInput
            id="email"
            register={register('email')}
            error={errors.email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" required>
            Contraseña
          </Label>
          <TextInput
            type="password"
            id="password"
            register={register('password')}
            error={errors.password}
          />
        </FormGroup>
        <div className="flex items-center justify-between">
          <CheckboxInput label="Recordarme" />
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:text-blue-500 text-sm inline-flex"
          >
            Olvidé mi contraseña
          </Link>
        </div>
        <div className="flex flex-col pt-4 space-y-2">
          <SubmitButton>Iniciar sesión</SubmitButton>
        </div>
      </Form>
      <div className="pt-4">
        <Separator label="O iniciar sesión con" />
      </div>
      <div className="gap-4 grid grid-cols-3">
        <SsoButton type="Google" />
        <SsoButton type="Facebook" />
        <SsoButton type="Apple" />
      </div>
      <div className="block pt-4">
        <Consent />
      </div>
    </LoginCard>
  )
}
