import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório.')
    .email('Formato de e-mail inválido.'),
  restaurantName: z.string().min(2, 'O nome do estabelecimento é obrigatório.'),
  managerName: z.string().min(2, 'O nome é obrigatório.'),
  phone: z.string().min(1, 'O número é obrigatário.'),
})

type SignUpFormType = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpForm),
  })

  async function handleSignUp(data: SignUpFormType) {
    try {
      console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso!', {
        action: { label: 'Login', onClick: () => navigate('/sign-in') },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar o estabelecimento.')
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in">Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar Conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && (
                <span className="text-xs text-primary">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
              {errors.restaurantName && (
                <span className="text-xs text-primary">
                  {errors.restaurantName.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
              {errors.managerName && (
                <span className="text-xs text-primary">
                  {errors.managerName.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
              {errors.phone && (
                <span className="text-xs text-primary">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Cadastrar
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                política de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
