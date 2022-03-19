import Head from 'next/head'
import { forwardRef, ReactFragment } from 'react'
import { Container } from '@mui/material'
import type { ContainerProps } from '@mui/material'

interface Props extends ContainerProps {
  title: string
}

export const PageLayout = forwardRef<ReactFragment, Props>(
  ({ children, title, ...other }, ref) => (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container maxWidth="xl" ref={ref} {...other}>
        {children}
      </Container>
    </>
  )
)

PageLayout.displayName = 'PageLayout'
