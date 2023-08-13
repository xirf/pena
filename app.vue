<template>
  <div>

    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" CrossOrigin />
      <Link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&family=REM:wght@300;600&display=swap"
        rel="stylesheet" />
    </Head>
    <div class="min-h-screen bg-yellow-50 dark:bg-primary dark:text-yellow-50 font-sans relative">
      <SvgBackgroud />
      <Header />
      <NuxtPage />
    </div>
  </div>
</template>

<style>
:root {
  --lexend: 'Lexend', sans-serif;
}
</style>