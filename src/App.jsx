import { Nav } from './components'
import { PopularProducts, SuperQuality } from './sections'
import Hero from './sections/Hero'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
    </main>
  )
}

export default App
