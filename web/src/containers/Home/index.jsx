import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import logo from 'assets/images/juggernaut.gif'
import { Container, Title, Subtitle, Image } from './styles'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Image
        src={logo}
        alt="Gif by Reuno"
        title="Gif by Reuno"
      />
      <Title color="primary" component="h1" variant="h4" gutterBottom>
        <Trans>{t('general.welcome')}</Trans>
      </Title>
      <Subtitle color="primary" component="h3" variant="h5">
        { t('general.description') }
      </Subtitle>
    </Container>
  )
}

export default Home
