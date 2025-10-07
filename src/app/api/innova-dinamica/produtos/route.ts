import type { Produto } from '@/lib/store';
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return NextResponse.json({ status: 0, message: 'Não autorizado' }, { status: 401 });
    }

    const { data }: { data: Produto[] } = await axios.get('https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/produtos/listar', {
      headers: {
        Authorization: `Bearer ${token}`
      }
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

export async function POST(req: NextRequest) {
  try {
    const { search } = await req.json()
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.split(' ')[1];
    const codigoProduto = Number(search) || null;

    if (!token) {
      return NextResponse.json({ status: 0, message: 'Não autorizado' }, { status: 401 });
    }

    const { data }: { data: Produto[] } = await axios.post('https://apihomolog.innovationbrindes.com.br/api/innova-dinamica/produtos/listar', codigoProduto ? {
      codigo_produto: codigoProduto
    } : {
      nome_produto: search
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
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
