import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const prisma = new PrismaClient;

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        favourites: true,
      }
    })
    const data = user.favourites;
    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }

}

export async function POST(request) {
  const { userId, faves, isLocalFav } = await request.json();
  const prisma = new PrismaClient;

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  try {
    if (isLocalFav === true) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId
        },
        select: {
          favourites: true
        }
      });

      const combinedFavorites = Array.from(new Set([
        ...(user?.favourites || []),
        ...faves
      ]));

      await prisma.user.update({
        where: { id: userId },
        data: { favourites: combinedFavorites }
      });
    }
    else {
      await prisma.user.update({
        where: {
          id: userId
        },
        data: {
          favourites: faves
        }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in POST /api/favourites:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}