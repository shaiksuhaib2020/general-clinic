import { NextResponse } from 'next/server'
import { BLOG_POSTS } from '@/data/blogPosts'

export async function GET() {
  return NextResponse.json({ posts: BLOG_POSTS })
}
