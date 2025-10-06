import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { status: 0, message: 'Credenciais inválidas' },
        { status: 401 }
      )
    }


    const { data } = await axios.post('https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/login/acessar', {
      email: username,
      senha: password
    })

    return NextResponse.json(data)
  } catch (error: unknown) {
    let message = 'Erro desconhecido';

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json(
      { status: 0, message: message },
      { status: 500 }
    )
  }
}
