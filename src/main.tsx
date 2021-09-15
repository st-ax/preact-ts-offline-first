import { h, render } from 'preact'
import { Suspense } from 'preact/compat'
import { RecoilRoot } from 'recoil'
import { App } from './app'
import './index.css'

// eslint-disable-next-line @typescript-eslint/promise-function-async
// const App = lazy(() => import('./app'))

render(
  <RecoilRoot>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </RecoilRoot>
  , document.getElementById('app')!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
)
