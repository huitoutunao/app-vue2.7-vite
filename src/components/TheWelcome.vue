<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a target="_blank" href="https://v2.vuejs.org/" rel="noopener noreferrer">
        official documentation
      </a>
      provides you with all information you need to get started.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>

      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
        Vite </a
      >. The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer"
        >Volar</a
      >. If you need to test your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a> and
      <a
        href="https://docs.cypress.io/guides/component-testing/introduction"
        target="_blank"
        rel="noopener noreferrer"
        >Cypress Component Testing</a
      >.

      <br />

      More instructions are available in <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a target="_blank" href="https://pinia.vuejs.org/" rel="noopener noreferrer">Pinia</a>,
      <a target="_blank" href="https://v3.router.vuejs.org/" rel="noopener noreferrer">Vue Router</a
      >,
      <a target="_blank" href="https://vue-test-utils.vuejs.org/" rel="noopener noreferrer"
        >Vue Test Utils</a
      >, and
      <a target="_blank" href="https://github.com/vuejs/devtools" rel="noopener noreferrer"
        >Vue Dev Tools</a
      >. If you need more resources, we suggest paying
      <a target="_blank" href="https://github.com/vuejs/awesome-vue" rel="noopener noreferrer"
        >Awesome Vue</a
      >
      a visit.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a target="_blank" href="https://chat.vuejs.org" rel="noopener noreferrer">Vue Land</a>, our
      official Discord server, or
      <a
        target="_blank"
        href="https://stackoverflow.com/questions/tagged/vue.js"
        rel="noopener noreferrer"
        >StackOverflow</a
      >. You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org" rel="noopener noreferrer"
        >our mailing list</a
      >
      and follow the official
      <a target="_blank" href="https://twitter.com/vuejs" rel="noopener noreferrer">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can
      help us by
      <a target="_blank" href="https://vuejs.org/sponsor/" rel="noopener noreferrer"
        >becoming a sponsor</a
      >.
    </WelcomeItem>
  </div>
</template>
