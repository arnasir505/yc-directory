import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { Startup } from '@/sanity/types';
import { notFound } from 'next/navigation';
import React from 'react';

export const experimental__ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = (await client.fetch(STARTUP_BY_ID_QUERY, { id })) as Startup;
  if (!post) return notFound();
  return (
    <>
      <h1 className='text-3xl'>{post.title}</h1>
    </>
  );
};

export default Page;
