import { AuthCard } from '@/components'
import {
  CheckboxInput,
  Form,
  FormGroup,
  Label,
  SubmitButton,
  TextInput,
} from '@/components/FormKit'
import { Button } from '@/components/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

interface IRegisterForm {
  firstName: string
  lastName: string
  email: string
  province: number
  city: number
  password: string
  confirmPassword: string
  subscribeNewsletter?: boolean
  termsAndConditions: boolean
}

export const Register = (): JSX.Element => {
  const schema = yup.object().shape({
    firstName: yup.string().required('Campo Requerido'),
    lastName: yup.string().required('Campo Requerido'),
    email: yup
      .string()
      .email('Ingrese una dirección de correo electrónico válida')
      .required('Campo Requerido'),
    province: yup.number().nullable().required('Campo Requerido'),
    city: yup.number().nullable().required('Campo Requerido'),
    password: yup
      .string()
      .matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'La contraseña debe contener al menos 6 caracteres, una mayúscula, un número y un carácter especial',
      )
      .required('La contraseña es obligatoria'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
      .required('Campo Requerido'),
    subscribeNewsletter: yup.boolean(),
    termsAndConditions: yup.boolean().required('Campo Requerido'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterForm>({
    resolver: yupResolver<IRegisterForm>(schema),
  })

  const onSubmitHandler = (data: IRegisterForm) => {
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log({ data })
    reset()
  }

  return (
    <AuthCard title="Registro de cuenta de usuario" flex>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col border-b border-gray-300">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg text-gray-700 font-semibold">
              Información Personal
            </h3>
            <p className="text-sm text-gray-500">
              Ingresa tus datos y correo donde <br /> deseas recibir
              notificaciones.
            </p>
          </div>
          <div className="flex max-w-md w-full items-center justify-center my-8 mx-auto">
            <div className="m-0 w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <FormGroup>
                  <Label htmlFor="firstName" required>
                    Nombre
                  </Label>
                  <TextInput
                    id="firstName"
                    register={register('firstName')}
                    error={errors.firstName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName" required>
                    Apellido
                  </Label>
                  <TextInput
                    id="lastName"
                    register={register('lastName')}
                    error={errors.lastName}
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label htmlFor="email" required>
                  Email
                </Label>
                <TextInput
                  id="email"
                  register={register('email')}
                  error={errors.email}
                />
              </FormGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <FormGroup>
                  <Label htmlFor="province" required>
                    Provincia
                  </Label>
                  <TextInput
                    id="province"
                    register={register('province')}
                    error={errors.province}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="city" required>
                    Ciudad
                  </Label>
                  <TextInput
                    id="city"
                    register={register('city')}
                    error={errors.city}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-gray-300 pt-6">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-lg text-gray-700 font-semibold">
              Crear contraseña
            </h3>
            <p className="text-sm text-gray-500">
              Registra la nueva contraseña con <br /> la que ingresarás a tu
              cuenta.
            </p>
          </div>
          <div className="flex max-w-md w-full items-center justify-center my-8 mx-auto">
            <div className="m-0 w-full space-y-4">
              <FormGroup>
                <Label htmlFor="password" required>
                  Contraseña
                </Label>
                <TextInput
                  id="password"
                  register={register('password')}
                  error={errors.password}
                />
              </FormGroup>
              <ul className="text-sm text-gray-500 pl-2 list-disc list-inside">
                <li>Al menos 6 caracteres</li>
                <li>Al menos 1 letra mayúscula</li>
                <li>Al menos 1 carácter especial (@#$%&amp;._*)</li>
              </ul>
              <FormGroup>
                <Label htmlFor="confirmPassword" required>
                  Confirma la contraseña
                </Label>
                <TextInput
                  id="confirmPassword"
                  register={register('confirmPassword')}
                  error={errors.confirmPassword}
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6">
          <div className="flex max-w-md w-full items-center justify-center my-8 mx-auto">
            <div className="m-0 w-full space-y-4">
              <CheckboxInput
                label="Acepto recibir boletines y correos informativos (Opcional)"
                register={register('subscribeNewsletter')}
                error={errors.subscribeNewsletter}
              />
              <CheckboxInput
                label="Estoy de acuerdo con los Términos y Condiciones del sitio y Privacidad de Datos (Obligatorio)"
                register={register('termsAndConditions')}
                error={errors.termsAndConditions}
                defaultChecked
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-4">
                <SubmitButton>Regístrate</SubmitButton>
                <Link to="/login">
                  <Button type="button" color="light">
                    Cancelar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </AuthCard>
  )
}
